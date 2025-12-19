# Aptitude 8 Brand Guidelines

## Primary Brand Colors

Use these exact hex values for all brand materials:

- **Golden Yellow (Primary Accent)**: `#F7CD46` - Use for logos, buttons, key highlights
- **Off-White (Primary Text)**: `#F5F5F5` - Use for headings and primary body text
- **Dark Grey (Card/Surface)**: `#333333` - Use for content containers, cards, panels
- **Deep Black (Global Background)**: `#121212` or `#000000` - Use for page/slide backgrounds
- **Muted Text**: `#CCCCCC` - Use for secondary text and descriptions

## Secondary Accent Colors

Use sparingly for subtle effects:

- **Cyber Blue**: `#007BFF` - For subtle glows, wireframes, tech accents
- **Neon Red/Pink**: `#FF0055` - For alerts, errors, strong emphasis
- **Matrix Green**: `#00FF88` - For success states and positive indicators

## Typography

### Font Families

**Display/Hero Text** (large titles, cover slides):
- Mix of geometric Sans-Serif (for "A8") and Modern Serif (for taglines)
- Example: "A8" in bold geometric sans + "Guides" in elegant italicized serif
- Web-safe alternatives: Arial Black + Georgia Italic

**Headings** (H1, H2, section titles):
- Bold geometric Sans-Serif (Inter or DM Sans style)
- Web-safe alternative: Arial Bold or Trebuchet MS Bold
- Color: Off-White (#F5F5F5) or Golden Yellow (#F7CD46) for emphasis

**Body Text** (paragraphs, lists):
- Clean Sans-Serif
- Web-safe alternative: Arial or Verdana
- Line height: 1.5
- Color: Off-White (#F5F5F5) for primary, Muted (#CCCCCC) for secondary

### Font Sizes (in points)

- **Display/Hero**: 32-44pt
- **Header 1**: 28pt
- **Header 2**: 18pt
- **Date/Metadata**: 14pt
- **Body**: 16pt
- **Footer**: 12pt

## UI Styling

### Buttons

- **Shape**: Fully rounded pills (border-radius: 50px or 999px)
- **Fill**: Solid Golden Yellow (#F7CD46)
- **Text**: Deep Black (#121212) or Dark Grey (#333333)
- **Font**: Bold Sans-Serif
- **Hover**: Slightly lighter yellow or subtle glow

### Cards and Panels

- **Background**: Dark Grey (#333333)
- **Borders**: None (rely on contrast with #121212 background)
- **Padding**: Generous (24-32px)
- **Border radius**: Subtle rounded corners (8-12px)
- **Shadow**: Optional subtle shadow for depth

### Layout Principles

- **High contrast**: Strong distinction between backgrounds and text
- **Spacious padding**: Generous whitespace for breathing room
- **Dark mode native**: All elements designed for dark backgrounds
- **Card-based**: Content organized in distinct panels/cards
- **Minimal borders**: Use contrast and spacing instead of lines

## Logo Assets

### Available Logos

Logos are hosted on Cloudinary (see `assets/logo_urls.md` for URLs):

1. **Black Logo**: `aptitude_8_logo_black_l9xx5x.jpg` - For light backgrounds (rare)
2. **Transparent Logo**: `aptitude_8_logo_trans_qxt3mk.png` - Primary choice for dark backgrounds
3. **Full Color Logo**: `A8_Standard_Full_Color_Logo_zhcozi.png` - Primary branding on dark backgrounds

### Logo Usage Guidelines

- Maintain aspect ratio when resizing
- Provide clearspace equal to height of "A8" text
- Use Transparent or Full Color on dark backgrounds
- Use Black logo only on light backgrounds (rare)
- Logos typically appear in headers or title slides

### Logo Download Pattern

```python
import requests
import tempfile
import os

def download_a8_logo(logo_type='transparent'):
    """Download A8 logo from Cloudinary."""
    urls = {
        'black': 'https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_black_l9xx5x.jpg',
        'transparent': 'https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_trans_qxt3mk.png',
        'full_color': 'https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/A8_Standard_Full_Color_Logo_zhcozi.png'
    }

    url = urls.get(logo_type, urls['transparent'])
    suffix = '.jpg' if logo_type == 'black' else '.png'

    response = requests.get(url)
    response.raise_for_status()

    fd, temp_path = tempfile.mkstemp(suffix=suffix)
    with os.fdopen(fd, 'wb') as f:
        f.write(response.content)

    return temp_path
```

## Color Application Examples

### For Presentations

**Title Slides**:
- Background: Deep Black (#121212)
- Logo: Transparent or Full Color (from Cloudinary)
- Title: Off-White (#F5F5F5), 28pt bold
- Subtitle: Muted (#CCCCCC), 14pt
- Accent button/CTA: Golden Yellow (#F7CD46) pill

**Content Slides**:
- Background: Deep Black (#121212)
- Content panels: Dark Grey (#333333) cards with padding
- Headers: Off-White (#F5F5F5) or Golden Yellow (#F7CD46), 18pt bold
- Body: Off-White (#F5F5F5), 16pt, line-height 1.5
- Bullets: Golden Yellow (#F7CD46)
- Wireframes: Cyber Blue (#007BFF) at 20% opacity

### For Documents

**Headers**:
- Background: Deep Black (#121212)
- Logo: Transparent or Full Color (from Cloudinary)
- Title: Off-White (#F5F5F5), 28pt bold
- Subtitle: Golden Yellow (#F7CD46), 18pt

**Body**:
- Background: Deep Black (#121212)
- Primary text: Off-White (#F5F5F5), 16pt
- Secondary text: Muted (#CCCCCC), 16pt
- Highlights: Dark Grey (#333333) cards with Golden Yellow (#F7CD46) accents
- Section headers: Off-White (#F5F5F5) or Golden Yellow (#F7CD46), 18pt bold

### For Spreadsheets

**Header Rows**:
- Background: Dark Grey (#333333)
- Text: Off-White (#F5F5F5), bold, 16pt
- Optional border: Golden Yellow (#F7CD46), 2px bottom

**Data Cells**:
- Background: Deep Black (#121212) or alternating with #1A1A1A
- Text: Off-White (#F5F5F5) or Muted (#CCCCCC), 16pt

**Charts**:
- Background: Deep Black (#121212)
- Series: Golden Yellow (#F7CD46), Cyber Blue (#007BFF), Matrix Green (#00FF88)
- Gridlines: Dark Grey (#333333) at 50% opacity
- Labels: Off-White (#F5F5F5), 14pt

## Vibe and Aesthetic

The Aptitude 8 brand conveys:

- **Enterprise SaaS**: Professional, scalable, integration-focused
- **Dark mode native**: Modern, sleek, easy on the eyes
- **HubSpot-inspired**: Clean, organized, data-centric
- **High contrast**: Clear hierarchy, accessible, readable
- **Digital/Tech**: Subtle wireframes, cyber accents, digital landscapes
- **Premium**: Golden accents suggest quality and value
- **Modern**: Spacious layouts, rounded elements, generous padding

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

## Contrast Validation

All primary color combinations meet WCAG AA accessibility standards (minimum 4.5:1 contrast ratio):

- **#F5F5F5 on #121212**: ~14:1 (excellent)
- **#F7CD46 on #121212**: ~9.5:1 (excellent)
- **#CCCCCC on #121212**: ~9:1 (excellent)
- **#F7CD46 on #333333**: ~6:1 (good)
- **#F5F5F5 on #333333**: ~9:1 (excellent)
