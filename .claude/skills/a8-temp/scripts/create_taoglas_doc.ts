/**
 * Taoglas Template Document Generator
 * Creates Word documents matching the Taoglas brand template pixel-perfectly.
 * 
 * FIXES APPLIED:
 * - columnWidths in Table constructor for Google Docs compatibility
 * - Header banners at 50% width, centered on page
 */

import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, VerticalAlign, BorderStyle, Header,
  ImageRun, TableLayoutType, convertInchesToTwip, HeadingLevel,
  ShadingType, PageOrientation
} from "docx";
import * as fs from "fs";
import * as path from "path";

// ============================================================================
// TAOGLAS BRAND CONSTANTS - DO NOT MODIFY
// ============================================================================

const COLORS = {
  TAOGLAS_GOLD: "F1C232",
  BLACK: "000000",
  WHITE: "FFFFFF",
  LINK_BLUE: "1155CC",
};

const FONTS = {
  HEADER_TITLE: "Plus Jakarta Sans",
  BODY: "Rubik",
  FALLBACK: "Arial",
};

const SIZES = {
  HEADER_TITLE: 40,      // 20pt in half-points
  H2_SECTION: 34,        // 17pt
  H3_SUBSECTION: 26,     // 13pt
  SUBTITLE: 26,          // 13pt
  SECTION_LABEL: 24,     // 12pt
  BODY: 20,              // 10pt
  SMALL: 14,             // 7pt
};

const PAGE = {
  WIDTH: 12240,          // 8.5 inches in twips
  HEIGHT: 15840,         // 11 inches in twips
  MARGIN: 1440,          // 1 inch in twips
  HEADER_MARGIN: 720,    // 0.5 inch in twips
};

// HEADER TABLE - same width as content table, centered
const HEADER_TABLE = {
  TOTAL_WIDTH: 9360,     // Same as content table (6.5 inches)
  COL1_WIDTH: 7610,      // Title column
  COL2_WIDTH: 1750,      // Logo column
  TITLE_ROW_HEIGHT: 1036, // Compact vertical height
  SUBTITLE_ROW_HEIGHT: 391,
  CELL_PADDING: 122,
};

