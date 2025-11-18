import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BookOpen,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  Compass,
  FileSignature,
  FileText,
  Globe,
  GraduationCap,
  Headphones,
  Home,
  Languages,
  Lightbulb,
  Luggage,
  Map,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
} from 'lucide-react'

import type { ServiceSlug } from './services'

type Stat = {
  value: string
  label: string
  description: string
}

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

type Section = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
}

type ProcessStep = {
  icon: LucideIcon
  title: string
  description: string
}

type ServiceDetail = {
  slug: ServiceSlug
  hero: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
  }
  stats: Stat[]
  benefits: Benefit[]
  focus: Section
  support: Section
  process: ProcessStep[]
  cta: {
    title: string
    description: string
    buttonLabel: string
  }
}

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  'university-selection': {
    slug: 'university-selection',
    hero: {
      eyebrow: 'Personalised pathways',
      title: 'University Selection for Vietnamese Students',
      description:
        'We evaluate your transcripts, TestAS results, and family budget to curate German university options that feel exciting and achievable. Every shortlist is bilingual so parents and students can decide together with confidence.',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
      imageAlt: 'Students walking on a German university campus at sunset',
    },
    stats: [
      {
        value: '100+',
        label: 'Partner universities',
        description: 'Direct relationships with TU9 and other leading technology-focused campuses in all major German cities.',
      },
      {
        value: '95%',
        label: 'Offer acceptance',
        description: 'Most students receive at least two offers aligned with scholarship and career aspirations.',
      },
      {
        value: '14 days',
        label: 'Shortlist delivery',
        description: 'Receive bilingual comparison decks within two weeks of your consultation.',
      },
    ],
    benefits: [
      {
        icon: Compass,
        title: 'Guided discovery workshops',
        description: 'Interactive goal-setting sessions translate your interests into course and city preferences that feel like home.',
      },
      {
        icon: Target,
        title: 'Data-backed matching',
        description: 'We benchmark your academics against admission trends and scholarship thresholds for each faculty.',
      },
      {
        icon: GraduationCap,
        title: 'Scholarship positioning',
        description: 'Highlight achievements and leadership to stand out for DAAD and university-specific scholarships.',
      },
    ],
    focus: {
      eyebrow: 'What you receive',
      title: 'Bilingual decision decks built for Vietnamese families',
      description:
        'Every shortlist outlines academic fit, tuition projections, living costs, employment outcomes, and cultural life—available in English and Vietnamese for easier family discussions.',
      bullets: [
        'Campus culture snapshots and Vietnamese alumni insights for each city',
        'Scholarship and bursary eligibility by faculty and intake',
        'Cost-of-living breakdowns tailored to your financial plan',
      ],
      image:
        'https://images.unsplash.com/photo-1628655501171-610f5e18d49c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=s2200',
      imageAlt: 'Advisor presenting university options on a laptop to a family',
    },
    support: {
      eyebrow: 'Family-first support',
      title: 'Advisors who understand Vietnamese priorities',
      description:
        'From proximity to Vietnamese communities to part-time work opportunities, we benchmark every option against what matters most to your family.',
      bullets: [
        'On-the-ground housing and suburb guidance from recent graduates',
        'TestDaF/Goethe improvement roadmaps to hit faculty-specific language requirements',
        'Weekly bilingual updates that keep parents informed without overwhelming details',
      ],
      image:
        'https://images.unsplash.com/photo-1731458769726-cef60c792665?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Vietnamese family meeting with an education consultant',
    },
    process: [
      {
        icon: ClipboardList,
        title: 'Profile deep-dive',
        description: 'We review academics, extracurriculars, finances, and relocation preferences in Vietnamese or English.',
      },
      {
        icon: Map,
        title: 'Curated shortlist',
        description: 'Receive a ranked comparison of 6–8 universities with strengths and risk levels.',
      },
      {
        icon: Award,
        title: 'Scholarship strategy',
        description: 'Align application timelines with scholarship rounds and faculty quotas.',
      },
      {
        icon: MessageCircle,
        title: 'Decision workshops',
        description: 'Live sessions help your family weigh lifestyle, budget, and career outcomes before confirming preferences.',
      },
    ],
    cta: {
      title: 'Map your German university pathway with confidence',
      description:
        'Book a free consultation to receive a tailored shortlist and scholarship action plan within 14 days.',
      buttonLabel: 'Book your consultation',
    },
  },
  'application-support': {
    slug: 'application-support',
    hero: {
      eyebrow: 'Offer-winning dossiers',
      title: 'Application Support & Document Perfection',
      description:
        'From motivational letter storytelling to certified translations, our specialists elevate every submission so admissions teams remember your name and narrative.',
      image:
        'https://images.unsplash.com/photo-1758874573150-05c1b6b56407?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
      imageAlt: 'Student writing an application letter with a laptop and notebook',
    },
    stats: [
      {
        value: '600+',
        label: 'Offers processed',
        description: 'Undergraduate, postgraduate, and pathway programs across Germany since 2014.',
      },
      {
        value: '3 rounds',
        label: 'Motivational Letter revisions',
        description: 'Every statement receives structured feedback from advisors and native German speakers.',
      },
      {
        value: '7 business days',
        label: 'Average submission window',
        description: 'Complete applications confidently before priority deadlines and scholarship rounds.',
      },
    ],
    benefits: [
      {
        icon: FileSignature,
        title: 'Story-driven motivational letter coaching',
        description: 'Reveal your leadership and resilience through narrative frameworks shaped for German admissions expectations.',
      },
      {
        icon: ClipboardCheck,
        title: 'Document control centre',
        description: 'We prepare certified translations, portfolio uploads, and document naming so portals accept them the first time.',
      },
      {
        icon: Languages,
        title: 'Bilingual parent updates',
        description: 'Weekly progress check-ins in Vietnamese ensure your family signs and approves forms without stress.',
      },
    ],
    focus: {
      eyebrow: 'Submission excellence',
      title: 'Polished applications that stand out for Vietnamese students',
      description:
        'We craft admissions packages that showcase your global mindset while reassuring panels about your readiness for German academics.',
      bullets: [
        'Detailed activity portfolios tied to university values and graduate outcomes',
        'Recommendation letter briefs tailored to professors and supervisors',
        'Customized timelines for multiple intakes and conditional offers',
      ],
      image:
        'https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Close-up of application documents neatly organized on a desk',
    },
    support: {
      eyebrow: 'End-to-end guidance',
      title: 'Portal submissions handled with precision',
      description:
        'Your advisor completes every portal field, double checks payment receipts, and confirms acknowledgements so nothing falls through the cracks.',
      bullets: [
        'Conditional offer tracking across multiple universities simultaneously',
        'Guided responses for supplementary questions and interviews',
        'Transparent checklist dashboards accessible to both students and parents',
      ],
      image:
        'https://images.unsplash.com/photo-1565688527174-775059ac429c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Education consultant reviewing application requirements with a student',
    },
    process: [
      {
        icon: ClipboardList,
        title: 'Requirement mapping',
        description: 'We compile faculty-specific checklists and document formats before intake deadlines open.',
      },
      {
        icon: FileText,
        title: 'Narrative development',
        description: 'Draft essays and statements with coaching focused on clarity, impact, and authentic Vietnamese perspective.',
      },
      {
        icon: Sparkles,
        title: 'Quality review',
        description: 'Editors refine grammar and tone, while advisors ensure compliance with university templates.',
      },
      {
        icon: ShieldCheck,
        title: 'Submission & tracking',
        description: 'We lodge applications, monitor status changes, and escalate if universities request extra evidence.',
      },
    ],
    cta: {
      title: 'Secure offers with professionally managed applications',
      description:
        'Chat with our admissions team to map deadline priorities and start your application support plan.',
      buttonLabel: 'Schedule an application call',
    },
  },
  'visa-processing': {
    slug: 'visa-processing',
    hero: {
      eyebrow: 'Compliance champions',
      title: 'German Student Visa & Blocked Account Mastery',
      description:
        'Our advisors coach you through financial evidence, motivational letters, and health insurance so German visa approvals feel predictable.',
      image:
        'https://images.unsplash.com/photo-1655722725332-9925c96dd627?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=s2400',
      imageAlt: 'Passport, visa documents, and travel essentials on a table',
    },
    stats: [
      {
        value: '98%',
        label: 'Visa approval rate',
        description: 'Maintained across high- and moderate-risk Vietnamese applicant categories since 2019.',
      },
      {
        value: '48 hours',
        label: 'Document auditing',
        description: 'Compliance team flags gaps or inconsistencies within two business days.',
      },
      {
        value: '6 mock sessions',
        label: 'Visa interview practice',
        description: 'Coaching in Vietnamese and English to master intent questions and financial explanations.',
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: 'Risk-proof evidence',
        description: 'We structure blocked accounts, sponsor letters, and tuition proof to meet embassy expectations.',
      },
      {
        icon: FileText,
        title: 'Motivational Letter support',
        description: 'Craft persuasive statements that balance ambition with credible ties to Vietnam.',
      },
      {
        icon: Timer,
        title: 'Deadline management',
        description: 'Coordinated medicals, insurance, and university admission uploads keep your visa lodged ahead of embassy bottlenecks.',
      },
    ],
    focus: {
      eyebrow: 'Evidence perfection',
      title: 'Financial and academic proofs that withstand scrutiny',
      description:
        'We review every document for accuracy, translation quality, and consistency with your university offer and career plan.',
      bullets: [
        'Tailored sponsor letter templates compliant with German embassy wording',
        'Guides for acceptable funds for blocked accounts and currency conversions',
        'Alignment between study goals, past education, and Vietnamese ties to mitigate refusal risks',
      ],
      image:
        'https://images.unsplash.com/photo-1758691737421-86dd84bd2951?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Immigration advisor reviewing visa documents with a Vietnamese student',
    },
    support: {
      eyebrow: 'Peace of mind',
      title: 'Mock interviews and real-time embassy updates',
      description:
        'Stay confident with practice sessions, translated instructions, and continuous monitoring of visa policy changes.',
      bullets: [
        'Scenario-based interview prep covering finances, intent, and German regulations',
        'Digital checklists with reminders for police checks and biometrics',
        'Emergency escalation channel if case officers request additional evidence',
      ],
      image:
        'https://images.unsplash.com/photo-1531537571171-a707bf2683da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Advisor conducting a practice visa interview with a student',
    },
    process: [
      {
        icon: ClipboardCheck,
        title: 'Compliance audit',
        description: 'We validate university admission, insurance, and financial proofs before any forms are submitted.',
      },
      {
        icon: FileSignature,
        title: 'Motivational Letter narrative',
        description: 'Craft a compelling Motivational Letter aligned with your long-term plans.',
      },
      {
        icon: Users,
        title: 'Mock interviews',
        description: 'Simulated interviews with feedback on clarity, confidence, and policy awareness.',
      },
      {
        icon: Plane,
        title: 'Lodgement & monitoring',
        description: 'We submit the application, track progress, and manage embassy communications until approval.',
      },
    ],
    cta: {
      title: 'Prepare a German student visa file that gets approved faster',
      description:
        'Speak with our compliance team to start your visa readiness assessment and timeline.',
      buttonLabel: 'Start your visa plan',
    },
  },
  'test-preparation': {
    slug: 'test-preparation',
    hero: {
      eyebrow: 'Band score breakthroughs',
      title: 'TestDaF, Goethe & IELTS Preparation',
      description:
        'Strategic prep plans designed by former examiners help you reach faculty-required scores without sacrificing school commitments.',
      image:
        'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
      imageAlt: 'Student with books on the way to class',
    },
    stats: [
      {
        value: '+1 level',
        label: 'Average Goethe/TestDaF improvement',
        description: 'Achieved within eight-week sprint programs tailored for German university requirements.',
      },
      {
        value: '120 hrs',
        label: 'Premium content access',
        description: 'Recorded masterclasses, practice banks, and scoring rubrics in Vietnamese and German.',
      },
      {
        value: '92%',
        label: 'Score target success',
        description: 'Students hit minimum faculty score requirements for Engineering, Medicine, and Business intakes.',
      },
    ],
    benefits: [
      {
        icon: BookOpen,
        title: 'Exam-specific game plans',
        description: 'Choose TestDaF, Goethe, or IELTS and receive weekly study sprints mapped to your target score and intake date.',
      },
      {
        icon: Headphones,
        title: 'Live feedback labs',
        description: 'Speaking and writing clinics led by certified trainers with instant scoring and accent coaching.',
      },
      {
        icon: Sparkles,
        title: 'Motivation loops',
        description: 'Progress dashboards, Vietnamese mentor check-ins, and mini rewards keep you accountable.',
      },
    ],
    focus: {
      eyebrow: 'Tailored progression',
      title: 'Modular learning that fits Vietnamese school schedules',
      description:
        'Balance high school or university coursework with targeted prep blocks delivered in-person, online, or hybrid.',
      bullets: [
        'Baseline diagnostics to pinpoint grammar, pronunciation, and comprehension gaps',
        'Priority modules for Engineering, IT, and Business vocabulary and scenarios',
        'Weekly bilingual reports for parents tracking attendance and score gains',
      ],
      image:
        'https://images.unsplash.com/photo-1582826310241-0cd9cc92dbb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Vietnamese student practicing speaking skills with a tutor',
    },
    support: {
      eyebrow: 'Resources & community',
      title: 'Stay inspired with premium practice banks and alumni mentors',
      description:
        'Join accountability squads led by Vietnamese alumni already studying in Germany and access curated study materials updated monthly.',
      bullets: [
        'Simulated computer-based exam rooms for TestDaF and TOEFL',
        'Vocabulary decks focused on German campus life and academic writing',
        'Private chat channel with coaches for quick grammar and pronunciation fixes',
      ],
      image:
        'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Group of students after exam preparation class',
    },
    process: [
      {
        icon: CalendarCheck,
        title: 'Diagnostic & plan',
        description: 'Placement test plus consultation defines your target score and weekly study rhythm.',
      },
      {
        icon: BookOpen,
        title: 'Sprint training',
        description: 'Skill-specific drills with immediate scoring breakdowns and model answers.',
      },
      {
        icon: Headphones,
        title: 'Mock exams',
        description: 'Proctored simulations to rehearse timing, pressure, and test-day rituals.',
      },
      {
        icon: Sparkles,
        title: 'Final polish',
        description: 'One-on-one clinics on weak areas before your official test date.',
      },
    ],
    cta: {
      title: 'Reach your target TestDaF, Goethe, or IELTS score faster',
      description:
        'Reserve a placement test and receive a custom study roadmap with weekly accountability.',
      buttonLabel: 'Book a placement test',
    },
  },
  'career-counseling': {
    slug: 'career-counseling',
    hero: {
      eyebrow: 'Future-ready guidance',
      title: 'Career Counseling & Employability Coaching',
      description:
        'Bridge Vietnamese strengths with German industry expectations through personalised coaching, internship pathways, and networking support.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
      imageAlt: 'Career advisor talking with an international student in a modern office',
    },
    stats: [
      {
        value: '85%',
        label: 'Internship placement',
        description: 'Clients secure internships or part-time roles within six months of arrival.',
      },
      {
        value: '50+',
        label: 'Industry mentors',
        description: 'Vietnamese alumni in tech, engineering, finance, and design across German cities.',
      },
      {
        value: '12 weeks',
        label: 'Coaching journey',
        description: 'Structured program aligning career goals with visa, study load, and work rights.',
      },
    ],
    benefits: [
      {
        icon: Briefcase,
        title: 'Career mapping workshops',
        description: 'Define your German career pathway with labour market insights and salary benchmarks.',
      },
      {
        icon: TrendingUp,
        title: 'Portfolio & resume polish',
        description: 'Adapt your CV (Lebenslauf), LinkedIn, and portfolio to German recruiter expectations.',
      },
      {
        icon: Users,
        title: 'Mentor introductions',
        description: 'Connect with Vietnamese professionals in your field for advice, referrals, and networking practice.',
      },
    ],
    focus: {
      eyebrow: 'Career clarity',
      title: 'Build a job search plan before you land in Germany',
      description:
        'We match your strengths with growth sectors and outline the exact steps to secure internships while balancing study commitments.',
      bullets: [
        'Industry deep-dives covering visas, salaries, and skill shortages',
        'Personal brand toolkit with resume, cover letter, and LinkedIn templates',
        'Networking scripts in Vietnamese and German for industry coffee chats',
      ],
      image:
        'https://images.unsplash.com/photo-1565598611425-45b0878bdd0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Young professional reviewing career materials at a desk',
    },
    support: {
      eyebrow: 'Work-ready confidence',
      title: 'Interview coaching and employer outreach',
      description:
        'From behavioural interviews to visa-friendly employers, we help you stand out and stay compliant.',
      bullets: [
        'Mock interviews with feedback on language, storytelling, and body language',
        'Employer shortlists filtered by sponsorship openness and student-friendly policies',
        'Guidance on German labor regulations and payslip compliance for international students',
      ],
      image:
        'https://images.unsplash.com/photo-1686771416537-bf4a4f263d88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Career coach conducting a mock interview with a student',
    },
    process: [
      {
        icon: Lightbulb,
        title: 'Vision planning',
        description: 'Assess strengths, passions, and visa goals to set clear career milestones.',
      },
      {
        icon: Briefcase,
        title: 'Brand building',
        description: 'Optimize resumes, portfolios, and networking profiles for German recruiters.',
      },
      {
        icon: Users,
        title: 'Mentor pairing',
        description: 'Match with Vietnamese alumni working in your target industry or city.',
      },
      {
        icon: TrendingUp,
        title: 'Interview readiness',
        description: 'Practice behavioural interviews and salary negotiations with HR specialists.',
      },
    ],
    cta: {
      title: 'Launch your German career journey with personalised coaching',
      description:
        'Book a clarity call to align your study plan with a realistic career roadmap.',
      buttonLabel: 'Plan my career path',
    },
  },
  'pre-departure-support': {
    slug: 'pre-departure-support',
    hero: {
      eyebrow: 'Arrive ready',
      title: 'Pre-Departure & Settlement Support',
      description:
        'From accommodation to cultural orientation, we choreograph every detail so you land in Germany confident and connected.',
      image:
        'https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
      imageAlt: 'Plane flying into the sky',
    },
    stats: [
      {
        value: '150+',
        label: 'Housing placements',
        description: 'Secured homestays, managed apartments, and student accommodations across German cities.',
      },
      {
        value: '48 hrs',
        label: 'Arrival response',
        description: 'Onshore support team ready to help with jet lag emergencies, bank setup, and SIM activation.',
      },
      {
        value: '30 days',
        label: 'Welcome onboarding',
        description: 'Guided checklists covering city registration (Anmeldung), health insurance, and academic orientation.',
      },
    ],
    benefits: [
      {
        icon: Home,
        title: 'Curated accommodation',
        description: 'Match with safe housing options vetted by Vietnamese alumni in your university city.',
      },
      {
        icon: Plane,
        title: 'Airport to campus coordination',
        description: 'Airport pickup, SIM setup, and transport rehearsals before your first day of class.',
      },
      {
        icon: Globe,
        title: 'Culture-and-care pack',
        description: 'Weekly survival tips covering banking, healthcare, transport, and Vietnamese community events.',
      },
    ],
    focus: {
      eyebrow: 'Logistics handled',
      title: 'Everything you need before boarding the plane',
      description:
        'Receive a personalised departure binder with booking confirmations, emergency contacts, and customs guidance in Vietnamese and English.',
      bullets: [
        'Pre-booked airport transfers with bilingual drivers in major cities',
        'Bank account and city registration (Anmeldung) appointments arranged before you fly',
        'Packing lists tuned to German climate and dorm essentials',
      ],
      image:
        'https://images.unsplash.com/photo-1695510757259-643081efedf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Suitcase packed with travel essentials and study materials',
    },
    support: {
      eyebrow: 'Settle with confidence',
      title: 'Onshore concierge for Vietnamese students',
      description:
        'Our Berlin and Munich teams welcome you with city tours, budgeting workshops, and community introductions.',
      bullets: [
        'Welcome dinner with Vietnamese alumni and fellow newcomers',
        'Emergency hotline staffed by Vietnamese-speaking advisors',
        'Monthly city guides featuring student deals and community events',
      ],
      image:
        'https://images.unsplash.com/photo-1684278799715-cdc2e26becf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
      imageAlt: 'Group of international students exploring a new city together',
    },
    process: [
      {
        icon: ClipboardCheck,
        title: 'Departure planning',
        description: 'We book flights, housing, and airport pickups while coordinating with your family.',
      },
      {
        icon: Luggage,
        title: 'Pre-arrival orientation',
        description: 'Online workshops cover customs, banking, and safety essentials before you fly.',
      },
      {
        icon: Plane,
        title: 'Arrival concierge',
        description: 'Dedicated arrival buddy helps you settle into accommodation and first classes.',
      },
      {
        icon: Globe,
        title: '30-day settlement',
        description: 'City tours, budgeting support, and continued check-ins for you and your parents.',
      },
    ],
    cta: {
      title: 'Land in Germany feeling supported from day one',
      description:
        'Reserve your pre-departure plan to secure housing, airport pickup, and cultural onboarding.',
      buttonLabel: 'Plan my arrival',
    },
  },
} as const
