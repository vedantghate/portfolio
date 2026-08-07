import { Project, SkillCategory, HeroInfo, Experience, TimelineItem } from '../models/profile.model';

export const HERO_DATA: HeroInfo = {
  name: 'Vedant Ghate',
  role: 'Software Engineer',
  tagline: 'Distributed Systems & Full-Stack',
  summary: 'Software Engineer specializing in distributed systems and full-stack development, with experience designing and owning large-scale, cloud-native platforms and applications. Proven track record of driving migrations, improving system reliability, and delivering high-impact solutions at scale.',
  email: 'ghatevedant@gmail.com',
  linkedin: 'linkedin.com/in/ghatevedant',
  github: 'github.com/vedantghate'
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    duration: 'Jul 2024 - Present',
    location: 'Bellevue, WA',
    skills: ['Java', 'TypeScript', 'AWS CDK', 'CloudWatch', 'Amazon Bedrock', 'Microservices', 'RAG'],
    details: [
      "Led design and launch of Delivery Status and Address plugins on Amazon's Your Orders page, migrating to a federated microservices architecture serving hundreds of millions of orders; redesigned the Retail Order Internal Model to reduce redundant downstream service calls by 30%.",
      "Designed and executed a phased migration strategy with shadow testing, enabling zero-downtime rollout while transitioning Tier-1 services handling high-volume order traffic.",
      "Built and scaled monitoring infrastructure for a Tier-1 service across 3 AWS regions using AWS CDK and CloudWatch, improving system observability and reducing incident detection time.",
      "Resolved a P0 production issue impacting 1.9% of orders, restoring system stability; mitigated a severe XSS vulnerability in payment display flows; fixed order processing bug to unblock marketplace launch.",
      "Developed a RAG-based knowledge platform using Amazon Bedrock with AI agents to automate incident follow-ups, driving GenAI adoption across 10+ engineering teams."
    ],
    isFlipped: false
  },
  {
    company: 'KPMG',
    role: 'Senior Software Engineer',
    duration: 'Jun 2023 - Jul 2024',
    location: 'Orlando, FL',
    skills: ['Angular', '.NET Core', 'SQL', 'Azure', 'Application Insights', 'CSOM'],
    details: [
      "Led end-to-end development of enterprise Mergers & Acquisitions platforms using Angular, .NET Core, SQL, and Azure, designing scalable workflows for processing large financial datasets across multiple enterprise client engagements.",
      "Architected SharePoint provisioning workflows using CSOM, facilitating document management and automating environment setup, and reducing manual configuration time by 40-60%.",
      "Improved system performance by instrumenting applications with Azure Application Insights, enabling proactive bottleneck detection and improving system reliability in production environments.",
      "Collaborated with cross-functional stakeholders to translate complex business requirements into scalable technical solutions, driving iterative delivery in an Agile environment."
    ],
    isFlipped: false
  },
  {
    company: 'Course5 Intelligence',
    role: 'Analyst & Consultant',
    duration: 'Jul 2020 - Aug 2021',
    location: 'Mumbai, India',
    skills: ['Angular', 'D3.js', 'Highcharts', 'Nx', 'Module Federation', 'Django', 'MongoDB'],
    details: [
      "Core contributor to Course5 Compete, a competitive intelligence SaaS platform; built advanced data visualizations using Angular, D3.js, Highcharts, and Material UI integrated with REST APIs.",
      "Developed reusable micro-frontend libraries using Nx & Module Federation, driving uniform UX across products.",
      "Built an article aggregation platform using Angular, Django, and MongoDB, accelerating client delivery timelines by reducing data aggregation and processing latency."
    ],
    isFlipped: false
  },
  {
    company: 'Accenture Technology',
    role: 'Application Development Associate',
    duration: 'Oct 2018 - Jun 2020',
    location: 'Pune, India',
    skills: ['AngularJS', 'Spring Boot', 'MySQL', 'Jenkins', 'Python', 'Machine Learning'],
    details: [
      "Developed and maintained a large-scale insurance sales portal across 12 geographies using AngularJS, Spring Boot microservices, and MySQL.",
      "Achieved 90%+ unit test coverage via TDD practices; managed end-to-end CI/CD pipelines using Jenkins.",
      "Built a Python-based intelligent automation tool using ML algorithms, reducing manual effort by 97%."
    ],
    isFlipped: false
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 'edu-ucf',
    title: 'M.S. Computer Science (specialization in AI)',
    subtitle: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'Aug 2021 - May 2023',
    bullets: ['GPA: 4.0/4.0']
  },
  {
    id: 'edu-sppu',
    title: 'B.E. Computer Science',
    subtitle: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: 'Aug 2014 - Jun 2018',
    bullets: ['First Class with Distinction']
  }
];

export const SKILLS: SkillCategory[] = [
  { category: 'Languages', skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#'] },
  { category: 'Frontend', skills: ['React', 'Angular', 'HTML', 'CSS', 'D3.js', 'Highcharts'] },
  { category: 'Backend', skills: ['Node.js', 'Django', 'Flask', '.NET Core', 'NestJS', 'Spring Boot', 'Amazon Datapath'] },
  { category: 'Cloud & DevOps', skills: ['AWS (CDK, CloudWatch, Bedrock)', 'Azure', 'CI/CD', 'Jenkins', 'Git'] },
  { category: 'AI/ML', skills: ['RAG', 'LLMs', 'Amazon Bedrock'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'OpenSearch', 'Elasticsearch'] }
];

export const PROJECTS: Project[] = [
  {
    title: 'UScholar',
    description: 'Interactive visual analytics platform for exploring university datasets.',
    techStack: ['Angular', 'D3.js'],
    link: 'uscholar.vercel.app'
  },
  {
    title: 'Carbon Footprint Calculator',
    description: 'Full-stack app for tracking CO2 emissions.',
    techStack: ['Angular', 'Node.js'],
    link: 'cfc-env.vercel.app'
  },
  {
    title: 'Distributed Load Balancer',
    description: 'Render-farm style task distribution.',
    techStack: ['Python'],
    publication: 'Published in IEI Technical Journal Vol. 41, Nov. 2017'
  }
];