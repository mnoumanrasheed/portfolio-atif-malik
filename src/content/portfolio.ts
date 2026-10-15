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
  currentRole: 'CEO, M3 Hive',
  separateAffiliation: 'Founding CEO, Director & Shareholder, 360 Technologies',
  affiliationNotice:
    'Separate corporate affiliation. The designation Founding CEO reflects published company history and is maintained subject to final legal and editorial confirmation.',
  tagline: 'Technology & AI Executive | AI Product Innovator',
  heroHeadline: 'Building Intelligent Technology. Creating Real-World Impact.',
  heroStatement:
    'I work at the intersection of Artificial Intelligence, enterprise technology and product innovation, turning complex challenges into practical, scalable digital solutions.',
  heroSecondParagraph:
    'From AI-powered healthcare to enterprise intelligence, my focus is on building products and partnerships that solve real problems and create meaningful business value.',
  homepageIntro:
    'As CEO of M3 Hive, I am focused on products that address clear real-world needs: NourDoc for AI-assisted clinical documentation, LeadHive AI for lead engagement and qualification, and Smart Animal for IoT-based livestock monitoring and predictive insights.',
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
  headline: 'FROM OPERATIONAL CHALLENGE TO PRACTICAL TECHNOLOGY',
  tagline: 'Technology should solve a real problem.',
  body:
    'The starting point is to understand the operating context, define the outcome and build the right digital solution. Whether the challenge is clinical documentation, lead conversion, livestock monitoring or a complex enterprise workflow, the starting point is the same: understand the operating reality, define the outcome, and build the right digital solution.'
};

export const CLOSING_CTA = {
  headline: 'Let’s start with the problem you need to solve.',
  body:
    'If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward. We can determine whether an existing M3 Hive product or a tailored engagement is the right fit.'
};