const CONTENT_TABLE = {
  WIDTH: 9360,           // 6.5 inches in twips (unchanged)
  BORDER_WIDTH: 8,       // 1pt in eighth-points
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getLogoPath(): string {
  const skillDir = path.dirname(__dirname);
  return path.join(skillDir, "assets", "taoglas_logo.png");
}

function createGoldBorder() {
  return {
    style: BorderStyle.SINGLE,
    size: CONTENT_TABLE.BORDER_WIDTH,
    color: COLORS.TAOGLAS_GOLD,
  };
}

function createBlackBorder() {
  return {
    style: BorderStyle.SINGLE,
    size: 4,
    color: COLORS.BLACK,
  };
}

// ============================================================================
// DOCUMENT COMPONENT BUILDERS
// ============================================================================

/**
 * Creates the header table with title, subtitle, and logo
 * - 50% width of original, centered on page
 * - CRITICAL: columnWidths must match cell widths for Google Docs compatibility
 */
export function createHeaderTable(
  title: string,
  subtitle?: string,
  logoBuffer?: Buffer
): Table {
  const rows: TableRow[] = [];

  // Title row
  const titleCells = [
    new TableCell({
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: title,
              font: FONTS.HEADER_TITLE,
              size: SIZES.HEADER_TITLE,
              bold: true,
              color: COLORS.WHITE,
            }),
          ],
        }),
      ],
      shading: { fill: COLORS.BLACK, type: ShadingType.CLEAR },
      verticalAlign: VerticalAlign.CENTER,
      width: { size: HEADER_TABLE.COL1_WIDTH, type: WidthType.DXA },
      margins: {
        top: HEADER_TABLE.CELL_PADDING,
        bottom: HEADER_TABLE.CELL_PADDING,
        left: HEADER_TABLE.CELL_PADDING,
        right: HEADER_TABLE.CELL_PADDING,
      },
      borders: {
        top: createBlackBorder(),
        bottom: createBlackBorder(),
        left: createBlackBorder(),
        right: createBlackBorder(),
      },
    }),
    new TableCell({
      children: logoBuffer
        ? [
            new Paragraph({
              children: [
                new ImageRun({
                  data: logoBuffer,
                  transformation: { width: 52, height: 53 }, // Full size logo
                  type: "png",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ]
        : [],
      shading: { fill: COLORS.BLACK, type: ShadingType.CLEAR },
      verticalAlign: VerticalAlign.CENTER,
      width: { size: HEADER_TABLE.COL2_WIDTH, type: WidthType.DXA },
      rowSpan: subtitle ? 2 : 1,
      borders: {
        top: createBlackBorder(),
        bottom: createBlackBorder(),
        left: createBlackBorder(),
        right: createBlackBorder(),
      },
    }),
  ];

  rows.push(
    new TableRow({
      children: titleCells,
      height: { value: HEADER_TABLE.TITLE_ROW_HEIGHT, rule: "atLeast" },
    })
  );

  // Subtitle row (optional)
  if (subtitle) {
    rows.push(
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: subtitle,
                    font: FONTS.BODY,
                    size: SIZES.SUBTITLE,
                    color: COLORS.WHITE,
                  }),
                ],
              }),
            ],
            shading: { fill: COLORS.BLACK, type: ShadingType.CLEAR },
            verticalAlign: VerticalAlign.CENTER,
            width: { size: HEADER_TABLE.COL1_WIDTH, type: WidthType.DXA },
            margins: {
              top: HEADER_TABLE.CELL_PADDING,
              bottom: HEADER_TABLE.CELL_PADDING,
              left: HEADER_TABLE.CELL_PADDING,
              right: HEADER_TABLE.CELL_PADDING,
            },
            borders: {
              top: createBlackBorder(),
              bottom: createBlackBorder(),
              left: createBlackBorder(),
              right: createBlackBorder(),
            },
          }),
        ],
        height: { value: HEADER_TABLE.SUBTITLE_ROW_HEIGHT, rule: "atLeast" },
      })
    );
  }

  // CRITICAL FIX: columnWidths must be specified for Google Docs compatibility
  return new Table({
    rows,
    width: { size: HEADER_TABLE.TOTAL_WIDTH, type: WidthType.DXA },
    columnWidths: [HEADER_TABLE.COL1_WIDTH, HEADER_TABLE.COL2_WIDTH], // FIX: Explicit grid columns
    layout: TableLayoutType.FIXED,
    alignment: AlignmentType.CENTER, // Center the table on page
  });
}

/**
 * Creates a content table with gold borders and black section header
 * - CRITICAL: columnWidths must match cell widths for Google Docs compatibility
 */
export function createContentTable(
  sectionLabel: string,
  content: Paragraph[]
): Table {
  return new Table({
    rows: [
      // Section label row (gold text on black)
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: sectionLabel,
                    font: FONTS.BODY,
                    size: SIZES.SECTION_LABEL,
                    color: COLORS.TAOGLAS_GOLD,
                  }),
                ],
              }),
            ],
            shading: { fill: COLORS.BLACK, type: ShadingType.CLEAR },
            borders: {
              top: createGoldBorder(),
              bottom: createGoldBorder(),
              left: createGoldBorder(),
              right: createGoldBorder(),
            },
          }),
        ],
      }),
      // Content row
      new TableRow({
        children: [
          new TableCell({
            children: content,
            borders: {
              top: createGoldBorder(),
              bottom: createGoldBorder(),
              left: createGoldBorder(),
              right: createGoldBorder(),
            },
          }),
        ],
      }),
    ],
    width: { size: CONTENT_TABLE.WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_TABLE.WIDTH], // FIX: Explicit grid column
    layout: TableLayoutType.FIXED,
  });
}

