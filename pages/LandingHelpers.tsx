import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle, CheckCircle2, Users, X, Sparkles, Star, Award, Clock, DollarSign, BookOpen, Gift, Check, Flame, MessageSquare, AlertCircle, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCountry } from '../lib/CountryContext';

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

export const RAW_JOINERS = [
  { name: "Chinedu O.", city: "Lagos", time: "2 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Tunde K.", city: "Abuja", time: "4 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Emeka A.", city: "Port Harcourt", time: "6 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Funke B.", city: "Ibadan", time: "8 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Ngozi I.", city: "Enugu", time: "11 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Obinna C.", city: "Owerri", time: "14 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Blessing E.", city: "Benin City", time: "17 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Yusuf M.", city: "Kano", time: "21 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Amina D.", city: "Abuja", time: "25 min ago", plan: "4-Course Architecture Bundle" },
  { name: "Babajide S.", city: "Lagos", time: "29 min ago", plan: "4-Course Architecture Bundle" },
];

export const FOUR_COURSES = [
  {
    id: '1',
    title: 'AutoCAD Mastery',
    software: 'AutoCAD',
    students: '42.5k',
    description: 'Draw accurate 2D floor plans and blueprints — the essential starting point for every architectural project.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fV5bz4JDugh8HxLMJ0fXu5K5sDj3qlSR',
    learningPoints: [
      'Draw professional floor plans & furniture layouts',
      'Print construction-ready drawings to scale',
      'Use shortcuts to draft 10x faster'
    ],
    workflowImpact: 'Create professional blueprints that contractors can actually build from.'
  },
  {
    id: '3',
    title: 'SketchUp 3D Pro',
    software: 'SketchUp',
    students: '55k',
    description: 'Build stunning 3D models from scratch — walls, furniture, kitchens, bathrooms. The foundation of every great render starts here.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1wl6by5AO5MiPeoYsZ8F6Zi5AJahoeTQo',
    learningPoints: [
      'Build complete 3D interiors from a blank canvas',
      'Apply textures, materials & furniture with confidence',
      'Export professional scenes ready for V-Ray & D5 Render'
    ],
    workflowImpact: 'See your imagination come to life in 3D — no experience needed.'
  },
  {
    id: '5',
    title: 'V-Ray Photorealism',
    software: 'V-Ray',
    students: '48k',
    description: 'Transform your SketchUp models into jaw-dropping photorealistic images. The industry standard for beauty shots that close deals.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1aHEt_z78tYD_0Cn66DiduAnhwn-o8El8',
    learningPoints: [
      'Master realistic sunlight, night lighting & shadows',
      'Create materials that look like real wood, glass & stone',
      'Produce magazine-quality images that sell projects'
    ],
    workflowImpact: 'Watch clients gasp when they see their future home in photorealistic detail.'
  },
  {
    id: '7',
    title: 'D5 Render AI',
    software: 'D5 Render',
    students: '19k',
    description: 'AI-powered real-time rendering. See your changes instantly. Generate 4K images in seconds. The future of architectural visualization.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1vbV4j6K9sgzbbZ7qlRdgqPTXWiHBPLsr',
    learningPoints: [
      'Real-time rendering — see changes as you make them',
      'AI-assisted lighting, materials & scene composition',
      'Create cinematic 4K images & video walkthroughs in seconds'
    ],
    workflowImpact: 'Make live design changes while the client watches — mind blown every time.'
  }
];

export const WHO_IS_THIS_FOR = [
  {
    icon: "🎓",
    role: "Architecture & Civil Students",
    badge: "College to Job Ready",
    desc: "Build a job-ready 4K 3D portfolio and crack high-paying studio design roles."
  },
  {
    icon: "🛋️",
    role: "Interior Designers & Freelancers",
    badge: "Close Clients 10x Faster",
    desc: "Stop outsourcing 3D work. Present walk-in concepts and charge premium design fees."
  },
  {
    icon: "🏗️",
    role: "Builders, Contractors & Engineers",
    badge: "Prevent Site Errors",
    desc: "Show clients exact photorealistic 3D views before laying a single brick."
  },
  {
    icon: "🚀",
    role: "Complete Beginners (Zero Experience)",
    badge: "Day 1 Step-by-Step",
    desc: "Start from complete scratch. No design background or prior 3D experience needed."
  }
];