export const PRODUCTS: ProductData[] = [
  {
    id: 'nourdoc',
    name: 'NourDoc',
    tagline: 'HealthTech AI',
    domain: 'HealthTech AI',
    category: 'AI-enabled clinical documentation platform',
    positioningLine: 'Let AI handle the documentation. Let clinicians focus on care.',
    attribution: 'M3 Hive product',
    officialUrl: 'https://nourdoc.m3hive.com/',
    overview:
      'NourDoc is an AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation. Its described workflow includes conversation capture, transcription, draft SOAP notes and support for clinical information workflows. The product direction also includes coding support and integration-oriented workflows for healthcare providers and organisations.',
    challenge:
      'Clinicians and healthcare teams must capture detailed encounter information while maintaining attention on the patient. Manual or fragmented documentation can add administrative friction, and unstructured information may be difficult to reuse across downstream workflows.',
    valueProposition: [
      'Support the creation of structured draft clinical notes from clinical conversations and notes.',
      'Help reduce repetitive documentation effort while keeping clinicians responsible for review and finalisation.',
      'Support workflows that may include ICD-10 and CPT coding assistance, batch processing and integration with EHR/EMR or HIMS environments, subject to product configuration and validation.',
      'Explore cloud-native deployment, with on-premises configuration considered where requirements justify it.'
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
      'Channel distribution',
      'Medical coding and billing workflows',
      'Market-specific implementation partnerships'
    ],
    miniFlow: ['Clinical conversation', 'Draft notes', 'Clinician review'],
    statusNote: 'Active product direction and clinical pilot scoping.',
    publicCaveat:
      'Clinicians remain responsible for reviewing and finalising every note. Coding assistance, batch processing and EHR/EMR or HIMS integration are described as workflows that may be supported, subject to product configuration and validation.',
    publicationGuardrail:
      'Do not claim clinical efficacy, guaranteed time savings, regulatory approval, HIPAA compliance or a specific deployment scale without current supporting evidence.',
    primaryCta: { label: 'Explore a clinical pilot', to: '/contact?interest=nourdoc' },
    secondaryCta: { label: 'Discuss integration', to: '/contact?interest=nourdoc-integration' }
  },
  {
    id: 'leadhive-ai',
    name: 'LeadHive AI',
    tagline: 'Lead Engagement & Qualification',
    domain: 'Lead Engagement & Qualification',
    category: 'AI-enabled lead engagement and qualification engine',
    positioningLine: 'Turn incoming interest into better-qualified sales conversations.',
    attribution: 'M3 Hive product',
    overview:
      'LeadHive AI is positioned as an AI-enabled lead engagement and qualification engine for organisations that need to respond to enquiries, understand prospect intent and organise follow-up across digital channels. The focus is on helping teams move from a raw enquiry to a more useful qualification and hand-off process, not simply on deploying a chatbot.',
    challenge:
      'Marketing and sales teams can receive leads through websites, social channels and messaging platforms, yet responses may be delayed, qualification questions may be inconsistent and valuable enquiries may be lost between initial contact and sales follow-up.',
    valueProposition: [
      'Engage prospects with structured, conversational interactions.',
      'Ask qualification questions and organise responses against the business’s lead criteria.',
      'Help route qualified enquiries to the right team or next step.',
      'Support channel-oriented workflows and integration planning according to each organisation’s systems and policies.',
      'Create a clearer hand-off from first contact to human sales or service teams.'
    ],
    intendedUsersSummary:
      'Sales-led businesses, service providers, education and immigration consultancies, real estate teams and other organisations managing digital enquiries.',
    intendedUsers: [
      'Sales-led businesses',
      'Service providers',
      'Education and immigration consultancies',
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
    miniFlow: ['Enquiry', 'Qualification', 'Hand-off'],
    statusNote: 'Platform architecture and qualification workflow scoping.',
    publicCaveat:
      'Channel and integration planning follows each organisation’s systems and policies. Specific channels, integrations, analytics and automation capabilities are confirmed during scoping rather than listed here as live features.',
    publicationGuardrail:
      'Confirm the currently supported channels, integrations, analytics and automation capabilities before listing them as live features.',
    primaryCta: { label: 'Design a lead qualification workflow', to: '/contact?interest=leadhive-ai' },
    secondaryCta: { label: 'Explore collaboration', to: '/collaboration' }
  },
  {
    id: 'smart-animal',
    name: 'Smart Animal',
    tagline: 'AgriTech AI & IoT',
    domain: 'AgriTech AI & IoT',
    category: 'IoT-based livestock monitoring and predictive-insight platform',
    positioningLine: 'Connected livestock monitoring for more informed herd management.',
    attribution: 'M3 Hive product',
    overview:
      'Smart Animal is an IoT-based livestock monitoring and predictive-insight platform described in M3 Hive materials as combining collars and digital interfaces to help monitor animal activity and herd information. The documented solution elements include heat detection, rumination and eating-pattern indicators, individual alerts, group-level digestion alerts and mobile herd-management features.',
    challenge:
      'Livestock managers need timely visibility into animal behaviour and herd conditions. Periodic observation alone may not capture every change early enough to support an informed response, particularly across larger herds or dispersed operations.',
    valueProposition: [
      'Collect sensor-based activity and behaviour indicators through connected monitoring.',
      'Present alerts and herd information through digital interfaces.',
      'Support more timely attention to potential changes in animal behaviour and routine.',
      'Create a foundation for analytics and predictive insights as data quality, models and validation mature.'
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
    miniFlow: ['Collar sensing', 'Herd information', 'Alerts & insights'],
    statusNote: 'IoT and behavioral model scoping for field pilots.',
    publicCaveat:
      'Predictive insights develop as data quality, models and validation mature. No veterinary outcomes or quantified herd improvements are claimed.',
    publicationGuardrail:
      'Describe predictive capabilities proportionately; do not claim proven veterinary outcomes or quantified herd improvements without evidence.',
    primaryCta: { label: 'Discuss a Smart Animal pilot', to: '/contact?interest=smart-animal' },
    secondaryCta: { label: 'Explore AgriTech collaboration', to: '/contact?pathway=research-validation' }
  }
];

export const M3_HIVE_OVERVIEW =
  'M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions. Its company portfolio spans product engineering, customer experience, intelligent automation, data engineering and analytics, cloud platforms, connected systems and digital design. M3 Hive works across product-led initiatives and custom engagements, with the aim of aligning technical choices to the problem, users and operating environment.';

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
    description: 'Sensor-connected products, edge technologies, data capture and monitoring interfaces.'
  },
  {
    title: 'Research-oriented software',
    description: 'Bioinformatics workflows, scientific data processing and interactive visualisation.'
  }
];

export const M3_HIVE_ENGAGEMENT_TEXT =
  'Depending on the problem and stage of maturity, a project may begin with discovery and feasibility, proceed through a proof of concept or pilot, or move directly into a defined engineering engagement. Potential structures include fixed-scope delivery, time-and-materials, embedded specialist teams, integration projects and strategic product collaboration. Scope, ownership, data access, success measures and commercial terms should be agreed before delivery begins.';

