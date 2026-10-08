export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  badge?: string;
  summary: string;
  highlights: string[];
  metrics: ProjectMetric[];
  stack: string[];
  concepts: string[];
  githubUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: 'Security' | 'AI & ML' | 'Software & Cloud';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  modules?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: 'Leadership' | 'Academic' | 'Professional';
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  value: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    symbol: string;
    category: string;
    highlight?: boolean;
  }[];
}

export interface SecurityPathwayStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusArea: string;
  keySkills: string[];
}

export interface ReferenceItem {
  name: string;
  title: string;
  qualifications: string;
  organization: string;
  email: string;
  phone: string;
}

export const PROFILE = {
  name: "MOHAMED RUSAICK MUFTHI",
  shortName: "Rusaick Mufthi",
  initials: "RM",
  headline: "Aspiring Cyber Security Analyst | Python, Networks & AI-driven Security",
  heroTitle: "Building toward a more secure digital world.",
  positioning: "Software Engineering foundation → Computer Networks → Network Security → Cyber Security",
  summary: "HND Software Engineering graduate currently reading for a BSc (Hons) Computer Networks top-up degree (University of Wolverhampton, via CINEC Campus), built deliberately to transition from software development into Cyber Security. Final-year research focused on ML-based detection of XSS attacks, reaching 99.81% classification accuracy across 5 models. Comfortable across Python, networking fundamentals, and applied AI, with a track record of independently designing, building, and evaluating full security-relevant systems end to end. Former President of the BCAS IT Society, experienced in leading teams and driving technical initiatives.",
  status: "BSc (Hons) Computer Networks Student (University of Wolverhampton / CINEC Campus)",
  location: "Kalmunai, Sri Lanka",
  email: "rusaikmufthi@gmail.com",
  phone: "(+94) 75-472-0047",
  whatsappUrl: "https://wa.me/94754720047?text=Hello%20Rusaick%2C%20I%20visited%20your%20security%20portfolio.",
  linkedin: "https://linkedin.com/in/rusaick-mufthi",
  github: "https://github.com/rusaikMufthi",
  resumeUrl: "/resume.pdf",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about", index: "01" },
  { label: "Security Focus", href: "#security-focus", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Projects", href: "#projects", index: "04" },
  { label: "Certifications", href: "#certifications", index: "05" },
  { label: "Experience", href: "#experience", index: "06" },
  { label: "Achievements", href: "#achievements", index: "07" },
  { label: "Contact", href: "#contact", index: "08" },
];

export const SECURITY_PATHWAY: SecurityPathwayStep[] = [
  {
    number: "01",
    title: "Software Engineering",
    subtitle: "Technical Foundation",
    description: "Completed Pearson BTEC HND in Software Engineering, establishing a solid technical grounding in programming, software engineering principles, database systems, UI/UX design, and structured software development.",
    focusArea: "Completed Academic Foundation",
    keySkills: ["Python", "Software Engineering", "Database Systems", "UI/UX Design", "OOP Principles"],
  },
  {
    number: "02",
    title: "Computer Networks",
    subtitle: "Current Academic Path",
    description: "Currently pursuing a BSc (Hons) Computer Networks top-up degree at CINEC Campus (affiliated with the University of Wolverhampton, UK), focusing on network architecture, communication protocols, infrastructure, and systems administration.",
    focusArea: "Current Academic Path (CINEC / Wolverhampton)",
    keySkills: ["Networking Concepts", "Network Architecture", "Protocols & Systems", "Network Administration"],
  },
  {
    number: "03",
    title: "Network & Security Foundations",
    subtitle: "Building Security Expertise",
    description: "Connecting software engineering capabilities with computer networking principles and previous security-focused academic research—such as HND final-year XSS attack detection (99.81% accuracy)—to evaluate threat patterns and security mechanisms.",
    focusArea: "Applied Security & Academic Projects",
    keySkills: ["Application Security", "XSS / OWASP (HND Exposure)", "Threat Detection", "Security Analysis"],
  },
  {
    number: "04",
    title: "Cyber Security Engineering",
    subtitle: "Future Professional Direction",
    description: "Target career path focused on Cyber Security Engineering and Network Security—combining network infrastructure knowledge, secure systems design, and Python-driven threat classification to protect enterprise digital assets.",
    focusArea: "Target Professional Specialization",
    keySkills: ["Cyber Security", "Network Security", "Secure Systems", "Security Engineering", "Threat Detection"],
  },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Security & Networks",
    description: "Core defensive concepts, web application vulnerabilities, and networking principles.",
    skills: [
      { name: "Web Application Security", symbol: "SEC", category: "Security", highlight: true },
      { name: "OWASP Top 10 (XSS)", symbol: "OWS", category: "Security", highlight: true },
      { name: "Threat Classification", symbol: "TC", category: "Security", highlight: true },
      { name: "Security Fundamentals", symbol: "SF", category: "Security", highlight: true },
      { name: "Networking Concepts", symbol: "NET", category: "Networks", highlight: true },
    ],
  },
  {
    title: "AI / ML for Security",
    description: "Supervised ML algorithms, feature extraction, evaluation metrics, and neural models applied to threat detection.",
    skills: [
      { name: "Scikit-learn", symbol: "SKL", category: "Machine Learning", highlight: true },
      { name: "XGBoost", symbol: "XGB", category: "Machine Learning", highlight: true },
      { name: "TensorFlow / Keras", symbol: "TF", category: "Deep Learning", highlight: true },
      { name: "Random Forest & Tree Models", symbol: "RF", category: "Machine Learning" },
      { name: "Logistic Regression & Naïve Bayes", symbol: "LR", category: "Machine Learning" },
      { name: "Feature Engineering", symbol: "FE", category: "Data Science" },
      { name: "Model Evaluation (ROC-AUC / F1)", symbol: "EVAL", category: "Data Science" },
    ],
  },
  {
    title: "Programming & Languages",
    description: "Core scripting, software logic, query languages, and frontend web standards.",
    skills: [
      { name: "Python (Primary)", symbol: "PY", category: "Programming", highlight: true },
      { name: "SQL / SQLite", symbol: "SQL", category: "Database" },
      { name: "HTML5", symbol: "HTML", category: "Web" },
      { name: "CSS3", symbol: "CSS", category: "Web" },
    ],
  },
  {
    title: "Tools & Frameworks",
    description: "Analytics tools, dashboard creation, REST APIs, and data science libraries.",
    skills: [
      { name: "Streamlit", symbol: "STR", category: "Tooling", highlight: true },
      { name: "Jupyter Notebook", symbol: "JUP", category: "Tooling" },
      { name: "REST APIs", symbol: "API", category: "Integration" },
      { name: "Pandas", symbol: "PD", category: "Data Analysis" },
      { name: "NumPy", symbol: "NP", category: "Scientific Computing" },
      { name: "Matplotlib", symbol: "MPL", category: "Visualization" },
    ],
  },
  {
    title: "Capabilities & Soft Skills",
    description: "Engineering rigor, technical communication, and society leadership.",
    skills: [
      { name: "Clean & Documented Code", symbol: "CODE", category: "Engineering" },
      { name: "Cross-Functional Leadership", symbol: "LEAD", category: "Leadership" },
      { name: "English (Professional)", symbol: "ENG", category: "Language" },
      { name: "Tamil (Native)", symbol: "TAM", category: "Language" },
    ],
  },
];

