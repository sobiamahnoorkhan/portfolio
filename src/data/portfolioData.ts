export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  positioning: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  badge: string;
  summary: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  step: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  court: string;
  period: string;
  status: string;
  description: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  isKeyHighlight?: boolean;
  category: 'Law' | 'Technology' | 'Commerce' | 'Secondary';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  period?: string;
  batch?: string;
  certificateId?: string;
  category: 'Legal' | 'AI & Tools' | 'UI/UX & Web' | 'Digital Marketing';
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  category?: string;
  badge: string;
  statusLabel: string;
  description: string;
  featuresTitle: string;
  features: string[];
  technologies?: string[];
  isConceptOnly?: boolean;
}

export interface TechnologyStep {
  step: number;
  title: string;
  description: string;
  badge: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  organizer: string;
  status: string;
  description: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Sobia Mahnoor",
  role: "Advocate",
  tagline: "Law × Technology × AI",
  positioning: "Where Law Meets Technology",
  location: "Hyderabad, Pakistan",
  email: "sobiamahnoorkhan@gmail.com",
  phone: "+92 337 3166092",
  github: "https://github.com/sobiamahnoorkhan",
  githubUsername: "sobiamahnoorkhan",
  linkedin: "https://www.linkedin.com/in/sobia-mahnoor-b15a90260",
  linkedinUsername: "sobia-mahnoor-b15a90260",
  badge: "LAW × AI × TECHNOLOGY",
  summary: "I am an Advocate practicing before Subordinate Courts in Hyderabad, with an academic background in law, commerce, and information technology. I am also developing my skills in Artificial Intelligence, AI tools, UI/UX, Webflow, and digital technologies."
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "home", label: "Home", href: "#home", step: 1 },
  { id: "about", label: "About", href: "#about", step: 2 },
  { id: "experience", label: "Legal Experience", href: "#experience", step: 3 },
  { id: "education", label: "Education", href: "#education", step: 4 },
  { id: "law-ai", label: "Law × AI", href: "#law-ai", step: 5 },
  { id: "projects", label: "Projects", href: "#projects", step: 6 },
  { id: "certifications", label: "Certifications", href: "#certifications", step: 7 },
  { id: "skills", label: "Skills", href: "#skills", step: 8 },
  { id: "contact", label: "Contact", href: "#contact", step: 9 },
];

export const LEGAL_EXPERIENCE: ExperienceItem = {
  id: "advocate-subordinate-courts",
  role: "Advocate",
  court: "Subordinate Courts, Hyderabad",
  period: "December 4, 2025 – Present",
  status: "Active Legal Practice",
  description: "Practicing as an Advocate before Subordinate Courts in Hyderabad.",
  responsibilities: [
    "Legal drafting",
    "Court proceedings",
    "Case preparation",
    "File management",
    "Legal research",
    "Client communication",
    "Coordination with senior advocates",
    "Court procedure and deadline compliance",
    "Professional ethics"
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "llb",
    degree: "L.L.B",
    institution: "University of Sindh, Jamshoro",
    period: "2018 – 2022",
    grade: "1st Division",
    isKeyHighlight: true,
    category: "Law"
  },
  {
    id: "it-diploma",
    degree: "One Year Advance Diploma – Information Technology",
    institution: "Khana-e-Farhang",
    period: "2017 – 2018",
    isKeyHighlight: true,
    category: "Technology"
  },
  {
    id: "bcom",
    degree: "B.COM",
    institution: "University of Sindh, Jamshoro",
    period: "2016 – 2017",
    grade: "1st Division",
    category: "Commerce"
  },
  {
    id: "intermediate",
    degree: "Intermediate (Pre-Medical)",
    institution: "Govt. Shah Latif Girls College",
    period: "2012 – 2014",
    grade: "80% A1 Grade",
    category: "Secondary"
  },
  {
    id: "matriculation",
    degree: "Matriculation (Science)",
    institution: "Kids Corner High School",
    period: "2012",
    grade: "80% A1 Grade",
    category: "Secondary"
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: "fja-ecourse-2026",
    title: "E-Course for Law Professionals – 2026 (Batch-I)",
    issuer: "Federal Judicial Academy, Islamabad",
    date: "July 3, 2026",
    category: "Legal"
  },
  {
    id: "lsfp-ai-training",
    title: "Hands-On AI Training: Prompt Engineering & AI Tools for Law Students",
    issuer: "Law Students Front Pakistan",
    date: "August 1, 2026",
    category: "AI & Tools"
  },
  {
    id: "digiskills-ui-ux",
    title: "UI/UX & Webflow",
    issuer: "DigiSkills Training Program",
    batch: "DSTP 3.0 – Batch-03",
    period: "April 2026 – July 2026",
    date: "July 20, 2026",
    certificateId: "2DQYXE7MK",
    category: "UI/UX & Web"
  },
  {
    id: "digiskills-marketing",
    title: "Digital Marketing",
    issuer: "DigiSkills Training Program",
    batch: "DSTP 3.0 – Batch-03",
    period: "April 2026 – July 2026",
    date: "July 20, 2026",
    certificateId: "PJWTYDJMK",
    category: "Digital Marketing"
  }
];

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "citizen-legal-aid",
    title: "Citizen Legal Aid & Document Explainer",
    type: "AI Project",
    category: "Legal AI & Access",
    badge: "AI Legal Assistance",
    statusLabel: "Exploring AI for Legal Applications",
    description: "An AI-powered legal assistance and document explanation concept designed to help users understand legal documents, legal terminology, and legal issues in multiple languages.",
    featuresTitle: "Known Features",
    features: [
      "Legal document explanation",
      "Legal terminology explanation",
      "Complaint drafting assistance",
      "Legal issue matching",
      "Multilingual support",
      "Connection with a Pakistan law library",
      "AI-powered document analysis"
    ],
    technologies: [
      "Prompt Engineering",
      "Legal NLP & Analysis",
      "Multilingual Processing",
      "UI/UX Accessibility"
    ],
    isConceptOnly: false
  },
  {
    id: "ai-vision-assistant",
    title: "AI Vision Assistant for Blind & Visually Impaired Users",
    type: "AI Project Concept / Development Idea",
    category: "Accessibility & Computer Vision",
    badge: "Accessibility & AI Concept",
    statusLabel: "Development Idea",
    description: "An accessibility-focused AI application concept that uses a smartphone camera and AI to help visually impaired users understand their surroundings and read text.",
    featuresTitle: "Concept Features",
    features: [
      "Camera-based scene understanding",
      "Object recognition",
      "Text reading",
      "OCR",
      "Voice assistance",
      "Accessibility support"
    ],
    technologies: [
      "Computer Vision",
      "Real-Time OCR",
      "Scene Understanding",
      "Voice UI Synthesis"
    ],
    isConceptOnly: true
  }
];