export const TRANSFORMATION_STORIES = [
  {
    name: "Funke Balogun",
    city: "Lagos, Nigeria",
    role: "Freelance Interior Designer",
    before: "Was struggling with slow YouTube tutorials. Renders looked flat and amateur, PC kept crashing on V-Ray, and clients bargained her fees down.",
    after: "Mastered AutoCAD → SketchUp → D5 Render AI pipeline in 15 days. Now confidently charges ₦80,000 per room and closed a ₦450,000 interior project in Lekki.",
    incomeIncrease: "4.5x Income Growth",
    emoji: "✨",
    rating: 5
  },
  {
    name: "Obinna Chukwu",
    city: "Abuja, Nigeria",
    role: "Architecture Graduate",
    before: "Zero practical rendering portfolio from university. Terrified of job interviews because his portfolio had only outdated 2D CAD hand drafts.",
    after: "Built a jaw-dropping residential 4K portfolio with SketchUp and D5. Landed a design role at a top studio in Maitama before graduation.",
    incomeIncrease: "Top Studio Placement",
    emoji: "🎓",
    rating: 5
  },
  {
    name: "Tunde Kolawole",
    city: "Port Harcourt, Nigeria",
    role: "Studio Principal / Senior Architect",
    before: "Firm took 2 weeks to deliver one interior proposal. Lost developer contracts in Lekki & Abuja to foreign visualization studios.",
    after: "Trained his draftsmen using this 4-course pipeline. Delivery speed jumped to 48 hours. Firm closed a major ₦3.5M exterior contract.",
    incomeIncrease: "300% Studio Output",
    emoji: "🚀",
    rating: 5
  },
  {
    name: "Chinedu Okafor",
    city: "Enugu, Nigeria",
    role: "3D Visualizer & Remote Freelancer",
    before: "Working long hours at a local drafting firm for low salary with zero creative freedom.",
    after: "Built an Upwork & Instagram portfolio targeting UK & US clients. Now earns $1,500+/month working remotely from home.",
    incomeIncrease: "Earns in Remote USD ($)",
    emoji: "💎",
    rating: 5
  }
];

export const PAGE_PREVIEWS_ROW1 = [
  '/renders/RENDER-1.jpg', '/renders/RENDER-2.jpg', '/renders/RENDER-3.jpg',
  '/renders/RENDER-4.jpg', '/renders/RENDER-5.jpg', '/renders/RENDER-6.jpg',
  '/renders/RENDER-7.jpg', '/renders/RENDER-8.jpg', '/renders/RENDER-9.jpg',
  '/renders/RENDER-10.jpg', '/renders/RENDER-11.jpg', '/renders/RENDER-12.jpg',
  '/renders/RENDER-13.jpg',
];

export const PAGE_PREVIEWS_ROW2 = [
  '/renders/RENDER-14.jpg', '/renders/RENDER-15.jpg', '/renders/RENDER-16.jpg',
  '/renders/RENDER-17.jpg', '/renders/RENDER-18.jpg', '/renders/RENDER-19.jpg',
  '/renders/RENDER-20.jpg', '/renders/RENDER-21.jpg', '/renders/RENDER-22.jpg',
  '/renders/RENDER-23.jpg', '/renders/RENDER-24.jpg', '/renders/RENDER-25.jpg',
];

