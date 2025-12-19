---
description: Apply Aptitude 8 corporate brand styling to presentations, documents, and spreadsheets.
---

# Aptitude 8 Brand Application

This skill applies Aptitude 8's corporate brand identity to presentations, documents, and spreadsheets.

## Overview

When triggered, apply the Aptitude 8 brand guidelines to ensure consistent, professional output across all document types. The brand guidelines are detailed in `.claude/skills/a8-brand/references/brand_guidelines.md` and should be referenced for specific color codes, font specifications, and UI styling patterns.

## Core Brand Elements

### Colors
- **Golden Yellow (Primary Accent)**: `#F7CD46` - logos, buttons, highlights
- **Off-White (Primary Text)**: `#F5F5F5` - headings, body text
- **Dark Grey (Cards)**: `#333333` - content containers
- **Deep Black (Background)**: `#121212` or `#000000` - page/slide backgrounds
- **Muted Text**: `#CCCCCC` - secondary text
- **Secondary Accents**: Cyber Blue (`#007BFF`), Neon Red/Pink (`#FF0055`), Matrix Green (`#00FF88`)

### Typography
- **Display/Hero**: Mix of Sans-Serif ("A8") and Serif (taglines), 32-44pt
- **Headings**: Bold Sans-Serif (Inter/DM Sans style), 18-28pt, color: #F5F5F5 or #F7CD46
- **Body**: Clean Sans-Serif, 16pt, line-height 1.5, color: #F5F5F5 or #CCCCCC
- **Font Fallbacks**: Inter/DM Sans → Arial Bold → Trebuchet MS → Helvetica

### Logos
Three logo variants are available via Cloudinary URLs (see `.claude/skills/a8-brand/assets/logo_urls.md` for full URLs):
- **Black Logo**: `aptitude_8_logo_black_l9xx5x.jpg` - for light backgrounds (rare)
- **Transparent Logo**: `aptitude_8_logo_trans_qxt3mk.png` - primary choice for dark backgrounds
- **Full Color Logo**: `A8_Standard_Full_Color_Logo_zhcozi.png` - primary branding on dark backgrounds

**Important**: Logos must be downloaded from Cloudinary URLs before insertion:
1. Use Python requests library to download from URL
2. Save to temporary file
3. Insert into document using python-pptx/python-docx
4. Clean up temporary file after insertion

### UI Styling
- **Buttons**: Fully rounded pills with solid #F7CD46 fill and dark text (#121212)
- **Cards**: #333333 background, no borders, high contrast with #121212 page background
- **Layout**: Spacious padding, generous whitespace, high contrast
- **Accents**: Subtle glows and wireframes using secondary gradient colors
- **Vibe**: Enterprise SaaS, Integration-focused, HubSpot-inspired, Dark Mode native

## Application by Document Type

### PowerPoint Presentations (.pptx)

