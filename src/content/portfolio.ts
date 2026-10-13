import {
  ExecutiveProfile,
  ProductData,
  CaseStudy,
  PracticeArea,
  HistoricalProject,
  CollaborationPathway,
  ExternalSource
} from '../types/portfolio';

export const EXECUTIVE_PROFILE: ExecutiveProfile = {
  name: 'Atif I. Malik',
  titles: [
    'Chief Executive Officer, M3 Hive',
    'Co-Founder, Director & Shareholder, 360 Technologies'
  ],
  currentRole: 'Chief Executive Officer, M3 Hive',
  separateAffiliation: 'Co-Founder, Director & Shareholder, 360 Technologies (Separate historical portfolio)',
  tagline: 'Technology Leadership | Applied AI | Product & Business Transformation',
  shortBio: `Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs. M3 Hive’s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock health monitoring and predictive insight platform. Atif is also a Co-Founder, Director and Shareholder of 360 Technologies, a separate technology-services company whose published portfolio includes enterprise systems, public-sector digitisation, data services and professional capability development.`,
  longBio: {
    approach: `Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.`,
    m3hiveContext: `At M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal. M3 Hive also has experience described in its corporate materials across market intelligence, bioinformatics, retail analytics and digital platforms.`,
    technologies360Context: `Atif is a Co-Founder, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes work in public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. Those achievements and client references belong to 360 Technologies as an organisation and are presented here as company history, not as a claim that Atif personally delivered every listed assignment.`,
    portfolioIntent: `The portfolio is intended to help investors understand the product opportunity, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.`
  },
  verifiedLinks: {
    linkedin: 'https://www.linkedin.com/in/aimalik/',
    m3hive: 'https://m3hive.com/',
    nourdoc: 'https://nourdoc.m3hive.com/',
    technologies360: 'https://www.360technologies.net/index.php/360-clients'
  }
};

