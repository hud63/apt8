# Codex Instructions for Claude Skills
- Never edit `.claude/skills/*` (code/assets). If a change is needed, copy the relevant script to a temp helper, run it, then delete the temp script/output.
- Only invoke a skill when the user explicitly uses its name below.
- Use the scripts/assets in `.claude/skills/<name>/`; read each `SKILL.md` before running anything.
- If unsure which skill fits, ask the user instead of auto-running.
- Keep responses concise and cite the skill name you’re using.

## Document Skills
- docx — Word creation/edit/analysis — `.claude/skills/document-skills/docx/`
- pdf — PDF manipulation — `.claude/skills/pdf/`
- pptx — PowerPoint creation/editing — `.claude/skills/pptx/`
- xlsx — Spreadsheets — `.claude/skills/xlsx/`
- a8-temp — Taoglas-branded doc generator — `.claude/skills/a8-temp/`
- a8-brand — Aptitude 8 branding — `.claude/skills/a8-brand/`
- For markdown→docx in Taoglas (`a8-temp`): map markdown structures to DOCX (headings/bullets/tables), and remove any raw markdown markers (`#`, pipes/tables, `**...**`) from the final doc.

## Content Creation
- artifacts-builder — HTML artifacts (React/Tailwind) — `.claude/skills/artifacts-builder/`
- business-document-generator — Pro proposals/plans/budgets — `.claude/skills/business-document-generator/`
- pitch-deck — Investor/sales decks — `.claude/skills/pitch-deck/`
- social-media-generator — Platform-optimized posts — `.claude/skills/social-media-generator/`
- internal-comms — Internal comms (status, newsletters, FAQs) — `.claude/skills/internal-comms/`
- fe-comms — Forward Edge-AI comms (Smart Brevity) — `.claude/skills/fe-comms/`
- company-research-compiler — Company research reports — `.claude/skills/company-research-compiler/`

## Data Analysis
- csv-data-visualizer — Charts/dashboards from CSV — `.claude/skills/csv-data-visualizer/`

## Utilities
- int2 — Transcript → markdown summary — `.claude/skills/int2/`
- markitdown — Convert files to markdown — `.claude/skills/markitdown/`
- skill-creator — Guidance to create new skills — `.claude/skills/skill-creator/`
- llmapper-skill — Concept maps from articles — `.claude/skills/llmapper-skill/`
