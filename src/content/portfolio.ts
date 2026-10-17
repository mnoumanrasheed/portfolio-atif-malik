import type {
  ExecutiveProfile,
  ProductData,
  CaseStudy,
  PracticeArea,
  HistoricalProject,
  CollaborationPathway,
  AudienceRecord,
  LeadershipPrinciple,
  EngagementStep,
  ExternalSource
} from '../types/portfolio';

export const EXECUTIVE_PROFILE: ExecutiveProfile = {
  name: 'Atif I. Malik',
  professionalPositioning: 'Technology & AI Executive | AI Product Innovator',
  currentRole: 'Chief Executive Officer, M3 Hive',
  separateAffiliation: 'Founding CEO, Director & Shareholder, 360 Technologies',
  affiliationNotice:
    'The 360 Technologies affiliation is a separate company association, not part of M3 Hive, subject to final confirmation.',
  tagline: 'Technology & AI Executive | AI Product Innovator',
  heroHeadline: 'Building Intelligent Technology. Creating Real-World Impact.',
  heroStatement:
    'I work at the intersection of Artificial Intelligence, enterprise technology and product innovation, turning complex challenges into practical, scalable digital solutions.',
  heroSecondParagraph:
    'From AI-powered healthcare to enterprise intelligence, my focus is on building products and partnerships that solve real problems and create meaningful business value.',
  homepageIntro:
    'Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs. M3 Hive’s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock monitoring and insight platform. Atif is also a Founding CEO, Director and Shareholder of 360 Technologies, a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.',
  shortBio:
    'Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs. M3 Hive’s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock monitoring and insight platform. Atif is also a Founding CEO, Director and Shareholder of 360 Technologies, a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.',
  longBio: {
    approach:
      'Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.',
    m3hiveContext:
      'As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal.',
    technologies360Context:
      'Atif is also a Founding CEO, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. These achievements are presented as company history, not as a claim that Atif personally delivered every listed assignment.',
    portfolioIntent:
      'The purpose of this website is to help investors understand product opportunities, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.'
  },
  verifiedLinks: {
    linkedin: 'https://www.linkedin.com/in/aimalik/',
    m3hive: 'https://m3hive.com/',
    nourdoc: 'https://nourdoc.m3hive.com/',
    technologies360: 'https://www.360technologies.net/index.php/360-clients'
  }
};

export const PERSPECTIVE = {
  headline: 'From Operational Challenge to Practical Technology',
  tagline: 'Technology should solve a real problem.',
  body:
    'Technology should solve a real problem. The starting point is to understand the operating context, define the outcome and build the right digital solution.'
};

export const CLOSING_CTA = {
  headline: 'Let’s Start With the Problem You Need to Solve.',
  body:
    'If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward. We can determine whether an existing M3 Hive product or a tailored engagement is the right fit.'
};

