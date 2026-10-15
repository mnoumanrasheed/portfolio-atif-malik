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
    'I work at the intersection of Artificial Intelligence, enterprise technology and product innovation - turning complex challenges into practical, scalable digital solutions.',
  heroSecondParagraph:
    'From AI-powered healthcare to enterprise intelligence, my focus is on building products and partnerships that solve real problems and create meaningful business value.',
  homepageIntro:
    'Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to develop practical technology solutions around real business and operational needs.',
  shortBio:
    'Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs. M3 Hive’s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock monitoring and insight platform. Atif is also a Founding CEO, Director and Shareholder of 360 Technologies, a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.',
  longBio: {
    approach:
      'Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.',
    m3hiveContext:
      'As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal.',
    technologies360Context:
      'Atif is also a Founding CEO, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. These achievements must be presented as company history, not as a claim that Atif personally delivered every assignment.',
    portfolioIntent:
      'The purpose of this website is to provide an accurate executive overview of technology leadership, products and verified collaboration pathways.'
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
    officialUrl: 'https://nour-doc.com/',
    overview:
      'NourDoc is an AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation. Its described workflow includes conversation capture, transcription, draft SOAP notes and support for clinical information workflows. Product direction also includes coding support and integration-oriented workflows for healthcare providers and organisations.',
    challenge:
      'Clinicians and healthcare teams must capture detailed encounter information while maintaining attention on the patient. Manual or fragmented documentation can add administrative friction, and unstructured information may be difficult to reuse across downstream workflows.',
    valueProposition: [
      'Support structured draft clinical notes.',
      'Help reduce repetitive documentation effort while keeping clinicians responsible for review and finalisation.',
      'Support workflows that may include ICD-10 and CPT coding assistance.',
      'Support potential batch-processing workflows.',
      'Support potential EHR/EMR or HIMS integration, subject to configuration and validation.',
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
      'LeadHive AI is positioned as an AI-enabled lead engagement and qualification engine for organisations that need to respond to enquiries, understand prospect intent and organise follow-up across digital and messaging channels. The product story must focus on helping teams move from a raw enquiry to a more useful qualification and hand-off process - not simply on deploying a chatbot.',
    challenge:
      'Marketing and sales teams may receive leads through websites, social channels and messaging platforms, while responses, qualification questions and follow-up can be inconsistent.',
    valueProposition: [
      'Engage prospects through structured conversational interactions.',
      'Ask qualification questions.',
      'Organise responses against business criteria.',
      'Route enquiries to the appropriate team.',
      'Support clearer hand-off to human sales or service teams.'
    ],
    intendedUsersSummary:
      'Sales-led businesses, service providers, education consultancies, immigration consultancies, real estate teams, and organisations managing digital enquiries.',
    intendedUsers: [
      'Sales-led businesses',
      'Service providers',
      'Education consultancies',
      'Immigration consultancies',
      'Real estate teams',
      'Organisations managing digital enquiries'
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
    title: 'Applied AI & Intelligent Workflows',
    description:
      'Generative AI, LLM-based experiences, retrieval-augmented generation, document processing and workflow automation.'
  },
  {
    title: 'AI Product Engineering',
    description:
      'Product discovery, product definition, UX/UI, software architecture, web/mobile development and iterative delivery.'
  },
  {
    title: 'Data Engineering & Market Intelligence',
    description:
      'Data acquisition, pipeline engineering, data quality, analytics, dashboards and decision-support platforms.'
  },
  {
    title: 'Cloud & Enterprise Integration',
    description:
      'Cloud-native systems, APIs, data platforms and deployment approaches aligned to client needs.'
  },
  {
    title: 'IoT & Connected Systems',
    description:
      'Sensor-connected products, edge technologies, data capture and monitoring interfaces.'
  },
  {
    title: 'Research-Oriented Software',
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
    title: 'Discovery and Feasibility', 
    detail: 'Clarify the problem, users, constraints and success measures.' 
  },
  { 
    phase: 'Phase 2', 
    title: 'Proof of Concept or Pilot', 
    detail: 'Validate the workflow, technical assumptions and adoption potential.' 
  },
  { 
    phase: 'Phase 3', 
    title: 'Product or Platform Engineering', 
    detail: 'Deliver an agreed scope with clear ownership and acceptance criteria.' 
  },
  { 
    phase: 'Phase 4', 
    title: 'Integration and Iteration', 
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
      'Treat adoption, trust, data governance and commercial viability as part of product design - not afterthoughts.'
  }
];

export interface CaseStudyRecord extends CaseStudy {
  hidden?: boolean;
}

export const M3_HIVE_ADDITIONAL_WORK: CaseStudyRecord[] = [
  {
    id: 'intelligent-comparison',
    title: 'Intelligent Comparison / Market Intelligence',
    category: 'Market Intelligence',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Company data can be difficult to collect, standardise and compare.',
    valueProposition:
      'M3 Hive materials describe data engineering and pipelines supporting company discovery, benchmarking and market analysis.',
    status: 'Verified M3 Hive Company Project',
    details: ['Data engineering and pipelines', 'Company discovery', 'Benchmarking', 'Market analysis']
  },
  {
    id: 'drug-target-profiler',
    title: 'Drug Target Profiler',
    category: 'Research Software',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge:
      'Research teams need ways to explore compound - target relationships across scientific datasets.',
    valueProposition:
      'A research web application described as supporting interactive network analysis and filtering to explore compound - target relationships across scientific datasets.',
    status: 'Verified M3 Hive Company Project',
    details: ['Web application', 'Interactive network analysis', 'Filtering', 'Scientific datasets']
  },
  {
    id: 'genomic-analytics',
    title: 'RNA & DNA Sequencing Analytics',
    category: 'Bioinformatics',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge:
      'Bioinformatics workflows described in M3 Hive materials include preprocessing, alignment, quantification, differential expression and variant-analysis tooling.',
    valueProposition:
      'Bioinformatics workflows described in M3 Hive materials include preprocessing, alignment, quantification, differential expression and variant-analysis tooling.',
    status: 'Verified M3 Hive Company Project',
    details: ['Preprocessing', 'Alignment', 'Quantification', 'Differential expression', 'Variant-analysis tooling']
  },
  {
    id: 'decoding-behavior',
    title: 'Decoding Behavior / Consumer Analytics',
    category: 'Consumer Analytics',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Retail data and customer feedback require data integration, NLP and dashboards to help interpret demand and sentiment.',
    valueProposition:
      'Data integration, NLP and dashboards to help interpret retail data and customer feedback. Data sources are not actual clients.',
    status: 'Verified M3 Hive Company Project (Data sources are not actual clients)',
    details: ['Data integration', 'Natural language processing (NLP)', 'Dashboards']
  },
  {
    id: 'mazdoori',
    title: 'Mazdoori / Digital Marketplace',
    category: 'Digital Marketplace',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge: 'A concept connecting customers with local skilled workers through service categories, locations and booking flows.',
    valueProposition:
      'A concept connecting customers with local skilled workers through service categories, locations and booking flows.',
    status: 'To be confirmed',
    details: ['Service categories', 'Locations', 'Booking flows'],
    hidden: true
  },
  {
    id: 'your-door',
    title: '@Your Door / Ordering and Merchant Workflows',
    category: 'Commerce Workflows',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge: 'A described restaurant ordering experience covering customer ordering, merchant management and delivery-related workflows.',
    valueProposition:
      'A described restaurant ordering experience covering customer ordering, merchant management and delivery-related workflows.',
    status: 'To be confirmed',
    details: ['Customer ordering', 'Merchant management', 'Delivery-related workflows'],
    hidden: true
  },
  {
    id: 'regenerative-art',
    title: 'Regenerative Art / Data Storytelling',
    category: 'Data Storytelling',
    group: 'explorations',
    attribution: 'M3 Hive company project',
    challenge: 'Complex datasets can be difficult to communicate intuitively through conventional charting alone.',
    valueProposition:
      'An experimental initiative combining data visualisation, digital art and interactive storytelling. Clearly identified as exploratory rather than a proven commercial deployment.',
    status: 'Exploratory Work',
    details: ['Data visualisation', 'Digital art', 'Interactive storytelling']
  }
];

export const TECHNOLOGIES_360 = {
  name: '360 Technologies',
  atifRole: 'Founding CEO, Director and Shareholder',
  legalNotice:
    'Atif I. Malik is a Founding CEO, Director and Shareholder of 360 Technologies, a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.',
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
      name: 'EDI - Entrepreneurship Development Institute',
      description:
        'Workshops, short courses, startup-development programmes and entrepreneurship learning.'
    },
    {
      name: 'Outpost',
      description:
        'Outpost is listed as a business line in the historical company profile. Do not add a service description unless confirmed.'
    }
  ] as PracticeArea[],
  historicalProjects: [
    {
      organisation: 'Pakistan Post',
      sector: 'Postal & Utility Systems',
      projects:
        'International postal system implementation and maintenance; express-mail tracking; complaint/reporting systems; pension and counter automation; postal data processing.'
    },
    {
      organisation: 'Pakistan Navy',
      sector: 'Defense & Institutional Systems',
      projects:
        'Budget Management System software and office-automation assignments.'
    },
    {
      organisation: 'NADRA / Public Records',
      sector: 'National Identity & Public Records',
      projects:
        'Digitisation and data-entry work involving BISP and Election Commission of Pakistan records, as described by the company.'
    },
    {
      organisation: 'Provincial Boards of Revenue',
      sector: 'Land Records & Administration',
      projects:
        'Land-record scanning and data entry across listed districts in Punjab, Sindh and Khyber Pakhtunkhwa.'
    },
    {
      organisation: 'Sindh Education / RSU',
      sector: 'Education Sector Management',
      projects:
        'School-student and school-budget applications, education data management and reform support.'
    },
    {
      organisation: 'IOM',
      sector: 'International Development',
      projects:
        'Nationwide communication assessment and flood-response monitoring data-entry assignment.'
    },
    {
      organisation: 'Overseas Pakistanis Foundation',
      sector: 'Public Portals & Services',
      projects:
        'Website, web portal and online internship portal.'
    },
    {
      organisation: 'UNDP / Parliamentary Development',
      sector: 'Governance & Institutional Support',
      projects:
        'Websites, maintenance and support for public-sector programmes.'
    },
    {
      organisation: 'Professional Training',
      sector: 'Institutional Capability Building',
      projects:
        'Technology training for National Assembly and Senate staff and Telenor, as recorded in historical company materials.'
    }
  ] as HistoricalProject[],
  publishedClients: [
    'Pakistan National Assembly',
    'Pakistan Navy',
    'Pakistan Post',
    'Telenor',
    'NADRA',
    'Senate of Pakistan',
    'Boards of Revenue - Punjab, Sindh and KP',
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
    name: 'Product Adoption',
    audience: 'Clinics, hospitals, sales teams or livestock operations with a defined use case.',
    likelyChallenge: 'Manual documentation, slow lead follow-up, or delayed herd health visibility causing friction.',
    whatWeCommunicate: 'NourDoc, LeadHive AI and Smart Animal address distinct operational bottlenecks with scoped pilot structures.',
    possibleFirstStep: 'Discovery call, workflow review and scoped pilot.',
    ctaText: 'Discuss Product Adoption'
  },
  {
    id: 'research-validation',
    name: 'Research and Validation',
    audience: 'Universities, domain specialists, clinicians, veterinary professionals and research teams.',
    likelyChallenge: 'Novel AI and IoT systems require rigorous domain validation, governance and comparative evaluation.',
    whatWeCommunicate: 'Collaborative research frameworks with transparent data boundaries, reproducible workflows and co-publication standards.',
    possibleFirstStep: 'Agree research questions, evaluation criteria, data governance and publication review.',
    ctaText: 'Discuss Research Collaboration'
  },
  {
    id: 'distribution-market-access',
    name: 'Distribution and Market Access',
    audience: 'Regional partners, resellers, industry associations and implementation partners.',
    likelyChallenge: 'Specialized software requires localized market relationships, customer onboarding and tier-1 support.',
    whatWeCommunicate: 'Clear channel structures, enablement toolkits and transparent partner engagement models.',
    possibleFirstStep: 'Define target market, customer profile, commercial model and support responsibilities.',
    ctaText: 'Discuss Distribution'
  },
  {
    id: 'technology-integration',
    name: 'Technology Integration',
    audience: 'EHR/EMR vendors, CRM providers, sensor/device vendors and enterprise platform teams.',
    likelyChallenge: 'Isolated tools create data silos; end users demand native interoperability with existing enterprise systems.',
    whatWeCommunicate: 'API-driven interoperability, data pipeline integration and secure system architecture planning.',
    possibleFirstStep: 'Technical discovery, integration map and proof of concept.',
    ctaText: 'Discuss Integration'
  },
  {
    id: 'investment-strategic-capital',
    name: 'Investment and Strategic Capital',
    audience: 'Investors aligned with product stage, market and growth requirements.',
    likelyChallenge: 'Identifying technology teams addressing genuine domain problems with real product depth and execution discipline.',
    whatWeCommunicate: 'Product briefing, market thesis, traction evidence and structured diligence conversation.',
    possibleFirstStep: 'Product briefing, market thesis, traction evidence and structured diligence conversation.',
    ctaText: 'Discuss Strategic Capital'
  },
  {
    id: 'custom-product-engineering',
    name: 'Custom Product Engineering',
    audience: 'Organisations with an operational problem that needs a tailored digital solution.',
    likelyChallenge: 'Off-the-shelf software fails to match intricate operating realities, complex data pipelines or security needs.',
    whatWeCommunicate: 'M3 Hive scopes tailored product engineering, intelligent automation and cloud platforms around operating context.',
    possibleFirstStep: 'Problem statement, constraints, desired outcomes and discovery engagement.',
    ctaText: 'Discuss a Project'
  }
];