export const PRODUCTS: ProductData[] = [
  {
    id: 'nourdoc',
    name: 'NourDoc',
    tagline: 'HealthTech AI',
    category: 'Healthcare AI & Clinical Documentation',
    positioningLine: 'Let AI handle the documentation. Let clinicians focus on care.',
    attribution: 'M3 Hive product',
    officialUrl: 'https://nourdoc.m3hive.com/',
    overview: `NourDoc is an AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation. Its described workflow includes conversation capture, transcription, draft SOAP notes and support for clinical information workflows. The product direction also includes coding support and integration-oriented workflows for healthcare providers and organisations.`,
    challenge: `Clinicians and healthcare teams must capture detailed encounter information while maintaining attention on the patient. Manual or fragmented documentation can add administrative friction, and unstructured information may be difficult to reuse across downstream workflows.`,
    valueProposition: [
      'Support the creation of structured draft clinical notes from clinical conversations and notes.',
      'Help reduce repetitive documentation effort while keeping clinicians responsible for review and finalisation.',
      'Support workflows that may include ICD-10 and CPT coding assistance, batch processing and integration with EHR/EMR or HIMS environments, subject to product configuration and validation.',
      'Explore cloud-native deployment, with on-premises configuration considered where requirements justify it.'
    ],
    intendedUsers: [
      'Clinicians and private practices',
      'Outpatient clinics and hospitals',
      'Telemedicine providers',
      'Medical coding and billing organisations',
      'Healthcare technology integration partners'
    ],
    collaborationOpportunities: [
      'Clinical pilots and trial workflows',
      'Hospital adoption and evaluation',
      'Research and clinical documentation studies',
      'EHR/EMR and HIMS integration',
      'Channel distribution and healthcare IT partnerships'
    ],
    statusNote: 'Active product direction and pilot scoping. Cloud-native architecture with selective on-premise configuration.',
    publicationGuardrail: 'Do not claim clinical efficacy, guaranteed time savings, regulatory approval, HIPAA compliance or a specific deployment scale without current supporting evidence.',
    ctaText: 'Explore NourDoc Official Site',
    secondaryCtaText: 'Discuss Clinical Pilot'
  },
  {
    id: 'leadhive-ai',
    name: 'LeadHive AI',
    tagline: 'Lead Engagement & Qualification Engine',
    category: 'Conversational AI & Sales Enablement',
    positioningLine: 'Turn incoming interest into better-qualified sales conversations.',
    attribution: 'M3 Hive product',
    overview: `LeadHive AI is positioned as an AI-enabled lead engagement and qualification engine for organisations that need to respond to enquiries, understand prospect intent and organise follow-up across digital channels. The product story focuses on helping teams move from a raw enquiry to a more useful qualification and hand-off process—not simply on deploying a chatbot.`,
    challenge: `Marketing and sales teams can receive leads through websites, social channels and messaging platforms, yet responses may be delayed, qualification questions may be inconsistent and valuable enquiries may be lost between initial contact and sales follow-up.`,
    valueProposition: [
      'Engage prospects with structured, conversational interactions across digital touchpoints.',
      'Ask qualification questions and organise responses against the business’s lead criteria.',
      'Help route qualified enquiries to the right team or next step.',
      'Support channel-oriented workflows and integration planning according to each organisation’s systems and policies.',
      'Create a clearer hand-off from first contact to human sales or service teams.'
    ],
    intendedUsers: [
      'Sales-led B2B and commercial businesses',
      'Professional service providers',
      'Education and immigration consultancies',
      'Real estate development and sales teams',
      'Organisations managing multi-channel digital enquiries'
    ],
    collaborationOpportunities: [
      'Channel and agency partnerships',
      'CRM integration and data synchronization',
      'Industry-specific qualification playbooks',
      'Pilot deployments and lead qualification validation',
      'Lead-generation agency partnerships'
    ],
    statusNote: 'Product platform in active development. Channel workflows and integrations planned per organizational scope.',
    publicationGuardrail: 'Confirm the currently supported channels, integrations, analytics and automation capabilities before listing them as live features.',
    ctaText: 'Design a Qualification Workflow',
    secondaryCtaText: 'Discuss LeadHive Pilot'
  },
  {
    id: 'smart-animal',
    name: 'Smart Animal',
    tagline: 'AgriTech AI & IoT',
    category: 'Livestock IoT & Predictive Insight Platform',
    positioningLine: 'Connected livestock monitoring for more informed herd management.',
    attribution: 'M3 Hive product',
    overview: `Smart Animal is an IoT-based livestock monitoring and predictive-insight platform described in M3 Hive materials as combining collars and digital interfaces to help monitor animal activity and herd information. The documented solution elements include heat detection, rumination and eating-pattern indicators, individual alerts, group-level digestion alerts and mobile herd-management features.`,
    challenge: `Livestock managers need timely visibility into animal behaviour and herd conditions. Periodic observation alone may not capture every change early enough to support an informed response, particularly across larger herds or dispersed operations.`,
    valueProposition: [
      'Collect sensor-based activity and behaviour indicators through connected monitoring collars.',
      'Present alerts and herd information through responsive digital interfaces.',
      'Support more timely attention to potential changes in animal behaviour and routine.',
      'Create a foundation for analytics and predictive insights as data quality, models and validation mature.'
    ],
    intendedUsers: [
      'Commercial livestock and dairy farms',
      'Dairy herd managers and operators',
      'Animal-health and veterinary professionals',
      'Agricultural researchers and institutions',
      'AgriTech hardware integrators and distribution partners'
    ],
    collaborationOpportunities: [
      'Commercial farm pilots and field trials',
      'Veterinary and research evaluation collaboration',
      'Sensor and telemetry device hardware integration',
      'Field validation across diverse herd environments',
      'Agriculture-sector distribution partnerships'
    ],
    statusNote: 'IoT and predictive architecture under active field scoping. Predictive models subject to ongoing validation.',
    publicationGuardrail: 'Describe predictive capabilities proportionately; do not claim proven veterinary outcomes or quantified herd improvements without evidence.',
    ctaText: 'Discuss a Smart Animal Pilot',
    secondaryCtaText: 'Explore AgriTech Collaboration'
  }
];

