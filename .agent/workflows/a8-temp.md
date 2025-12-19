---
description: Pixel-perfect Taoglas brand document generation. Use when creating Word documents (.docx) that must match the official Taoglas template format.
---

# Taoglas Document Generation (a8-temp)

## Trigger

Use this workflow when the user asks to create a Taoglas-branded document, a "Taoglas template", or explicitly uses `/a8-temp`.

## Workflow

### Step 1: Analyze Request

Identify the following parameters from the user's request:
1.  **Title**: The main title of the document.
2.  **Subtitle**: The subtitle (optional, default to empty string if not provided).
3.  **Output Path**: Where to save the file. If not specified, use a reasonable default like `Taoglas_<Title>.docx` in the user's current working directory.

### Step 2: Generation

Run the generation script from the skill directory.

**Command:**
```powershell
npx ts-node scripts/create_taoglas_doc.ts "<Output Path>" "<Title>" "<Subtitle>"
```

**Working Directory (Cwd):**
`c:/Users/mark/Downloads/a8/.claude/skills/a8-temp`

**Important Notes:**
- Ensure the `<Output Path>` is an absolute path or relative to the execution context. If unsure, use absolute path.
- The `Subtitle` argument is required by the script, so pass an empty string `""` if there is no subtitle.

### Step 3: Verification

Confirm the file was created at the specified output path using `find_by_name` or `list_dir`.

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