export const FREE_BONUSES = [
  {
    id: "b1",
    title: "10,000+ Ready & Modern 3D Models Library",
    worth: "Value: ₦150,000",
    desc: "Ready-to-use Modular Kitchens, Wardrobes, Luxury Italian Sofas, Master Beds & Modern Ceiling Light Fixtures. Drag & drop directly into SketchUp.",
    icon: "🛋️",
    badge: "MOST POPULAR"
  },
  {
    id: "b2",
    title: "5,000+ Ultra HD 4K PBR Materials & Textures",
    worth: "Value: ₦80,000",
    desc: "Italian Marble, Hardwood, Fluted Charcoal Panels, Fabric Textures, Terrazzo, Corian & Gold Brass Accents in 4K resolution.",
    icon: "🎨",
    badge: "FREE TODAY"
  },
  {
    id: "b3",
    title: "Client Quotation & Freelance Contract Toolkit",
    worth: "Value: ₦50,000",
    desc: "Word/PDF editable contract templates, price quotation sheets (per room & per view), and proven script to demand 50% upfront deposit without resistance.",
    icon: "📋",
    badge: "HIGH EARNING"
  },
  {
    id: "b4",
    title: "150+ Master AI Architecture Prompts Bible",
    worth: "Value: ₦40,000",
    desc: "Secret copy-paste text prompts to create hyper-realistic elevations, luxury washrooms, and modern commercial interiors in seconds.",
    icon: "🪄",
    badge: "AI POWER"
  },
  {
    id: "b5",
    title: "Official Digital Skill Certificate & Diploma",
    worth: "Value: ₦30,000",
    desc: "Verifiable skill credential to boost your LinkedIn profile, CV, and studio portfolio to impress clients and firms.",
    icon: "📜",
    badge: "CAREER BOOSTER"
  },
  {
    id: "b6",
    title: "24/7 Dedicated WhatsApp Support & Installation Guides",
    worth: "Priceless",
    desc: "Stuck on software installation? Render crashing? Message our expert mentors on WhatsApp anytime for prompt, direct screen resolution.",
    icon: "💬",
    badge: "LIFETIME VIP"
  }
];

export const TESTIMONIALS_LANDING = [
  {
    name: 'Chinedu Okafor',
    role: 'Freelance 3D Visualizer',
    location: 'Lagos, Nigeria',
    content: 'Honestly, I was charging peanuts for designs and clients kept complaining. After finishing this bundle, I learned V-Ray and D5. My first photorealistic proposal was accepted for ₦350,000! Best investment of my life.',
    rating: 5,
    verified: true
  },
  {
    name: 'Tunde Kolawole',
    role: 'Senior Architect',
    location: 'Abuja, Nigeria',
    content: 'Having SketchUp, V-Ray, and D5 Render AI in one bundle changed how our entire studio works. We model, render, and present in 4K walkthroughs — clients don\'t even ask for discounts.',
    rating: 5,
    verified: true
  },
  {
    name: 'Obinna Chukwu',
    role: 'Architecture Student',
    location: 'Owerri, Nigeria',
    content: 'University taught us theory, not practical business skills. Within 2 weeks of studying this, my 3D renders were miles ahead of my batch. Landed my dream internship immediately!',
    rating: 5,
    verified: true
  },
  {
    name: 'Funke Balogun',
    role: 'Freelance Designer',
    location: 'Ibadan, Nigeria',
    content: 'I went from flat 2D drawings to photorealistic V-Ray renders in 2 weeks. The 10,000+ 3D models library alone saved me hundreds of hours. Now I charge 3x more per project.',
    rating: 5,
    verified: true
  },
  {
    name: 'Ngozi Ibe',
    role: '3D Visualizer',
    location: 'Enugu, Nigeria',
    content: 'The AutoCAD to SketchUp to D5 Render AI pipeline is taught step-by-step from zero. D5 Render AI lets me do real-time walkthroughs in client meetings. My close rate doubled.',
    rating: 5,
    verified: true
  },
  {
    name: 'Emeka Adeyemi',
    role: 'Landscape Architect',
    location: 'Port Harcourt, Nigeria',
    content: 'D5 Render AI for real-time changes during meetings, V-Ray for portfolio-grade shots, SketchUp for the foundation. This bundle covers everything a Nigerian designer needs.',
    rating: 5,
    verified: true
  },
  {
    name: 'Blessing Eke',
    role: 'Design Student',
    location: 'Benin City, Nigeria',
    content: 'Started from absolute scratch without knowing AutoCAD. The WhatsApp mentors walked me through the setup. 15 days later, my portfolio had magazine-quality interior renders.',
    rating: 5,
    verified: true
  },
  {
    name: 'Amina Danjuma',
    role: 'Architect',
    location: 'Kano, Nigeria',
    content: 'If you want to earn premium design fees in Nigeria, you MUST know how to model in SketchUp and render in V-Ray/D5. Don\'t depend on your college degree — learn these practical tools.',
    rating: 5,
    verified: true
  }
];

