export const company = {
  name: 'HA Developers',
  phone: '+92 314 0283476',
  email: 'official.hadevelopers@gmail.com',
  whatsapp: 'https://wa.me/923140283476',
  address: 'Pakistan',
  socials: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#'
  }
};

export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Fast, scalable, SEO-ready websites and web apps for brands that need trust, leads, and measurable growth.',
    features: ['Responsive UI/UX', 'CMS or admin panel', 'SEO foundations', 'Analytics setup'],
    benefits: ['Premium brand presence', 'Higher conversion rate', 'Easy content updates'],
    price: 'From PKR 35,000',
    icon: 'Globe2'
  },
  {
    id: 'android-app-development',
    title: 'Android App Development',
    description: 'Native and cross-platform Android applications with polished interfaces and secure backend integration.',
    features: ['Modern app UI', 'API integration', 'Push notifications', 'Play Store support'],
    benefits: ['Reach mobile customers', 'Automate workflows', 'Improve retention'],
    price: 'From PKR 80,000',
    icon: 'Smartphone'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Performance campaigns, social media strategy, content calendars, and reporting built around real business outcomes.',
    features: ['Meta campaigns', 'Google ads', 'Content strategy', 'Monthly reporting'],
    benefits: ['Better qualified leads', 'Brand visibility', 'Optimized ad spend'],
    price: 'From PKR 25,000/mo',
    icon: 'Megaphone'
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    description: 'Brand identities, social media creatives, print designs, and campaign visuals with a premium agency finish.',
    features: ['Logo concepts', 'Brand kits', 'Social posts', 'Print-ready files'],
    benefits: ['Stronger recognition', 'Consistent visuals', 'Professional launch assets'],
    price: 'From PKR 12,000',
    icon: 'Palette'
  },
  {
    id: 'it-courses',
    title: 'Professional IT Courses & Training',
    description: 'Practical training in web, app, design, marketing, and freelancing skills taught with portfolio-focused projects.',
    features: ['Live classes', 'Project practice', 'Career guidance', 'Certificates'],
    benefits: ['Job-ready skills', 'Portfolio projects', 'Freelance confidence'],
    price: 'From PKR 15,000/course',
    icon: 'GraduationCap'
  }
];

export const pricingPlans = [
  { id: 'basic', name: 'Basic Package', price: 'PKR 35,000', description: 'Best for startup landing pages.', features: ['5 page website', 'Mobile responsive', 'Contact form', 'Basic SEO'], highlighted: false },
  { id: 'standard', name: 'Standard Package', price: 'PKR 75,000', description: 'For growing businesses that need content control.', features: ['10 pages', 'CMS/admin content', 'WhatsApp integration', 'Analytics setup'], highlighted: true },
  { id: 'premium', name: 'Premium Package', price: 'PKR 140,000', description: 'For premium brands and advanced workflows.', features: ['Custom UI system', 'Dashboard features', 'Payment or API integration', 'Speed optimization'], highlighted: false },
  { id: 'enterprise', name: 'Enterprise Package', price: 'Custom Quote', description: 'For companies with custom software needs.', features: ['Discovery workshop', 'Dedicated roadmap', 'Database architecture', 'Priority support'], highlighted: false }
];

export const reviews = [
  { id: 1, name: 'Ayesha Khan', city: 'Lahore', rating: 5, date: '2026-02-18', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', review: 'HA Developers delivered a clean business website that immediately improved our customer inquiries.', youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Bilal Ahmed', city: 'Karachi', rating: 5, date: '2026-01-07', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', review: 'The Android app and dashboard were practical, fast, and exactly what our operations team needed.', youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Sana Riaz', city: 'Islamabad', rating: 5, date: '2025-12-11', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80', review: 'Their marketing designs gave our launch a premium look across every platform.', youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80' }
];

export const clients = [
  { id: 1, name: 'Nexora Mart', projectType: 'E-commerce Website', logo: 'NX', screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80', description: 'A polished online store with product catalog, lead capture, and analytics.' },
  { id: 2, name: 'ClinicPro', projectType: 'Android Appointment App', logo: 'CP', screenshot: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80', description: 'Patient booking flow, notifications, and admin tracking for a healthcare team.' },
  { id: 3, name: 'SkillBridge Academy', projectType: 'Training Platform', logo: 'SB', screenshot: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', description: 'Course landing pages, student inquiries, and promotional design system.' }
];

export const stats = [
  { label: 'Projects Completed', value: '120+' },
  { label: 'Happy Clients', value: '75+' },
  { label: 'Years Experience', value: '5+' }
];
