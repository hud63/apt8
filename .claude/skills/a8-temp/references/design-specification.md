# Taoglas Interview Agenda Template - Design Specification

## Document Purpose
This specification provides all necessary details to recreate the Taoglas Interview Agenda document template with pixel-perfect accuracy.

---

## 1. PAGE SETUP

### Page Size
- **Format:** US Letter
- **Width:** 8.5 inches (12240 twips)
- **Height:** 11 inches (15840 twips)
- **Orientation:** Portrait

### Margins
- **Top:** 1 inch (1440 twips)
- **Bottom:** 1 inch (1440 twips)
- **Left:** 1 inch (1440 twips)
- **Right:** 1 inch (1440 twips)
- **Header:** 0.5 inch (720 twips)
- **Footer:** 0.5 inch (720 twips)

---

## 2. COLOR PALETTE

### Primary Colors
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Taoglas Gold** | `#F1C232` | RGB(241, 194, 50) | Section headers, table borders, accent text |
| **Black** | `#000000` | RGB(0, 0, 0) | Header backgrounds, body text, headings |
| **White** | `#FFFFFF` | RGB(255, 255, 255) | Text on black backgrounds |

### Secondary Colors (in document)
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Link Blue** | `#1155CC` | RGB(17, 85, 204) | Hyperlinks |
| **Accent Purple** | `#9900FF` | RGB(153, 0, 255) | Occasional accent |
| **Gray (Heading 3)** | `#434343` | RGB(67, 67, 67) | Style definition |
| **Gray (Heading 4-6)** | `#666666` | RGB(102, 102, 102) | Style definition |

### Theme Colors (Office Theme)
| Role | Hex Code |
|------|----------|
| Dark 1 | `#000000` |
| Light 1 | `#FFFFFF` |
| Dark 2 | `#1F497D` |
| Light 2 | `#EEECE1` |
| Accent 1 | `#4F81BD` |
| Accent 2 | `#C0504D` |
| Accent 3 | `#9BBB59` |
| Accent 4 | `#8064A2` |
| Accent 5 | `#4BACC6` |
| Accent 6 | `#F79646` |
| Hyperlink | `#0000FF` |
| Followed Hyperlink | `#800080` |

---

## 3. TYPOGRAPHY

### Font Families

#### Primary Fonts (Custom - Embedded in Document)
1. **Plus Jakarta Sans** - Used for header titles
   - Weights: Regular, Bold, Italic, Bold Italic
   - Source: Google Fonts
   - License: SIL Open Font License

2. **Rubik** - Used for body text, section labels, and subtitles
   - Weights: Regular, Bold, Italic, Bold Italic
   - Source: Google Fonts
   - License: SIL Open Font License

#### Fallback Fonts
3. **Arial** - Default document font
4. **Arial Unicode MS** - For special characters/emoji

### Font Sizes (in half-points, divide by 2 for points)

| Element | Size (half-pts) | Size (pts) | Font | Weight |
|---------|-----------------|------------|------|--------|
| **Title (Cover)** | 52 | 26pt | Arial Unicode MS | Normal |
| **Page Header Title** | 40 | 20pt | Plus Jakarta Sans | Bold |
| **H1 Main Title** | 40 | 20pt | Plus Jakarta Sans | Bold |
| **H2 Section Title** | 34 | 17pt | Rubik | Bold |
| **H3 Subsection** | 26 | 13pt | Rubik | Bold |
| **Subtitle Text** | 26 | 13pt | Rubik | Normal |
| **Section Label (Gold)** | 24 | 12pt | Rubik | Normal |
| **Body Text** | 20 | 10pt | Rubik | Normal |
| **Small Text** | 14 | 7pt | Rubik | Normal |

### Line Spacing
- **Default:** 1.15 (276/240 ratio)
- **Tables/Headers:** Single (240)

---

## 4. HEADER DESIGN

### Structure
The header contains a two-column table with the following specifications:

#### Header Table Dimensions
- **Total Width:** 10,890 twips (7.5625 inches)
- **Column 1 Width:** 8,850 twips (6.146 inches) - Title area
- **Column 2 Width:** 2,040 twips (1.417 inches) - Logo area

#### Header Table Rows
**Row 1 - Title Row:**
- Height: 2,073 twips (minimum)
- Background: `#000000` (Black)
- Cell padding: 243.36 twips (~0.17 inches) all sides
- Vertical alignment: Center
- Text: Section title in Plus Jakarta Sans Bold, 20pt, White (`#FFFFFF`)

**Row 2 - Subtitle Row:**
- Height: 782 twips (minimum)  
- Background: `#000000` (Black)
- Cell padding: 243.36 twips all sides
- Vertical alignment: Center
- Text: Subtitle in Rubik, 13pt, White (`#FFFFFF`)

#### Table Borders
- Color: `#000000`
- Width: 4 (half-points) = 0.5pt
- Style: Single line

### Logo Placement
- **Image:** Taoglas infinity logo (yellow/gold tones)
- **Position:** Anchored to page
- **Horizontal offset:** 6,734,175 EMUs from page left (~2.65 inches from right edge)
- **Vertical offset:** 1,306,449 EMUs from page top (~1.03 inches from top)
- **Size:** 664,795 × 667,750 EMUs (~52.4pt × 52.6pt / ~0.73" × 0.73")
- **Wrap:** None (floats over content)

---

## 5. TABLE STYLES