export const FEATURED_PROJECT: Project = {
  id: "xss-attack-detection",
  number: "01",
  title: "XSS Attack Detection – ML vs Neural Networks",
  subtitle: "HND Final-Year Research Project (Jan 2025 – Sep 2025)",
  date: "Jan 2025 – Sep 2025",
  category: "Cyber Security & ML Research",
  badge: "Featured Security Research",
  summary: "Independently researched and benchmarked 4 classical ML classifiers (Logistic Regression, Naïve Bayes, Random Forest, XGBoost) against a Multi-Layer Perceptron for detecting Cross-Site Scripting (XSS) attacks, a critical OWASP web security threat.",
  highlights: [
    "Preprocessed a labelled HTTP payload dataset, engineered features, and evaluated all 5 models across Accuracy, Precision, Recall, F1-score, and ROC-AUC, writing all evaluation code from scratch.",
    "XGBoost achieved 99.81% accuracy and 0.999 ROC-AUC, demonstrating that well-tuned tree-based models can match neural networks for structured security classification at lower compute cost.",
    "Built a real-time Streamlit dashboard for live payload input, instant classification, and interactive model comparison – directly applicable to SOC-style triage tooling.",
  ],
  metrics: [
    { label: "XGBoost Accuracy", value: "99.81%" },
    { label: "ROC-AUC Score", value: "0.999" },
    { label: "Models Benchmarked", value: "5 Models" },
  ],
  stack: ["Python", "Scikit-learn", "TensorFlow/Keras", "Pandas", "Matplotlib", "Streamlit"],
  concepts: ["OWASP Top 10 Web Security", "XSS Payload Analysis", "Feature Engineering", "SOC-style Triage Tooling", "Tree-based Models vs MLP"],
  githubUrl: "https://github.com/rusaikMufthi",
};

