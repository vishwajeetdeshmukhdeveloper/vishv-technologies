export const siteConfig = {
  name: "Vishv Technologies",
  shortName: "Vishv",
  tagline: "Building the Future Through Technology",
  description:
    "Vishv Technologies empowers businesses and individuals through innovative software, practical education, and a thriving developer community.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vishvtech.io",
  email: "vishvtechnologies.info@gmail.com",
  phone: "+91 93092 35319",
  address: {
    streetAddress: "Satwashila, Sambhaji Nagar",
    addressLocality: "Satara",
    addressRegion: "Maharashtra",
    postalCode: "415004",
    addressCountry: "IN",
  },
  social: {
    github: "https://github.com/vishvtechnologies",
    linkedin: "https://www.linkedin.com/company/vishv-technologies/",
    twitter: "https://twitter.com/vishvtechnologies",
    instagram: "https://instagram.com/vishvtechnologies",
    discord: "https://discord.gg/9zGuecz6CK",
  },
  keywords: [
    "Vishv Technologies",
    "software development",
    "web development",
    "professional courses",
    "developer community",
    "Next.js development",
    "TypeScript",
    "AI solutions",
    "cloud DevOps",
    "tech education",
  ],
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#community", label: "Community" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Community Members" },
  { value: 10, suffix: "+", label: "Learning Resources" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

export const services = [
  {
    icon: "💻",
    variant: "blue" as const,
    title: "Software Development",
    description:
      "Custom enterprise software built with clean architecture, scalable backends, and maintainable codebases that evolve with your business.",
  },
  {
    icon: "🌐",
    variant: "purple" as const,
    title: "Web Development",
    description:
      "Performant, beautiful websites and web apps crafted with Next.js, TypeScript, and modern tooling — pixel-perfect across all devices.",
  },
  {
    icon: "📱",
    variant: "cyan" as const,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with Flutter, delivering native performance and stunning UI for iOS and Android simultaneously.",
  },
  {
    icon: "🤖",
    variant: "blue" as const,
    title: "AI Solutions",
    description:
      "Intelligent automation, machine learning integrations, and LLM-powered products that give your business a decisive competitive edge.",
  },
  {
    icon: "☁️",
    variant: "purple" as const,
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, and Azure architectures with CI/CD pipelines, containerization, and infrastructure-as-code for bulletproof deployments.",
  },
  {
    icon: "🎨",
    variant: "cyan" as const,
    title: "UI/UX Design",
    description:
      "Human-centered design that converts — from wireframes to high-fidelity prototypes, we craft interfaces users love.",
  },
  {
    icon: "🔗",
    variant: "blue" as const,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs built for reliability, security, and developer experience — with full documentation and testing suites.",
  },
  {
    icon: "⚙️",
    variant: "purple" as const,
    title: "Automation",
    description:
      "Workflow automation that eliminates repetitive tasks and connects your tools — saving your team hundreds of hours each month.",
  },
  {
    icon: "🛡️",
    variant: "cyan" as const,
    title: "Security & Compliance",
    description:
      "End-to-end security audits, penetration testing, and compliance implementations that protect your data and your users.",
  },
] as const;

export const learningItems = [
  {
    icon: "🎓",
    variant: "blue" as const,
    title: "Professional Courses",
    description:
      "Industry-aligned courses from foundational programming to advanced system design, taught by working professionals.",
  },
  {
    icon: "🗺️",
    variant: "purple" as const,
    title: "Career Roadmaps",
    description:
      "Structured learning paths for frontend, backend, fullstack, AI/ML, and DevOps — from zero to job-ready.",
  },
  {
    icon: "🏆",
    variant: "cyan" as const,
    title: "Certifications",
    description:
      "Industry-recognized certificates that validate your skills to employers and open doors to better opportunities.",
  },
  {
    icon: "📡",
    variant: "blue" as const,
    title: "Live Classes",
    description:
      "Real-time sessions with instructors and cohorts — ask questions, get feedback, and learn together.",
  },
  {
    icon: "⚡",
    variant: "purple" as const,
    title: "Coding Challenges",
    description:
      "Daily challenges and weekly contests that sharpen your problem-solving and prepare you for technical interviews.",
  },
  {
    icon: "🚀",
    variant: "cyan" as const,
    title: "Project-Based Learning",
    description:
      "Build portfolio-worthy projects with guided mentorship — real apps, real code, real results.",
  },
] as const;

export const communityItems = [
  {
    icon: "💬",
    variant: "blue" as const,
    title: "Discord Community",
    description:
      "An active server of 500+ developers — ask questions, share projects, find collaborators, and land opportunities.",
  },
  {
    icon: "🏗️",
    variant: "purple" as const,
    title: "Hackathons",
    description:
      "Quarterly hackathons with real prizes, industry judges, and the chance to build something extraordinary under pressure.",
  },
  {
    icon: "🌍",
    variant: "cyan" as const,
    title: "Open Source",
    description:
      "Contribute to and maintain open source projects — build your GitHub profile and give back to the community.",
  },
  {
    icon: "🎙️",
    variant: "blue" as const,
    title: "Workshops",
    description:
      "Monthly hands-on workshops led by CTOs, senior engineers, and product leaders from top tech companies.",
  },
  {
    icon: "🤝",
    variant: "purple" as const,
    title: "Mentorship",
    description:
      "1-on-1 mentorship with vetted industry professionals who've shipped products at scale and know how to guide careers.",
  },
  {
    icon: "🌐",
    variant: "cyan" as const,
    title: "Global Networking",
    description:
      "Connect with developers, designers, and founders across 40+ countries — your next collaborator or co-founder is here.",
  },
] as const;

export const features = [
  {
    num: "01",
    title: "Innovation First",
    description:
      "We don't follow trends — we identify them early and build ahead of the curve. Every project explores what's possible, not just what's precedented.",
  },
  {
    num: "02",
    title: "Speed Without Compromise",
    description:
      "Rapid delivery cycles that don't sacrifice quality. Our agile process means you see working software in days, not months.",
  },
  {
    num: "03",
    title: "Modern Technology Stack",
    description:
      "We work exclusively with proven, current technologies — no legacy baggage. Your codebase will be maintainable and future-proof from day one.",
  },
  {
    num: "04",
    title: "Security by Design",
    description:
      "Security isn't an afterthought — it's architected in from line one. We follow OWASP, implement encryption by default, and audit continuously.",
  },
  {
    num: "05",
    title: "Built to Scale",
    description:
      "Architecture that handles 100 users as gracefully as 10 million. We design for your five-year vision, not just your current load.",
  },
  {
    num: "06",
    title: "Expert Human Team",
    description:
      "Real senior engineers, not offshore juniors. Every team member has shipped production products and knows what \"done\" actually means.",
  },
] as const;

export const projects = [
  {
    icon: "🌿",
    color: "green",
    title: "SmartAgri",
    description: "AI Powered Disease Detection and Crop Management System for Farmers.",
    bgGradient: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 60%)",
    image: "/portfolio/industry-solutions.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/SmartAgri",
  },
  {
    icon: "🤖",
    color: "purple",
    title: "Alpha",
    description: "AI-Powered Personal Assistant Robot With ESP32 and LLM Integration.",
    bgGradient: "radial-gradient(circle at top right, rgba(124, 58, 237, 0.15), transparent 60%)",
    image: "/portfolio/ai-solutions.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Alpha-Robot-Companion",
  },
  {
    icon: "📊",
    color: "cyan",
    title: "ExpensePro",
    description: "Expense Tracking and Budgeting Web Application for Personal Finance Management.",
    bgGradient: "radial-gradient(circle at top right, rgba(34, 211, 238, 0.15), transparent 60%)",
    image: "/portfolio/business-software.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Expense-Tracker-App",
  },
  {
    icon: "✍🏻",
    color: "blue",
    title: "Signify",
    description: "Signature Replication Tool for Digital Document Authentication and Verification.",
    bgGradient: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 60%)",
    image: "/portfolio/mobile-apps.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Photo-Replication-System",
  },
  {
    icon: "🌿",
    color: "yellow",
    title: "SumHealth",
    description: "Summary Generation For Healthcare Reports Using NLP and AI Techniques.",
    bgGradient: "radial-gradient(circle at top right, rgba(74, 222, 128, 0.15), transparent 60%)",
    image: "/portfolio/sumhealth.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Summary-Generater",
  },
  {
    icon: "🎓",
    color: "pink",
    title: "Pefind",
    description: "Early Disease Risk Prediction and Health Monitoring Platform Using AI",
    bgGradient: "radial-gradient(circle at top right, rgba(236, 72, 153, 0.15), transparent 60%)",
    image: "/portfolio/learning-platform.png",
    link: "https://github.com/vishwajeetdeshmukhdeveloper/Early-Disease-Detection-App",
  },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "Firebase",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "TensorFlow",
  "Tailwind CSS",
  "Three.js",
  "Prisma",
  "Stripe",
  "Supabase",
] as const;