export const AUDIENCES: AudienceRecord[] = [
  {
    audience: 'Investors',
    challenge:
      'A promising idea needs a clear market problem, product direction, differentiation and a credible path to adoption.',
    communicate:
      'M3 Hive is developing focused AI products with identifiable use cases, while remaining capable of delivering custom technology.',
    cta: { label: 'Explore Ventures', to: '/ventures' }
  },
  {
    audience: 'Strategic collaborators',
    challenge:
      'Domain knowledge, distribution, research, implementation or market access may be needed to move a product forward.',
    communicate:
      'Collaboration can be structured around pilots, research, channel partnerships, integrations or co-creation, with scope and responsibilities agreed clearly.',
    cta: { label: 'Explore Collaboration', to: '/collaboration' }
  },
  {
    audience: 'Enterprise and public-sector organisations',
    challenge:
      'Legacy workflows, disconnected data, manual processes or complex service delivery create cost and visibility challenges.',
    communicate:
      'M3 Hive can scope product engineering, automation, data/AI and integration work around the organisation’s operating context.',
    cta: { label: 'Discuss a Project', to: '/contact?pathway=custom-product-engineering' }
  },
  {
    audience: 'Healthcare organisations',
    challenge:
      'Clinical documentation consumes time and clinical information needs to become structured and usable.',
    communicate:
      'NourDoc is focused on AI-assisted clinical documentation and downstream-ready clinical information workflows.',
    cta: { label: 'Explore NourDoc', to: '/products/nourdoc' }
  },
  {
    audience: 'Sales and growth teams',
    challenge:
      'Leads arrive from multiple channels, but follow-up, qualification and hand-off can be inconsistent.',
    communicate:
      'LeadHive AI is positioned around lead engagement, qualification and a more organised journey from enquiry to sales conversation.',
    cta: { label: 'Explore LeadHive AI', to: '/products/leadhive-ai' }
  },
  {
    audience: 'Livestock and agriculture stakeholders',
    challenge:
      'Animal health and behaviour changes may be difficult to observe continuously across a herd.',
    communicate:
      'Smart Animal combines IoT-based monitoring and data-led alerts to support more timely herd-management decisions.',
    cta: { label: 'Discuss a Smart Animal Pilot', to: '/contact?interest=smart-animal' }
  }
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
