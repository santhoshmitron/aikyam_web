import { Code, Palette, LucideIcon } from "lucide-react";

export interface JobPosition {
  title: string;
  experience: string;
  openings: string;
  fullDescription: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  type: string;
}

export interface JobCategory {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  totalOpenings: string;
  positions: JobPosition[];
}

export const jobCategories: JobCategory[] = [
  {
    slug: "software-engineers",
    icon: Code,
    title: "Software Engineers",
    shortDescription: "Build scalable, high-performance systems that power our platform",
    totalOpenings: "2 positions",
    positions: [
      {
        title: "Senior Software Engineer",
        experience: "5+ Years",
        openings: "1 positions",
        fullDescription: "We are looking for a highly skilled Senior Software Engineer to design, develop, and optimize large-scale, mission-critical systems. You will lead complex technical initiatives, influence architectural decisions, and mentor engineers while delivering secure, scalable, and high-performance solutions.",
        requirements: [
          "Bachelor's or Master's degree in Computer Science, Engineering, or related field",
          "5+ years of professional software development experience",
          "Strong expertise in data structures, algorithms, and system design",
          "Proficiency in Java, Python, Go, C++, or similar backend technologies",
          "Experience building and scaling distributed systems and microservices",
          "Strong knowledge of relational and NoSQL databases",
          "Experience with RESTful APIs and event-driven architectures",
          "Familiarity with cloud platforms such as AWS, GCP, or Azure",
          "Strong debugging, analytical, and problem-solving skills"
        ],
        responsibilities: [
          "Design and implement scalable, resilient, and high-availability systems",
          "Lead architecture discussions and contribute to long-term technical strategy",
          "Develop and maintain backend services, APIs, and distributed systems",
          "Optimize system performance, reliability, and scalability",
          "Ensure adherence to coding standards, security practices, and compliance requirements",
          "Conduct code reviews and uphold high engineering quality standards",
          "Collaborate with Product, QA, DevOps, and Security teams",
          "Troubleshoot complex production issues and perform root cause analysis",
          "Mentor junior and mid-level engineers to support technical growth"
        ],
        location: "India (Remote / Hybrid)",
        type: "Full-time"
      },
      {
        title: "Software Engineer",
        experience: "2–5 Years",
        openings: "1 position",
        fullDescription: "We are seeking a skilled and motivated Software Engineer to join our engineering team. In this role, you will design, develop, and maintain scalable, high-performance systems that power our platform. You will collaborate closely with cross-functional teams to deliver secure, reliable, and innovative digital solutions.",
        requirements: [
          "Bachelor's or Master's degree in Computer Science, Engineering, or a related field",
          "2–5 years of professional software development experience",
          "Strong understanding of data structures, algorithms, and system design principles",
          "Proficiency in one or more programming languages such as Java, Python, Go, or C++",
          "Experience building RESTful APIs and working with microservices architecture",
          "Strong knowledge of relational and/or NoSQL databases (MySQL, PostgreSQL, MongoDB, etc.)",
          "Familiarity with Git and version control workflows",
          "Experience working in Agile/Scrum environments"
        ],
        responsibilities: [
          "Design, develop, test, and deploy scalable software solutions",
          "Build and maintain backend services, APIs, and system integrations",
          "Write clean, maintainable, and efficient code following industry best practices",
          "Participate in architecture discussions and technical design reviews",
          "Troubleshoot, debug, and optimize application performance",
          "Ensure system reliability, availability, and security",
          "Collaborate with Product, QA, and DevOps teams throughout the development lifecycle",
          "Contribute to CI/CD pipelines and automation initiatives",
          "Participate in code reviews and knowledge-sharing sessions"
        ],
        location: "India (Remote / Hybrid)",
        type: "Full-time"
      }
    ]
  },
  {
    slug: "designers",
    icon: Palette,
    title: "Designers",
    shortDescription: "Craft intuitive, engaging, and accessible digital experiences",
    totalOpenings: "1 position",
    positions: [
      {
        title: "UX Designer",
        experience: "2–5 Years",
        openings: "1 position",
        fullDescription: "We are seeking a creative and user-centric UX Designer to craft intuitive, engaging, and accessible digital experiences across our platforms. You will work closely with Product, Engineering, and Business teams to transform complex workflows into simple, elegant, and delightful user experiences.",
        requirements: [
          "Bachelor's degree in Design, Human-Computer Interaction (HCI), or a related field",
          "2–5 years of experience in UX/UI design for digital products",
          "Strong portfolio demonstrating user-centered design and problem-solving skills",
          "Proficiency in Figma, Sketch, Adobe XD, or similar design tools",
          "Experience creating wireframes, prototypes, and interaction flows",
          "Strong understanding of usability principles and accessibility standards",
          "Excellent communication and collaboration skills"
        ],
        responsibilities: [
          "Conduct user research, interviews, and usability testing to identify user needs and pain points",
          "Create user flows, journey maps, wireframes, and interactive prototypes",
          "Design intuitive and visually compelling interfaces for web and mobile platforms",
          "Collaborate with product managers and engineers to deliver user-centered solutions",
          "Contribute to and maintain design systems and UI guidelines",
          "Analyze user behavior, feedback, and metrics to continuously improve experiences",
          "Ensure accessibility, usability, and brand consistency across products",
          "Present design concepts and rationale clearly to stakeholders"
        ],
        location: "India (Remote / Hybrid)",
        type: "Full-time"
      }
    ]
  }
];

export function getJobCategoryBySlug(slug: string): JobCategory | undefined {
  return jobCategories.find(category => category.slug === slug);
}
