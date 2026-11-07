// Single source of truth for the site's content.
// Everything here is drawn from the July 2026 CV or the previous version of this site.

export const SITE_URL = "https://portfoliofinal-gamma-two.vercel.app";

// Master academic CV (source: "Dexterity Time/CV Master/Abdulai_ARD_Master_Academic_CV.pdf").
// To update the site, replace public/cv/Abdul-Rashid-Dasana-Abdulai-CV.pdf with the new export.
export const CV_URL = "/cv/Abdul-Rashid-Dasana-Abdulai-CV.pdf";

export const profile = {
  name: "Abdul-Rashid Dasana Abdulai",
  roles: ["Physician", "Medical AI Researcher", "Digital Health Builder"],
  tagline: "Medicine × Artificial Intelligence × Health Systems",
  summary:
    "Doctor of Medicine working at the intersection of clinical medicine, artificial intelligence, and digital health, with a particular interest in responsible AI implementation in resource-constrained health systems.",
  location: "Havana, Cuba",
  origin: "Tamale, Ghana",
  email: "blaseeru@gmail.com",
  linkedin: "https://www.linkedin.com/in/blaseeru/",
  github: "https://github.com/laseeru",
};

export const heroFacts = [
  { label: "Degree", value: "Doctor of Medicine, Universidad de Ciencias Médicas de La Habana, 2026" },
  { label: "Distinction", value: "Título de Oro (Summa Cum Laude) · GPA 4.8 / 5.0" },
  { label: "Before medicine", value: "Computer Engineering, KNUST, Ghana" },
];

export const interests = [
  "Medical AI and AI evaluation",
  "Responsible AI implementation",
  "Digital health",
  "Health systems",
  "Medical education",
  "Resource-constrained settings",
];

export const path = [
  { period: "2018–2020", title: "Computer Engineering", detail: "Kwame Nkrumah University of Science and Technology, Kumasi, Ghana" },
  { period: "2020–2026", title: "Doctor of Medicine", detail: "Universidad de Ciencias Médicas de La Habana, Cuba" },
  { period: "2025", title: "AI implementation research", detail: "Mixed-methods research on AI adoption in Cuban healthcare" },
  { period: "2025", title: "MedEstudia", detail: "AI medical education platform · 3rd place, Monash Global Medical AI Challenge" },
  { period: "2026", title: "Graduated MD, Título de Oro", detail: "GPA 4.8 / 5.0 · Summa Cum Laude" },
];

export type CaseStudyRow = { label: string; body: string | string[] };

export const implementationStudy = {
  title: "Barriers to AI implementation in Cuban healthcare",
  meta: "Mixed-methods study · Universidad de Ciencias Médicas de La Habana · Jan 2025 – present",
  rows: [
    {
      label: "Problem",
      body: "Much of the evidence on clinical AI comes from well-resourced health systems. Far less is known about what decides whether AI can be adopted where connectivity, hardware, access to commercial AI services and training are limited.",
    },
    {
      label: "Context",
      body: "Cuban hospitals and medical faculties, studied from within as a medical student and research assistant.",
    },
    {
      label: "My role",
      body: "Student investigator and project originator working with faculty researchers: formulating the research question, designing the mixed-methods protocol and survey and interview instruments, preparing the ethics submission, and synthesising evidence for manuscripts and presentations.",
    },
    {
      label: "Approach",
      body: [
        "Ethics-approved mixed-methods design under faculty supervision",
        "Literature review and evidence synthesis on clinical AI implementation, digital health and medical education",
        "National clinician survey and semi-structured interview guide, designed in Spanish and English; data collection ongoing, conducted by the research team in Cuba",
        "Planned analysis across infrastructure, workflow fit, trust, training and governance",
      ],
    },
    {
      label: "Outcome",
      body: "Presented at the Jornada Científica Estudiantil (2025) and at the Youth Vision Assembly in Amsterdam (2025). The findings informed faculty discussions about adding an AI in Healthcare course to the medical curriculum.",
    },
  ] satisfies CaseStudyRow[],
};

export const institutionalContribution = {
  title: "Building institutional capacity for AI in medical education",
  meta: "Knowledge transfer · Faculty of medicine, Havana",
  rows: [
    {
      label: "Problem",
      body: "Whether AI becomes useful inside a medical faculty depends less on any single tool than on whether the people there understand it well enough to adapt it and keep it going.",
    },
    {
      label: "My role",
      body: "During medical school I proposed that the faculty explore how AI could support medical education, research and care, and worked with faculty members and physicians on how that could be done, including how this type of AI tool is built.",
    },
    {
      label: "Outcome",
      body: "The work continued after I graduated. Faculty members went on to develop an AI educational assistant, and a senior professor publicly credited me with inspiring the project and teaching the team how to build this kind of tool. The application is the faculty's own. My contribution was the initial proposal and the knowledge transfer that helped them build it.",
    },
  ] satisfies CaseStudyRow[],
};

