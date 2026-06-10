import {
  AppWindow,
  BarChart3,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Brush,
  CalendarCheck,
  Cloud,
  Code2,
  FileText,
  Gauge,
  Globe2,
  Headphones,
  LineChart,
  Lock,
  Megaphone,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TicketPercent,
  Users,
  WalletCards
} from "lucide-react";

export const company = {
  name: "HA Developers",
  tagline: "Transforming Ideas Into Digital Success",
  email: "official.hadevelopers@gmail.com",
  phone: "03140283476",
  whatsapp: "923140283476",
  hours: "Mon - Sat, 10:00 AM - 8:00 PM",
  address: "Pakistan - Serving clients worldwide"
};

export const owner = {
  name: "Hanzala Arain",
  role: "Founder & Lead Developer",
  image: "/owner.jpeg",
  bio: "Owner of HA Developers, focused on premium websites, SEO, digital marketing, branding, and practical business growth for clients.",
  skills: ["Website Development", "SEO Strategy", "Digital Marketing", "Graphic Design", "Client Growth"]
};

export const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: Code2,
    summary: "High-converting, SEO-ready websites and custom web platforms built for speed and growth.",
    subServices: [
      "Business Websites",
      "Company Websites",
      "School Websites",
      "LMS Development",
      "E-Commerce Stores",
      "Portfolio Websites",
      "WordPress Development",
      "Custom Web Applications",
      "Landing Pages",
      "Website Redesign"
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    summary: "Android, iOS, Flutter, and hybrid apps with clean UX, scalable APIs, and launch support.",
    subServices: [
      "Android Apps",
      "iOS Apps",
      "Flutter Apps",
      "Hybrid Apps",
      "Business Apps",
      "Educational Apps",
      "E-Commerce Apps",
      "App Maintenance",
      "Play Store Publishing"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Brush,
    summary: "Brand visuals, campaign creatives, and print-ready assets that make businesses look premium.",
    subServices: [
      "Logo Design",
      "Social Media Posts",
      "Posters",
      "Banners",
      "Flyers",
      "Brochures",
      "Business Cards",
      "Branding Kits",
      "Product Packaging Design"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    summary: "Performance campaigns for awareness, leads, retargeting, and measurable customer acquisition.",
    subServices: [
      "Facebook Marketing",
      "Instagram Marketing",
      "TikTok Marketing",
      "Google Ads",
      "YouTube Marketing",
      "Lead Generation",
      "Email Marketing"
    ]
  },
  {
    id: "seo-services",
    title: "SEO Services",
    icon: Search,
    summary: "Technical, local, content, and authority SEO programs for stronger search visibility.",
    subServices: [
      "Local SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "E-Commerce SEO",
      "SEO Audit",
      "Keyword Research",
      "Link Building"
    ]
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    icon: Cloud,
    summary: "Domains, secure hosting, SSL, email, and launch support for professional websites.",
    subServices: [
      "Domain Registration",
      "Domain Transfer",
      "Domain Renewal",
      "Shared Hosting",
      "Business Hosting",
      "Cloud Hosting",
      "VPS Hosting",
      "SSL Certificates",
      "Email Hosting"
    ]
  }
];

export const stats = [
  ["120+", "Projects Delivered"],
  ["42+", "Business Niches Served"],
  ["98%", "Client Satisfaction"],
  ["24/7", "Support Ready"]
];

export const techStack = [
  "React",
  "Node.js",
  "WordPress",
  "Flutter",
  "Shopify",
  "Figma",
  "Google Ads",
  "Meta Ads",
  "Search Console",
  "Canva Pro",
  "Adobe Creative Suite"
];

export const features = [
  ["Premium UI/UX", Sparkles],
  ["Conversion Strategy", Target],
  ["SEO Foundation", Search],
  ["Campaign Creatives", Brush],
  ["Performance Ads", BarChart3],
  ["Fast Delivery", Rocket],
  ["Brand Consistency", BadgeCheck],
  ["WhatsApp Leads", MessageCircle]
];

export const portfolioItems = [
  { title: "Nexus Academy LMS", category: "Websites", text: "Learning website with courses, enrollment flow, and polished content pages.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" },
  { title: "Martify Commerce", category: "Websites", text: "Fast e-commerce storefront with checkout, inventory, and offers.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" },
  { title: "ClinicFlow App", category: "Apps", text: "Appointment booking, patient records, and push notifications.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" },
  { title: "EduSpark Mobile", category: "Apps", text: "Hybrid learning app with offline lessons and progress tracking.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
  { title: "Aurum Brand Kit", category: "Graphics", text: "Logo system, packaging, social templates, and print collateral.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80" },
  { title: "Local SEO Surge", category: "SEO", text: "Maps ranking, technical fixes, content plan, and monthly growth reports.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" }
];

export const heroImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=82";

export const pricing = {
  "Website Development": [
    ["Starter", "PKR 35,000", "PKR 350,000", ["5 pages", "Responsive design", "Basic SEO", "Contact form"]],
    ["Business", "PKR 75,000", "PKR 720,000", ["10 pages", "CMS setup", "Speed optimization", "Analytics"]],
    ["Enterprise", "Custom", "Custom", ["Custom app", "Integrations", "Advanced features", "Priority support"]]
  ],
  "Mobile Applications": [
    ["Launch", "PKR 120,000", "PKR 1,200,000", ["Android app", "API integration", "Clean UI", "Publishing support"]],
    ["Growth", "PKR 220,000", "PKR 2,200,000", ["Android + iOS", "Realtime features", "Payments", "Maintenance"]],
    ["Scale", "Custom", "Custom", ["Flutter suite", "Advanced backend", "Analytics", "SLA support"]]
  ],
  "SEO Services": [
    ["Local", "PKR 25,000/mo", "PKR 250,000/yr", ["Local SEO", "GBP optimization", "10 keywords", "Monthly report"]],
    ["Growth", "PKR 50,000/mo", "PKR 500,000/yr", ["Technical SEO", "Content plan", "25 keywords", "Link building"]],
    ["Authority", "Custom", "Custom", ["E-commerce SEO", "Advanced audit", "Content engine", "Conversion tracking"]]
  ],
  "Digital Marketing": [
    ["Social", "PKR 30,000/mo", "PKR 300,000/yr", ["Meta campaigns", "Creative plan", "Lead forms", "Reporting"]],
    ["Performance", "PKR 65,000/mo", "PKR 650,000/yr", ["Google Ads", "Retargeting", "Funnels", "A/B testing"]],
    ["Omnichannel", "Custom", "Custom", ["Meta + Google + YouTube", "Landing pages", "CRM handoff", "Strategy calls"]]
  ],
  "Graphic Design": [
    ["Essentials", "PKR 15,000", "PKR 150,000", ["Logo concept", "Business card", "5 social posts", "Source files"]],
    ["Brand Kit", "PKR 45,000", "PKR 430,000", ["Identity system", "Brand guide", "Templates", "Print assets"]],
    ["Campaign Studio", "Custom", "Custom", ["Monthly creatives", "Packaging", "Motion assets", "Priority queue"]]
  ]
};

export const hostingPlans = [
  { name: "Shared Hosting", monthly: 799, yearly: 7990, storage: "25 GB SSD", bandwidth: "100 GB", sites: 1, email: "5 accounts", badge: "Starter" },
  { name: "Premium Hosting", monthly: 1499, yearly: 14990, storage: "75 GB SSD", bandwidth: "Unlimited", sites: 10, email: "25 accounts", badge: "Popular" },
  { name: "Business Hosting", monthly: 2499, yearly: 24990, storage: "150 GB NVMe", bandwidth: "Unlimited", sites: 50, email: "100 accounts", badge: "Business" },
  { name: "VPS Hosting", monthly: 5999, yearly: 59990, storage: "200 GB NVMe", bandwidth: "2 TB", sites: "Unlimited", email: "Custom", badge: "Scale" }
];

export const domainPricing = [
  { extension: ".com", price: 3499 },
  { extension: ".net", price: 3999 },
  { extension: ".org", price: 3899 },
  { extension: ".pk", price: 2999 },
  { extension: ".com.pk", price: 2499 },
  { extension: ".agency", price: 6499 }
];

export const sslPackages = [
  ["Essential SSL", "PKR 4,999/yr", ["Domain validation", "HTTPS padlock", "Installation support"]],
  ["Business SSL", "PKR 12,999/yr", ["Organization validation", "Higher trust", "Renewal reminders"]],
  ["Wildcard SSL", "PKR 29,999/yr", ["All subdomains", "Priority install", "Security review"]]
];

export const testimonials = [
  ["HA Developers made our school website and LMS feel premium, fast, and easy for staff to manage.", "Principal, Bright Future School"],
  ["Their SEO plan gave us clear reporting and better quality leads within months.", "Founder, Local Services Brand"],
  ["The design work looked international. Our social campaigns finally felt consistent.", "Marketing Lead, Retail Startup"]
];

export const process = [
  ["Discover", "Audit goals, audience, scope, and growth opportunities."],
  ["Design", "Create premium UX, brand direction, content blocks, and conversion paths."],
  ["Develop", "Build responsive, fast, and polished digital experiences."],
  ["Launch", "Optimize speed, SEO, analytics, security, and production deployment."],
  ["Grow", "Improve campaigns, rankings, support, and business automation."]
];

export const blogPosts = [
  { title: "How a Fast Website Improves Leads", category: "Web Development", date: "June 2026" },
  { title: "Local SEO Checklist for Small Businesses", category: "SEO", date: "June 2026" },
  { title: "AI Tools That Help Agencies Move Faster", category: "AI Tools", date: "May 2026" }
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" }
];

export const trustBadges = [
  ["SEO-first builds", Search],
  ["Secure systems", Lock],
  ["Performance focused", Gauge],
  ["Conversion strategy", Target]
];