export const FAQ_ITEMS_LANDING = [
  {
    question: "How will I receive the courses immediately after payment?",
    answer: "Instant Automatic Delivery! Within 60 seconds of completing your payment on Selar, you will receive direct Google Drive lifetime access links on your Email and on your screen. You also get immediate access to our 24/7 WhatsApp support."
  },
  {
    question: "I am a complete beginner with zero 3D experience. Can I learn this easily?",
    answer: "Yes, 100%! All 4 courses are structured from zero level (how to open the software, draw blueprints, extrude 3D walls, apply lighting) up to cinematic 4K photorealism. Everything is explained step-by-step in clear, easy-to-understand tutorials."
  },
  {
    question: "Do I need an expensive high-end computer to run these tools?",
    answer: "No. AutoCAD and SketchUp run smoothly on standard laptops and PCs. For rendering, D5 Render AI is optimized for fast real-time preview, and we provide step-by-step hardware optimization guides so you never have to struggle with crashes."
  },
  {
    question: "Are software download links and installation guides included?",
    answer: "Yes! We provide complete safe download assistance and video installation tutorials for AutoCAD, SketchUp, V-Ray, and D5 Render so you do not need to buy expensive commercial licenses to get started."
  },
  {
    question: "What if I get stuck while practicing or software throws an error?",
    answer: "You are never alone! You get direct 24/7 access to our WhatsApp Support Team. Whenever you face a doubt, software crash, or lighting glitch, message us on WhatsApp and our team will guide you step-by-step."
  },
  {
    question: "Is there a Skill Certificate provided for my resume and portfolio?",
    answer: "Yes, an official verifiable Skill Certificate & Diploma is included upon course completion at zero extra charge. You can proudly add it to your CV, LinkedIn, and client portfolio."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 100% money-back guarantee within 7 days. If you're not completely satisfied with the courses and resources, send us a quick message on WhatsApp and we will refund you immediately with zero questions asked."
  }
];

export const Logo = () => (
  <div className="flex flex-col items-center text-center cursor-pointer group" onClick={() => window.location.href = '/'}>
    <span className="font-heading font-extrabold text-2xl tracking-tight leading-none text-zinc-950">
      Avada <span className="text-orange-500 font-bold">Design</span>
    </span>
    <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-zinc-400 mt-0.5">
      Architecture & 3D Visuals
    </span>
  </div>
);

export const Pattern = ({ className = '' }: { className?: string }) => (
  <div className={`crosshatch-pattern ${className}`} />
);