/**
 * Creates an H2 heading in Taoglas style
 */
export function createH2(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: FONTS.BODY,
        size: SIZES.H2_SECTION,
        bold: true,
        color: COLORS.BLACK,
      }),
    ],
    spacing: { before: 360, after: 120 },
  });
}

/**
 * Creates an H3 heading in Taoglas style
 */
export function createH3(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: FONTS.BODY,
        size: SIZES.H3_SUBSECTION,
        bold: true,
        color: COLORS.BLACK,
      }),
    ],
    spacing: { before: 280, after: 80 },
  });
}

/**
 * Creates body text in Taoglas style
 */
export function createBodyText(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: FONTS.BODY,
        size: SIZES.BODY,
        color: COLORS.BLACK,
      }),
    ],
    spacing: { line: 276 },
  });
}

/**
 * Creates a bullet point in Taoglas style
 */
export function createBullet(text: string, level: number = 0): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: FONTS.BODY,
        size: SIZES.BODY,
        color: COLORS.BLACK,
      }),
    ],
    bullet: { level },
    spacing: { line: 276 },
  });
}

/**
 * Creates bold body text
 */
export function createBoldText(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: FONTS.BODY,
        size: SIZES.BODY,
        bold: true,
        color: COLORS.BLACK,
      }),
    ],
    spacing: { line: 276 },
  });
}

// ============================================================================
// MAIN DOCUMENT CREATOR
// ============================================================================

export interface TaoglasDocSection {
  headerTitle: string;
  headerSubtitle?: string;
  sectionLabel: string;
  content: Paragraph[];
}

export async function createTaoglasDocument(
  sections: TaoglasDocSection[],
  outputPath: string
): Promise<void> {
  // Load logo
  let logoBuffer: Buffer | undefined;
  const logoPath = getLogoPath();
  if (fs.existsSync(logoPath)) {
    logoBuffer = fs.readFileSync(logoPath);
  }

  const docChildren: (Table | Paragraph)[] = [];

  for (const section of sections) {
    // Header table (centered, 50% width)
    docChildren.push(
      createHeaderTable(section.headerTitle, section.headerSubtitle, logoBuffer)
    );
    docChildren.push(new Paragraph({ text: "" })); // Spacer

    // Content table
    docChildren.push(createContentTable(section.sectionLabel, section.content));
    docChildren.push(new Paragraph({ text: "" })); // Spacer
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              width: PAGE.WIDTH,
              height: PAGE.HEIGHT,
              orientation: PageOrientation.PORTRAIT,
            },
            margin: {
              top: PAGE.MARGIN,
              bottom: PAGE.MARGIN,
              left: PAGE.MARGIN,
              right: PAGE.MARGIN,
              header: PAGE.HEADER_MARGIN,
              footer: PAGE.HEADER_MARGIN,
            },
          },
        },
        children: docChildren,
      },
    ],
    styles: {
      default: {
        document: {
          run: {
            font: FONTS.BODY,
            size: SIZES.BODY,
          },
        },
      },
    },
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document created: ${outputPath}`);
}

// ============================================================================
// CLI INTERFACE
// ============================================================================

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: npx ts-node create_taoglas_doc.ts <output.docx> <title> [subtitle]");
    console.log("Example: npx ts-node create_taoglas_doc.ts report.docx 'Overview' 'Q4 Report'");
    process.exit(1);
  }

  const [outputPath, title, subtitle] = args;

  // Example document structure
  const sections: TaoglasDocSection[] = [
    {
      headerTitle: title,
      headerSubtitle: subtitle,
      sectionLabel: "High Level Summary",
      content: [
        createH2("System Landscape & Data Flow (Today)"),
        createH3("Overview"),
        createBullet("Point one goes here"),
        createBullet("Point two goes here"),
        createBullet("Point three goes here"),
        createBodyText("Additional explanatory text can go here."),
      ],
    },
  ];

  createTaoglasDocument(sections, outputPath).catch(console.error);
}