export const PRODUCTS: ProductData[] = [
  {
    id: 'nourdoc',
    name: 'NourDoc',
    tagline: 'HealthTech AI',
    domain: 'HealthTech AI',
    category: 'HealthTech AI',
    positioningLine: 'Let AI handle the documentation. Let clinicians focus on care.',
    attribution: 'M3 Hive product',
    officialUrl: 'https://nourdoc.m3hive.com/',
    overview:
      'NourDoc is an AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation. Its described workflow includes conversation capture, transcription, draft SOAP notes and support for clinical information workflows. Product direction also includes coding support and integration-oriented workflows for healthcare providers and organisations.',
    challenge:
      'Clinicians and healthcare teams must capture detailed encounter information while maintaining attention on the patient. Manual or fragmented documentation can add administrative friction, and unstructured information may be difficult to reuse across downstream workflows.',
    valueProposition: [
      'Support structured draft clinical notes.',
      'Help reduce repetitive documentation effort while keeping clinicians responsible for review and finalisation.',
      'Support workflows that may include ICD-10 and CPT coding assistance, batch processing and EHR/EMR or HIMS integration, subject to configuration and validation.',
      'Consider cloud-native or on-premises deployment according to requirements.'
    ],
    intendedUsersSummary:
      'Clinicians, clinics, hospitals, telemedicine providers, medical coding and billing organisations, and healthcare technology partners.',
    intendedUsers: [
      'Clinicians',
      'Clinics',
      'Hospitals',
      'Telemedicine providers',
      'Medical coding and billing organisations',
      'Healthcare technology partners'
    ],
    collaborationOpportunities: [
      'Clinical pilots',
      'Hospital adoption',
      'Research and evaluation',
      'EHR/EMR integration',
      'Distribution',
      'Coding and billing workflows',
      'Market-specific implementation'
    ],
    miniFlow: ['Conversation capture', 'Transcription & draft notes', 'Clinician review & finalisation'],
    statusNote: 'Platform workflow and integration scoping.',
    publicCaveat:
      'Integrations, clinical accuracy, regulatory compliance, and deployment options are described workflows subject to configuration and validation, not verified live functionality.',
    publicationGuardrail:
      'Do not present potential integrations, capabilities, clinical accuracy, regulatory compliance, or deployment options as verified live functionality unless supported by current evidence.',
    primaryCta: { label: 'Book a Demo', to: '/contact?interest=nourdoc-demo' },
    secondaryCta: { label: 'Explore a Clinical Pilot', to: '/contact?interest=nourdoc-pilot' }
  },
  {
    id: 'leadhive-ai',
    name: 'LeadHive AI',
    tagline: 'Lead Engagement & Qualification',
    domain: 'Lead Engagement & Qualification',
    category: 'Lead Engagement & Qualification',
    positioningLine: 'Turn incoming interest into better-qualified sales conversations.',
    attribution: 'M3 Hive product',
    overview:
      'LeadHive AI is positioned as an AI-enabled lead engagement and qualification engine for organisations that need to respond to enquiries, understand prospect intent and organise follow-up across digital and messaging channels. The story should focus on helping teams move from a raw enquiry to a more useful qualification and hand-off process, not simply on deploying a chatbot.',
    challenge:
      'Marketing and sales teams may receive leads through websites, social channels and messaging platforms, while responses, qualification questions and follow-up can be inconsistent.',
    valueProposition: [
      'Engage prospects through structured conversational interactions.',
      'Ask qualification questions.',
      'Organise responses against business criteria.',
      'Route enquiries to the right team.',
      'Support a clearer hand-off to human sales or service teams.'
    ],
    intendedUsersSummary:
      'Sales-led businesses, service providers, education and immigration consultancies, real estate teams and other organisations managing digital enquiries.',
    intendedUsers: [
      'Sales-led businesses',
      'Service providers',
      'Education and immigration consultancies',
      'Real estate teams',
      'Other organisations managing digital enquiries'
    ],
    collaborationOpportunities: [
      'Channel partnerships',
      'CRM integration',
      'Industry-specific qualification playbooks',
      'Pilot deployments',
      'Lead-generation agency partnerships'
    ],
    miniFlow: ['Enquiry reception', 'Conversational qualification', 'Team hand-off'],
    statusNote: 'Platform architecture and qualification workflow scoping.',
    publicCaveat:
      'Qualification workflows and integrations are structured around organizational business rules and messaging channels.',
    publicationGuardrail:
      'Do not invent CRM integrations, AI performance statistics, automation coverage, client success rates, or adoption numbers.',
    primaryCta: { label: 'Explore LeadHive AI', to: '/products/leadhive-ai' },
    secondaryCta: { label: 'Design a Lead Qualification Workflow', to: '/contact?interest=leadhive-ai' }
  },
  {
    id: 'smart-animal',
    name: 'Smart Animal',
    tagline: 'AgriTech & IoT',
    domain: 'AgriTech & IoT',
    category: 'AgriTech & IoT',
    positioningLine: 'Connected livestock monitoring for more informed herd management.',
    attribution: 'M3 Hive product',
    overview:
      'Smart Animal is an IoT-based livestock monitoring and insight platform described in M3 Hive materials as combining collars and digital interfaces to help monitor animal activity and herd information. Documented solution elements include heat detection, rumination and eating-pattern indicators, individual alerts, group-level digestion alerts and mobile herd-management features.',
    challenge:
      'Livestock managers need timely visibility into animal behaviour and herd conditions. Periodic observation may not capture every change early enough to support an informed response.',
    valueProposition: [
      'Collect sensor-based activity and behaviour indicators.',
      'Present alerts and herd information through digital interfaces.',
      'Support timely attention to potential changes.',
      'Create a foundation for analytics as data quality, models and validation mature.'
    ],
    intendedUsersSummary:
      'Livestock farms, dairy operations, animal-health professionals, agricultural researchers, integrators and distribution partners.',
    intendedUsers: [
      'Livestock farms',
      'Dairy operations',
      'Animal-health professionals',
      'Agricultural researchers',
      'Integrators',
      'Distribution partners'
    ],
    collaborationOpportunities: [
      'Farm pilots',
      'Veterinary and research collaboration',
      'Sensor/device integration',
      'Field validation',
      'Agriculture-sector distribution'
    ],
    miniFlow: ['Connected sensing', 'Digital monitoring', 'Timely herd alerts'],
    statusNote: 'IoT monitoring interfaces and telemetry integration.',
    publicCaveat:
      'Capabilities focus on documented activity monitoring and behavioural indicators. No predictive accuracy, medical efficacy, or farm deployment metrics are claimed.',
    publicationGuardrail:
      'Do not invent predictive accuracy, medical efficacy, farm deployment numbers, or proven commercial performance.',
    primaryCta: { label: 'Discuss a Smart Animal Pilot', to: '/contact?interest=smart-animal' },
    secondaryCta: { label: 'Explore AgriTech Collaboration', to: '/contact?pathway=research-validation' }
  }
];