export const M3_HIVE_ENGAGEMENT_STRUCTURES = [
  'Fixed-scope delivery',
  'Time-and-materials',
  'Embedded specialist teams',
  'Integration projects',
  'Strategic product collaboration'
];

export const M3_HIVE_ENGAGEMENT_MODELS: EngagementStep[] = [
  { 
    phase: 'Phase 01', 
    title: 'Discovery and feasibility', 
    detail: 'Clarify the problem, users, constraints and success measures.' 
  },
  { 
    phase: 'Phase 02', 
    title: 'Proof of concept or pilot', 
    detail: 'Validate the workflow, technical assumptions and adoption potential.' 
  },
  { 
    phase: 'Phase 03', 
    title: 'Product or platform engineering', 
    detail: 'Deliver an agreed scope with clear ownership and acceptance criteria.' 
  },
  { 
    phase: 'Phase 04', 
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
    title: 'Integrated multidisciplinary delivery',
    description:
      'Bring domain expertise, user needs, product design and engineering into the same conversation.'
  },
  {
    title: 'Practical engagement pathways',
    description:
      'Choose a practical path: discovery, prototype, pilot, integration or a defined engineering engagement.'
  },
  {
    title: 'Governance and commercial viability',
    description:
      'Treat adoption, trust, data governance and commercial viability as part of product design, not afterthoughts.'
  }
];

export const M3_HIVE_ADDITIONAL_WORK: CaseStudy[] = [
  {
    id: 'intelligent-comparison',
    title: 'Intelligent Comparison',
    category: 'Market intelligence',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Enterprise company and market data can be difficult to collect, standardise and compare.',
    valueProposition:
      'M3 Hive materials describe data engineering and pipelines supporting company discovery, benchmarking and market analysis.',
    status: 'Data-intensive platform case study',
    details: ['Data engineering and pipelines', 'Company discovery', 'Benchmarking', 'Market analysis']
  },
  {
    id: 'drug-target-profiler',
    title: 'Drug Target Profiler',
    category: 'Research software & visual analytics',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge:
      'Research teams need ways to explore compound–target relationships across complex scientific datasets.',
    valueProposition: 'The described web application supports interactive network analysis and filtering.',
    status: 'Research software case study',
    details: ['Web application', 'Interactive network analysis', 'Filtering']
  },
  {
    id: 'genomic-analytics',
    title: 'RNA & DNA sequencing analytics',
    category: 'Bioinformatics',
    group: 'research',
    attribution: 'M3 Hive company project',
    challenge: 'Genomic datasets require reproducible processing and analysis workflows.',
    valueProposition:
      'M3 Hive materials describe preprocessing, alignment, quantification, differential expression and variant-analysis tooling.',
    status: 'Bioinformatics capability',
    details: ['Preprocessing', 'Alignment', 'Quantification', 'Differential expression', 'Variant-analysis tooling']
  },
  {
    id: 'decoding-behavior',
    title: 'Decoding Behavior',
    category: 'Retail analytics',
    group: 'analytics',
    attribution: 'M3 Hive company project',
    challenge:
      'Fragmented retail data and customer feedback can make demand and sentiment difficult to interpret.',
    valueProposition: 'The described work combines data integration, NLP and dashboards.',
    status: 'Retail analytics case study : dataset sources are not presented as clients',
    details: ['Data integration', 'Natural language processing (NLP)', 'Dashboards']
  },
  {
    id: 'mazdoori',
    title: 'Mazdoori',
    category: 'Digital marketplace',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge: 'Local skilled service matching often lacks structured verification and transparent scheduling.',
    valueProposition:
      'The described concept connects customers with local skilled workers through service categories, locations and booking flows.',
    status: 'Described concept : current product status not confirmed',
    details: ['Service categories', 'Locations', 'Booking flows']
  },
  {
    id: 'your-door',
    title: '@Your Door',
    category: 'Commerce workflows',
    group: 'platforms',
    attribution: 'M3 Hive company project',
    challenge: 'Local commerce requires coordinated communication between customers, merchants and fulfillment.',
    valueProposition:
      'The described ordering experience includes customer ordering, merchant management and delivery-related workflows.',
    status: 'Described workflows : current operating and integration status not confirmed',
    details: ['Customer ordering', 'Merchant management', 'Delivery-related workflows']
  },
  {
    id: 'regenerative-art',
    title: 'Regenerative Art',
    category: 'Data storytelling',
    group: 'explorations',
    attribution: 'M3 Hive company project',
    challenge: 'Complex datasets can be difficult to communicate intuitively through conventional charting alone.',
    valueProposition:
      'An experimental initiative combining data visualisation, digital art and interactive storytelling.',
    status: 'Experimental exploration : not a commercial rollout',
    details: ['Data visualisation', 'Digital art', 'Interactive storytelling']
  }
];