export const M3_HIVE_CAPABILITIES = [
  {
    title: 'AI and Intelligent Workflows',
    description: 'Generative AI, conversational experiences, retrieval-augmented generation (RAG), document processing and workflow automation.'
  },
  {
    title: 'Digital Product Engineering',
    description: 'Discovery, product definition, UX/UI architecture, web and mobile development, and disciplined iterative delivery.'
  },
  {
    title: 'Data Engineering & Market Intelligence',
    description: 'Data acquisition, robust pipelines, data quality assurance, analytical dashboards and structured decision-support platforms.'
  },
  {
    title: 'Cloud and Enterprise Integration',
    description: 'Cloud-native architecture, API integration, data platforms and deployment approaches carefully aligned to client operating needs.'
  },
  {
    title: 'IoT and Connected Systems',
    description: 'Sensor-connected products, edge telemetry, data capture pipelines and operational monitoring interfaces.'
  },
  {
    title: 'Research-Oriented Software',
    description: 'Bioinformatics pipelines, scientific data processing workflows, and high-fidelity interactive visualization.'
  }
];

export const M3_HIVE_ENGAGEMENT_MODELS = [
  {
    phase: 'Phase 01: Discovery & Feasibility',
    detail: 'Understand the operating reality, domain constraints, data availability and technical viability before code is written.'
  },
  {
    phase: 'Phase 02: Prototype & Scoped Pilot',
    detail: 'Rapidly build a functioning prototype or controlled pilot to test core assumptions and user interactions.'
  },
  {
    phase: 'Phase 03: Implementation & Integration',
    detail: 'Deliver robust software architecture, secure data pipelines, system integrations and scalable infrastructure.'
  },
  {
    phase: 'Phase 04: Iteration & Value Refinement',
    detail: 'Refine features against real user feedback, expanding capability proportionately as validation matures.'
  }
];

export const M3_HIVE_ADDITIONAL_WORK: CaseStudy[] = [
  {
    id: 'intelligent-comparison',
    title: 'Intelligent Comparison',
    category: 'Market Intelligence & Data Engineering',
    attribution: 'M3 Hive company project',
    challenge: 'Enterprise company and market data can be difficult to collect, standardise and compare across disparate registries and sectors.',
    valueProposition: 'Data engineering pipelines supporting multi-source company discovery, metric standardisation, benchmarking and comparative market analysis.',
    presentationGuidance: 'Featured as a data-intensive platform case study. Dataset scale represents data processed, not client count.',
    status: 'Platform Architecture & Data Engineering',
    details: [
      'Multi-source data ingestion and transformation pipelines',
      'Entity resolution and structured company attribute benchmarking',
      'Comparative metrics dashboard for market intelligence analysts'
    ]
  },
  {
    id: 'drug-target-profiler',
    title: 'Drug Target Profiler',
    category: 'Bioinformatics & Research Software',
    attribution: 'M3 Hive company project',
    challenge: 'Scientific research teams require intuitive ways to explore intricate compound–target relationships across complex scientific datasets.',
    valueProposition: 'Interactive web-based visual analytics platform supporting compound–protein network exploration, dynamic filtering and biochemical relationship mapping.',
    presentationGuidance: 'Bioinformatics research software and visual analytics case study.',
    status: 'Research Software & Visual Analytics',
    details: [
      'Interactive biological network graph exploration',
      'Multi-variable filtering across target families and affinities',
      'Responsive web interface tailored for scientific researchers'
    ]
  },
  {
    id: 'genomic-analytics',
    title: 'RNA & DNA Sequencing Analytics',
    category: 'Genomics & Scientific Workflows',
    attribution: 'M3 Hive company project',
    challenge: 'Genomic datasets require reproducible, high-throughput computational processing and rigorous analysis pipelines.',
    valueProposition: 'Reproducible scientific workflows encompassing read preprocessing, sequence alignment, expression quantification, differential analysis and variant detection.',
    presentationGuidance: 'Bioinformatics capability representation; strictly avoids unsupported disease-related clinical claims.',
    status: 'Scientific Data Processing Pipeline',
    details: [
      'Preprocessing and quality assessment pipelines for raw reads',
      'Sequence alignment and quantification workflows',
      'Differential gene expression and variant analysis visualization'
    ]
  },
  {
    id: 'decoding-behavior',
    title: 'Decoding Behavior',
    category: 'Retail Analytics & NLP',
    attribution: 'M3 Hive company project',
    challenge: 'Fragmented omnichannel retail touchpoints and unstructured customer feedback make customer sentiment and demand trends difficult to interpret.',
    valueProposition: 'Unified data integration pipelines combining customer feedback NLP, transaction signals and intuitive analytical dashboards for retail insight.',
    presentationGuidance: 'Retail analytics case study; dataset sources distinguished from commercial clients.',
    status: 'Data Integration & NLP Analytics',
    details: [
      'Omnichannel transaction and review data aggregation',
      'Natural language processing applied to feedback sentiment',
      'Executive dashboards tracking operational trends'
    ]
  },
  {
    id: 'mazdoori',
    title: 'Mazdoori',
    category: 'Digital Marketplace Concept',
    attribution: 'M3 Hive company project',
    challenge: 'Access to verified local skilled labour is often unorganised, informal and lacking in transparent scheduling.',
    valueProposition: 'Digital marketplace concept connecting customers with local skilled service workers through structured service categories, location search and booking flows.',
    presentationGuidance: 'Documented concept and workflow exploration. Not presented as a currently operational public network.',
    status: 'Concept Architecture & Marketplace Design',
    details: [
      'Category-based service taxonomy and location search flows',
      'Worker onboarding and verification flow concepts',
      'Customer request and booking workflow architecture'
    ]
  },
  {
    id: 'your-door',
    title: '@Your Door',
    category: 'Commerce & Logistics Workflows',
    attribution: 'M3 Hive company project',
    challenge: 'Local commerce requires coordinated communication between end-customers, local merchants and last-mile dispatchers.',
    valueProposition: 'Coordinated digital commerce architecture covering customer product ordering, merchant order management, dispatch status and fulfillment tracking.',
    presentationGuidance: 'Documented commerce workflow and ordering system; integration status verified per engagement.',
    status: 'Commerce Workflow Exploration',
    details: [
      'End-user mobile/web ordering interface design',
      'Merchant order fulfillment and catalogue management flows',
      'Dispatch and delivery tracking status architecture'
    ]
  },
  {
    id: 'regenerative-art',
    title: 'Regenerative Art',
    category: 'Creative Technology & Data Storytelling',
    attribution: 'M3 Hive company project',
    challenge: 'Complex datasets often struggle to evoke intuitive human connection through traditional charts and tables alone.',
    valueProposition: 'Experimental creative technology initiative combining generative algorithms, real-time data visual systems and interactive digital art storytelling.',
    presentationGuidance: 'Framed as an experimental R&D initiative in data storytelling, not a commercial rollout.',
    status: 'Creative Technology R&D Exploration',
    details: [
      'Algorithmic visual synthesis powered by real-time data inputs',
      'Interactive visual storytelling canvas',
      'Exploration of generative techniques in data presentation'
    ]
  }
];