export const M3_HIVE_OVERVIEW =
  'M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions. Its company portfolio spans product engineering, customer experience, intelligent automation, data engineering and analytics, cloud platforms, connected systems and digital design. M3 Hive works across product-led initiatives and custom engagements, aligning technical choices to the problem, users and operating environment.';

export const M3_HIVE_CAPABILITIES = [
  {
    title: 'Applied AI & intelligent workflows',
    description:
      'Generative AI, LLM-based experiences, retrieval-augmented generation, document processing and workflow automation.'
  },
  {
    title: 'AI product engineering',
    description:
      'Product discovery, product definition, UX/UI, software architecture, web/mobile development and iterative delivery.'
  },
  {
    title: 'Data engineering & market intelligence',
    description:
      'Data acquisition, pipeline engineering, data quality, analytics, dashboards and decision-support platforms.'
  },
  {
    title: 'Cloud & enterprise integration',
    description:
      'Cloud-native systems, APIs, data platforms and deployment approaches aligned to client needs.'
  },
  {
    title: 'IoT & connected systems',
    description:
      'Sensor-connected products, edge technologies, data capture and monitoring interfaces.'
  },
  {
    title: 'Research-oriented software',
    description:
      'Bioinformatics workflows, scientific data processing and interactive visualisation.'
  }
];

export const M3_HIVE_ENGAGEMENT_TEXT =
  'Scope, ownership, data access, success measures and commercial terms should be agreed before work begins.';

export const M3_HIVE_ENGAGEMENT_STRUCTURES = [
  'Fixed-scope delivery',
  'Time-and-materials',
  'Embedded specialist teams',
  'Integration projects',
  'Strategic product collaboration'
];

export const M3_HIVE_ENGAGEMENT_MODELS: EngagementStep[] = [
  { 
    phase: 'Phase 1', 
    title: 'Discovery and feasibility', 
    detail: 'Clarify the problem, users, constraints and success measures.' 
  },
  { 
    phase: 'Phase 2', 
    title: 'Proof of concept or pilot', 
    detail: 'Validate the workflow, technical assumptions and adoption potential.' 
  },
  { 
    phase: 'Phase 3', 
    title: 'Product or platform engineering', 
    detail: 'Deliver an agreed scope with clear ownership and acceptance criteria.' 
  },
  { 
    phase: 'Phase 4', 
    title: 'Integration and iteration', 
    detail: 'Connect to existing systems, evaluate results and improve based on evidence.' 
  }
];

export const ENGAGEMENT_STEPS: EngagementStep[] = M3_HIVE_ENGAGEMENT_MODELS;

export const LEADERSHIP_PRINCIPLES: LeadershipPrinciple[] = [
  {
    title: 'Operational reality and defined outcomes',
    description:
      'Start with the operational reality and define the outcome before selecting the technology.'
  },
  {
    title: 'Multidisciplinary alignment',
    description:
      'Bring domain expertise, user needs, product design and engineering into the same conversation.'
  },
  {
    title: 'Practical delivery path',
    description:
      'Choose a practical path: discovery, prototype, pilot, integration or a defined engineering engagement.'
  },
  {
    title: 'Adoption and trust by design',
    description:
      'Treat adoption, trust, data governance and commercial viability as part of product design, not afterthoughts.'
  }
];

