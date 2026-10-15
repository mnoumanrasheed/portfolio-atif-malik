export type AttributionType =
  | 'M3 Hive product'
  | 'M3 Hive company project'
  | '360 Technologies company portfolio'
  | 'Atif I. Malik · role confirmed';

export interface ExecutiveProfile {
  name: string;
  professionalPositioning: string;
  currentRole: string;
  separateAffiliation: string;
  affiliationNotice?: string;
  tagline: string;
  heroHeadline: string;
  heroStatement: string;
  heroSecondParagraph: string;
  homepageIntro: string;
  shortBio: string;
  longBio: {
    approach: string;
    m3hiveContext: string;
    technologies360Context: string;
    portfolioIntent: string;
  };
  verifiedLinks: {
    linkedin: string;
    m3hive: string;
    nourdoc: string;
    technologies360: string;
    email?: string;
  };
}

export interface CapabilityArea {
  id: string;
  number: string;
  title: string;
  description: string;
  subareas: string[];
}

export interface ProductData {
  id: 'nourdoc' | 'leadhive-ai' | 'smart-animal';
  name: string;
  tagline: string;
  domain: string;
  category: string;
  positioningLine: string;
  attribution: AttributionType;
  officialUrl?: string;
  overview: string;
  challenge: string;
  problemSolved?: string;
  aiApproach?: string;
  capabilities?: string[];
  valueProposition: string[];
  intendedUsersSummary: string;
  intendedUsers: string[];
  collaborationOpportunities: string[];
  miniFlow: [string, string, string];
  statusNote: string;
  publicCaveat: string;
  publicationGuardrail: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

export type CaseStudyGroup = 'analytics' | 'research' | 'platforms' | 'explorations';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  sector?: string;
  architecture?: string;
  outcome?: string;
  group: CaseStudyGroup;
  attribution: AttributionType;
  challenge: string;
  valueProposition: string;
  status: string;
  details: string[];
}

export interface PracticeArea {
  name: string;
  description: string;
  summary?: string;
}

export interface HistoricalProject {
  organisation: string;
  sector?: string;
  projects: string;
}

export interface CollaborationPathway {
  id: string;
  name: string;
  title?: string;
  category?: string;
  overview?: string;
  scope?: string;
  engagementModel?: string;
  audience: string;
  likelyChallenge: string;
  whatWeCommunicate: string;
  possibleFirstStep: string;
  ctaText: string;
}

export interface AudienceRecord {
  audience: string;
  challenge: string;
  communicate: string;
  cta: { label: string; to: string };
}

export interface LeadershipPrinciple {
  title: string;
  description: string;
}

export interface EngagementStep {
  phase: string;
  title: string;
  detail: string;
  description?: string;
  commitment?: string;
}

export interface ExternalSource {
  title: string;
  category: string;
  group: string;
  url: string;
  note: string;
}
