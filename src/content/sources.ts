export interface SourceAuditReference {
  id: string;
  section: string;
  sourceDoc: string;
  sourceLocation: string;
  evidenceType: 'Corporate Profile' | 'Product Documentation' | 'Corporate Archive' | 'Public Profile';
  approvalRequirement: string;
}

export const APPROVED_EXTERNAL_URLS = {
  executiveLinkedin: 'https://www.linkedin.com/in/aimalik/',
  m3hiveCorporate: 'https://m3hive.com/',
  m3hiveCaseStudies: 'https://m3hive.com/resources/case-studies.html',
  m3hiveLinkedin: 'https://www.linkedin.com/company/m3-hive/',
  nourdocOfficial: 'https://nour-doc.com/',
  technologies360About: 'https://www.360technologies.net/index.php/about-us',
  technologies360Clients: 'https://www.360technologies.net/index.php/360-clients',
  technologies360Projects: 'https://360technologies.net/index.php/360-clients/projects-recently-completed'
} as const;

export const SOURCE_AUDIT_REGISTER: SourceAuditReference[] = [
  {
    id: 'atif-identity',
    section: 'Executive Identity & Bio',
    sourceDoc: 'Source of Truth Master Document (14 October 2026)',
    sourceLocation: 'Sections 2, 3 & 4',
    evidenceType: 'Public Profile',
    approvalRequirement: 'Approved wording strictly matches executive identity, short bio, and full narrative.'
  },
  {
    id: 'm3hive-overview',
    section: 'M3 Hive Company Overview',
    sourceDoc: 'M3 Hive Corporate Profile & Master Document',
    sourceLocation: 'Section 5',
    evidenceType: 'Corporate Profile',
    approvalRequirement: 'Verbatim publish-ready copy verified.'
  },
  {
    id: 'nourdoc-story',
    section: 'NourDoc Healthcare AI',
    sourceDoc: 'NourDoc Product Documentation & Master Document',
    sourceLocation: 'Section 6',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'Official product URL verified as nour-doc.com. Described workflow only; no clinical efficacy claims.'
  },
  {
    id: 'leadhive-story',
    section: 'LeadHive AI Qualification Engine',
    sourceDoc: 'M3 Hive Corporate Profile & Master Document',
    sourceLocation: 'Section 7',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'No unverified external domain created; enquiry funnel routed through internal contact.'
  },
  {
    id: 'smart-animal-story',
    section: 'Smart Animal AgriTech Platform',
    sourceDoc: 'M3 Hive Corporate Profile & Master Document',
    sourceLocation: 'Section 8',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'IoT sensor architecture and alert models described proportionately without unverified veterinary metrics.'
  },
  {
    id: 'm3hive-case-studies',
    section: 'M3 Hive Selected Additional Work',
    sourceDoc: 'M3 Hive Corporate Profile & Case Studies Directory',
    sourceLocation: 'Section 9',
    evidenceType: 'Corporate Profile',
    approvalRequirement: 'Documented projects explicitly attributed as "M3 Hive company project" or "Exploratory work".'
  },
  {
    id: '360-technologies-history',
    section: '360 Technologies Corporate Portfolio',
    sourceDoc: '360 Technologies Corporate Profile (29pp) & Archive',
    sourceLocation: 'Section 10',
    evidenceType: 'Corporate Archive',
    approvalRequirement: 'Role attributed as Founding CEO, Director & Shareholder, clearly separated from M3 Hive executive leadership.'
  }
];
