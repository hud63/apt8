---
name: a8-temp
description: "Pixel-perfect Taoglas brand document generation. Use when creating Word documents (.docx) that must match the official Taoglas template format with exact specifications for: (1) Black header blocks with white title text (50% width, centered), (2) Gold (#F1C232) bordered content tables, (3) Plus Jakarta Sans and Rubik fonts, (4) Taoglas infinity logo placement. Triggers: Taoglas documents, Taoglas template, Taoglas-branded docs, a8 template, matching Taoglas format."
---

# Taoglas Template Document Generation

Creates Word documents matching the Taoglas brand template with pixel-perfect accuracy.

## Quick Reference

| Element | Specification |
|---------|---------------|
| **Gold accent** | `#F1C232` |
| **Black backgrounds** | `#000000` |
| **Header font** | Plus Jakarta Sans Bold, 20pt |
| **Body font** | Rubik, 10pt |
| **Section labels** | Rubik 12pt, gold on black |
| **H2 headings** | Rubik Bold 17pt |
| **H3 headings** | Rubik Bold 13pt |
| **Page margins** | 1 inch all sides |
| **Header banner** | Same width as content table (6.5"), centered |

## Assets Location

- **Logo**: `assets/taoglas_logo.png`
- **Fonts**: `assets/fonts/` (Plus Jakarta Sans & Rubik, all weights)
- **Visual reference**: `assets/sample_page_layout.jpg`

## Document Structure Pattern

```
┌─────────────────────────────────────────────────────┬─────┐
│  [Title - 20pt]                                     │LOGO │  ← BLACK, CENTERED
├─────────────────────────────────────────────────────┤     │
│  [Subtitle - 13pt]                                  │     │
└─────────────────────────────────────────────────────┴─────┘

┌─────────────────────────────────────────────────────────┐
│ Link to Call Recording (if present in source)          │  ← GOLD border
├─────────────────────────────────────────────────────────┤
│  ➔ [Call Recording Link]                               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ Section Label (Gold #F1C232 on Black)                   │  ← GOLD border
├─────────────────────────────────────────────────────────┤
│  Content (Black text, Rubik font)                       │
│  • H2 headings: Rubik Bold 17pt                         │
│  • H3 headings: Rubik Bold 13pt                         │
│  • Body text: Rubik 10pt                                │
└─────────────────────────────────────────────────────────┘
```

## Call Recording Link Section

If the source document contains a call recording link (typically in a table with "Link to Call Recording" header), include it as a separate content table immediately after the header banner:

- **Section label**: "Link to Call Recording"
- **Content**: The link text with arrow prefix (➔)
- Uses same gold-bordered table style as other content sections

## CRITICAL: Google Docs Compatibility

**Always specify `columnWidths` in Table constructor.** Without this, Google Docs renders tables with 100-twip columns causing vertical text.

```javascript
// CORRECT - Works in both Word and Google Docs
new Table({
  rows: [...],
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [7610, 1750],  // REQUIRED for Google Docs
  layout: TableLayoutType.FIXED,
  alignment: AlignmentType.CENTER
});

// WRONG - Breaks in Google Docs (vertical text, 200 pages)
new Table({
  rows: [...],
  width: { size: 9360, type: WidthType.DXA },
  // Missing columnWidths = default 100 twip columns
});
```

## Implementation

### Option A: Use Generation Script

```bash
npx ts-node scripts/create_taoglas_doc.ts output.docx "Title" "Subtitle"
```

### Option B: Manual Creation with docx-js

#### Colors
```javascript
const TAOGLAS_GOLD = "F1C232";
const BLACK = "000000";
const WHITE = "FFFFFF";
```

#### Header Table (same width as content, centered)
```javascript
const HEADER_WIDTH = 9360;      // 6.5 inches (same as content table)
const COL1_WIDTH = 7610;        // Title column
const COL2_WIDTH = 1750;        // Logo column

const headerTable = new Table({
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({
            children: [new TextRun({
              text: "Section Title",
              font: "Plus Jakarta Sans",
              size: 40,
              bold: true,
              color: "FFFFFF"
            })]
          })],
          shading: { fill: "000000", type: ShadingType.CLEAR },
          verticalAlign: VerticalAlign.CENTER,
          width: { size: COL1_WIDTH, type: WidthType.DXA }
        }),
        new TableCell({
          // Logo cell
          width: { size: COL2_WIDTH, type: WidthType.DXA },
          rowSpan: 2  // If subtitle exists
        })
      ]
    })
  ],
  width: { size: HEADER_WIDTH, type: WidthType.DXA },
  columnWidths: [COL1_WIDTH, COL2_WIDTH],  // CRITICAL
  layout: TableLayoutType.FIXED,
  alignment: AlignmentType.CENTER  // Center on page
});
```

#### Content Table (full width, gold borders)
```javascript
const CONTENT_WIDTH = 9360;  // 6.5 inches

const goldBorder = {
  style: BorderStyle.SINGLE,
  size: 8,
  color: "F1C232"
};

const contentTable = new Table({
  rows: [...],
  width: { size: CONTENT_WIDTH, type: WidthType.DXA },
  columnWidths: [CONTENT_WIDTH],  // CRITICAL
  layout: TableLayoutType.FIXED
});
```

## Font Embedding

Copy fonts from `assets/fonts/`:
- PlusJakartaSans-regular.ttf, -bold.ttf, -italic.ttf, -boldItalic.ttf
- Rubik-regular.ttf, -bold.ttf, -italic.ttf, -boldItalic.ttf

## Detailed Specifications

For exact measurements, read [design-specification.md](references/design-specification.md).

## Validation Checklist

- [ ] Header banner: Same width as content table (6.5", 9360 twips), centered
- [ ] `columnWidths` specified on ALL tables (Google Docs fix)
- [ ] Header block: Black background (#000000)
- [ ] Title: Plus Jakarta Sans Bold, 20pt, White
- [ ] Logo: Full size (~52×53pt)
- [ ] Call recording link section: Include if present in source
- [ ] Content table borders: Gold (#F1C232), 1pt
- [ ] Section labels: Rubik 12pt, Gold on Black
- [ ] Body text: Rubik, 10pt
