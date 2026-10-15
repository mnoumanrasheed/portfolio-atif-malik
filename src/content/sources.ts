export interface SourceAuditReference {
  id: string;
  section: string;
  sourceDoc: string;
  sourceLocation: string;
  evidenceType: 'Corporate Profile' | 'Product Documentation' | 'Historical Archive' | 'Public Profile';
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
    sourceDoc: 'Atif_I_Malik_Revised_Executive_Portfolio_Website_Content.docx',
    sourceLocation: 'Appendix A, Sections 1 & 2',
    evidenceType: 'Public Profile',
    approvalRequirement: 'Approved wording strictly matches Appendix A.'
  },
  {
    id: 'm3hive-overview',
    section: 'M3 Hive Company Overview',
    sourceDoc: 'M3 Hive Corporate Profile (2025)',
    sourceLocation: 'Appendix A, Section 3',
    evidenceType: 'Corporate Profile',
    approvalRequirement: 'Publish-ready copy verified.'
  },
  {
    id: 'nourdoc-story',
    section: 'NourDoc Healthcare AI',
    sourceDoc: 'NourDoc Product Documentation & Appendix A',
    sourceLocation: 'Appendix A, Section 4',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'Official product URL verified. No clinical claims without external certification.'
  },
  {
    id: 'leadhive-story',
    section: 'LeadHive AI Qualification Engine',
    sourceDoc: 'M3 Hive Corporate Profile & Appendix A',
    sourceLocation: 'Appendix A, Section 4',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'No unverified external domain created; routes through internal contact.'
  },
  {
    id: 'smart-animal-story',
    section: 'Smart Animal AgriTech Platform',
    sourceDoc: 'M3 Hive Corporate Profile & Appendix A',
    sourceLocation: 'Appendix A, Section 4',
    evidenceType: 'Product Documentation',
    approvalRequirement: 'IoT architecture and alert models described proportionately without veterinary claims.'
  },
  {
    id: 'm3hive-case-studies',
    section: 'M3 Hive Selected Additional Work',
    sourceDoc: 'M3 Hive Corporate Profile & Case Studies Directory',
    sourceLocation: 'Appendix A, Section 5',
    evidenceType: 'Corporate Profile',
    approvalRequirement: 'All 7 items explicitly labeled "M3 Hive company project".'
  },
  {
    id: '360-technologies-history',
    section: '360 Technologies Historical Portfolio',
    sourceDoc: '360 Technologies Historical Corporate Profile (29pp) & Archive',
    sourceLocation: 'Appendix A, Section 6',
    evidenceType: 'Historical Archive',
    approvalRequirement: 'Role attributed as Co-Founder, Director & Shareholder. Explicit legal wording notice provided.'
  }
];