export interface CaseStudyRecord extends CaseStudy {
  hidden?: boolean;
}

export const M3_HIVE_ADDITIONAL_WORK: CaseStudyRecord[] = [
  {
    id: 'intelligent-comparison',
    title: 'Intelligent Comparison / market intelligence',
    category: 'Market intelligence',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Company data can be difficult to collect, standardise and compare.',
    valueProposition:
      'M3 Hive materials describe data engineering and pipelines supporting company discovery, benchmarking and market analysis.',
    status: 'M3 Hive company project',
    details: ['Data engineering and pipelines', 'Company discovery', 'Benchmarking', 'Market analysis']
  },
  {
    id: 'drug-target-profiler',
    title: 'Drug Target Profiler',
    category: 'Research web app',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge:
      'A research web application described as supporting interactive network analysis and filtering to explore compound–target relationships across scientific datasets.',
    valueProposition:
      'A research web application described as supporting interactive network analysis and filtering to explore compound–target relationships across scientific datasets.',
    status: 'M3 Hive company project',
    details: ['Interactive network analysis', 'Filtering', 'Compound–target relationships', 'Scientific datasets']
  },
  {
    id: 'genomic-analytics',
    title: 'RNA & DNA sequencing analytics',
    category: 'Bioinformatics',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge:
      'Bioinformatics workflows described in M3 Hive materials include preprocessing, alignment, quantification, differential expression and variant-analysis tooling.',
    valueProposition:
      'Bioinformatics workflows described in M3 Hive materials include preprocessing, alignment, quantification, differential expression and variant-analysis tooling.',
    status: 'M3 Hive company project',
    details: ['Preprocessing', 'Alignment', 'Quantification', 'Differential expression', 'Variant-analysis tooling']
  },
  {
    id: 'decoding-behavior',
    title: 'Decoding Behavior / consumer analytics',
    category: 'Consumer analytics',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Data integration, NLP and dashboards to help interpret retail data and customer feedback. Distinguish dataset sources from clients.',
    valueProposition:
      'Data integration, NLP and dashboards to help interpret retail data and customer feedback. Distinguish dataset sources from clients.',
    status: 'M3 Hive company project',
    details: ['Data integration', 'NLP', 'Dashboards']
  },
  {
    id: 'mazdoori',
    title: 'Mazdoori / digital marketplace',
    category: 'Digital marketplace',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge:
      'A concept connecting customers with local skilled workers through service categories, locations and booking flows. Include only after confirming current product status.',
    valueProposition:
      'A concept connecting customers with local skilled workers through service categories, locations and booking flows.',
    status: 'Status to confirm',
    details: ['Service categories', 'Locations', 'Booking flows'],
    hidden: true
  },
  {
    id: 'your-door',
    title: '@Your Door / ordering and merchant workflows',
    category: 'Ordering and merchant workflows',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge:
      'Described restaurant ordering experience covering customer ordering, merchant management and delivery-related workflows. Confirm current operating and integration status before publication.',
    valueProposition:
      'Described restaurant ordering experience covering customer ordering, merchant management and delivery-related workflows.',
    status: 'Status to confirm',
    details: ['Customer ordering', 'Merchant management', 'Delivery-related workflows'],
    hidden: true
  },
  {
    id: 'regenerative-art',
    title: 'Regenerative Art / data storytelling',
    category: 'Data storytelling',
    group: 'explorations',
    attribution: 'M3 Hive company project',
    challenge:
      'An experimental initiative combining data visualisation, digital art and interactive storytelling.',
    valueProposition:
      'An experimental initiative combining data visualisation, digital art and interactive storytelling.',
    status: 'Exploratory work',
    details: ['Data visualisation', 'Digital art', 'Interactive storytelling']
  }
];