export const TECHNOLOGIES_360 = {
  name: '360 Technologies',
  subtitle: 'Company Portfolio & Historical Legacy',
  atifRole: 'Co-Founder, Director & Shareholder',
  legalNotice: '360 Technologies is a separate technology-services organisation. Achievements, projects, practice areas and client references below belong to 360 Technologies as an organisation. They are presented here as historical company records and do not imply that Atif I. Malik personally sold, managed or delivered every listed assignment, nor do they claim current customer status.',
  overview: `360 Technologies is an IT services organisation whose published historical portfolio spans software development, enterprise data and business intelligence, digitisation, outsourcing, security consulting and professional capability development. Its project listings include public-sector information systems, postal and operational workflows, land-record digitisation, education data solutions and enterprise technology services. The portfolio reflects a history of technology work across government, enterprise and institutional environments.`,
  directoryUrl: 'https://www.360technologies.net/index.php/360-clients',
  practiceAreas: [
    {
      name: '360 Solutions',
      description: 'Web, software and mobile applications; interface design; system maintenance and support; historical information-security consulting.',
      attribution: '360 Technologies company portfolio'
    },
    {
      name: '360 Logics',
      description: 'Data warehousing, business intelligence, master-data management, data mining, big data infrastructure and location/real-time analytics.',
      attribution: '360 Technologies company portfolio'
    },
    {
      name: '360 BPO',
      description: 'Back-office operations, contact-centre support, large-scale document digitisation and managed technical outsourcing.',
      attribution: '360 Technologies company portfolio'
    },
    {
      name: 'Inductin',
      description: 'Recruitment, technical talent sourcing, human resource services, corporate training and professional resource development.',
      attribution: '360 Technologies company portfolio'
    },
    {
      name: 'EDI (Entrepreneurship Development Institute)',
      description: 'Practical workshops, executive short courses, startup development programmes, industry exhibits and entrepreneurship learning initiatives.',
      attribution: '360 Technologies company portfolio'
    },
    {
      name: 'Outpost',
      description: 'Listed as a business line in the historical company profile (detailed public description subject to confirmation).',
      attribution: '360 Technologies company portfolio'
    }
  ] as PracticeArea[],
  historicalProjects: [
    {
      organisation: 'Pakistan Post',
      sector: 'Postal & Public Utility Infrastructure',
      projects: 'International Postal System implementation and ongoing maintenance; express-mail tracking workflows; central complaint/reporting systems; pension and counter automation; postal data processing.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'Pakistan Navy',
      sector: 'Defense & Institutional Systems',
      projects: 'Budget Management System software engineering and institutional office-automation assignments.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'NADRA / Public Records',
      sector: 'National Identity & Public Administration',
      projects: 'Digitisation and secure data-entry operations involving BISP records and Election Commission of Pakistan records, as described by company archives.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'Provincial Boards of Revenue',
      sector: 'Land Records & Governance',
      projects: 'Large-scale land-record scanning, indexation and structured data entry across designated districts in Punjab, Sindh, and Khyber Pakhtunkhwa.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'Sindh Education / Reform Support Unit (RSU)',
      sector: 'Education Sector Management',
      projects: 'School-student registry and school-budget applications, institutional education data management, and public education reform support platforms.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'International Organization for Migration (IOM)',
      sector: 'International Development & Humanitarian',
      projects: 'Nationwide communication assessment workflows and flood-response monitoring data-entry assignment.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'Overseas Pakistanis Foundation (OPF)',
      sector: 'Expatriate Services & Public Portals',
      projects: 'Official website, institutional web portal and dedicated online student internship portal development.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'UNDP / Parliamentary Development',
      sector: 'Governance & Institutional Strengthening',
      projects: 'Websites, continuous maintenance and technical support for Support to Decentralization and Parliamentary Development (SDPD) public-sector programmes.',
      attribution: '360 Technologies company portfolio'
    },
    {
      organisation: 'Professional Capability Training',
      sector: 'Institutional Capacity Building',
      projects: 'Technology training programs delivered for National Assembly and Senate of Pakistan parliamentary staff, and telecom sector training for Telenor, as recorded in historical company archives.',
      attribution: '360 Technologies company portfolio'
    }
  ] as HistoricalProject[],
  publishedClients: [
    'Pakistan National Assembly',
    'Pakistan Navy',
    'Pakistan Post',
    'Telenor',
    'NADRA',
    'Senate of Pakistan',
    'Boards of Revenue (Punjab, Sindh & KP)',
    'Reform Support Unit (RSU)',
    'National Commission for Human Development (NCHD)',
    'IBM',
    'UNDP Pakistan',
    'International Organization for Migration (IOM)',
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
    name: 'Product Adoption & Pilots',
    audience: 'Healthcare clinics, hospitals, commercial sales teams, and livestock operations',
    likelyChallenge: 'Manual documentation, slow lead follow-up, or delayed herd health visibility causing operational friction.',
    whatWeCommunicate: 'NourDoc, LeadHive AI, and Smart Animal address distinct operational bottlenecks with scoped pilot structures.',
    potentialContribution: 'Operational workflow access, clinical/business context, pilot site deployment and user feedback.',
    possibleFirstStep: 'Initial discovery call, workflow review, and structured pilot scoping.',
    ctaText: 'Explore Product Adoption'
  },
  {
    id: 'research-validation',
    name: 'Research & Validation',
    audience: 'Universities, domain specialists, clinicians, veterinary researchers, and bioinformatics teams',
    likelyChallenge: 'Novel AI and IoT algorithms require rigorous domain validation, governance, and comparative evaluation.',
    whatWeCommunicate: 'Collaborative research frameworks with transparent data boundaries, reproducible workflows, and co-publication standards.',
    potentialContribution: 'Domain expertise, rigorous evaluation criteria, clinical/veterinary protocols and co-authorship.',
    possibleFirstStep: 'Define specific research questions, evaluation criteria, data governance and review protocol.',
    ctaText: 'Discuss Research Partnership'
  },
  {
    id: 'distribution-market-access',
    name: 'Distribution & Market Access',
    audience: 'Regional commercial partners, specialized resellers, industry associations, and implementation agencies',
    likelyChallenge: 'Specialized software requires localized market relationships, customer onboarding, and tier-1 support.',
    whatWeCommunicate: 'Clear channel structures, enablement toolkits, and transparent partner engagement models.',
    potentialContribution: 'Regional market reach, industry customer relationships, localization and front-line implementation.',
    possibleFirstStep: 'Define target market, customer profile, commercial model and support responsibilities.',
    ctaText: 'Explore Channel Partnership'
  },
  {
    id: 'technology-integration',
    name: 'Technology Integration',
    audience: 'EHR/EMR vendors, CRM platforms, IoT telemetry/sensor manufacturers, and enterprise software teams',
    likelyChallenge: 'Isolated tools create data silos; end users demand native interoperability with existing enterprise systems.',
    whatWeCommunicate: 'API-driven interoperability, data pipeline integration, and secure FHIR/REST/webhook architecture planning.',
    potentialContribution: 'API endpoints, sandbox environments, hardware SDKs and mutual integration support.',
    possibleFirstStep: 'Technical discovery session, architectural mapping, and proof-of-concept definition.',
    ctaText: 'Discuss System Integration'
  },
  {
    id: 'investment-strategic-capital',
    name: 'Investment & Strategic Capital',
    audience: 'Strategic investors, family offices, and venture partners focused on applied AI, HealthTech, and AgriTech',
    likelyChallenge: 'Identifying technology teams addressing genuine domain problems with real product depth and execution discipline.',
    whatWeCommunicate: 'M3 Hive builds focused AI products with identifiable commercial use cases while retaining custom engineering capacity.',
    potentialContribution: 'Growth capital, domain networks, market expansion guidance and governance expertise.',
    possibleFirstStep: 'Executive product briefing, market thesis review, traction status and structured diligence discussion.',
    ctaText: 'Initiate Strategic Briefing'
  },
  {
    id: 'custom-product-engineering',
    name: 'Custom Product Engineering',
    audience: 'Enterprises and public-sector organisations confronting unique data, automation, or software bottlenecks',
    likelyChallenge: 'Off-the-shelf software fails to match intricate operating realities, complex data pipelines, or security requirements.',
    whatWeCommunicate: 'M3 Hive scopes tailored product engineering, intelligent automation, and cloud platforms directly around operating context.',
    potentialContribution: 'Detailed problem statement, operational constraints, stakeholder access and project sponsorship.',
    possibleFirstStep: 'Problem definition session, feasibility review, scope boundaries and delivery roadmap proposal.',
    ctaText: 'Discuss Engineering Engagement'
  }
];

