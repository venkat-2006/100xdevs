const COURSES = [
  {
    id: "webdev-devops-blockchain",
    title: "Complete Web Development + Devops + Blockchain Cohort",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
    syllabus: "https://blog.100xdevs.com/",
    startDate: "Starts 2nd August 2024",
    description: "In the Web Development Cohort, we'll be diving deep into the MERN stack from the basics. The goal is for you to be able to understand any MERN codebase out there. We'll also be diving into Devops, both basic and advance. In the Web3 Cohort, we'll be going 0-100 in the Solana",
    price: 5989,
    originalPrice: 8499,
    discount: "29.53%"
  },
  {
    id: "webdev-devops",
    title: "Complete Web development + Devops Cohort",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png",
    syllabus: "https://blog.100xdevs.com/",
    startDate: "Starts 2nd August 2024",
    description: "In the Web Development Cohort, we'll be diving deep into the MERN stack from the basics. The goal is for you to be able to understand any MERN codebase out there. We'll also be diving into Devops, both basic and advance",
    topics: ["Web Development", "Foundations", "Simple frontend, DOM", "Node.js/Bun/Cloudflare Runtime - Various JS"],
    price: 4989,
    originalPrice: 5999,
    discount: "16.84%"
  },
  {
    id: "web3-blockchain",
    title: "Complete Web3/Blockchain Cohort",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
    syllabus: "https://blog.100xdevs.com/",
    startDate: "Starts 2nd August 2024",
    description: "Web3 Basics: General Web3, ETH client side apps, adapters, Understanding EVM, Solana client side apps, adapters, Understanding the Data model on Solana. Web3 Advance: Solidity Basics (Remix), Solidity Advance, Writing Smart contracts in Solidity, Writing frontends for them, Rust Basics, Rust Advance, Data Model on Solana, Programs on Solana, Web2 + Web3",
    price: 4989,
    originalPrice: 5999,
    discount: "16.84%"
  },
  {
    id: "webdev",
    title: "Complete Web Development Cohort",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png",
    syllabus: "https://blog.100xdevs.com/",
    startDate: "Starts 2nd August 2024",
    description: "In the Web Development Cohort, we'll be diving deep into the MERN stack from the basics. The goal is for you to be able to understand any MERN codebase out there.",
    topics: ["Web Development", "Foundations", "Simple frontend, DOM", "Node.js/Bun/Cloudflare Runtime - Various JS runtimes", "HTTP Servers", "NoSQL Databases", "SQL Databases", "ORMs", "React", "Styling"],
    price: 2989,
    originalPrice: 3999,
    discount: "25.26%"
  },
  {
    id: "devops",
    title: "Complete Devops Cohort",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png",
    syllabus: "https://blog.100xdevs.com/",
    description: "In the Devops Cohort, we'll be diving deep into Devops, basic to advance",
    topics: ["Devops", "Linux / Bash scripting", "VMs/EC2/GCP VMs", "ASGs/MIG", "Containerization", "ECS (Warming up for k8s)", "Kubernetes", "Iac, Terraform", "Monitoring", "Package managers (helm)", "CI/CD in github", "Gitops", "CDNs and Object stores"],
    price: 2989,
    originalPrice: 3999,
    discount: "25.26%"
  },
  {
    id: "live-0-100",
    title: "Live 0-100 Complete",
    image: "https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
    description: "Go from 0 to 100 with Harkirat Singh Live. Learn basics to advanced MERN, Basics to advanced Devops, System design and build 3 projects through this journey",
    syllabus: "Complete 0-1 Syllabus Foundation: Foundation Javascript, async nature of JS, Node.js and its runtime, Databases (NoSQL/SQL), Mongo and Postgres deep dive, Typescript beginner to advance, Backend communication protocols, Express basic to",
    price: 5589,
    originalPrice: 7999,
    discount: "30.13%"
  },
  {
    id: "live-0-1",
    title: "Live 0-1",
    image: "https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610063563WhatsApp-Image-2023-11-08-at-8.31.14-PM.jpeg",
    description: "Complete 0-1 journey of coding Live with Harkirat Singh. Learn the MERN Stack Beginner to advanced with the basics of devops with open source contributions and building projects.",
    syllabus: "Foundation: Foundation Javascript, async nature of JS, Node.js and its runtime, Databases (NoSQL/SQL), Mongo and Postgres deep dive, Typescript beginner to advance, Backend communication protocols, Express basic to advance, ORMs",
    price: 3489,
    originalPrice: 5999,
    discount: "41.84%"
  },
  {
    id: "live-1-100",
    title: "Live 1-100",
    image: "https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610081268WhatsApp-Image-2023-11-08-at-8.31.13-PM.jpeg",
    description: "In the 1-100 journey, learn advanced Backend communication, Advanced Devops, System design and setup real world open source projects. Also build 2 capstone projects, a trading app and a zapier clone",
    syllabus: "Advanced Backend, System Design: Advanced backend communication, Message queues and PubSubs, Proxies, Load balancers, Redis Deep dive, Kafka Deep dive, Common Design Patterns in JS, Advanced DB concepts",
    price: 3989,
    originalPrice: 5999,
    discount: "33.51%"
  },
  {
    id: "live-opensource-1",
    title: "Live Full Stack Open Source Cohort 1 (Finished)",
    image: "https://appx-wsb-gcp-mcdn.akamai.net.in/paid_course3/2023-11-10-0.3523174787735883.jpeg",
    description: "Learn by doing open source contributions. The course is led by Harkirat Singh where we go through an intense 8-10 weeks of learning the MERN stack in depth, and contributing to one big codebase, understanding it in depths and the general ethics when contributing to an open source codebase.",
    syllabus: "The program is divided into 4 parts - Understanding",
    price: 3989,
    originalPrice: 4999,
    discount: "20.20%"
  }
];

export default COURSES;
