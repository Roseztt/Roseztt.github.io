// Everything about you that shows on the site lives here, so updating the site is mostly editing this file.

export const profile = {
  name: 'Rose Zhao',
  eyebrow: 'Computer Science · Northeastern University',
  tagline: 'I keep big systems running and build AI tools on top of them.',
  intro:
    'Computer science student at Northeastern University in Boston. Most recently a Site Reliability Engineer intern at ByteDance / TikTok.',
  email: 'zhao.ruoyu@northeastern.edu',
  linkedin: 'https://www.linkedin.com/in/ruoyu-zhaott/',
  github: 'https://github.com/Roseztt',
  githubUser: 'Roseztt',
};

// The cream stretch between the first screen and the sea.
export const glance = [
  { value: '25,000', label: 'GPUs kept healthy across 3,100+ Linux machines at TikTok' },
  { value: '1,400+', label: 'infrastructure and GPU faults found and resolved' },
  { value: '70%+', label: 'of student questions answered by the RAG assistant I built' },
  { value: '4.0', label: 'GPA in Computer Science at Northeastern' },
];

// The "Now" panel. Keep it short and current.
export const now = [
  { label: 'Studying', value: 'Computer Science at Northeastern, class of 2028' },
  { label: 'Just wrapped', value: 'Site reliability internship at ByteDance / TikTok' },
  { label: 'Looking for', value: 'Spring 2027 co-op roles' },
  { label: 'Building', value: 'bloom-day, an iOS task app, and this website' },
];

export const about = {
  story: [
    "I'm a computer science student at Northeastern University in Boston, graduating in May 2028 with a 4.0 GPA.",
    "I'm happiest close to the infrastructure: Linux machines, GPU fleets, and the tools that find what's broken. Most recently I spent six months as a Site Reliability Engineer intern at ByteDance / TikTok, supporting incident response for 3,100+ machines and 25,000 GPUs.",
    "I also like building AI applications on top of that infrastructure. As a teaching assistant I built a RAG assistant that answered most student questions on its own, and I've built retrieval pipelines for medical records with Hugging Face, LangChain and PGVector.",
  ],
  facts: [
    { label: 'Based in', value: 'Boston, MA' },
    { label: 'Studying', value: 'B.S. Computer Science' },
    { label: 'Graduating', value: 'May 2028' },
  ],
  // Things you enjoy outside of code. The "Beyond the code" card only appears once this has items,
  // e.g. { title: 'Photography', text: 'Mostly film, mostly around Boston.' }
  interests: [] as { title: string; text: string }[],
};

export const education = {
  school: 'Northeastern University',
  degree: 'B.S. in Computer Science',
  place: 'Boston, MA',
  dates: 'Expected May 2028',
  gpa: '4.0 / 4.0',
  coursework: [
    'Computer Systems', 'Algorithms and Data', 'Database Management', 'Object-Oriented Design', 'Data Science',
    'Advanced Math Reasoning', 'Discrete Structures', 'Advanced Linear Algebra', 'Fundamentals of Cybersecurity',
  ],
};

export const skills = [
  { label: 'Languages', items: ['Python', 'Java', 'Go', 'C++', 'C', 'JavaScript', 'SQL', 'Shell', 'R', 'Racket'] },
  { label: 'Systems & tools', items: ['Linux/UNIX', 'Docker', 'Git', 'FastAPI', 'PostgreSQL', 'React', 'Supabase', 'OCI', 'JUnit'] },
  { label: 'AI / ML', items: ['LLMs', 'RAG', 'LangChain', 'Hugging Face', 'TensorFlow', 'PGVector', 'ChromaDB', 'Pinecone', 'Ollama'] },
];