export const TECH_JOURNEY_STEPS: TechnologyStep[] = [
  {
    step: 1,
    title: "Information Technology Education",
    description: "Foundational one-year advance diploma training in IT fundamentals, systems, and digital computing.",
    badge: "Khana-e-Farhang (2017–2018)"
  },
  {
    step: 2,
    title: "UI/UX & Webflow Training",
    description: "Structured design methodology, user flows, accessibility standards, and web layout construction.",
    badge: "DigiSkills DSTP 3.0"
  },
  {
    step: 3,
    title: "Digital Marketing Training",
    description: "Strategic communication, digital reach, content workflows, and online engagement strategies.",
    badge: "DigiSkills DSTP 3.0"
  },
  {
    step: 4,
    title: "AI Tools Training",
    description: "Applied hands-on exploration of contemporary AI toolchains for legal workflows and productivity.",
    badge: "LSFP Professional Training"
  },
  {
    step: 5,
    title: "Prompt Engineering",
    description: "Targeted structuring of legal queries, contextual constraints, and domain-grounded prompt formulation.",
    badge: "Hands-On AI Practice"
  },
  {
    step: 6,
    title: "Exploration of AI-Powered Applications",
    description: "Conceptualizing domain solutions at the intersection of Pakistani law, citizen access, and AI systems.",
    badge: "Law × Technology Exploration"
  }
];

export const HACKATHONS_LIST: HackathonItem[] = [
  {
    id: "bano-qabil-alibaba",
    title: "Bano Qabil / Alibaba Cloud AI Hackathon",
    organizer: "Bano Qabil & Alibaba Cloud",
    status: "Participant / Project Development",
    description: "Engaged in collaborative innovation and project development exploring artificial intelligence solutions and cloud technologies."
  }
];

export const LEGAL_SKILLS: string[] = [
  "Legal Drafting",
  "Legal Research",
  "Court Procedures",
  "Case Preparation",
  "Legal Document Preparation",
  "Client Communication",
  "File Management"
];

export const TECH_SKILLS: string[] = [
  "Information Technology",
  "UI/UX",
  "Webflow",
  "Digital Marketing",
  "AI Tools",
  "Prompt Engineering"
];

export const LANGUAGES: string[] = [
  "English",
  "Urdu"
];

export const CENTRAL_STORY_STEPS = [
  {
    title: "Legal Practice",
    role: "Advocate",
    description: "Grounding in daily court proceedings, legal drafting, and client representation before Subordinate Courts in Hyderabad.",
    icon: "scale"
  },
  {
    title: "Understanding Legal Documents",
    role: "Statutory & Case Analysis",
    description: "Navigating complex legal drafting, terminology, procedural forms, and case files with precision.",
    icon: "file-text"
  },
  {
    title: "Understanding Legal Problems",
    role: "Citizen Access Barrier",
    description: "Identifying the fundamental challenges everyday citizens face when trying to comprehend rights, documents, and proceedings.",
    icon: "shield-alert"
  },
  {
    title: "Technology & AI Learning",
    role: "Applied Tech Training",
    description: "Acquiring skills in prompt engineering, AI tools, UI/UX, and Webflow to model practical technical solutions.",
    icon: "cpu"
  },
  {
    title: "AI-Powered Legal Solutions",
    role: "Exploring Legal Tech",
    description: "Conceptualizing tools like the Citizen Legal Aid & Document Explainer to make legal understanding accessible in multiple languages.",
    icon: "sparkles"
  }
];

export const LAW_AI_MATRIX = {
  lawSide: {
    title: "LAW",
    items: [
      { name: "Legal Documents", desc: "Contracts, plaints, petitions, affidavits, and case files" },
      { name: "Legal Research", desc: "Case laws, precedents, statutory provisions, and rulings" },
      { name: "Legal Procedures", desc: "Court deadlines, jurisdictional rules, and filing compliance" },
      { name: "Legal Information", desc: "Citizen rights, statutory remedies, and legal knowledge" }
    ]
  },
  aiSide: {
    title: "AI",
    items: [
      { name: "AI Tools", desc: "Workflow assistance, structured extraction, and interface automation" },
      { name: "Prompt Engineering", desc: "Contextual instruction design for precise domain output" },
      { name: "Document Understanding", desc: "Semantic parsing, clause breakdown, and terminology translation" },
      { name: "Information Processing", desc: "Multilingual interpretation and legal issue categorization" }
    ]
  },
  result: {
    title: "LEGAL TECHNOLOGY",
    badges: ["Exploring Legal Technology", "Exploring AI for Legal Applications"],
    description: "Bridging the rigors of procedural law with the capabilities of AI to make legal documentation and citizen access more transparent, understandable, and effective."
  }
};
