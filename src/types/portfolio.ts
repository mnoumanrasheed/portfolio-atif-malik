export type AttributionType = 
  | 'M3 Hive product'
  | 'M3 Hive company project'
  | '360 Technologies company portfolio'
  | 'Atif I. Malik — role confirmed';

export type ProductStatus = 'Pilot & Active Development' | 'In Development & Pilot Scoping' | 'Concept & Architecture';

export interface ExecutiveProfile {
  name: string;
  titles: string[];
  currentRole: string;
  separateAffiliation: string;
  tagline: string;
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
  };
}

export interface ProductData {
  id: 'nourdoc' | 'leadhive-ai' | 'smart-animal';
  name: string;
  tagline: string;
  category: string;
  positioningLine: string;
  attribution: AttributionType;
  officialUrl?: string;
  overview: string;
  challenge: string;
  valueProposition: string[];
  intendedUsers: string[];
  collaborationOpportunities: string[];
  statusNote: string;
  publicationGuardrail: string;
  ctaText: string;
  secondaryCtaText: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  attribution: AttributionType;
  challenge: string;
  valueProposition: string;
  presentationGuidance: string;
  status: string;
  details?: string[];
}

export interface PracticeArea {
  name: string;
  description: string;
  attribution: AttributionType;
}

export interface HistoricalProject {
  organisation: string;
  sector: string;
  projects: string;
  attribution: AttributionType;
}

export interface CollaborationPathway {
  id: string;
  name: string;
  audience: string;
  likelyChallenge: string;
  whatWeCommunicate: string;
  potentialContribution: string;
  possibleFirstStep: string;
  ctaText: string;
}

export interface ExternalSource {
  title: string;
  category: string;
  url: string;
  note: string;
}