export const experience = [
  {
    company: 'ByteDance / TikTok',
    role: 'Site Reliability Engineer Intern',
    place: 'San Jose, CA',
    dates: 'Jan 2026 – Jul 2026',
    highlight: 'Reliability and incident response for 3,100+ machines and 25,000 GPUs.',
    points: [
      'Supported reliability and incident response for 3,100+ Linux machines and 25,000 GPUs, helping identify and resolve 1,400+ infrastructure and GPU faults.',
      'Built Python and Shell diagnostic tools for H100, B200, B300 and GB200 systems, improving fault detection efficiency by 30%.',
      'Developed a centralized GPU break-fix workflow with API integration and repair tracking, increasing team efficiency by 10%.',
      'Analyzed Linux logs and system fault data with SQL to find failure patterns, perform root-cause analysis and debug live infrastructure issues.',
    ],
  },
  {
    company: 'Northeastern University, Khoury College',
    role: 'Teaching Assistant',
    place: 'Boston, MA',
    dates: 'Sep 2025 – Dec 2025',
    highlight: 'Built a RAG assistant that answered 70%+ of student questions.',
    points: [
      'Supported 100+ students in a cybersecurity course through technical guidance and one-on-one help.',
      'Built and deployed a RAG-based AI assistant that resolved 70%+ of student queries, reducing instructor workload.',
      'Reviewed student code and assignments and taught technical concepts to students with different experience levels.',
    ],
  },
  {
    company: 'OneSource Cloud',
    role: 'Software Engineer Intern',
    place: 'Dallas, TX',
    dates: 'May 2023 – Aug 2023',
    highlight: 'AI-powered server monitoring and LSTM performance forecasting.',
    points: [
      'Built and deployed an AI-powered server monitoring tool to automate infrastructure health tracking and operational workflows.',
      'Developed an LSTM Seq2Seq forecasting model in TensorFlow to predict server performance, enabling proactive resource management.',
      'Built a Python application using Hugging Face, Docker and PGVector for student training and patient Q&A.',
      'Designed data storage visualizations that improved visibility into system usage and trends.',
    ],
  },
];

// Featured projects. Your public GitHub repos are added to the Projects page automatically;
// set `repo` to link a featured project to its repo (it then won't be listed twice).
export const projects = [
  {
    slug: 'medical-rag-agent',
    title: 'Medical AI RAG Agent',
    summary: 'A retrieval-augmented assistant with separate workflows for student training questions and patient-specific queries over medical records.',
    points: [
      'Built a Python and FastAPI app with separate workflows for training questions and patient-specific queries.',
      'Designed an end-to-end RAG pipeline with Hugging Face models, LangChain embeddings and PGVector for scalable retrieval.',
      'Built an admin portal for uploading, downloading and managing documents and queries.',
    ],
    tags: ['Python', 'LLMs', 'FastAPI', 'Docker', 'PGVector'],
  },
  {
    slug: 'datacenter-pm',
    title: 'Datacenter Project Management System',
    summary: 'A full-stack app for datacenter project scheduling, equipment assets, consumables and approval workflows.',
    points: [
      'Worked on backend APIs and database workflows for scheduling, SOW management, approvals, archiving and role-based permissions.',
      'Implemented and tested asset management, file uploads, task workflows and deployment configuration.',
      'Reviewed, debugged and integrated AI-generated code into the application.',
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
  },
  {
    slug: 'bloom-day',
    title: 'bloom-day',
    summary: 'A soft, encouraging iOS task app: reminders that actually nag you, checklists, Apple Calendar, an RSS reader, and plain-language task creation with Apple’s on-device model.',
    points: [],
    tags: ['Swift', 'SwiftUI', 'SwiftData', 'iOS'],
    repo: 'bloom-day',
  },
  {
    slug: 'this-website',
    title: 'This website',
    summary: 'An Astro site with a hand-built SVG wave that you dive into as you scroll, and that washes over the screen between pages.',
    points: [],
    tags: ['Astro', 'TypeScript', 'SVG'],
    repo: 'Roseztt.github.io',
  },
];

// Résumé PDF to offer for download, placed in /public (e.g. '/resume.pdf').
// Left empty on purpose: the PDF you have includes your phone number, which shouldn't go on a public site.
export const resumePdf = '';
