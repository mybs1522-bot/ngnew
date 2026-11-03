import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, CheckCircle2, X, ChevronDown, 
  Download, Zap, Gift, MessageCircle,
  Star
} from 'lucide-react';
import { useCountry } from '../lib/CountryContext';
import { getDiscountPercent } from '../lib/countryConfig';
import {
  Logo, Pattern, SocialProofToast,
  FOUR_COURSES, WHO_IS_THIS_FOR, TRANSFORMATION_STORIES,
  FREE_BONUSES, TESTIMONIALS_LANDING, FAQ_ITEMS_LANDING,
  SocialCommentsSlider, StudentRendersShowcase
} from './LandingHelpers';
import TeamSection from '../components/ui/team';

const getSameDayDate = () => {
  const d = new Date();
  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'long' });
  const s = ['th', 'st', 'nd', 'rd'];
  const v = day % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];
  return `${day}${suffix} ${month}`;
};

/* ─── REUSABLE PREMIUM CTA WITH TIMER (COMPACT CONVERSION-OPTIMIZED) ─── */
const CtaWithTimer = ({ 
  timeLeft, 
  onClick, 
  variant = 'default', 
  title = 'GET ALL 4 COURSES NOW',
  subtext = 'Instant Google Drive Access • Verified Skill Certificate Included',
  formattedPrice,
  formattedOriginalPrice,
  discountPercent
}: { 
  timeLeft?: { h: number; m: number; s: number }; 
  onClick: () => void; 
  variant?: 'default' | 'dark' | 'white';
  title?: string;
  subtext?: string;
  formattedPrice?: string;
  formattedOriginalPrice?: string;
  discountPercent?: number;
}) => {
  const f = (v: number) => v.toString().padStart(2, '0');
  const isDark = variant === 'dark';

  return (
    <div className={`border ${
      isDark 
        ? 'border-zinc-800 bg-zinc-900 text-white' 
        : 'border-zinc-200/90 bg-white text-zinc-950 shadow-md'
    } rounded-2xl p-3.5 sm:p-5 relative overflow-hidden max-w-lg mx-auto text-center`}>
      <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3">
        
        {/* Compact Urgency & Live Countdown Bar */}
        <div className={`w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border text-xs ${
          isDark 
            ? 'bg-zinc-950/80 border-zinc-800 text-zinc-200' 
            : 'bg-red-50/90 border-red-200/70 text-red-950'
        }`}>
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="size-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="font-heading font-bold text-[11px] sm:text-xs truncate">
              Students Week Offer • Ends {getSameDayDate()}
            </span>
          </div>

          {timeLeft && (
            <div className={`flex items-center gap-1 font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md border shrink-0 ${
              isDark 
                ? 'bg-zinc-900 border-zinc-700 text-amber-400' 
                : 'bg-white border-red-200 text-red-600 shadow-2xs'
            }`}>
              <span>{f(timeLeft.h)}h</span>
              <span className="text-zinc-400">:</span>
              <span>{f(timeLeft.m)}m</span>
              <span className="text-zinc-400">:</span>
              <span className="text-red-500 font-extrabold">{f(timeLeft.s)}s</span>
            </div>
          )}
        </div>

        {/* Pricing Anchor & Savings Badge */}
        <div className="flex items-center justify-between w-full px-1">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl sm:text-4xl font-heading font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              {formattedPrice}
            </span>
            <span className="text-zinc-400 line-through text-xs sm:text-sm font-mono">
              {formattedOriginalPrice}
            </span>
          </div>
          <span className="bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-full shadow-2xs">
            {discountPercent}% OFF • SAVE NOW
          </span>
        </div>

        {/* High Conversion 3D Action Button */}
        <button
          onClick={onClick}
          className={`w-full py-3.5 sm:py-4 px-5 font-heading font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 group cursor-pointer select-none ${
            isDark ? 'btn-3d-light' : 'btn-3d'
          }`}
        >
          <span className="tracking-wide uppercase">{title}</span>
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform shrink-0 stroke-[2.5]" />
        </button>

        {/* Compact Trust Points */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-zinc-500 font-medium">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-600 shrink-0" /> Instant Drive Access
          </span>
          <span className="text-zinc-300">•</span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-600 shrink-0" /> 4 Core Masterclasses
          </span>
          <span className="text-zinc-300">•</span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-600 shrink-0" /> Lifetime Access
          </span>
        </div>

      </div>
    </div>
  );
};

/* ─── FLUID CHANGING AUDIENCE TEXT ─── */
const ChangingAudienceText: React.FC = () => {
  const audiences = [
    'Beginners',
    'Architecture Students',
    'Interior Designers',
    'Architects',
    'Contractors & Builders',
    'Freelancers',
    'Civil Engineers',
    '3D Visualizers'
  ];
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % audiences.length);
        setIsTransitioning(false);
      }, 220);
    }, 2200);
    return () => clearInterval(timer);
  }, [audiences.length]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-zinc-700 font-medium mb-3.5 px-2">
      <span className="font-heading font-medium text-zinc-600">This bundle is perfect for</span>
      <span className="inline-flex items-center justify-center min-w-[130px] sm:min-w-[160px] h-7 px-3 bg-zinc-100 border border-zinc-200/90 rounded-full font-heading font-bold text-zinc-950 shadow-2xs overflow-hidden">
        <span
          className={`inline-block transition-transform transition-opacity duration-200 ease-out ${
            isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {audiences[index]}
        </span>
      </span>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { country } = useCountry();
  const discount = getDiscountPercent(country);

  const [timeLeft, setTimeLeft] = useState(() => {
    const D = (3 * 3600 + 36 * 60 + 20) * 1000, r = D - (Date.now() % D);
    return { h: Math.floor((r / 3600000) % 24), m: Math.floor((r / 60000) % 60), s: Math.floor((r / 1000) % 60) };
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasShownExitModal, setHasShownExitModal] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Timer Tick
  useEffect(() => {
    const calc = () => {
      const D = (3 * 3600 + 36 * 60 + 20) * 1000, now = Date.now(), r = D - (now % D);
      setTimeLeft({ h: Math.floor((r / 3600000) % 24), m: Math.floor((r / 60000) % 60), s: Math.floor((r / 1000) % 60) });
    };
    const t = setInterval(calc, 1000); calc(); return () => clearInterval(t);
  }, []);

  // Exit-Intent Trigger
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitModal) {
        setShowExitModal(true);
        setHasShownExitModal(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitModal]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (showExitModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showExitModal]);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  // Checkout navigation (No inline Razorpay modal)
  const openPaymentModal = () => {
    setShowExitModal(false);
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* ═══ COUNTRY BANNER (LOCALIZED) ═══ */}
      <div className="w-full bg-green-600 text-white text-center py-2 px-4 font-bold text-xs sm:text-sm shadow-xs">
        {country.bannerText}
      </div>

      <div className="w-full">
        <div className="mx-auto px-4 md:max-w-4xl">
          <main>
            
            {/* ═══ 1. HERO SECTION ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid pt-5 sm:pt-8 pb-8 bg-white text-center">
              <div className="px-2 sm:px-4">

                {/* Outcome Headline with Highlighter */}
                <div className="mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-500/10 border border-amber-500/25 text-amber-900 rounded-full text-xs font-mono font-semibold mb-2">
                    ⏱️ In the next 15 days
                  </span>
                  <h1 className="font-heading font-bold text-zinc-950 tracking-tight leading-[1.18] max-w-3xl mx-auto">
                    <span className="block text-2xl sm:text-4xl md:text-5xl">
                      Learn Interior &amp; Exterior Design | Get Job or Start Your Own Company
                    </span>
                  </h1>
                </div>

                {/* Pill: Recorded Course + 24/7 WhatsApp Mentor Support */}
                <div className="flex items-center justify-center my-3">
                  <div className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 bg-zinc-950 text-white rounded-full shadow-md border border-zinc-800 text-xs sm:text-sm">
                    <span className="font-heading font-semibold text-zinc-200">
                      🎬 4 Complete Courses
                    </span>
                    <span className="text-zinc-500 font-mono font-bold">+</span>
                    <span className="inline-flex items-center gap-1.5 font-heading font-bold text-emerald-400">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      24/7 WhatsApp Mentor Support
                    </span>
                  </div>
                </div>

                {/* Beginner Friendly Callout */}
                <div className="font-hand text-base sm:text-lg text-emerald-700 font-bold -rotate-1 mb-3">
                  ✨ Zero 3D experience needed • 100% beginner friendly!
                </div>

                {/* Impulse Price Anchor */}
                <div className="text-center mb-5">
                  <span className="inline-block text-xs sm:text-sm text-zinc-700 font-normal bg-zinc-100/90 border border-zinc-200 px-3.5 py-1.5 rounded-2xl sm:rounded-full shadow-2xs">
                    AutoCAD + SketchUp Pro + V-Ray + D5 Render AI | Only <strong className="text-zinc-950 font-bold font-mono">{country.formattedPrice}</strong> (Nothing extra)
                  </span>
                </div>

                {/* ═══ OLD HERO VIDEO ═══ */}
                <div className="w-full max-w-3xl mx-auto mb-6 overflow-hidden rounded-2xl shadow-2xl border-2 border-zinc-900 bg-black relative" style={{ paddingTop: '56.25%' }}>
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/494628/81badf78-a3b0-42fa-9f23-9f7213d4185c?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                    loading="eager" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} 
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen" 
                    allowFullScreen={true} 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-center pointer-events-none z-10">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wide">
                      AutoCAD (Planning) + SketchUp (3D Models) + V-Ray & D5 Render AI (Photorealism)
                    </p>
                  </div>
                </div>

                {/* ═══ INSTAGRAM, X & FACEBOOK NIGERIAN COMMUNITY REVIEWS SLIDER ═══ */}
                <SocialCommentsSlider />

                {/* ═══ 6 POINTERS: WHAT YOU GET ═══ */}
                <div className="max-w-3xl mx-auto mb-6">
                  <div className="text-center mb-3">
                    <span className="text-xs sm:text-sm font-heading font-bold text-zinc-950 bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full">
                      <strong>You'll Get Inside</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                    {[
                      {
                        num: '01',
                        icon: '📐',
                        title: 'All Software Download Links Included (AutoCAD, SketchUp, V-Ray, D5)'
                      },
                      {
                        num: '02',
                        icon: '🛋️',
                        title: '10,000+ Ready-To-Use 3D Furniture & Texture Models'
                      },
                      {
                        num: '03',
                        icon: '⚡',
                        title: 'Zero Experience Needed (Day 1 Step-by-Step Blueprint)'
                      },
                      {
                        num: '04',
                        icon: '📁',
                        title: 'Instant Google Drive Access in 60 Seconds'
                      },
                      {
                        num: '05',
                        icon: '💬',
                        title: '24/7 Dedicated WhatsApp Expert Mentor Help'
                      },
                      {
                        num: '06',
                        icon: '📜',
                        title: 'Verifiable Digital Skill Certificate & Guaranteed Projects'
                      }
                    ].map((pt, i) => (
                      <div key={i} className="bg-zinc-50 border border-zinc-200/90 rounded-xl p-2.5 sm:p-3 flex items-center gap-3 hover:border-zinc-300 transition-colors duration-150">
                        <div className="flex flex-col items-center shrink-0 w-6">
                          <span className="text-lg leading-none">{pt.icon}</span>
                          <span className="text-[9px] font-mono font-bold text-zinc-400 mt-0.5">{pt.num}</span>
                        </div>
                        <div className="font-heading font-bold text-zinc-950 text-xs sm:text-sm leading-tight">
                          {pt.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fluid Changing Text: This bundle is perfect for ... */}
                <ChangingAudienceText />

                {/* Primary Hero CTA */}
                <div className="max-w-xl mx-auto mb-6">
                  <CtaWithTimer 
                    timeLeft={timeLeft} 
                    onClick={openPaymentModal} 
                    variant="default"
                    title="GET ALL 4 COURSES NOW"
                    subtext="Instant Access in 60 Seconds • Lifetime Membership"
                    formattedPrice={country.formattedPrice}
                    formattedOriginalPrice={country.formattedOriginalPrice}
                    discountPercent={discount}
                  />
                </div>

                {/* ═══ OLD PRODUCT PIPELINE IMAGE ═══ */}
                <div className="max-w-3xl mx-auto mb-4 px-2 flex flex-col items-center">
                  <h3 className="text-sm sm:text-base font-heading font-bold text-zinc-800 mb-2">
                    Complete 4-Course Architecture & 3D Pipeline
                  </h3>
                  <img
                    src="https://drive.google.com/thumbnail?id=1dmbUPuZb_ioj6CuCszjfAIAQ5I9rllAd&sz=w1600"
                    onError={(e) => { e.currentTarget.src = "/course-pipeline.png"; }}
                    alt="Master the Complete Plan-to-Render Pipeline: AutoCAD, SketchUp, V-Ray, D5 Render AI"
                    className="w-full h-auto rounded-2xl shadow-xl border border-zinc-200 cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                    onClick={openPaymentModal}
                  />
                </div>

              </div>
            </section>

            <Pattern />

            {/* ═══ STUDENT WORK & RENDERS ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-zinc-950 text-white overflow-hidden">
              <StudentRendersShowcase />

              <div className="text-center mt-6">
                <button
                  onClick={openPaymentModal}
                  className="btn-3d-light px-7 py-3 font-heading font-bold text-xs sm:text-sm cursor-pointer select-none inline-flex items-center gap-2"
                >
                  <span>Claim Full 4-Course Access Now</span>
                  <Download size={15} className="shrink-0 stroke-[2.5]" />
                </button>
              </div>
            </section>

            <Pattern />

            {/* ═══ REAL STUDENT TESTIMONIALS (NIGERIAN NAMES) ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-zinc-50/50">
              <div className="px-3 sm:px-4">
                
                {/* ═══ CTA ABOVE WHAT DESIGNERS SAY ═══ */}
                <div className="max-w-xl mx-auto mb-8 sm:mb-10">
                  <CtaWithTimer 
                    timeLeft={timeLeft} 
                    onClick={openPaymentModal} 
                    variant="default"
                    title="GET ALL 4 COURSES NOW"
                    subtext="Instant Access in 60 Seconds • Lifetime Membership"
                    formattedPrice={country.formattedPrice}
                    formattedOriginalPrice={country.formattedOriginalPrice}
                    discountPercent={discount}
                  />
                </div>

                <div className="text-center mb-6">
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-3 py-0.5 rounded-full">
                    💬 Verified student reviews
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 mt-2">
                    What Nigerian Designers &amp; Architects Say
                  </h2>
                </div>

                {/* Featured Transformation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                  {TRANSFORMATION_STORIES.map((s, idx) => (
                    <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-4 hover:border-zinc-400 transition-colors duration-150 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="size-8 rounded-full bg-zinc-900 text-white font-mono font-bold flex items-center justify-center text-xs">
                              {s.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-zinc-950 text-sm leading-tight">{s.name}</h3>
                              <span className="text-[10px] text-zinc-500 font-mono">{s.role} • {s.city}</span>
                            </div>
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                            {s.incomeIncrease}
                          </span>
                        </div>

                        <div className="space-y-1.5 text-xs my-2.5">
                          <p className="text-zinc-500 bg-zinc-50 p-2 rounded-lg"><strong className="text-zinc-700 font-semibold">Before:</strong> {s.before}</p>
                          <p className="text-zinc-800 bg-zinc-100/70 p-2 rounded-lg"><strong className="text-zinc-950 font-semibold">After:</strong> {s.after}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400" />)}
                        </div>
                        <span className="text-emerald-700 font-medium flex items-center gap-1"><CheckCircle size={11} /> Verified Learner</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonials List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TESTIMONIALS_LANDING.map((t, idx) => (
                    <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-3 flex flex-col justify-between text-xs">
                      <div>
                        <div className="flex text-amber-400 mb-1.5">
                          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-amber-400" />)}
                        </div>
                        <p className="text-zinc-600 leading-relaxed mb-2.5">"{t.content}"</p>
                      </div>
                      <div className="pt-2 border-t border-zinc-100">
                        <span className="font-heading font-semibold text-zinc-950 block truncate">{t.name}</span>
                        <span className="text-[10px] font-mono text-zinc-500 block truncate">{t.role} • {t.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Pattern />

            {/* ═══ MEET YOUR DESIGN MENTORS (ORIGINAL MARQUEE GALLERY) ═══ */}
            <TeamSection />

            <Pattern />

            {/* ═══ WHO IS THIS FOR ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-white">
              <div className="px-3 sm:px-4">
                <div className="text-center mb-6">
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-3 py-0.5 rounded-full">
                    🎯 Who this bundle is for
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 mt-2">
                    Designed for Anyone Who Wants to Model &amp; Render Spaces
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {WHO_IS_THIS_FOR.map((item, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200/90 rounded-xl p-3.5 sm:p-4 transition-colors duration-150 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl p-1 bg-white rounded-lg border border-zinc-200">{item.icon}</span>
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-zinc-200/80 text-zinc-800 px-2 py-0.5 rounded border border-zinc-300/60">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-zinc-950 text-sm sm:text-base mb-1">{item.role}</h3>
                        <p className="text-zinc-600 text-xs leading-relaxed mb-2.5">{item.desc}</p>
                      </div>
                      <div className="pt-2 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span><span className="highlight-green">✓ 100% Ideal For You</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Pattern />

            {/* ═══ ONLY 4 COURSES SHOWCASE: SketchUp, V-Ray, D5 Render, AutoCAD ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-white">
              <div className="px-3 sm:px-4">
                <div className="text-center mb-6">
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-3 py-0.5 rounded-full">
                    📚 4 core courses included
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 mt-2">
                    The 4 Core Masterclasses In This Bundle
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 max-w-lg mx-auto mt-1">
                    AutoCAD (Blueprints) + SketchUp (3D Modeling) + V-Ray (Photorealism) + D5 Render AI (Real-time).
                  </p>
                </div>

                {/* 4 Courses Grid with Original Google Drive Thumbnails */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {FOUR_COURSES.map((c) => (
                    <div key={c.id} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-400 transition-colors duration-150 flex flex-col justify-between shadow-xs">
                      <div>
                        {/* 16:9 Aspect ratio thumbnail with old Google Drive thumbnail */}
                        <div className="relative aspect-video overflow-hidden bg-zinc-100 border-b border-zinc-200">
                          <img 
                            src={c.imageUrl} 
                            alt={c.title} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-xs text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-white/10">
                            {c.software}
                          </div>
                          <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-xs">
                            {c.students} Learners
                          </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-4 sm:p-5">
                          <h3 className="font-heading font-bold text-zinc-950 text-base sm:text-lg mb-1">{c.title}</h3>
                          <p className="text-xs text-zinc-600 mb-3 leading-relaxed">{c.description}</p>

                          <div className="space-y-1.5 border-t border-zinc-100 pt-2.5">
                            {c.learningPoints.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-1.5 text-xs text-zinc-700">
                                <CheckCircle size={13} className="text-orange-500 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-2 text-center text-xs font-mono text-zinc-700 flex items-center justify-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-600" />
                          <span>Included in {country.formattedPrice} Lifetime Pass</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section CTA */}
                <div className="max-w-xl mx-auto">
                  <CtaWithTimer 
                    timeLeft={timeLeft} 
                    onClick={openPaymentModal} 
                    variant="default"
                    title="GET ALL 4 COURSES NOW"
                    formattedPrice={country.formattedPrice}
                    formattedOriginalPrice={country.formattedOriginalPrice}
                    discountPercent={discount}
                  />
                </div>

              </div>
            </section>

            <Pattern />

            {/* ═══ 6 FREE BONUSES ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-zinc-50/50">
              <div className="px-3 sm:px-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-zinc-950 text-white rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-1.5">
                    <Gift size={13} /> EXCLUSIVE SUPER-BONUSES INCLUDED
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950">
                    Unlock 6 Exclusive Super-Bonuses
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                  {FREE_BONUSES.map((b) => (
                    <div key={b.id} className="bg-white border border-zinc-200 rounded-xl p-4 hover:border-zinc-400 transition-colors duration-150 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{b.icon}</span>
                          <div className="text-right">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded border border-zinc-200 block mb-0.5">{b.badge}</span>
                            <span className="text-xs font-mono font-bold text-emerald-600">FREE</span>
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-zinc-950 text-sm sm:text-base mb-1">{b.title}</h3>
                        <p className="text-xs text-zinc-600 leading-relaxed mb-3">{b.desc}</p>
                      </div>

                      <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-1.5 text-center text-xs font-mono text-zinc-700 flex items-center justify-center gap-1">
                        <span className="highlight-green font-bold text-[11px]">✓ Included Free Today</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mid Page CTA Box */}
                <div className="max-w-xl mx-auto">
                  <CtaWithTimer 
                    timeLeft={timeLeft} 
                    onClick={openPaymentModal} 
                    variant="white"
                    title="CLAIM 4 COURSES + ALL 6 BONUSES NOW"
                    formattedPrice={country.formattedPrice}
                    formattedOriginalPrice={country.formattedOriginalPrice}
                    discountPercent={discount}
                  />
                </div>
              </div>
            </section>

            <Pattern />

            {/* ═══ FAQ SECTION ═══ */}
            <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-zinc-50/50">
              <div className="max-w-3xl mx-auto px-3 sm:px-4">
                <div className="text-center mb-6">
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-700 bg-zinc-200/80 px-3 py-0.5 rounded-full">
                    ❓ Frequently asked questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 mt-2">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-2">
                  {FAQ_ITEMS_LANDING.map((faq, i) => (
                    <div 
                      key={i} 
                      className="bg-white border border-zinc-200 rounded-xl overflow-hidden transition-colors duration-150"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left font-heading font-semibold text-zinc-950 text-sm sm:text-base gap-3 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={16} className={`text-zinc-400 shrink-0 transition-transform duration-200 ${openFaqIndex === i ? 'rotate-180 text-zinc-950' : ''}`} />
                      </button>
                      {openFaqIndex === i && (
                        <div className="px-3.5 sm:px-4 pb-3.5 pt-0 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-100 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          <Pattern />

          {/* ═══ FOOTER ═══ */}
          <footer className="screen-line-before border-x border-grid py-8 pb-28 px-4 text-center text-xs bg-white text-zinc-500">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-2.5">
              <Logo />
              <p className="text-zinc-500 text-[11px] mt-1">
                © 2026 Avada Design & Architecture. All rights reserved. Helping 50,000+ designers succeed.
              </p>
              <div className="flex justify-center gap-3 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                <a href="/checkout" className="hover:text-zinc-900 transition-colors">Order Now</a>
                <span>•</span>
                <a href="https://wa.me/918545015333" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">24/7 WhatsApp Support</a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      {/* ═══ WHATSAPP FLOATING BUTTON ═══ */}
      <a 
        href="https://wa.me/918545015333?text=Hi%20Avada%20Team%2C%20I%20have%20a%20question%20about%20the%20Architecture%20Bundle" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-3.5 z-[75] flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-mono font-medium px-3 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150"
        style={{ boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
      >
        <MessageCircle size={16} className="fill-white" />
        <span className="hidden sm:inline">WhatsApp Help</span>
      </a>

      {/* ═══ STICKY BOTTOM BAR (ALWAYS VISIBLE UPON LANDING) ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] translate-y-0">
        <div className="max-w-4xl mx-auto px-3.5 py-2 flex items-center justify-between gap-3">
          
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-heading font-extrabold text-zinc-950">{country.formattedPrice}</span>
              <span className="inline-flex items-center gap-1 font-mono font-bold text-[11px] sm:text-xs bg-red-50 text-red-600 border border-red-200/80 px-2 py-0.5 rounded-md shadow-2xs">
                <span>⏱</span>
                <span>{formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-600 font-medium truncate mt-0.5">
              <span className="size-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="font-bold text-red-700">Students Week Offer</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-700">Ends {getSameDayDate()}</span>
            </div>
          </div>

          <button
            onClick={openPaymentModal}
            className="btn-3d py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-1.5 cursor-pointer shrink-0 select-none"
            style={{ borderBottomWidth: '4px' }}
          >
            <span>Get All 4 Courses</span>
            <Download size={15} className="shrink-0 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* ═══ EXIT-INTENT MODAL ═══ */}
      {showExitModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-[fadeIn_0.2s_ease]">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 sm:p-6 text-center border border-zinc-200 overflow-hidden">
            <button 
              onClick={() => setShowExitModal(false)}
              className="absolute top-3 right-3 size-7 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>

            <span className="bg-zinc-100 text-zinc-800 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-zinc-200">
              Special offer active
            </span>

            <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-950 mt-2 mb-1.5">
              Wait! This Special {country.formattedPrice} Offer Won't Last!
            </h3>

            <p className="text-zinc-600 text-xs leading-relaxed mb-3.5">
              Over <strong>50,000+ designers</strong> are already using these 4 courses & 10,000+ 3D models. If you close this page, price will increase to <strong>{country.formattedOriginalPrice}</strong>!
            </p>

            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 mb-3.5 text-left text-xs text-zinc-700 space-y-1 font-medium">
              <div className="flex items-center gap-2 text-zinc-900">
                <CheckCircle size={13} className="text-zinc-900 shrink-0" />
                <span>Instant Google Drive Delivery in 60 Secs</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-900">
                <CheckCircle size={13} className="text-zinc-900 shrink-0" />
                <span>AutoCAD, SketchUp, V-Ray & D5 Render AI</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-900">
                <CheckCircle size={13} className="text-zinc-900 shrink-0" />
                <span>24/7 Dedicated WhatsApp Support Team</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowExitModal(false);
                  openPaymentModal();
                }}
                className="btn-premium animate-pulse-slow w-full py-3 rounded-full font-heading font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Zap size={14} className="fill-white" />
                <span>Lock My Access Now</span>
              </button>

              <button
                onClick={() => setShowExitModal(false)}
                className="text-[11px] text-zinc-400 hover:text-zinc-600 py-0.5 transition-colors font-mono cursor-pointer"
              >
                No thanks, I will pay {country.formattedOriginalPrice} later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SOCIAL PROOF TOAST ═══ */}
      <SocialProofToast />

    </div>
  );
};

export default LandingPage;