### Main Content Table
- **Width:** 9,360 twips (6.5 inches)
- **Border color:** `#F1C232` (Taoglas Gold)
- **Border width:** 8 half-points (1pt)
- **Border style:** Single line

### Table Header Row (Section Label)
- **Background fill:** `#000000` (Black)
- **Text color:** `#F1C232` (Taoglas Gold)
- **Font:** Rubik, 12pt
- **Cell padding:** Default (100 twips)

### Table Content Rows
- **Background fill:** None/White
- **Text color:** `#000000` (Black)
- **Border color:** `#F1C232` (Taoglas Gold)

### Column Structure (Overview Table Example)
- Column 1: 3,120 twips (2.17 inches)
- Column 2: 6,240 twips (4.33 inches)

---

## 6. PARAGRAPH STYLES

### Title Style
```
- Font: Arial
- Size: 26pt (52 half-points)
- Spacing before: 0
- Spacing after: 60 twips
- Keep with next: Yes
- Keep lines together: Yes
```

### Heading 1
```
- Font: (inherits, typically Plus Jakarta Sans for headers)
- Size: 20pt (40 half-points)
- Spacing before: 400 twips
- Spacing after: 120 twips
- Keep with next: Yes
- Keep lines together: Yes
```

### Heading 2
```
- Font: Rubik Bold
- Size: 17pt (34 half-points)
- Spacing before: 360 twips
- Spacing after: 120 twips
- Keep with next: Yes
- Keep lines together: Yes
```

### Heading 3
```
- Font: Rubik Bold
- Size: 13pt (26 half-points)
- Color: #000000
- Spacing before: 280-320 twips
- Spacing after: 80 twips
- Keep with next: Yes
```

### Normal/Body
```
- Font: Rubik
- Size: 10pt (20 half-points)
- Color: #000000
- Line spacing: 1.15 (276)
```

### Subtitle
```
- Font: Rubik
- Size: 13pt (26 half-points)
- Color: #FFFFFF (when on black background)
- Spacing after: 320 twips
```

---

## 7. LIST FORMATTING

### Bullet Points
- **Marker:** Solid black circle (●)
- **Font:** Rubik, 10pt (20 half-points)
- **Indent:** 720 twips left, 360 twips hanging
- **Spacing:** 
  - Before first item: 240 twips
  - Between items: 0
  - After last item: 0

### Nested Lists (Sub-bullets)
- **Marker:** Hollow circle (○)
- **Additional indent per level:** 360 twips

### Numbered Lists
- **Format:** Arabic numerals with period (1., 2., 3.)
- **Font:** Rubik Bold for numbers
- **Same indentation as bullets**

---

## 8. SPECIAL ELEMENTS

### Section Separators
- The black header table serves as the primary section separator
- Gold borders (`#F1C232`) define content areas

### Emojis/Icons
- Used sparingly (e.g., ✅ checkmark for "Overview")
- Rendered using Arial Unicode MS font

### Links
- Color: `#1155CC`
- No underline by default in most cases

---

## 9. EMBEDDED ASSETS

### Logo File
- **Filename:** image1.png
- **Format:** PNG with transparency
- **Description:** Taoglas infinity symbol logo in yellow/gold gradient tones
- **Colors in logo:** Multiple shades of gold/yellow (#F5B82E, #EFBD45, #D69E2D approximate)
- **Dimensions:** Original embedded at ~52×53 points

### Embedded Fonts
Located in `word/fonts/`:
1. PlusJakartaSans-regular.ttf
2. PlusJakartaSans-bold.ttf
3. PlusJakartaSans-italic.ttf
4. PlusJakartaSans-boldItalic.ttf
5. Rubik-regular.ttf
6. Rubik-bold.ttf
7. Rubik-italic.ttf
8. Rubik-boldItalic.ttf

---

## 10. DOCUMENT STRUCTURE PATTERN

Each section follows this structure:

1. **Page Header Table** (Black background)
   - Row 1: Main section title (white, bold, 20pt Plus Jakarta Sans)
   - Row 2: Subtitle if applicable (white, 13pt Rubik)
   - Logo positioned in upper right

2. **Content Table** (Gold borders)
   - Header row: Section label (gold text on black, 12pt Rubik)
   - Content rows: Body content (black text on white)

3. **Within Content:**
   - H2 headings (17pt Rubik Bold)
   - H3 subheadings (13pt Rubik Bold)
   - Bullet lists (10pt Rubik)
   - Body text (10pt Rubik)

---

## 11. CONVERSION FORMULAS

For reference when implementing:
- **1 inch = 1440 twips**
- **1 point = 20 twips**
- **1 inch = 914400 EMUs**
- **Font sizes in OOXML are in half-points (sz="20" = 10pt)**
- **Border widths in OOXML are in eighth-points (sz="8" = 1pt)**

---

## 12. RECREATING THE TEMPLATE

### Required Resources
1. Plus Jakarta Sans font (Google Fonts)
2. Rubik font (Google Fonts)
3. Taoglas logo PNG file
4. Microsoft Word or compatible OOXML editor

### Key Implementation Notes
1. Enable font embedding in document settings
2. Use fixed table layout for consistent sizing
3. Position logo using absolute page positioning (anchor to page)
4. Ensure gold color `#F1C232` is applied consistently to all borders and accent text
5. Maintain the black/gold/white color scheme throughout

---

*Document generated from analysis of Taoglas_Interview_Agendas_.docx*