export const TECHNOLOGIES_360 = {
  name: '360 Technologies',
  atifRole: 'Founding CEO, Director & Shareholder',
  legalNotice:
    'Atif I. Malik is a Founding CEO, Director and Shareholder of 360 Technologies. This website presents 360 Technologies as a separate company and its project references as historical company portfolio material. Any final public wording about the affiliation should be checked for accuracy and legal appropriateness.',
  attributionNote:
    'The projects and client references shown here come from 360 Technologies’ published historical company portfolio and are attributed to the company. They are presented as company history, not as a claim that Atif personally delivered every listed assignment, and not as an indication of current customer status.',
  overview:
    '360 Technologies is an IT services organisation whose published historical portfolio spans software development, enterprise data and business intelligence, digitisation, outsourcing, security consulting and professional capability development. Its project listings include public-sector information systems, postal and operational workflows, land-record digitisation, education data solutions and enterprise technology services. The portfolio reflects a history of technology work across government, enterprise and institutional environments.',
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
      description: 'Back-office services, contact-centre operations, digitisation and managed outsourcing.'
    },
    {
      name: 'Inductin',
      description: 'Recruitment and headhunting, HR-related services, training and resource development.'
    },
    {
      name: 'EDI : Entrepreneurship Development Institute',
      description:
        'Workshops, short courses, startup-development programmes, exhibits and entrepreneurship learning.'
    },
    {
      name: 'Outpost',
      description:
        'Listed as a business line in the historical company profile. No further description is published here.'
    }
  ] as PracticeArea[],
  historicalProjects: [
    {
      organisation: 'Pakistan Post',
      sector: 'Postal & Public Utility Infrastructure',
      projects:
        'International Postal System implementation and maintenance; express-mail tracking; complaint/reporting systems; pension and counter automation; postal data processing.'
    },
    {
      organisation: 'Pakistan Navy',
      sector: 'Defense & Institutional Systems',
      projects: 'Budget Management System software and office-automation assignments.'
    },
    {
      organisation: 'NADRA / public records',
      sector: 'National Identity & Public Records',
      projects:
        'Digitisation and data-entry work involving BISP records and Election Commission of Pakistan records, as described by the company.'
    },
    {
      organisation: 'Provincial Boards of Revenue',
      sector: 'Land Records & Administration',
      projects:
        'Land-record scanning and data entry across listed districts in Punjab, Sindh and Khyber Pakhtunkhwa.'
    },
    {
      organisation: 'Sindh education / RSU',
      sector: 'Education Sector Management',
      projects: 'School-student and school-budget applications, education data management and reform support.'
    },
    {
      organisation: 'IOM',
      sector: 'International Development',
      projects: 'Nationwide communication assessment and flood-response monitoring data-entry assignment.'
    },
    {
      organisation: 'Overseas Pakistanis Foundation',
      sector: 'Public Portals & Services',
      projects: 'Website, web portal and online internship portal.'
    },
    {
      organisation: 'UNDP / parliamentary development',
      sector: 'Governance & Institutional Support',
      projects: 'Websites, maintenance and support for SDPD-related public-sector programmes.'
    },
    {
      organisation: 'Professional training',
      sector: 'Institutional Capability Building',
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
    'RSU',
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
    likelyChallenge: 'Manual documentation, slow lead follow-up, or delayed herd health visibility causing friction.',
    whatWeCommunicate: 'NourDoc, LeadHive AI and Smart Animal address distinct operational bottlenecks with scoped pilot structures.',
    possibleFirstStep: 'Discovery call, workflow review and scoped pilot.',
    ctaText: 'Discuss product adoption'
  },
  {
    id: 'research-validation',
    name: 'Research and validation',
    audience: 'Universities, domain specialists, clinicians, veterinary professionals and research teams.',
    likelyChallenge: 'Novel AI and IoT systems require rigorous domain validation, governance and comparative evaluation.',
    whatWeCommunicate: 'Collaborative research frameworks with transparent data boundaries, reproducible workflows and co-publication standards.',
    possibleFirstStep: 'Agree research questions, evaluation criteria, data governance and publication review.',
    ctaText: 'Discuss research collaboration'
  },
  {
    id: 'distribution-market-access',
    name: 'Distribution and market access',
    audience: 'Regional partners, resellers, industry associations and implementation partners.',
    likelyChallenge: 'Specialized software requires localized market relationships, customer onboarding and tier-1 support.',
    whatWeCommunicate: 'Clear channel structures, enablement toolkits and transparent partner engagement models.',
    possibleFirstStep: 'Define target market, customer profile, commercial model and support responsibilities.',
    ctaText: 'Discuss distribution'
  },
  {
    id: 'technology-integration',
    name: 'Technology integration',
    audience: 'EHR/EMR vendors, CRM providers, sensor/device vendors and enterprise platform teams.',
    likelyChallenge: 'Isolated tools create data silos; end users demand native interoperability with existing enterprise systems.',
    whatWeCommunicate: 'API-driven interoperability, data pipeline integration and secure system architecture planning.',
    possibleFirstStep: 'Technical discovery, integration map and proof of concept.',
    ctaText: 'Discuss integration'
  },
  {
    id: 'investment-strategic-capital',
    name: 'Investment and strategic capital',
    audience: 'Investors aligned with product stage, market and growth requirements.',
    likelyChallenge: 'Identifying technology teams addressing genuine domain problems with real product depth and execution discipline.',
    whatWeCommunicate: 'M3 Hive builds focused AI products with identifiable commercial use cases while retaining custom engineering capacity.',
    possibleFirstStep: 'Product briefing, market thesis, traction evidence and a structured diligence conversation.',
    ctaText: 'Request a product briefing'
  },
  {
    id: 'custom-product-engineering',
    name: 'Custom product engineering',
    audience: 'Organisations with an operational problem that needs a tailored digital solution.',
    likelyChallenge: 'Off-the-shelf software fails to match intricate operating realities, complex data pipelines or security needs.',
    whatWeCommunicate: 'M3 Hive scopes tailored product engineering, intelligent automation and cloud platforms around operating context.',
    possibleFirstStep: 'Problem statement, constraints, desired outcomes and a discovery engagement.',
    ctaText: 'Discuss a project'
  }
];

