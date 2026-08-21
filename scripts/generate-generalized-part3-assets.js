const fs = require("fs");
const {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = require("docx");

const outputPath = process.argv[3];

function paragraph(text, options = {}) {
  return new Paragraph({
    spacing: { after: 140 },
    ...options,
    children: [new TextRun({ text, size: 22 })],
  });
}

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({
    heading: level,
    spacing: { before: 220, after: 120 },
    children: [new TextRun({ text, bold: true })],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 90 },
    children: [new TextRun({ text, size: 22 })],
  });
}

function tableRow(label, value, header = false) {
  const border = { style: BorderStyle.SINGLE, size: 1, color: "B8C2CC" };
  const cell = (text, width) =>
    new TableCell({
      width: { size: width, type: WidthType.DXA },
      borders: { top: border, bottom: border, left: border, right: border },
      margins: { top: 100, bottom: 100, left: 120, right: 120 },
      shading: header ? { fill: "DCE8E4", type: "clear" } : undefined,
      children: [
        new Paragraph({
          children: [new TextRun({ text, bold: header, size: 20 })],
        }),
      ],
    });
  return new TableRow({ children: [cell(label, 2700), cell(value, 6660)] });
}

async function generateProposal() {
  if (!outputPath) throw new Error("Output path is required for proposal mode");

  const doc = new Document({
    creator: "Workshop Content Team",
    title: "Customer Service Modernization Proposal",
    subject: "Synthetic project proposal for workshop use",
    description: "Fictional and organization-neutral workshop sample",
    keywords: "customer service, operations, modernization, workshop",
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: "Arial", size: 32, bold: true, color: "183A37" },
          paragraph: { spacing: { before: 260, after: 140 }, outlineLevel: 0 },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: "Arial", size: 26, bold: true, color: "285C55" },
          paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 },
            margin: { top: 1100, right: 1100, bottom: 1100, left: 1100 },
          },
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: "Customer Service Modernization Proposal",
                bold: true,
                size: 40,
                color: "183A37",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 280 },
            children: [
              new TextRun({
                text: "Executive proposal for a controlled eight-center pilot",
                italics: true,
                size: 24,
                color: "526A66",
              }),
            ],
          }),
          new Table({
            width: { size: 9360, type: WidthType.DXA },
            columnWidths: [2700, 6660],
            rows: [
              tableRow("Proposal owner", "Customer Experience Division", true),
              tableRow("Decision requested", "Approve a 12-week pilot across eight service centers"),
              tableRow("Estimated budget", "THB 8.4 million"),
              tableRow("Proposed start", "1 October 2026"),
              tableRow("Document status", "Workshop sample - fictional data"),
            ],
          }),
          heading("Executive Summary"),
          paragraph(
            "This proposal requests approval for a 12-week pilot across eight customer service centers. The pilot combines digital queue management, guided request checks, and a staff dashboard while keeping final customer and case decisions with authorized employees."
          ),
          paragraph(
            "Synthetic baseline observations show an average service wait of 18 minutes, a first-contact resolution rate of 62%, and a repeat-contact rate of 14%. These values are fictional workshop data and do not represent the performance of any real organization."
          ),
          heading("Business Need"),
          bullet("Customers receive inconsistent guidance about the information required for service requests."),
          bullet("Employees switch between multiple screens to check queue status, request completeness, and case ownership."),
          bullet("Managers receive delayed operational data and cannot isolate the causes of repeat contacts."),
          heading("Pilot Scope"),
          paragraph("The pilot covers eight service centers with different traffic profiles."),
          bullet("Digital queue check-in and estimated waiting-time display."),
          bullet("Guided request checklist for common service cases."),
          bullet("Staff dashboard showing queue volume, case age, and ownership."),
          bullet("Weekly review of service metrics, employee feedback, and customer comments."),
          paragraph(
            "Out of scope: automated case approvals, changes to core service-system logic, replacement of the customer relationship platform, and organization-wide rollout."
          ),
          heading("Expected Benefits and Measures"),
          bullet("Reduce average service wait from 18 minutes to 14 minutes or less."),
          bullet("Increase first-contact resolution from 62% to at least 70%."),
          bullet("Reduce repeat contacts from 14% to 10% or less."),
          bullet("Achieve at least 80% weekly active use among participating employees."),
          heading("Delivery Plan"),
          bullet("Weeks 1-3: discovery, center selection, data review, and security review."),
          bullet("Weeks 4-6: configuration, integration testing, and checklist review."),
          bullet("Weeks 7-9: employee testing, training, and readiness checks."),
          bullet("Weeks 10-12: live pilot, daily issue review, and final evaluation."),
          heading("Cost and Assumptions"),
          paragraph(
            "The THB 8.4 million estimate includes software configuration, integration support, training, pilot communications, and contingency. It assumes existing service-center devices can be reused and that internal teams can support data mapping and security review."
          ),
          paragraph(
            "The estimate excludes organization-wide licenses, major network upgrades, and long-term support after the pilot. Detailed vendor quotations are not attached."
          ),
          heading("Key Risks and Controls"),
          bullet("Customer data could appear in the wrong dashboard view; role-based access and privacy review are required."),
          bullet("Network stability is described as adequate, but no center-by-center baseline evidence is attached."),
          bullet("Employee adoption may vary by center; local champions and weekly feedback are proposed as controls."),
          bullet("Integration effort may exceed the estimate; a technical discovery checkpoint is required before configuration."),
          heading("Dependencies and Missing Information"),
          bullet("Named accountable owner for the pilot has not been confirmed."),
          bullet("Privacy and security review dates are not yet scheduled."),
          bullet("Service-center network evidence is not attached."),
          bullet("Detailed vendor quotations and post-pilot support costs are missing."),
          bullet("The method for measuring first-contact resolution needs final agreement."),
          heading("Decision Requested"),
          paragraph(
            "Approve the 12-week pilot and the THB 8.4 million budget, subject to confirmation of the accountable owner, privacy review schedule, network evidence, and detailed vendor quotations before configuration begins."
          ),
        ],
      },
    ],
  });

  fs.writeFileSync(outputPath, await Packer.toBuffer(doc));
}

