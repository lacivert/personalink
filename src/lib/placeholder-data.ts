
import type { CVData, LinkItem, BlogPost } from '@/types';
import { Github, Linkedin, Twitter, BookOpen, Briefcase, Code, Coffee, Dribbble, ExternalLink, FileText, GraduationCap, HardDrive, Home, Link, Mail, Newspaper, Rss, User, Youtube, Zap, PenToolIcon } from 'lucide-react';

export const placeholderCVData: CVData = {
  name: "Yasin Okumus",
  title: "Full Stack Developer & UI/UX Enthusiast",
  summary: "A highly motivated and results-oriented Full Stack Developer with +15 years of experience in designing, developing, and deploying web applications. Passionate about creating intuitive user experiences and leveraging modern technologies to solve complex problems. Proven ability to work effectively in agile environments and collaborate with cross-functional teams.",
  contact: {
    email: "yasin.okumus@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/yasinokumus",
    github: "github.com/yasinokumus",
    website: "yasinokumus.dev"
  },
  experience: [
    { id: "exp1", title: "Senior Software Engineer", company: "Tech Solutions Inc.", period: "Jan 2021 - Present", location: "San Francisco, CA", description: ["Led development of a new e-commerce platform, improving performance by 30%.", "Mentored junior developers and conducted code reviews.", "Collaborated with product managers to define project requirements."] },
    { id: "exp2", title: "Software Developer", company: "Innovatech Ltd.", period: "Jun 2018 - Dec 2020", location: "Austin, TX", description: ["Developed and maintained features for a SaaS application using React and Node.js.", "Participated in the full software development lifecycle.", "Contributed to improving code quality and test coverage."] },
  ],
  education: [
    { id: "edu1", institution: "State University", degree: "M.S. in Computer Science", period: "2016 - 2018", description: ["Thesis on Machine Learning applications in web development."] },
    { id: "edu2", institution: "Tech College", degree: "B.S. in Software Engineering", period: "2012 - 2016" },
  ],
  skills: [
    { id: "skill1", name: "JavaScript (ES6+)", category: "Programming Languages" },
    { id: "skill2", name: "TypeScript", category: "Programming Languages" },
    { id: "skill3", name: "Python", category: "Programming Languages" },
    { id: "skill4", name: "React / Next.js", category: "Frontend" },
    { id: "skill5", name: "Vue.js", category: "Frontend" },
    { id: "skill6", name: "Node.js / Express", category: "Backend" },
    { id: "skill7", name: "RESTful APIs", category: "Backend" },
    { id: "skill8", name: "GraphQL", category: "Backend" },
    { id: "skill9", name: "SQL (PostgreSQL, MySQL)", category: "Databases" },
    { id: "skill10", name: "NoSQL (MongoDB)", category: "Databases" },
    { id: "skill11", name: "Docker & Kubernetes", category: "DevOps" },
    { id: "skill12", name: "AWS / GCP", category: "Cloud" },
    { id: "skill13", name: "Figma / Sketch", category: "Design" },
    { id: "skill14", name: "Agile Methodologies", category: "Project Management" },
  ],
  projects: [
    { id: "proj1", name: "Personal Portfolio Website", description: "This very website, built with Next.js, Tailwind CSS, and ShadCN UI.", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"], link: "https://github.com/yasinokumus/personallink" },
    { id: "proj2", name: "Task Management App", description: "A full-stack task management application with user authentication and real-time updates.", technologies: ["React", "Node.js", "MongoDB", "Socket.io"], link: "https://github.com/yasinokumus/taskmaster" },
  ]
};

export const placeholderLinks: LinkItem[] = [
  { id: "link1", title: "My GitHub", url: "https://github.com/yasinokumus", description: "Check out my projects and contributions.", icon: Github, category: "Professional" },
  { id: "link2", title: "My LinkedIn", url: "https://linkedin.com/in/yasinokumus", description: "Connect with me professionally.", icon: Linkedin, category: "Professional" },
  { id: "link3", title: "My Twitter / X", url: "https://twitter.com/yasinokumus", description: "Follow my thoughts and updates.", icon: Twitter, category: "Social" },
  { id: "link4", title: "Next.js Documentation", url: "https://nextjs.org/docs", description: "The React Framework for Production.", icon: BookOpen, category: "Resources" },
  { id: "link5", title: "Tailwind CSS", url: "https://tailwindcss.com", description: "Rapidly build modern websites without ever leaving your HTML.", icon: Code, category: "Resources" },
  { id: "link6", title: "ShadCN UI", url: "https://ui.shadcn.com", description: "Beautifully designed components that you can copy and paste into your apps.", icon: HardDrive, category: "Resources" },
  { id: "link7", title: "Awwwards", url: "https://awwwards.com", description: "Inspirational websites.", icon: Dribbble, category: "Inspiration" },
  { id: "link8", title: "Indie Hackers", url: "https://indiehackers.com", description: "Work together to build profitable online businesses.", icon: Briefcase, category: "Community" },
  { 
    id: "link9", 
    title: "1GB Freebyte 16TL", 
    url: "https://www.r10.net/gsm-operatorleri/4421448-1-gb-internet-simdi-sadece-16-tl-her-hatta-gonderim-mevcut.html", 
    description: "Buy Freebyte for 1GB to 16TL", 
    icon: Zap, 
    category: "Utilities" 
  },
];

export const placeholderBlogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15",
    date: "2024-07-28T10:00:00Z",
    excerpt: "A comprehensive guide to setting up your first Next.js 15 project and exploring its new features.",
    content: "<article class='prose dark:prose-invert prose-teal max-w-none'><p>Next.js 15 is here, and it brings a host of exciting new features and improvements. In this post, we'll walk through the process of creating a new Next.js 15 application, explore some of the key changes, and build a simple example page.</p><h2>Installation</h2><p>To get started, you'll need Node.js installed on your system. Then, you can create a new Next.js app using the following command:</p><pre><code>npx create-next-app@latest my-next15-app</code></pre><h2>Key Features</h2><ul><li>Improved Turbopack performance</li><li>New experimental React Compiler</li><li>Enhanced Server Actions</li></ul><p>Stay tuned for more in-depth tutorials on leveraging these features!</p></article>",
    author: "Yasin Okumus",
    tags: ["Next.js", "JavaScript", "Web Development", "Tutorial"],
    imageUrl: "https://picsum.photos/seed/nextjs15/800/400",
    imageAlt: "Abstract representation of Next.js 15",
    imageHint: "technology abstract"
  },
  {
    slug: "mastering-tailwind-css-layouts",
    title: "Mastering Tailwind CSS Layouts",
    date: "2024-07-15T14:30:00Z",
    excerpt: "Learn how to create complex and responsive layouts with ease using Tailwind CSS utility classes.",
    content: "<article class='prose dark:prose-invert prose-teal max-w-none'> <p>Tailwind CSS has revolutionized the way we approach CSS. Its utility-first approach allows for rapid development and highly customizable designs. This post focuses on mastering layouts, covering Flexbox, Grid, and responsive design techniques.</p><h2>Flexbox</h2><p>Tailwind provides a rich set of Flexbox utilities. For example, creating a row of centered items is as simple as:</p><pre><code>&lt;div class=\"flex items-center justify-center\"&gt;...&lt;/div&gt;</code></pre><h2>CSS Grid</h2><p>For more complex two-dimensional layouts, CSS Grid is invaluable. Tailwind makes it easy:</p><pre><code>&lt;div class=\"grid grid-cols-3 gap-4\"&gt;...&lt;/div&gt;</code></pre><p>We'll explore practical examples and common patterns to make you a Tailwind layout pro.</p></article>",
    author: "Yasin Okumus",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Web Design"],
    imageUrl: "https://picsum.photos/seed/tailwindcss/800/400",
    imageAlt: "Tailwind CSS logo and abstract design",
    imageHint: "code design"
  },
  {
    slug: "the-importance-of-ui-ux-in-modern-web",
    title: "The Importance of UI/UX in Modern Web Development",
    date: "2024-06-20T09:00:00Z",
    excerpt: "An exploration of why user interface and user experience are critical for the success of any web application.",
    content: "<article class='prose dark:prose-invert prose-teal max-w-none'><p>In today's competitive digital landscape, a functional application is not enough. Users expect seamless, intuitive, and enjoyable experiences. This is where UI (User Interface) and UX (User Experience) design come into play.</p><h2>What is UI?</h2><p>UI focuses on the visual aspects and interactivity of a product. It's about how the product looks and feels.</p><h2>What is UX?</h2><p>UX is about the overall experience a user has with the product. It encompasses usability, accessibility, and desirability.</p><p>Investing in good UI/UX can lead to increased user satisfaction, higher conversion rates, and a stronger brand reputation.</p></article>",
    author: "Yasin Okumus",
    tags: ["UI", "UX", "Web Design", "Product Development"],
    imageUrl: "https://picsum.photos/seed/uiux/800/400",
    imageAlt: "Illustration of UI/UX design process",
    imageHint: "design interface"
  },
];

export const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/links', label: 'Links', icon: Link },
  { href: '/cv', label: 'CV', icon: FileText },
];

export const socialLinks = [
  { href: "https://github.com/yasinokumus", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/yasinokumus", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/yasinokumus", label: "Twitter", icon: Twitter },
];


    