export const TECHNOLOGIES_360 = {
  name: '360 Technologies',
  atifRole: 'Founding CEO, Director and Shareholder',
  legalNotice:
    'Atif I. Malik is a Founding CEO, Director and Shareholder of 360 Technologies. This website presents 360 Technologies as a separate company and its project references as historical company portfolio material. Any final public wording about the affiliation should be checked for accuracy and legal appropriateness.',
  attributionNote:
    'Every historical project is identified as a 360 Technologies company reference. These achievements are presented as company history, not as a claim that Atif personally delivered every assignment.',
  overview:
    '360 Technologies is an IT services organisation whose published historical portfolio spans software development, enterprise data and business intelligence, digitisation, outsourcing, security consulting and professional capability development. Its project listings include public-sector information systems, postal and operational workflows, land-record digitisation, education data solutions and enterprise technology services.',
  directoryUrl: 'https://www.360technologies.net/index.php/360-clients',
  aboutUrl: 'https://www.360technologies.net/index.php/about-us',
  projectsUrl: 'https://360technologies.net/index.php/360-clients/projects-recently-completed',
  practiceAreas: [
    {
      name: '360 Solutions',
      description:
        'Web, software and mobile applications; design; maintenance and support; historical information-security consulting.'
    },
    {
      name: '360 Logics',
      description:
        'Data warehousing, business intelligence, master-data management, data mining, big data and location/real-time analytics.'
    },
    {
      name: '360 BPO',
      description:
        'Back-office services, contact-centre operations, digitisation and managed outsourcing.'
    },
    {
      name: 'Inductin',
      description:
        'Recruitment and headhunting, HR-related services, training and resource development.'
    },
    {
      name: 'EDI Entrepreneurship Development Institute',
      description:
        'Workshops, short courses, startup-development programmes and entrepreneurship learning.'
    },
    {
      name: 'Outpost',
      description:
        'Listed as a business line in the historical profile; confirm a public description before elaborating.'
    }
  ] as PracticeArea[],
  historicalProjects: [
    {
      organisation: 'Pakistan Post',
      projects:
        'International postal system implementation and maintenance; express-mail tracking; complaint/reporting systems; pension and counter automation; postal data processing.'
    },
    {
      organisation: 'Pakistan Navy',
      projects:
        'Budget Management System software and office-automation assignments.'
    },
    {
      organisation: 'NADRA / public records',
      projects:
        'Digitisation and data-entry work involving BISP and Election Commission of Pakistan records, as described by the company.'
    },
    {
      organisation: 'Provincial Boards of Revenue',
      projects:
        'Land-record scanning and data entry across listed districts in Punjab, Sindh and Khyber Pakhtunkhwa.'
    },
    {
      organisation: 'Sindh education / RSU',
      projects:
        'School-student and school-budget applications, education data management and reform support.'
    },
    {
      organisation: 'IOM',
      projects:
        'Nationwide communication assessment and flood-response monitoring data-entry assignment.'
    },
    {
      organisation: 'Overseas Pakistanis Foundation',
      projects:
        'Website, web portal and online internship portal.'
    },
    {
      organisation: 'UNDP / parliamentary development',
      projects:
        'Websites, maintenance and support for public-sector programmes.'
    },
    {
      organisation: 'Professional training',
      projects:
        'Technology training for National Assembly and Senate staff and Telenor, as recorded on the historical company website.'
    }
  ] as HistoricalProject[],
  publishedClients: [
    'Pakistan National Assembly',
    'Pakistan Navy',
    'Pakistan Post',
    'Telenor',
    'NADRA',
    'Senate of Pakistan',
    'Boards of Revenue (Punjab, Sindh and KP)',
    'NCHD',
    'IBM',
    'UNDP Pakistan',
    'IOM',
    'Gemalto UAE',
    'Royal Airport Services',
    'Global Airport Concierge',
    'CalAirCargo USA',
    'Enercon'
  ]
};