**Title Slide:**
- Background: Deep Black (#121212) or gradient (#121212 to #000000)
- Logo: Transparent or Full Color logo (downloaded from Cloudinary)
- Title text: Off-White (#F5F5F5), Bold Sans-Serif 28pt
- Subtitle/date: Muted (#CCCCCC), Sans-Serif 14pt
- Accent elements: Golden Yellow (#F7CD46) for emphasis

**Content Slides:**
- Background: Deep Black (#121212)
- Cards/Panels: Dark Grey (#333333) with spacious padding
- Headers: Off-White (#F5F5F5) or Golden Yellow (#F7CD46), Bold Sans-Serif 18pt
- Body text: Off-White (#F5F5F5) or Muted (#CCCCCC), 16pt, 1.5 line height
- Bullets/accents: Golden Yellow (#F7CD46)
- Buttons: Golden Yellow (#F7CD46) pills with dark text
- Footer: Muted (#CCCCCC), Sans-Serif 12pt

**Reference**: See `.claude/skills/a8-brand/references/brand_guidelines.md` for complete specifications and logo download patterns

### Word Documents (.docx)

**Header:**
- Background: Deep Black (#121212)
- Insert Transparent or Full Color logo (downloaded from Cloudinary)
- Title: Off-White (#F5F5F5), Bold Sans-Serif 28pt
- Subtitle: Golden Yellow (#F7CD46), Sans-Serif 18pt

**Body:**
- Background: Deep Black (#121212)
- Font: Sans-Serif 16pt, 1.5 line height
- Color: Off-White (#F5F5F5) for primary text, Muted (#CCCCCC) for secondary
- Section headers: Golden Yellow (#F7CD46) or Off-White (#F5F5F5), Bold 18pt
- Cards/callouts: Dark Grey (#333333) background with generous padding

**Footer:**
- Text: Muted (#CCCCCC), Sans-Serif 12pt
- Optional: Company name or page numbers

### Excel Spreadsheets (.xlsx)

**Header Row:**
- Background: Dark Grey (#333333)
- Text: Off-White (#F5F5F5), Bold Sans-Serif, 16pt
- Optional accent: Golden Yellow (#F7CD46) border or text

**Data Cells:**
- Background: Deep Black (#121212) or alternating with #1A1A1A
- Font: Sans-Serif 16pt
- Text color: Off-White (#F5F5F5) or Muted (#CCCCCC)

**Charts:**
- Background: Deep Black (#121212)
- Primary colors: Golden Yellow (#F7CD46), Cyber Blue (#007BFF), Matrix Green (#00FF88)
- Gridlines: Dark Grey (#333333) at 50% opacity
- Labels: Off-White (#F5F5F5), 14pt

## Workflow

1. **Read brand guidelines**: Load `.claude/skills/a8-brand/references/brand_guidelines.md` for complete specifications
2. **Access logo URLs**: Refer to `.claude/skills/a8-brand/assets/logo_urls.md` for Cloudinary URLs
3. **Download logos when needed**: Use Python requests for temporary download
4. **Apply color palette**: Use exact hex values - prioritize dark backgrounds
5. **Set typography**: Apply Sans-Serif fonts with correct sizes and line heights
6. **Implement dark mode**: Ensure all elements work on dark backgrounds
7. **Add UI elements**: Apply rounded buttons, card styling, high contrast
8. **Verify consistency**: Ensure all elements follow brand guidelines

### Logo Download Example

```python
import requests
import tempfile
import os

# Download logo
response = requests.get('https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_trans_qxt3mk.png')
response.raise_for_status()

fd, temp_logo = tempfile.mkstemp(suffix='.png')
with os.fdopen(fd, 'wb') as f:
    f.write(response.content)

# Insert into document
# ... use temp_logo with python-pptx or python-docx ...

# Clean up
os.unlink(temp_logo)
```

## Important Notes

- **Exact colors**: Always use the specified hex codes exactly as provided
- **Dark backgrounds**: Use #121212 or #000000 as default page/slide backgrounds
- **High contrast**: Maintain WCAG AA standards (4.5:1 minimum)
- **Logo handling**: Always download from Cloudinary and clean up temp files
- **Font consistency**: Use Sans-Serif fonts with specified fallbacks
- **Line height**: Always use 1.5 line height for body text
- **Cards vs backgrounds**: Cards (#333333) must be lighter than backgrounds (#121212)
- **Reference file**: Consult `.claude/skills/a8-brand/references/brand_guidelines.md` for detailed specifications and examples

## Best Practices

### Do's:
- Use dark backgrounds (#121212) as default
- Apply Golden Yellow (#F7CD46) strategically for emphasis
- Maintain high contrast for accessibility
- Use generous padding and whitespace
- Download logos from Cloudinary when needed
- Clean up temporary files after logo insertion
- Use card-based layouts (#333333)
- Apply 1.5 line height for body text

### Don'ts:
- Don't use light backgrounds (except rare cases)
- Don't overuse Golden Yellow
- Don't use radial gradients
- Don't place logos without clearspace
- Don't forget logo download cleanup
- Don't use borders when contrast achieves same effect
- Don't use line heights less than 1.5 for body text

## Triggering

This skill activates when:
- User types "a8-brand" in their request
- User explicitly requests Aptitude 8 or A8 branded materials
- User mentions applying company branding to presentations, documents, or spreadsheets