export const medestudia = {
  title: "MedEstudia",
  subtitle: "AI-powered medical education and clinical guidance platform for Cuban medical students",
  meta: "Founder and developer · 2025",
  url: "https://medestudia-v2.vercel.app/",
  source: "https://github.com/laseeru/medestudia-v2",
  rows: [
    {
      label: "Problem",
      body: "Most AI study tools work poorly or not at all for students in Cuba: connections are slow, many models are blocked, and students often rely on outdated or hard-to-obtain textbooks.",
    },
    {
      label: "Context",
      body: "Cuban medical training is taught in Spanish and organised around preclinical subjects and clinical rotations. A useful tool has to follow that structure and keep working on limited connections.",
    },
    {
      label: "My role",
      body: "Founder and sole developer, responsible for the concept, the teaching approach, the design and the build. I entered it solo in the Monash Global Medical AI Challenge.",
    },
    {
      label: "Approach",
      body: [
        "Two learning pathways, with 10 preclinical subjects and 5 clinical rotations, each drilling down by body system",
        "Four study tools per topic: MCQ generator, quick quiz, topic explainer and chat",
        "A reflective chat that asks the student to reason before it explains (classify → reflect → hint → explain)",
        "A clinical guidelines module with structured, step-by-step protocols",
        "Spanish by default with an English option; the AI answers in the selected language",
        "Designed for low connectivity: progress is stored on the device and no login is required. DeepSeek V3.1 is called through a serverless proxy, which keeps API keys off the client and works around local restrictions on other model providers",
      ],
    },
    {
      label: "Outcome",
      body: "Placed 3rd among international competitors in the Monash Global Medical AI Challenge 2025 (Cao Lab × Nexus). The platform is live and publicly accessible.",
    },
  ] satisfies CaseStudyRow[],
  stack: ["React", "TypeScript", "Tailwind CSS", "DeepSeek V3.1", "Vercel serverless functions", "Supabase"],
};

export const gmdcai = {
  title: "GMDCAI",
  subtitle: "AI study assistant for the Ghana Medical and Dental Council licensing examination",
  meta: "In development · Since June 2025",
  rows: [
    {
      label: "Purpose",
      body: "Help Ghanaian medical graduates prepare for the GMDC licensing examination through question generation and feedback.",
    },
    {
      label: "Approach",
      body: "A working prototype built with open-source tools under resource constraints. Model outputs are evaluated for factual correctness, reasoning quality and alignment with evidence-based medicine.",
    },
  ] satisfies CaseStudyRow[],
};

export type PublicationStatus = "Published" | "Under review" | "Submitted";

export const publications: {
  authors: string;
  year: string;
  title: string;
  translation?: string;
  venue: string;
  status: PublicationStatus;
  url?: string;
}[] = [
  {
    authors: "Fundora Lliteras J, Betancourt Torres I, Mena Mugica R, Abdulai ARD",
    year: "2025",
    title: "La Inteligencia Artificial desde la concepción histórico cultural de Vygotsky hacia una mediación contextualizada",
    translation: "Artificial intelligence in education from Vygotsky's historical-cultural perspective, toward contextualised mediation",
    venue: "Submitted to Revista Varona",
    status: "Submitted",
  },
  {
    authors: "Abdulai ARD",
    year: "2025",
    title: "Inteligencia Artificial en Medicina Materno-Fetal: Avances y Desafíos en el Diagnóstico y Tratamiento",
    translation: "Artificial intelligence in maternal-fetal medicine: advances and challenges in diagnosis and treatment (literature review)",
    venue: "Manuscript",
    status: "Under review",
  },
  {
    authors: "Abdulai ARD",
    year: "2023",
    title: "Realidad y Ensueño: Travesía a través de la Confusión Onírica",
    venue: "Ciencia&Conciencia, 6(1), 83–87",
    status: "Published",
    url: "https://revcienciaconciencia.sld.cu/index.php/ciencia-conciencia/article/view/77",
  },
];