export const SocialProofToast: React.FC = () => {
  const { country } = useCountry();
  const joiners = country?.cities?.length
    ? country.cities.map((c, i) => ({
        name: c.name,
        city: c.city,
        time: `${(i % 5) * 3 + 2} min ago`,
        plan: "4-Course Architecture Bundle"
      }))
    : RAW_JOINERS;
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const show = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setIdx(p => (p + 1) % joiners.length), 400);
      }, 3500);
    };
    const t1 = setTimeout(show, 3000);
    const t2 = setInterval(show, 11000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, [joiners.length]);
  const j = joiners[idx] || RAW_JOINERS[0];
  return (
    <div className={`fixed bottom-20 sm:bottom-24 left-3 z-[70] max-w-[320px] transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}>
      <div className="bg-white/95 text-zinc-900 backdrop-blur-md border border-zinc-200 rounded-xl p-2.5 shadow-lg flex items-center gap-2.5">
        <div className="size-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
          {j.name.charAt(0)}
        </div>
        <div className="overflow-hidden min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-semibold text-zinc-900 truncate">{j.name}</p>
            <span className="text-[10px] text-zinc-500 font-mono shrink-0">• {j.city}</span>
          </div>
          <p className="text-[10px] text-zinc-500 truncate">Enrolled in 4-Course Bundle • <span className="text-emerald-600 font-medium font-mono">{j.time}</span></p>
        </div>
        <div className="shrink-0 size-2 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export const InstagramIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const FacebookIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const XIcon = ({ className = "size-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const SOCIAL_COMMENTS = [
  {
    name: "Chinedu Okafor",
    handle: "@chinedu.archstudio",
    platform: "instagram" as const,
    gradient: "from-purple-500 via-pink-500 to-orange-400",
    comment: "The SketchUp to D5 real-time walkthrough workflow saved me 20+ hours on my first Lekki duplex project. Client paid upfront deposit on the spot 🔥",
    time: "2h ago",
    likes: 54,
    verified: true
  },
  {
    name: "Tunde Kolawole",
    handle: "@tunde_interiors",
    platform: "x" as const,
    gradient: "from-zinc-700 to-zinc-950",
    comment: "Institutes in Lagos were asking ₦350k for outdated CAD & 3ds Max. Got all 4 core pipeline courses here. Best career investment honestly.",
    time: "4h ago",
    likes: 112,
    verified: true
  },
  {
    name: "Emeka Adeyemi",
    handle: "@emeka.contractor",
    platform: "facebook" as const,
    gradient: "from-blue-600 to-indigo-700",
    comment: "The client quotation & contract kit alone helped me lock a 50% advance token. No more client payment arguments on site 🙏",
    time: "1d ago",
    likes: 38,
    verified: false
  },
  {
    name: "Funke Balogun",
    handle: "@funke.3dspace",
    platform: "instagram" as const,
    gradient: "from-pink-500 to-rose-600",
    comment: "10,000+ textures & 3D models library is insane quality! Modular kitchens and luxury sofas just drag and drop directly into SketchUp.",
    time: "3h ago",
    likes: 89,
    verified: true
  },
  {
    name: "Obinna Chukwu",
    handle: "@obinna_renderlab",
    platform: "x" as const,
    gradient: "from-emerald-600 to-teal-800",
    comment: "From zero 3D experience to photorealistic living room renders in 12 days. Even my senior architect in Abuja was shocked.",
    time: "8h ago",
    likes: 76,
    verified: false
  },
  {
    name: "Ngozi Ibe",
    handle: "@ngozi_creativestudio",
    platform: "instagram" as const,
    gradient: "from-amber-500 to-orange-600",
    comment: "V-Ray lighting was a nightmare before this. Finally understood dome light & HDRI setup simply without 40 hours of fluff.",
    time: "1d ago",
    likes: 43,
    verified: true
  },
  {
    name: "Yusuf Mohammed",
    handle: "@yusuf.bim",
    platform: "facebook" as const,
    gradient: "from-blue-500 to-blue-700",
    comment: "Got stuck during SketchUp to V-Ray texture sync at 10 PM. WhatsApp support team replied in 5 mins and solved it!",
    time: "2d ago",
    likes: 67,
    verified: false
  },
  {
    name: "Blessing Eke",
    handle: "@blessing_archconcept",
    platform: "instagram" as const,
    gradient: "from-violet-500 to-purple-600",
    comment: "The D5 AI rendering module is like a cheat code. Generated 6 exterior lighting variations in front of client during our meeting 🤯",
    time: "5h ago",
    likes: 95,
    verified: true
  },
  {
    name: "Amina Danjuma",
    handle: "@amina_visuals",
    platform: "x" as const,
    gradient: "from-cyan-600 to-blue-700",
    comment: "Made my course fee back 10x over on my very first Upwork rendering gig. Google Drive access link arrived in 30 seconds.",
    time: "12h ago",
    likes: 140,
    verified: true
  },
  {
    name: "Babajide Sanwo",
    handle: "@jide_interiorcraft",
    platform: "instagram" as const,
    gradient: "from-rose-500 to-red-600",
    comment: "AutoCAD floor planning + SketchUp 3D closed my biggest turnkey residential project in Ikeja. Highly recommend to all students.",
    time: "6h ago",
    likes: 62,
    verified: true
  }
];

export const SocialCommentsSlider: React.FC = () => {
  return (
    <div className="w-full my-6 overflow-hidden select-none">
      <div className="text-center mb-3">
        <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
          🌍 50,000+ Global Students
        </span>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-3 animate-scroll-left hover:pause py-1">
          {[...SOCIAL_COMMENTS, ...SOCIAL_COMMENTS].map((c, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[320px] shrink-0 bg-white border border-zinc-200 rounded-xl p-3 shadow-xs flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`size-7 rounded-full bg-gradient-to-tr ${c.gradient} text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs`}>
                      {c.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-heading font-bold text-xs text-zinc-950 truncate">{c.name}</span>
                        {c.verified && <CheckCircle size={11} className="text-blue-500 fill-blue-50 shrink-0" />}
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono block truncate">{c.handle}</span>
                    </div>
                  </div>
                  <span className="text-zinc-400">
                    {c.platform === 'instagram' && <InstagramIcon className="size-3.5 text-pink-600" />}
                    {c.platform === 'x' && <XIcon className="size-3 text-zinc-900" />}
                    {c.platform === 'facebook' && <FacebookIcon className="size-3.5 text-blue-600" />}
                  </span>
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed font-normal">{c.comment}</p>
              </div>
              <div className="mt-2 pt-1.5 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <span>{c.time}</span>
                <span className="flex items-center gap-1 text-zinc-500">
                  <Heart size={10} className="fill-red-500 text-red-500" /> {c.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StudentRendersShowcase: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset1, setDragOffset1] = useState(0);
  const [dragOffset2, setDragOffset2] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<any>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const diff = e.touches[0].clientX - touchStartXRef.current;
      setDragOffset1(diff);
      setDragOffset2(-diff);
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    resumeTimerRef.current = setTimeout(() => {
      setDragOffset1(0);
      setDragOffset2(0);
      setIsPaused(false);
    }, 1600);
  };

  const nudge = (direction: 'left' | 'right') => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
    const shift = direction === 'left' ? -280 : 280;
    setDragOffset1(prev => prev + shift);
    setDragOffset2(prev => prev - shift);
    resumeTimerRef.current = setTimeout(() => {
      setDragOffset1(0);
      setDragOffset2(0);
      setIsPaused(false);
    }, 2500);
  };

  return (
    <div className="w-full">
      <div className="px-3 sm:px-4 mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <button
            type="button"
            onClick={() => nudge('right')}
            className="size-6 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 flex items-center justify-center transition-transform active:scale-90 shadow-2xs cursor-pointer"
            aria-label="Previous renders"
          >
            <ChevronLeft className="size-3.5" />
          </button>

          <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 px-3 py-0.5 rounded-full">
            Real Student Renders
          </span>

          <button
            type="button"
            onClick={() => nudge('left')}
            className="size-6 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 flex items-center justify-center transition-transform active:scale-90 shadow-2xs cursor-pointer"
            aria-label="Next renders"
          >
            <ChevronRight className="size-3.5" />
          </button>
        </div>

        <div className="font-hand text-lg sm:text-xl text-amber-400 font-bold animate-wiggle">
          ✨ Created with SketchUp + V-Ray + D5 Render AI + AutoCAD
        </div>
      </div>

      <div 
        className="flex flex-col gap-3 touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div 
          className="flex gap-3 animate-scroll-left hover:pause transition-transform duration-200 ease-out"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            transform: dragOffset1 !== 0 ? `translate3d(${dragOffset1}px, 0, 0)` : undefined,
          }}
        >
          {[...PAGE_PREVIEWS_ROW1, ...PAGE_PREVIEWS_ROW1].map((img, i) => (
            <div 
              key={i} 
              className="w-[200px] sm:w-[300px] shrink-0 aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-sm"
              style={{ contain: 'content' }}
            >
              <img 
                src={img} 
                alt="3D Architecture & Interior Render" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div 
          className="flex gap-3 animate-scroll-right hover:pause transition-transform duration-200 ease-out"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            transform: dragOffset2 !== 0 ? `translate3d(${dragOffset2}px, 0, 0)` : undefined,
          }}
        >
          {[...PAGE_PREVIEWS_ROW2, ...PAGE_PREVIEWS_ROW2].map((img, i) => (
            <div 
              key={i} 
              className="w-[200px] sm:w-[300px] shrink-0 aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-sm"
              style={{ contain: 'content' }}
            >
              <img 
                src={img} 
                alt="3D Architecture & Interior Render" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
