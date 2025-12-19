# Claude Code Skills - Document Processing Suite

This directory contains specialized skills for Claude Code to handle various document formats. These skills follow [Anthropic's Skills best practices](https://github.com/anthropics/skills) and provide comprehensive document processing capabilities.

## Available Skills

### 📄 DOCX - Word Document Processing
**Location**: `.claude/skills/docx/` → `document-skills/docx/`

Comprehensive Word document creation, editing, and analysis with support for:
- Creating new documents with docx-js
- Editing existing documents via OOXML manipulation
- Tracked changes (redlining) workflow
- Comments and annotations
- Format preservation
- Text extraction with Pandoc

**When Claude uses this**: Working with `.docx` files for creating, modifying, or analyzing professional documents.

### 📊 XLSX - Spreadsheet Processing
**Location**: `.claude/skills/xlsx/` → `document-skills/xlsx/`

Comprehensive spreadsheet creation, editing, and analysis with support for:
- Creating spreadsheets with formulas and formatting (openpyxl)
- Data analysis and visualization (pandas)
- Formula recalculation with LibreOffice
- Financial modeling with industry-standard color coding
- Error detection and validation

**When Claude uses this**: Working with `.xlsx`, `.xlsm`, `.csv`, `.tsv` files for spreadsheets, data analysis, or financial modeling.

### 🎨 PPTX - PowerPoint Presentation Processing
**Location**: `.claude/skills/pptx/` → `document-skills/pptx/`

Comprehensive presentation creation, editing, and analysis with support for:
- Creating new presentations via html2pptx workflow
- Editing existing presentations via OOXML manipulation
- Template-based presentation creation
- Layout design and visual styling
- Thumbnail generation for visual analysis
- Speaker notes and comments

**When Claude uses this**: Working with `.pptx` files for creating, modifying, or analyzing presentations.

### 📑 PDF - PDF Document Processing
**Location**: `.claude/skills/pdf/` → `document-skills/pdf/`

Comprehensive PDF manipulation toolkit for:
- Text and table extraction (pdfplumber, pypdf)
- Creating new PDFs (reportlab)
- Merging and splitting documents
- PDF form filling and field extraction
- Metadata manipulation
- OCR for scanned documents

**When Claude uses this**: Working with PDF files for form filling, text extraction, or document manipulation.

## Architecture

### Directory Structure
```
.claude/skills/          # Skills directory (symbolic links)
├── pptx/               → ../../document-skills/pptx/
├── docx/               → ../../document-skills/docx/
├── xlsx/               → ../../document-skills/xlsx/
└── pdf/                → ../../document-skills/pdf/

document-skills/         # Actual skill implementations
├── pptx/
│   ├── SKILL.md        # Skill definition with YAML frontmatter
│   ├── html2pptx.md    # HTML to PowerPoint workflow guide
│   ├── ooxml.md        # OOXML editing guide
│   ├── ooxml/          # OOXML schemas and scripts
│   └── scripts/        # Helper scripts
├── docx/
│   ├── SKILL.md
│   ├── docx-js.md      # Document creation library guide
│   ├── ooxml.md        # OOXML editing guide
│   ├── ooxml/          # OOXML schemas and scripts
│   └── scripts/        # Helper scripts
├── xlsx/
│   ├── SKILL.md
│   └── scripts/        # Helper scripts including recalc.py
└── pdf/
    ├── SKILL.md
    ├── reference.md    # Advanced PDF operations
    ├── forms.md        # PDF form handling
    └── scripts/        # Helper scripts
```

### Skill Metadata

Each skill includes YAML frontmatter following Anthropic's best practices:

```yaml
---
name: skillname
description: "Clear description of what the skill does and when Claude should use it"
license: Proprietary. LICENSE.txt has complete terms
---
```

The `description` field is critical - Claude uses it to determine when to automatically invoke each skill.

## How Claude Uses These Skills

1. **Automatic Invocation**: Claude reads the `description` field in each `SKILL.md` file to determine when to use a skill
2. **Context Loading**: When a skill is invoked, Claude loads the full `SKILL.md` file for detailed instructions
3. **Resource Access**: Skills can reference additional markdown files, scripts, and schemas in their directories
4. **Tool Integration**: Skills guide Claude on using external tools (Python libraries, Node packages, CLI tools)

## Best Practices Alignment

This setup follows [Anthropic's Skills best practices](https://github.com/anthropics/skills):

✅ Each skill has its own directory
✅ Required YAML frontmatter with `name` and `description`
✅ Clear skill descriptions that help Claude determine when to use them
✅ Focused, single-purpose skills (one format per skill)
✅ Comprehensive documentation within each `SKILL.md`
✅ Supporting files organized within skill directories
✅ Skills accessible from `.claude/skills/` directory

## Adding New Skills

To add a new skill following these best practices:

1. Create a new directory under `document-skills/skillname/`
2. Create `SKILL.md` with required YAML frontmatter:
   ```yaml
   ---
   name: skillname
   description: "When Claude needs to [specific use case]"
   ---
   ```
3. Add supporting documentation and scripts to the skill directory
4. Create a symbolic link: `cd .claude/skills && ln -s ../../document-skills/skillname skillname`

## Dependencies

Each skill documents its required dependencies in its `SKILL.md` file. Common dependencies include:

- **Python**: pandas, openpyxl, pypdf, pdfplumber, reportlab, defusedxml
- **Node.js**: docx, pptxgenjs, playwright, sharp, react-icons
- **System**: LibreOffice, Poppler utils, Pandoc

## License

All skills in this suite are proprietary. See `LICENSE.txt` in each skill directory for complete terms.

## Related Documentation

- [CLAUDE.md](../../CLAUDE.md) - Project overview and agent architecture
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Official skills best practices
- [Claude Help Center - Custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)