export const EXTERNAL_SOURCES: ExternalSource[] = [
  {
    title: 'Atif I. Malik — Public LinkedIn Profile',
    category: 'Executive Identity',
    url: 'https://www.linkedin.com/in/aimalik/',
    note: 'Public executive profile, leadership background and professional network.'
  },
  {
    title: 'M3 Hive — Company Website & Resources',
    category: 'Corporate Overview',
    url: 'https://m3hive.com/',
    note: 'Corporate capabilities, digital engineering offerings and technology focus.'
  },
  {
    title: 'NourDoc Official Product Portal',
    category: 'Healthcare AI Platform',
    url: 'https://nourdoc.m3hive.com/',
    note: 'Official portal for NourDoc clinical documentation and transcription platform.'
  },
  {
    title: 'M3 Hive — Case Studies & Technical Work',
    category: 'Project Directory',
    url: 'https://m3hive.com/resources/case-studies.html',
    note: 'Company case studies across market intelligence, genomics and digital solutions.'
  },
  {
    title: '360 Technologies — Historical Client Directory',
    category: 'Company Archives',
    url: 'https://www.360technologies.net/index.php/360-clients',
    note: 'Historical published client directory and enterprise project records.'
  },
  {
    title: '360 Technologies — Corporate Profile & Overview',
    category: 'Company Archives',
    url: 'https://www.360technologies.net/index.php/about-us',
    note: 'Historical corporate background, service practice lines and foundation history.'
  }
];