export const PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    id: "hospital-queue-management",
    number: "02",
    title: "AI-Powered Hospital Queue Management System",
    subtitle: "Academic Project (Sep 2024 – Dec 2024)",
    date: "Sep 2024 – Dec 2024",
    category: "Software Engineering & Applied AI",
    summary: "Built an end-to-end data pipeline and web application, handling data ingestion, feature engineering, model training, and real-time prediction in a single deployable system – applying the same engineering discipline required for building reliable security tooling.",
    highlights: [
      "Trained and benchmarked 3 regression models, selecting Decision Tree for the best R² score (0.915) on held-out test data.",
      "Integrated SQLite for persistent records and the Twilio API for automated notifications, demonstrating secure handling of data pipelines and third-party API integration.",
    ],
    metrics: [
      { label: "Decision Tree R²", value: "0.915" },
      { label: "Models Evaluated", value: "3 Models" },
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "SQLite", "Pandas", "NumPy", "Matplotlib", "Twilio API"],
    concepts: ["Data Pipeline Engineering", "Secure API Integration", "Predictive Modeling", "State Management"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: "c1", name: "AI for Cybersecurity", issuer: "LinkedIn Learning", category: "Security" },
  { id: "c2", name: "Cyber Security", issuer: "Simplilearn", category: "Security" },
  { id: "c3", name: "Ethical AI Foundations", issuer: "Sololearn", category: "Security" },
  { id: "c4", name: "Machine Learning using Python", issuer: "Simplilearn", category: "AI & ML" },
  { id: "c5", name: "Educate Machine Learning Foundations", issuer: "AWS", category: "AI & ML" },
  { id: "c6", name: "Introducing Generative AI with AWS", issuer: "Udacity", category: "AI & ML" },
  { id: "c7", name: "Generative AI in Practice", issuer: "Sololearn", category: "AI & ML" },
  { id: "c8", name: "Python for ML & Data Science", issuer: "Great Learning", category: "AI & ML" },
  { id: "c9", name: "Career Skills in Software Development", issuer: "LinkedIn Learning", category: "Software & Cloud" },
  { id: "c10", name: "Cloud Computing", issuer: "Simplilearn", category: "Software & Cloud" },
  { id: "c11", name: "Python Developer", issuer: "Sololearn", category: "Software & Cloud" },
  { id: "c12", name: "Web Development", issuer: "Sololearn", category: "Software & Cloud" },
  { id: "c13", name: "Java Programming", issuer: "Great Learning", category: "Software & Cloud" },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BSc (Hons) Computer Networks (Top-Up)",
    institution: "CINEC Campus, Sri Lanka – affiliated with University of Wolverhampton, UK",
    period: "Oct 2026 - Present",
    description: "Pursuing specialized study in networking, systems administration, and security principles to build toward a Cyber Security career.",
  },
  {
    degree: "Pearson BTEC HND in Software Engineering",
    institution: "BCAS Campus, Kalmunai, Sri Lanka",
    period: "Jan 2024 – Sep 2025",
    description: "Comprehensive software engineering curriculum. Relevant modules:",
    modules: ["Machine Learning", "Data Analytics", "Software Engineering Principles", "Database Systems", "UI/UX Design"],
  },
  {
    degree: "Ordinary & Advanced Level",
    institution: "Zahira College, Kalmunai, Sri Lanka",
    period: "2019 – 2023",
    description: "Secondary education foundation in physical sciences, mathematics, and computing.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "President",
    organization: "BCAS IT Society (BITS)",
    location: "BCAS Campus Kalmunai, Sri Lanka",
    period: "Apr 2025 – Nov 2025",
    description: "Led a 15-member society; organized 4+ tech workshops reaching 200+ students; drove team coordination and student engagement.",
    type: "Leadership",
  },
  {
    role: "Treasurer",
    organization: "BCAS IT Society (BITS)",
    location: "BCAS Campus Kalmunai, Sri Lanka",
    period: "May 2024 – Apr 2025",
    description: "Managed financial planning and budgeting for all society events; maintained accurate, transparent financial records.",
    type: "Leadership",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    number: "01",
    title: "99.81% XSS Classification Accuracy & 0.999 ROC-AUC",
    organization: "BCAS Campus / Final-Year Research",
    value: "99.81%",
    description: "Researched and benchmarked 5 ML & neural models for detecting XSS attacks. XGBoost matched MLP accuracy at significantly lower compute cost.",
  },
  {
    id: "a2",
    number: "02",
    title: "Elected President of BCAS IT Society (BITS)",
    organization: "BCAS Campus Kalmunai",
    value: "15 Members",
    description: "Led a 15-member society, directing tech workshops and driving technical engagement across 200+ students.",
  },
  {
    id: "a3",
    number: "03",
    title: "Decision Tree R² Score 0.915 on Test Data",
    organization: "Academic AI Project",
    value: "0.915 R²",
    description: "Engineered predictive data pipeline integrating SQLite and automated Twilio API alerts for healthcare queue management.",
  },
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "K. MOHAMED ISHRAQUE",
    title: "IT Senior Lecturer & Centre Manager",
    qualifications: "MCS(SL), AMACS, M.SC IN IS, BIT",
    organization: "BCAS Kalmunai Campus",
    email: "ishraque@bcas.lk",
    phone: "+94722226899",
  },
  {
    name: "MI. MOHAMED NISMY",
    title: "Coordinator cum Lecturer, Dept. of Computing",
    qualifications: "MCS(SL), PGD IT (Sp. Cyber Sec), BSC. SP (COM. SC), SLITCS",
    organization: "BCAS Kalmunai Campus",
    email: "nismy@bcas.lk",
    phone: "+94765892357 / +94772273829",
  },
];