export const testimonials = [
  {
    text: "Vishv Technologies didn't just build our product — they transformed our entire technical vision. The team's depth of knowledge and commitment to quality is unmatched.",
    initials: "AK",
    name: "Aryan Kapoor",
    role: "CTO, NexaFinance",
    gradient: "from-blue to-purple",
  },
  {
    text: "The learning platform they built for us enrolled 3,000 students in the first month. It was beautiful, fast, and exactly what we envisioned. Exceptional execution.",
    initials: "PS",
    name: "Priya Sharma",
    role: "Founder, EduPath",
    gradient: "from-purple to-cyan",
  },
  {
    text: "I went from zero coding knowledge to a full-time developer role in 9 months. The Vishv curriculum and mentorship completely changed my career trajectory.",
    initials: "RM",
    name: "Rohan Mehta",
    role: "Software Engineer, Razorpay",
    gradient: "from-cyan to-blue",
  },
] as const;

export const faqItems = [
  {
    question: "What services does Vishv Technologies offer?",
    answer:
      "We offer software development, web and mobile apps, AI solutions, cloud DevOps, UI/UX design, API development, automation, and security compliance.",
  },
  {
    question: "Do you provide professional learning courses?",
    answer:
      "Yes. Our learning platform includes professional courses, career roadmaps, certifications, live classes, coding challenges, and project-based learning.",
  },
  {
    question: "How can I join the Vishv developer community?",
    answer:
      "Join our Discord community, participate in hackathons, contribute to open source, attend workshops, and connect with mentors worldwide.",
  },
  {
    question: "How do I start a project with Vishv Technologies?",
    answer:
      "Contact us through our contact form with your project details. Our team will respond within 24 hours to schedule a discovery call.",
  },
] as const;

export const contactServiceOptions = [
  { value: "software", label: "Software Development" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App" },
  { value: "ai", label: "AI Solutions" },
  { value: "learning", label: "Learning Platform" },
  { value: "other", label: "Something Else" },
] as const;

export const footerLinks = {
  company: [
    { href: "/#about", label: "About Us" },
    { href: "/#work", label: "Our Work" },
    { href: "/#why", label: "Why Vishv" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/#services", label: "Software Dev" },
    { href: "/#services", label: "Web Apps" },
    { href: "/#services", label: "Mobile" },
    { href: "/#services", label: "AI Solutions" },
    { href: "/#services", label: "Cloud" },
  ],
  community: [
    { href: "/#community", label: "Courses" },
    { href: siteConfig.social.discord, label: "Discord", external: true },
    { href: "/#community", label: "Hackathons" },
    { href: "/#community", label: "Mentorship" },
    { href: "/#community", label: "Open Source" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookies" },
  ],
} as const;
