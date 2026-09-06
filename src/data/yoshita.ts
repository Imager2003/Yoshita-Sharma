/**
 * Single source of truth for all site content.
 *
 * Everything here is taken from Yoshita Sharma's CVs. Nothing is invented.
 * Client names that appeared on the CV (e.g. specific counterparties) are
 * deliberately omitted from the public site for confidentiality.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Expertise {
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  id: string;
  organisation: string;
  role: string;
  location: string;
  period: string;
  year: string;
  practice: string;
  summary: string;
  metrics: Metric[];
  details: { heading: string; points: string[] }[];
}

export interface WorkItem {
  id: string;
  index: string;
  title: string;
  organisation: string;
  description: string;
  focus: string[];
  /** Anchor to the experience entry this work sits under. */
  href: string;
}

export interface Credential {
  title: string;
  institution: string;
  year: string;
  detail?: string;
}

export interface Achievement {
  result: string;
  event: string;
  host?: string;
  year: string;
}

/* ------------------------------------------------------------------ */
/* Personal                                                            */
/* ------------------------------------------------------------------ */

export const person = {
  name: "Yoshita Sharma",
  firstName: "Yoshita",
  title: "Corporate & Commercial Legal Professional",
  qualification: "BBA LL.B. (Hons.) · NMIMS School of Law, Indore",
  practiceLine: "Corporate & Commercial · M&A · IBC · Banking & Finance",
  email: "yoshita1500@gmail.com",
  phone: "+91 7987051147",
  phoneRaw: "+917987051147",
  whatsapp: "917987051147",
  // Source: linkedin.com/in/yoshita-sharma1500/ as printed on Yoshita's CV.
  linkedin: "https://www.linkedin.com/in/yoshita-sharma1500/",
  location: "Indore, India",
  languages: "English · Hindi",
  // TODO: Add Yoshita's professional portrait at public/yoshita.jpg, then set
  // portraitAvailable to true. Until then an editorial placeholder is shown.
  portrait: "/yoshita.jpg",
  portraitAvailable: false,
  // TODO: Confirm the job-search wording Yoshita wants to display publicly.
  availability: "Graduating 2026 · Open to corporate & commercial legal roles",
  resume: "/resume.pdf",
  // TODO: Replace with the deployed domain before launch.
  siteUrl: "https://yoshitasharma.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Publication", href: "#publication" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: Metric[] = [
  { value: "50+", label: "Legal assignments" },
  { value: "4", label: "Corporate internships" },
  { value: "2026", label: "BBA LL.B. (Hons.)" },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  statement:
    "Legal professional with hands-on exposure to corporate advisory, insolvency, banking & finance, due diligence and commercial contracting.",
  paragraphs: [
    "Yoshita Sharma is a final-year BBA LL.B. (Hons.) candidate at NMIMS School of Law, Indore, graduating in 2026, and is CSEET qualified with the Institute of Company Secretaries of India.",
    "Across four corporate internships — at India Law LLP, Solomon & Co., the chambers of Adv. Shriya Mehta at the Bombay High Court, and the in-house legal team at SAS Institute India — she has assisted on 50+ legal research, drafting, due diligence and compliance assignments involving the Companies Act, 2013, the Insolvency & Bankruptcy Code, the SARFAESI Act, FEMA, and RBI and SEBI regulations.",
    "Her work has supported partners, senior associates and in-house counsel on transaction execution, lender advisory and insolvency mandates, with recurring exposure to commercial contract review, legal due diligence, corporate research, agreement drafting and regulatory advisory.",
  ],
  interests: ["Corporate & Commercial", "M&A", "IBC", "General Corporate"],
};

/* ------------------------------------------------------------------ */
/* Expertise                                                           */
/* ------------------------------------------------------------------ */

export const expertise: Expertise[] = [
  {
    title: "Corporate & Commercial",
    description:
      "Corporate advisory, commercial matters and transaction support alongside partners and in-house counsel.",
    tags: ["Advisory", "Corporate structuring", "Transaction support"],
  },
  {
    title: "M&A & Transactions",
    description:
      "Transaction documentation, due diligence and corporate structuring exposure across advisory mandates.",
    tags: ["Due diligence", "Documentation", "Deal readiness"],
  },
  {
    title: "Insolvency & Bankruptcy",
    description:
      "IBC research and drafting covering creditor rights, personal guarantor insolvency and CIRP-related work.",
    tags: ["IBC", "CIRP", "Creditor rights"],
  },
  {
    title: "Banking & Finance",
    description:
      "SARFAESI enforcement, RBI regulations, financing documentation and lender-side advisory research.",
    tags: ["SARFAESI", "RBI Master Directions", "Security documents"],
  },
  {
    title: "Commercial Contracts",
    description:
      "Agreement review, drafting support and contractual risk assessment against standard frameworks.",
    tags: ["Review", "Drafting", "Risk assessment"],
  },
  {
    title: "Regulatory Compliance",
    description:
      "Companies Act, FEMA, RBI and SEBI regulatory research, compliance checks and statutory filings review.",
    tags: ["Companies Act", "SEBI", "FEMA"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    id: "india-law",
    organisation: "India Law LLP",
    role: "Corporate & Commercial Law Intern",
    location: "Hyderabad",
    period: "January 2026 · 4 weeks",
    year: "2026",
    practice: "Corporate insolvency · Banking · Commercial advisory",
    summary:
      "Assisted Partners and Associates on corporate insolvency, banking and commercial advisory matters — supporting drafting, legal research and transaction documentation under the IBC, SARFAESI Act, Recovery of Debts and Bankruptcy Act, RBI Master Directions and the Companies Act.",
    metrics: [
      { value: "20+", label: "Matters supported" },
      { value: "15+", label: "Documents drafted & reviewed" },
    ],
    details: [
      {
        heading: "Drafting & filings",
        points: [
          "Drafted applications under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 for filing before the Debt Recovery Tribunal.",
          "Assisted in drafting applications under Section 95 of the Insolvency and Bankruptcy Code, 2016 against personal guarantors.",
          "Drafted demand notices issued under Rule 7 of the IBC (Application to Adjudicating Authority for Insolvency Resolution Process for Personal Guarantors to Corporate Debtors) Rules, 2019.",
          "Drafted and assisted in filing rejoinders on behalf of a liquidator in respect of PUFE transactions.",
        ],
      },
      {
        heading: "Documentation review",
        points: [
          "Reviewed Security Trustee Agreements, Inter-Se Agreements and financing documentation, identifying contractual obligations, security enforcement mechanisms and lender protections.",
        ],
      },
      {
        heading: "Research & advisory support",
        points: [
          "Researched the steps for classification of an account as fraud under the RBI Master Directions on Fraud Risk Management, 2024.",
          "Researched the borrower's right of redemption under Section 13(8) of the SARFAESI Act, 2002, and whether it subsists only until publication of the auction notice.",
          "Prepared a compendium of case law interpreting the Supreme Court's order in In Re: Cognizance for Extension of Limitation on extended limitation timelines.",
          "Compiled case law digests and regulatory compendiums on insolvency and banking jurisprudence as reusable internal knowledge resources.",
        ],
      },
    ],
  },
  {
    id: "solomon",
    organisation: "Solomon & Co.",
    role: "General Corporate Intern",
    location: "Mumbai",
    period: "June 2025 · 4 weeks",
    year: "2025",
    practice: "Corporate restructuring · Insolvency · Securities",
    summary:
      "Supported corporate restructuring, insolvency and securities law mandates involving rights issues, Resolution Plans, Committee of Creditors proceedings and SEBI compliance.",
    metrics: [{ value: "10+", label: "Advisory & diligence assignments" }],
    details: [
      {
        heading: "Due diligence",
        points: [
          "Conducted issuer-side legal due diligence for a proposed Rights Issue, reviewing ROC filings, SEBI compliances, statutory registers, related-party transactions and corporate records.",
          "Identified compliance gaps supporting an assessment of the company's fundraising preparedness.",
        ],
      },
      {
        heading: "Drafting",
        points: [
          "Drafted a Memo of Objections to a Resolution Plan and assisted in preparing insolvency documentation during CIRP proceedings.",
        ],
      },
      {
        heading: "Research",
        points: [
          "Researched the rights of other secured creditors in the context of Committee of Creditors meetings.",
          "Researched the mandatory nature of a demand notice under Section 95(4) of the Insolvency and Bankruptcy Code.",
          "Researched the legal position and judicial interpretation of arbitration and mediation in testamentary disputes.",
          "Assisted in analysing judicial precedents, statutory developments and insolvency frameworks for client advisory.",
        ],
      },
    ],
  },
  {
    id: "shriya-mehta",
    organisation: "Adv. Shriya Mehta",
    role: "Real Estate Intern",
    location: "Bombay High Court",
    period: "December 2024 · 4 weeks",
    year: "2024",
    practice: "Real estate · Corporate · Intellectual property",
    summary:
      "Assisted on corporate, real estate and intellectual property advisory matters — reviewing commercial agreements, title documents and regulatory compliances to support transaction execution and legal risk mitigation.",
    metrics: [{ value: "15+", label: "Matters supported" }],
    details: [
      {
        heading: "Agreement review",
        points: [
          "Reviewed and analysed Sale Deeds, Lease Agreements, Leave & License Agreements and ancillary commercial documentation, identifying drafting inconsistencies, contractual risks and compliance gaps before execution.",
        ],
      },
      {
        heading: "Title due diligence",
        points: [
          "Conducted title due diligence by examining ownership records, encumbrances, municipal approvals, revenue records and chain-of-title documents to support accurate legal opinions.",
        ],
      },
      {
        heading: "Intellectual property & compliance",
        points: [
          "Assisted in trademark prosecution through availability searches, goods & services classification and filing readiness assessments.",
          "Researched the framework for related-party transactions under Section 188 of the Companies Act, 2013 and Regulation 23 of the SEBI (LODR) Regulations, 2015.",
        ],
      },
    ],
  },
  {
    id: "sas",
    organisation: "SAS Institute India Pvt. Ltd.",
    role: "In-House Corporate Intern",
    location: "Mumbai",
    period: "June 2024 · 4 weeks",
    year: "2024",
    practice: "Commercial contracting · Compliance · Technology law",
    summary:
      "Supported the in-house legal team on commercial contracting, compliance and corporate advisory assignments, partnering with Legal, Finance, Procurement and Business teams across domestic and cross-border operations.",
    metrics: [{ value: "20+", label: "Assignments supported" }],
    details: [
      {
        heading: "Contract review",
        points: [
          "Reviewed and compared Commercial Agreements, Tripartite Agreements, Teaming Agreements and banking contracts, identifying deviations from standard templates and improving consistency in negotiations.",
        ],
      },
      {
        heading: "Compliance",
        points: [
          "Supported compliance with the Ministry of Information and Broadcasting directive on Self-Declaration Certificates for advertisements.",
        ],
      },
      {
        heading: "Research & advisory",
        points: [
          "Researched the enforceability of non-compete clauses and restrictive covenants against standard contractual frameworks.",
          "Researched AI regulation, data privacy and emerging technology laws across India, the EU, the United States and the UAE, and presented the findings to business teams.",
        ],
      },
      {
        heading: "Cross-border exposure",
        points: [
          "Collaborated with legal professionals across Thailand, Singapore and the United States, gaining exposure to multinational legal operations and cross-border contracting.",
        ],
      },
    ],
  },
];

export const additionalExperience = [
  { organisation: "Ajay Mishra & Associates, Indore", practice: "Criminal law", period: "Jul – Aug 2023" },
  { organisation: "Lex Maven, Indore", practice: "Civil & criminal law", period: "May – Jun 2023" },
  { organisation: "Nyayasarthak · eStartIndia", practice: "Virtual internships", period: "—" },
];

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */

export const selectedWork: WorkItem[] = [
  {
    id: "insolvency-research",
    index: "01",
    title: "Corporate Insolvency Research",
    organisation: "India Law LLP",
    description:
      "Contributed research notes and case law digests supporting insolvency and lender-side mandates, including applications against personal guarantors and the treatment of extended limitation timelines.",
    focus: ["IBC", "Personal guarantor insolvency", "Supreme Court precedents", "Regulatory research"],
    href: "#india-law",
  },
  {
    id: "rights-issue",
    index: "02",
    title: "Rights Issue Due Diligence",
    organisation: "Solomon & Co.",
    description:
      "Assisted with issuer-side legal due diligence for a proposed Rights Issue, reviewing the corporate record to identify compliance gaps ahead of the fundraising.",
    focus: ["ROC filings", "SEBI compliance", "Statutory registers", "Related-party transactions"],
    href: "#solomon",
  },
  {
    id: "contract-review",
    index: "03",
    title: "Commercial Contract Review",
    organisation: "SAS Institute India",
    description:
      "Supported the in-house team in reviewing and comparing commercial contracts against standard templates, flagging deviations and contractual risk for negotiation.",
    focus: ["Commercial agreements", "Tripartite agreements", "Teaming agreements", "Contractual risk"],
    href: "#sas",
  },
  {
    id: "real-estate-dd",
    index: "04",
    title: "Real Estate Due Diligence",
    organisation: "Adv. Shriya Mehta, Bombay HC",
    description:
      "Worked on title verification across real estate matters, examining the documentary chain behind ownership and the approvals affecting the property.",
    focus: ["Title verification", "Ownership records", "Encumbrances", "Chain of title"],
    href: "#shriya-mehta",
  },
  {
    id: "regulatory-research",
    index: "05",
    title: "Regulatory Research",
    organisation: "India Law LLP · SAS Institute India",
    description:
      "Researched regulatory frameworks spanning financial services and emerging technology, translating multi-jurisdictional positions into structured notes for advisory teams.",
    focus: ["RBI", "SEBI", "FEMA", "AI regulation", "Data privacy"],
    href: "#india-law",
  },
];

/* ------------------------------------------------------------------ */
/* Publication                                                         */
/* ------------------------------------------------------------------ */

export const publication = {
  title:
    "Smart Contracts, Commercial Certainty, and Indian Contract Law: Enforceability and Remedies in Code-Based Automated Transactions",
  journal: "International Journal of Law, Management & Humanities (IJLMH)",
  volume: "Volume 9 · Issue 4",
  issn: "ISSN 2581-5369",
  abstract:
    "Examines how self-executing, code-based agreements sit within the Indian Contract Act framework — and what enforceability and remedies look like when performance is automated.",
  // TODO: Add the published article URL. Until then the site shows a
  // non-linked "Publication link — to be added" state rather than a fabricated URL.
  url: null as string | null,
};

/* ------------------------------------------------------------------ */
/* Education & credentials                                             */
/* ------------------------------------------------------------------ */

export const education: Credential[] = [
  {
    title: "BBA LL.B. (Hons.)",
    institution: "NMIMS School of Law, Indore",
    year: "2021 – 2026",
    detail: "CGPA 3.36 / 4.00",
  },
  {
    title: "CSEET Qualified",
    institution: "Institute of Company Secretaries of India (ICSI)",
    year: "2025",
    detail: "Score 164 / 200",
  },
  {
    title: "Class XII",
    institution: "Shri Ram Centennial School, Indore",
    year: "2021",
    detail: "92.60%",
  },
  {
    title: "Class X",
    institution: "Shri Ram Centennial School, Indore",
    year: "2019",
    detail: "88.60%",
  },
];

export const certifications: Credential[] = [
  {
    title: "Mergers & Acquisitions",
    institution: "Mayer Brown (Forage)",
    year: "2025",
    detail: "Due diligence questionnaire, agreement markup, closing checklist",
  },
  {
    title: "Mastering Due Diligence & Full-Service Law Firm Domains",
    institution: "Lawctopus",
    year: "—",
  },
  {
    title: "Mergers & Acquisitions",
    institution: "Lawctopus",
    year: "—",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements & leadership                                           */
/* ------------------------------------------------------------------ */

export const achievements: Achievement[] = [
  {
    result: "Quarterfinalist",
    event: "1st Nyaya Shastra Judgment Writing Competition",
    year: "2025",
  },
  {
    result: "Semi-Finalist",
    event: "2nd National Client Counselling Competition",
    host: "MUIT, Noida",
    year: "2024",
  },
  {
    result: "First Runner-Up",
    event: "National Legal Techathon on AI & Technology in Justice",
    host: "CHRIST University, Bangalore",
    year: "2023",
  },
  {
    result: "Participant",
    event: "Intra Trial Advocacy Competition",
    host: "NMIMS School of Law, Indore",
    year: "2022",
  },
  {
    result: "Participant",
    event: "3rd Intra Moot Court Competition",
    host: "NMIMS School of Law, Indore",
    year: "2022",
  },
];

export const leadership = [
  {
    role: "Student Placement Coordinator",
    organisation: "Placement Cell, NMIMS School of Law, Indore",
    period: "2022 – present",
  },
  {
    role: "Head — AALOCHAK",
    organisation: "The Review Committee, NMIMS Indore",
    period: "2022 – 2024",
  },
  {
    role: "Member — SAMATVA",
    organisation: "The Legal Aid Society, NMIMS Indore",
    period: "2023 – 2024",
  },
  {
    role: "Member — SAMVAAD",
    organisation: "The Debating Society, NMIMS Indore",
    period: "2022 – 2024",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  {
    label: "Regulatory portals",
    items: ["MCA Portal", "SEBI", "RBI"],
  },
  {
    label: "Legal research",
    items: ["SCC Online", "Manupatra", "Westlaw Asia"],
  },
  {
    label: "Productivity",
    items: ["MS Office Suite", "PowerPoint", "Excel"],
  },
];

/* ------------------------------------------------------------------ */
/* Recruiter snapshot                                                  */
/* ------------------------------------------------------------------ */

export const snapshot = {
  practices: ["Corporate & Commercial", "M&A", "IBC", "Banking & Finance"],
  facts: [
    "50+ legal assignments",
    "4 corporate internships",
    "1 publication",
    "CSEET Qualified",
  ],
};