export const AUDIENCES: AudienceRecord[] = [
  {
    audience: 'Investors',
    challenge:
      'A promising idea needs a clear market problem, product direction, differentiation and a credible path to adoption.',
    communicate:
      'M3 Hive is developing focused AI products with identifiable use cases, while remaining capable of delivering custom technology.',
    cta: { label: 'Explore product opportunities', to: '/m3-hive' }
  },
  {
    audience: 'Strategic collaborators',
    challenge:
      'Domain knowledge, distribution, research, implementation or market access may be needed to move a product forward.',
    communicate:
      'Collaboration can be structured around pilots, research, channel partnerships, integrations or co-creation, with scope and responsibilities agreed clearly.',
    cta: { label: 'Explore collaboration', to: '/collaboration' }
  },
  {
    audience: 'Enterprise and public-sector clients',
    challenge:
      'Legacy workflows, disconnected data, manual processes or complex service delivery create cost and visibility challenges.',
    communicate:
      'M3 Hive can scope product engineering, automation, data/AI and integration work around the organisation’s operating context.',
    cta: { label: 'Discuss a business challenge', to: '/contact?pathway=custom-product-engineering' }
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
    cta: { label: 'Discuss a Smart Animal pilot', to: '/contact?interest=smart-animal' }
  }
];

export const INQUIRY_INTENTS: { id: string; label: string }[] = [
  { id: 'nourdoc', label: 'NourDoc : clinical pilot or evaluation' },
  { id: 'nourdoc-integration', label: 'NourDoc : EHR/EMR or HIMS integration' },
  { id: 'leadhive-ai', label: 'LeadHive AI : lead qualification workflow' },
  { id: 'smart-animal', label: 'Smart Animal : farm pilot or AgriTech collaboration' },
  ...COLLABORATION_PATHWAYS.map((p) => ({ id: p.id, label: p.name }))
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
    note: 'Official product page.'
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