export const COLLABORATION_PATHWAYS: CollaborationPathway[] = [
  {
    id: 'product-adoption',
    name: 'Product adoption',
    audience: 'Clinics, hospitals, sales teams or livestock operations with a defined use case.',
    possibleFirstStep: 'Discovery call, workflow review and scoped pilot.',
    ctaText: 'Discuss a Project'
  },
  {
    id: 'research-validation',
    name: 'Research and validation',
    audience: 'Universities, domain specialists, clinicians, veterinary professionals and research teams.',
    possibleFirstStep: 'Agree research questions, evaluation criteria, data governance and publication review.',
    ctaText: 'Discuss a Project'
  },
  {
    id: 'distribution-market-access',
    name: 'Distribution and market access',
    audience: 'Regional partners, resellers, industry associations and implementation partners.',
    possibleFirstStep: 'Define target market, customer profile, commercial model and support responsibilities.',
    ctaText: 'Discuss a Project'
  },
  {
    id: 'technology-integration',
    name: 'Technology integration',
    audience: 'EHR/EMR vendors, CRM providers, sensor/device vendors and enterprise platform teams.',
    possibleFirstStep: 'Technical discovery, integration map and proof of concept.',
    ctaText: 'Discuss a Project'
  },
  {
    id: 'investment-strategic-capital',
    name: 'Investment and strategic capital',
    audience: 'Investors aligned with product stage, market and growth requirements.',
    possibleFirstStep: 'Product briefing, market thesis, traction evidence and structured diligence conversation.',
    ctaText: 'Discuss a Project'
  },
  {
    id: 'custom-product-engineering',
    name: 'Custom product engineering',
    audience: 'Organisations with an operational problem that needs a tailored digital solution.',
    possibleFirstStep: 'Problem statement, constraints, desired outcomes and discovery engagement.',
    ctaText: 'Discuss a Project'
  }
];

export const AUDIENCES = [
  'Investors and strategic capital partners assessing product opportunities and the path to adoption.',
  'Enterprise and public-sector leaders exploring AI adoption, workflow improvement, data platforms or custom engineering.',
  'Healthcare organisations and technology partners evaluating NourDoc.',
  'Research, domain, distribution and implementation collaborators.',
  'Founders and product owners who need discovery, product definition, architecture or engineering support.'
];

export const INQUIRY_INTENTS: { id: string; label: string }[] = [
  { id: 'nourdoc-demo', label: 'NourDoc : Book a Demo' },
  { id: 'nourdoc-pilot', label: 'NourDoc : Explore a Clinical Pilot' },
  { id: 'nourdoc-integration', label: 'NourDoc : Discuss Integration' },
  { id: 'leadhive-ai', label: 'LeadHive AI : Design a Lead Qualification Workflow' },
  { id: 'smart-animal', label: 'Smart Animal : Discuss a Pilot or AgriTech Collaboration' },
  ...COLLABORATION_PATHWAYS.map((p) => ({ id: p.id, label: `${p.name} Pathway` }))
];

export const EXTERNAL_SOURCES: ExternalSource[] = [
  {
    title: 'Atif I. Malik on LinkedIn',
    category: 'Executive Identity',
    group: 'Atif I. Malik & M3 Hive',
    url: 'https://www.linkedin.com/in/aimalik/',
    note: 'Public professional profile.'
  },
  {
    title: 'M3 Hive website',
    category: 'Corporate Overview',
    group: 'Atif I. Malik & M3 Hive',
    url: 'https://m3hive.com/',
    note: 'Company website.'
  },
  {
    title: 'M3 Hive on LinkedIn',
    category: 'Corporate Overview',
    group: 'Atif I. Malik & M3 Hive',
    url: 'https://www.linkedin.com/company/m3-hive/',
    note: 'Company page.'
  },
  {
    title: 'M3 Hive case studies',
    category: 'Case Studies',
    group: 'Atif I. Malik & M3 Hive',
    url: 'https://m3hive.com/resources/case-studies.html',
    note: 'Company case-study directory.'
  },
  {
    title: 'NourDoc',
    category: 'Healthcare AI Platform',
    group: 'Products',
    url: 'https://nourdoc.m3hive.com/',
    note: 'Product page.'
  },
  {
    title: '360 Technologies: About',
    category: 'Historical Archive',
    group: '360 Technologies (historical)',
    url: 'https://www.360technologies.net/index.php/about-us',
    note: 'Company overview.'
  },
  {
    title: '360 Technologies: Client directory',
    category: 'Historical Archive',
    group: '360 Technologies (historical)',
    url: 'https://www.360technologies.net/index.php/360-clients',
    note: 'Published historical client directory.'
  },
  {
    title: '360 Technologies: Project list',
    category: 'Historical Archive',
    group: '360 Technologies (historical)',
    url: 'https://360technologies.net/index.php/360-clients/projects-recently-completed',
    note: 'Published historical project register.'
  }
];
