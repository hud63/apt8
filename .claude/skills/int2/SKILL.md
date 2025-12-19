---
name: int2
description: Transform meeting transcripts into professional markdown summary documents. Use this skill when the user invokes "int2" with a meeting transcript file. Automatically detects discovery type (Initial vs Technical) and generates dynamically structured sections that adapt to the actual topics covered in the transcript.
---

# Interview Transcript to Summary Document (int2)

## Overview

This skill converts raw meeting transcripts into professionally formatted markdown documents with dynamically generated sections based on the transcript content.

## Trigger

Invoke with: `int2 <transcript_file>` or `int2 <transcript_file> <output_path>`

**Default behavior:** Output saved to project root as `[ClientName]_[DiscoveryType]_Summary.md`

Examples:
- `int2 "Interview Agendas/Tech Discovery Transcript.md"` → creates `RevPrep_Tech_Discovery_Summary.md` in project root
- `int2 "transcript.md" "output/summary.md"` → creates file at specified path

## Workflow

### Step 1: Read and Analyze Transcript

1. Read the transcript file provided by the user
2. Extract the **client name** from the transcript heading (e.g., "Abundance360" from "# A8 // Abundance360 Discovery")
3. Identify **discovery type**:
   - **Initial Discovery**: Business context, strategy, pain points, success criteria, membership/processes
   - **Technical Discovery**: Authentication, integrations, data flows, architecture, APIs, workflows
4. Identify **key topics** discussed - these become section headers (NOT fixed templates)

### Step 2: Read Reference Example

Load the appropriate reference example to understand expected format and detail level:
- **Initial Discovery**: Read [references/initial_discovery_example.md](references/initial_discovery_example.md)
- **Technical Discovery**: Read [references/tech_discovery_example.md](references/tech_discovery_example.md)

### Step 3: Generate Summary Content

Create comprehensive markdown content matching the depth/detail level of reference examples.

**For Initial Discovery (Narrative Format)**:
- Use "Call Summary" as the main header in the table
- Write narrative paragraphs with bullet points
- Sections should cover what was actually discussed (business context, objectives, technology, processes, pain points, success criteria, etc.)

**For Technical Discovery (Q&A Format)**:
- Use "Questions" as the main header in the table
- Structure as topic sections with detailed findings
- Use status indicators throughout:
  - ✅ Confirmed / Target State / Current / Desired
  - ⚠️ Warning / Concern / Problem area
  - ❌ Missing / Gap / Not implemented
  - 🚨 Major Risk / Critical issue

### Step 4: Write Output

Write the markdown file to:
- **If output path specified:** Use the provided path
- **If no output path:** Save to project root as `[ClientName]_[DiscoveryType]_Summary.md`
  - Example: `Abundance360_Initial_Discovery_Summary.md` or `RevPrep_Tech_Discovery_Summary.md`

## Document Format Requirements

### Header (at top of document)

```markdown
# [Discovery Type - e.g., "Tech Discovery" or "Initial Discovery"]

| **Link to Call Recording** |
|----------------------------|
| ➔ [**A8 // [Client Name] Discovery**][AVOMA_LINK] |

| **[Questions OR Call Summary]** |
|---------------------------------|
```

- Use `# Tech Discovery` or `# Initial Discovery` as the H1 title
- "Questions" for Technical Discovery, "Call Summary" for Initial Discovery

### Footer (at end of document)

```markdown
---
```

### Structure
- H1 title with discovery type
- Markdown tables for recording link and section header
- Bold section headers throughout content
- Bullet points and nested lists
- Status indicators inline with text (✅ ⚠️ ❌ 🚨)
- Quotes for direct statements from transcript
- Footer with horizontal rule

### Content Depth
**CRITICAL**: Match the length and detail level of reference examples. Summaries should be comprehensive, not brief. Reference examples are ~400 lines of detailed content each.

## Reference Examples

The reference examples show the exact format, structure, and detail level expected:

- `references/initial_discovery_example.md` - Narrative format with sections like Key Business Context, Strategic Objectives, Technology Ecosystem, Pain Points, Success Criteria
- `references/tech_discovery_example.md` - Q&A format with status indicators covering Sources of Truth, Authentication, Integrations, Workflows, etc.

**Sections are dynamic** - adapt to topics actually covered in the transcript, not a fixed template.