export const presentations = [
  {
    event: "Youth Vision Assembly 2025",
    place: "Amsterdam, Netherlands",
    date: "September 2025",
    detail: "Selected delegate (fully funded). Presented research on AI implementation in Cuban healthcare.",
  },
  {
    event: "Jornada Científica Estudiantil",
    place: "Universidad de Ciencias Médicas de La Habana",
    date: "2025",
    detail: "Presented results of the research on barriers to AI adoption in Cuban healthcare.",
  },
];

export const experience = [
  {
    role: "Research Assistant",
    org: "Universidad de Ciencias Médicas de La Habana",
    period: "Jan 2025 – present",
    points: [
      "Mixed-methods research on barriers to implementing AI-powered diagnostic systems in Cuban healthcare",
      "Designed the survey, interview guide, consent documents and ethics submission (approved); data collection ongoing",
      "Evidence synthesis on clinical AI implementation, digital health and medical education",
      "Manuscripts, ethics documentation and conference presentations with faculty researchers",
    ],
  },
  {
    role: "Founder and Developer",
    org: "MedEstudia",
    period: "2025",
    points: [
      "Designed and built an AI-powered study platform tailored to Cuban medical education",
      "Adapted large language models to work within Cuba's technological constraints",
    ],
  },
];

export const education = [
  {
    degree: "Doctor of Medicine (MD)",
    org: "Universidad de Ciencias Médicas de La Habana, Havana, Cuba",
    period: "Mar 2020 – Jul 2026",
    note: "GPA 4.8 / 5.0 · Título de Oro (Summa Cum Laude)",
  },
  {
    degree: "Computer Engineering (coursework)",
    org: "Kwame Nkrumah University of Science and Technology, Kumasi, Ghana",
    period: "Sep 2018 – Jul 2020",
  },
];

export const courses = [
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan · Coursera",
    date: "Aug 2025",
    verify: "https://coursera.org/verify/specialization/296BZH9R2BUU",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI and Stanford Online · Coursera",
    date: "Apr 2025",
    verify: "https://coursera.org/verify/TUX3VN8HQOWV",
  },
  {
    title: "Artificial Intelligence for Breast Cancer Detection",
    issuer: "Johns Hopkins University · Coursera",
    date: "Mar 2025",
    verify: "https://coursera.org/verify/SXUZYJ5C09OY",
  },
];

export const skills = [
  { group: "Clinical", items: ["Clinical reasoning", "Evidence-based medicine", "Differential diagnosis", "Medical education"] },
  {
    group: "AI / ML",
    items: ["Large language models", "Retrieval-augmented generation (RAG)", "Prompt engineering", "AI evaluation", "Embeddings and vector search (pgvector, ChromaDB)", "scikit-learn (coursework)"],
  },
  { group: "Research", items: ["Mixed-methods research", "Qualitative research", "Evidence synthesis", "Scientific writing", "Research ethics"] },
  { group: "Programming and platforms", items: ["Python", "JavaScript", "Microsoft Azure AI / Foundry", "DeepSeek API", "Git and GitHub"] },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Dagbani", level: "Native" },
  { name: "Spanish", level: "Advanced professional" },
  { name: "Arabic", level: "Beginner" },
];

export const recognition: {
  year: string;
  title: string;
  issuer: string;
  certificate?: { src: string; alt: string };
}[] = [
  { year: "2026", title: "Título de Oro (Summa Cum Laude)", issuer: "Universidad de Ciencias Médicas de La Habana" },
  {
    year: "2025",
    title: "3rd Place, Monash Global Medical AI Challenge",
    issuer: "Cao Lab × Nexus · ranked among international competitors",
    certificate: {
      src: "/certificates/monash-certificate.jpg",
      alt: "Certificate of Excellence for 3rd place in the Monash Global Medical AI Challenge 2025",
    },
  },
  { year: "2025", title: "Honorable Mention, Jornada Científica Estudiantil", issuer: "Universidad de Ciencias Médicas de La Habana" },
  {
    year: "2025",
    title: "Selected Delegate (fully funded), Youth Vision Assembly",
    issuer: "Amsterdam, Netherlands",
    certificate: {
      src: "/certificates/yva-certificate.jpg",
      alt: "Certificate of participation, Youth Vision Assembly 2025, Amsterdam, 19–22 September 2025",
    },
  },
  { year: "2020–2026", title: "Brilliant But Needy Scholarship", issuer: "Ghana Scholarship Secretariat" },
];

export const navItems = [
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Projects", id: "projects" },
  { label: "Publications", id: "publications" },
  { label: "Experience", id: "experience" },
  { label: "Recognition", id: "recognition" },
  { label: "Contact", id: "contact" },
];

export const mentorship = { title: "Mentee", org: "CKODON Foundation" };
