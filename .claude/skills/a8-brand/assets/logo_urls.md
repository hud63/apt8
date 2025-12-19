# Aptitude 8 Logo Assets

All logos are hosted on Cloudinary and must be downloaded when needed for document insertion.

## Available Logos

### 1. Black Logo (for light backgrounds)
- **URL**: https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_black_l9xx5x.jpg
- **Format**: JPEG
- **Use Case**: Light backgrounds (rare in A8 branding)
- **Cloudinary ID**: `aptitude_8_logo_black_l9xx5x`

### 2. Transparent Logo (primary choice)
- **URL**: https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_trans_qxt3mk.png
- **Format**: PNG with transparency
- **Use Case**: Dark backgrounds, overlays, primary branding
- **Cloudinary ID**: `aptitude_8_logo_trans_qxt3mk`

### 3. Full Color Logo
- **URL**: https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/A8_Standard_Full_Color_Logo_zhcozi.png
- **Format**: PNG
- **Use Case**: Primary branding on dark backgrounds
- **Cloudinary ID**: `A8_Standard_Full_Color_Logo_zhcozi`

## Usage Instructions

### Downloading Logos for Document Insertion

Since python-pptx and python-docx require local file paths, download logos temporarily:

```python
import requests
import tempfile
import os

def download_logo(url, suffix='.png'):
    """Download logo from Cloudinary URL to temporary file."""
    response = requests.get(url)
    response.raise_for_status()

    # Create temporary file
    fd, temp_path = tempfile.mkstemp(suffix=suffix)
    with os.fdopen(fd, 'wb') as f:
        f.write(response.content)

    return temp_path

# Example usage
logo_url = "https://res.cloudinary.com/dqdzpkbdc/image/upload/v1764617884/aptitude_8_logo_trans_qxt3mk.png"
temp_logo = download_logo(logo_url)

# Use temp_logo with python-pptx or python-docx
# ... insert logo into document ...

# Clean up
os.unlink(temp_logo)
```

### Logo Selection Guidelines

- **PowerPoint title slides**: Transparent or Full Color logo on #121212 background
- **PowerPoint content slides**: Transparent logo in header/footer on #121212 background
- **Word documents**: Transparent or Full Color logo on #121212 background
- **Excel headers**: Logo typically not used, focus on color branding
- **Light backgrounds** (rare): Use Black logo

### Logo Placement

- **PowerPoint title slides**: Top center or top left, large (height: 10-15% of slide)
- **PowerPoint content slides**: Top left corner, small (height: 5-8% of slide)
- **Word documents**: Top left or right of first page, medium (width: 20-30%)
- **Maintain aspect ratio**: Always preserve original proportions

### Clearspace Guidelines

- Maintain minimum clearspace equal to height of "A8" text in logo
- Don't place text or elements too close to logo
- Ensure adequate padding from edges of slide/page