function wrapText(text, width = 105) {
  return text
    .split("\n")
    .flatMap((line) => {
      if (!line || line.length <= width) return [line];
      const wrapped = [];
      let current = "";
      for (const word of line.split(/\s+/)) {
        if (!current) {
          current = word;
        } else if (`${current} ${word}`.length <= width) {
          current = `${current} ${word}`;
        } else {
          wrapped.push(current);
          current = word;
        }
      }
      if (current) wrapped.push(current);
      return wrapped;
    })
    .join("\n");
}

function writeCatalog() {
  process.stdout.write(wrapText(`ORGANIZATION SERVICE CATALOG - QUICK GUIDE
Fictional workshop reference | Version 1.0 | August 2026

ABOUT THIS GUIDE
This guide describes five services offered by an unnamed fictional organization. It is designed for information-retrieval exercises. It does not contain prices, guaranteed resolution times, or individual approval outcomes.

1. CUSTOMER SUPPORT REQUEST
Purpose: Report a service problem, ask a general question, or request help with an existing case.
Intended users: Customers and authorized representatives.
Request channel: Customer Portal or the central support desk.
Acknowledgement window: Within one business day.
Information to provide: Contact details, case reference when available, issue summary, and preferred contact channel.
Exclusions: Emergency incidents and requests requiring a specialist assessment.

2. EQUIPMENT REQUEST
Purpose: Request standard workplace equipment or report equipment that needs replacement.
Intended users: Employees and approved contractors.
Request channel: Employee Service Portal.
Acknowledgement window: Within two business days.
Information to provide: Item type, business need, work location, manager name, and required date.
Exclusions: Personal purchases, nonstandard items without manager review, and building infrastructure.

3. LEARNING AND TRAINING REQUEST
Purpose: Register for approved learning, request a team workshop, or propose a development topic.
Intended users: Employees and people managers.
Request channel: Learning Portal.
Acknowledgement window: Within three business days.
Information to provide: Learning objective, audience, preferred date, delivery format, and accessibility needs.
Exclusions: External certifications and travel expenses unless separately approved.

4. FACILITIES SUPPORT REQUEST
Purpose: Report a workplace issue involving meeting rooms, furniture, lighting, temperature, or shared spaces.
Intended users: Employees, contractors, and workplace coordinators.
Request channel: Facilities form in the Employee Service Portal.
Acknowledgement window: Within one business day.
Information to provide: Location, issue category, impact, photo when useful, and safe access details.
Exclusions: Immediate safety emergencies, which must use the emergency contact process.

5. VISITOR SERVICES REQUEST
Purpose: Arrange visitor access, reception support, or a group visit to an organization site.
Intended users: Employee hosts and approved event coordinators.
Request channel: Visitor Services form.
Acknowledgement window: Within two business days.
Information to provide: Host, visitor names, visit date and time, site, accessibility needs, and equipment requirements.
Exclusions: Unaccompanied access, requests without a host, and access to restricted areas.

IMPORTANT LIMITS
- Acknowledgement windows indicate when a request should be reviewed; they are not guaranteed resolution times.
- Eligibility, approval, price, and service-level commitments may depend on current policy and are not defined in this guide.
- When information is missing, state that the guide does not provide it and recommend checking the latest service documentation.
`));
}

if (process.argv[2] === "proposal") {
  generateProposal().catch((error) => {
    console.error(error);
    process.exit(1);
  });
} else if (process.argv[2] === "catalog") {
  writeCatalog();
} else {
  console.error("Usage: node generate-generalized-part3-assets.js <proposal|catalog> [output]");
  process.exit(1);
}
