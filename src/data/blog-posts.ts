export type BlogPostSection = {
  heading: string
  paragraphs: string[]
  image?: {
    src: string
    alt: string
  }
  highlights?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  emoji: string
  coverImage: string
  coverImageAlt: string
  sections: BlogPostSection[]
  takeaway: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-universities-germany-2025',
    title: 'Top 10 Universities in Germany for International Students 2025',
    excerpt:
      'Explore the universities international families love most—complete with rankings, signature programs, and campus culture insights for 2025 intakes.',
    category: 'Universities',
    author: 'Education Team',
    date: '2025-11-05',
    readTime: '5 min read',
    emoji: '📚',
    coverImage:
      'https://images.unsplash.com/photo-1731200303867-d157cdc54ad9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600',
    coverImageAlt: 'Students walking past historic buildings at a German university',
    sections: [
      {
        heading: 'How we ranked universities for international students',
        paragraphs: [
          'We combined THE 2025 rankings, international student satisfaction surveys, and DAAD scholarship availability to create a shortlist that balances prestige with practical outcomes.',
          'Our advisors also considered airport access, student community support, and internship pipelines that help you secure part-time work quickly.',
        ],
        highlights: [
          'Technical University of Munich retains the #1 spot for Engineering.',
          'Heidelberg University shines for Medicine and Life Sciences.',
          'Humboldt University of Berlin climbs two places thanks to new research centers.',
        ],
      },
      {
        heading: 'Quick snapshot of 2025 intakes',
        image: {
          src: 'https://images.unsplash.com/photo-1613931642562-863ea6ffbb2f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'German city skyline at sunset with university buildings',
        },
        paragraphs: [
          'Munich and Berlin remain the top picks, but 2025 sees a surge of interest in cities like Hamburg and Frankfurt thanks to their strong job markets.',
          'For students seeking smaller class sizes, consider universities in cities like Freiburg or Aachen where global alumni networks run welcoming committees for new arrivals.',
        ],
      },
      {
        heading: 'Scholarship opportunities you should not miss',
        paragraphs: [
          'German universities offer numerous scholarships for international students, often funded by the DAAD (German Academic Exchange Service). Highlight your academic achievements, motivation, and community service to stand out.',
          'Our team has secured tuition fee waivers and monthly stipends by combining university scholarships with DAAD programs—book a consultation to align deadlines now.',
        ],
      },
    ],
    takeaway: [
      'Prepare your shortlist 12 months ahead to capture scholarship rounds.',
      'Rank priorities: city lifestyle, program reputation, and internship access.',
      'Leverage alumni chats to understand culture fit before you accept an offer.',
    ],
  },
  {
    slug: 'ielts-preparation-tips',
    title: 'IELTS Preparation: 10 Tips to Achieve Your Target Score',
    excerpt:
      'Boost your IELTS score with student-friendly study schedules, proven resources, and mindset tips from our language coaching team.',
    category: 'Test Prep',
    author: 'Language Expert',
    date: '2025-11-03',
    readTime: '7 min read',
    emoji: '✍️',
    coverImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80',
    coverImageAlt: 'Students studying English together with notebooks and coffee',
    sections: [
      {
        heading: 'Start with a realistic diagnostic test',
        paragraphs: [
          'Take an official Cambridge or IDP diagnostic under timed conditions. This baseline tells you exactly which band descriptors to target.',
          'Share the results with your trainer so we can craft micro-goals for each skill—especially writing Task 2 and speaking Fluency & Coherence.',
        ],
      },
      {
        heading: 'Structure your weekly study sprint',
        paragraphs: [
          'Allocate 90 minutes per weekday: 30 minutes for vocabulary, 30 for listening + shadowing, and 30 for writing frameworks. Weekends are perfect for full mock tests.',
          'Use bilingual dual notes to remember idioms and data phrases that impress examiners without sounding memorised.',
        ],
        highlights: [
          'Record yourself answering common speaking questions and compare against Band 8 samples.',
          'Analyse model essays to copy paragraph structures—not exact sentences.',
          'Simulate computer-delivered practice if your test centre is digital.',
        ],
      },
      {
        heading: 'Mindset on exam day',
        paragraphs: [
          'Arrive early with water and light snacks. Breathe between sections and use the 1-minute speaking warm-up to share a genuine personal anecdote.',
          'Remember: examiners reward clarity and cohesion. If you forget a word, paraphrase; if you make an error, correct yourself calmly—self-correction shows awareness.',
        ],
      },
    ],
    takeaway: [
      'Consistency beats cramming—treat IELTS like a daily habit.',
      'Invest in feedback from certified trainers to avoid fossilised mistakes.',
      'Bring your personality to the speaking test; authenticity earns higher bands.',
    ],
  },
  {
    slug: 'student-visa-guide-germany-2025',
    title: 'Complete Guide to German Student Visa 2025',
    excerpt:
      'Understand every step of the German student visa—from blocked accounts to health insurance—so your visa file passes on the first submission.',
    category: 'Visa',
    author: 'Visa Specialist',
    date: '2025-11-01',
    readTime: '10 min read',
    emoji: '✈️',
    coverImage:
      'https://images.unsplash.com/photo-1530469525856-cf37954301f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600',
    coverImageAlt: 'Passport and visa documents on a desk with German flag colours',
    sections: [
      {
        heading: 'Document checklist for international applicants',
        paragraphs: [
          'Prepare a university admission letter, proof of financial resources (blocked account), travel health insurance, and certified academic transcripts. Financial evidence should cover one-year living costs.',
          'Remember to get your documents translated by a certified translator. Consistency across all your documents is critical.',
        ],
      },
      {
        heading: 'Crafting a persuasive Letter of Motivation',
        paragraphs: [
          'Explain your academic background, program choice, and career plan upon returning to Vietnam. Show strong ties—family business, property, or job offers.',
          'Avoid copy-paste templates. Visa officers can detect repeated phrasing across submissions; personalise each paragraph with specific details.',
        ],
        highlights: [
          'Address any previous visa rejections honestly with new evidence.',
          'Mention German regulations you understand—like work hour limits.',
          'Show how the chosen program advances Vietnam-focused career plans.',
        ],
      },
      {
        heading: 'Timeline and interview preparation',
        paragraphs: [
          'Allow 8–12 weeks from submission to decision. Use that time to rehearse possible interviews covering finances, course knowledge, and ties to Vietnam.',
          'Our advisors conduct bilingual mock interviews and supply embassy updates so you feel confident explaining your study plan in both English and your native language.',
        ],
      },
    ],
    takeaway: [
      'Double-check consistency between your Letter of Motivation and financial evidence.',
      'Submit early to avoid seasonal embassy backlogs.',
      'Practice interview answers in your native language and English to stay composed.',
    ],
  },
  {
    slug: 'cost-of-living-germany',
    title: 'Cost of Living for International Students in Germany',
    excerpt:
      'Plan your German budget with city-by-city breakdowns covering accommodation, groceries, transport, and weekend adventures.',
    category: 'Student Life',
    author: 'Student Advisor',
    date: '2025-10-28',
    readTime: '6 min read',
    emoji: '💰',
    coverImage:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600',
    coverImageAlt: 'A student apartment in Germany',
    sections: [
      {
        heading: 'Monthly budget snapshot by city',
        paragraphs: [
          'Munich and Berlin average EUR 1,000-1,200 per month including rent, compared to Leipzig at EUR 800 and Dresden at EUR 750.',
          'Consider shared apartments (WGs) near U-Bahn or S-Bahn lines for affordable commutes. global communities in Berlin-Lichtenberg and Munich offer great food at student-friendly prices.',
        ],
        highlights: [
          'Factor in one-off setup costs: deposit (Kaution), semester contribution, and initial groceries.',
          'Use student semester tickets for public transport savings.',
          'Join international student associations for furniture swaps and job leads.',
        ],
      },
      {
        heading: 'Balancing part-time work and study',
        paragraphs: [
          'With the 120 full days or 240 half days per year limit, target industries with flexible rosters—hospitality, retail, tutoring, or on-campus roles (HiWi).',
          'Track your payslips and understand German minimum wage rules to avoid underpayment. Our team reviews your contracts before you say yes.',
        ],
      },
      {
        heading: 'Stretching your dollar without missing out',
        paragraphs: [
          'Cook your favorite staples in bulk, plan weekend markets for fresh produce, and split rideshares with friends for late-night study sessions.',
          'Leverage university sports clubs, free museum days, and community events to enjoy German life on a student budget.',
        ],
      },
    ],
    takeaway: [
      'Build a three-month emergency fund before departure to handle surprises.',
      'Track spending weekly so you can adjust work hours ahead of semester start.',
      'Join alumni groups for tips on affordable housing and part-time work leads.',
    ],
  },
  {
    slug: 'scholarships-vietnamese-students-germany',
    title: 'Top Scholarships for International Students in Germany',
    excerpt:
      'Unlock merit and need-based scholarships available in 2025, plus the documents you need to submit a standout application.',
    category: 'Scholarships',
    author: 'Financial Advisor',
    date: '2025-10-25',
    readTime: '8 min read',
    emoji: '🎓',
    coverImage:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80',
    coverImageAlt: 'Graduates celebrating at an outdoor ceremony',
    sections: [
      {
        heading: 'Government and university scholarships to watch',
        paragraphs: [
          'DAAD scholarships are the most prestigious, covering full tuition and living expenses, but require a strong academic profile and motivation.',
          'Universities like TU Munich, Heidelberg University, and LMU Munich offer various scholarships for high-achieving international students—deadlines fall in spring and autumn.',
        ],
        highlights: [
          'Prepare notarised transcripts and German language certificates (if required) early to meet eligibility.',
          'Secure two recommendation letters that highlight leadership and impact.',
          'Draft a compelling personal statement linking goals to community impact.',
        ],
      },
      {
        heading: 'Strengthening your application narrative',
        paragraphs: [
          'Showcase real impact: tutoring peers, launching a community initiative, or supporting a family business. Numbers and outcomes strengthen your story.',
          'Explain why studying in Germany accelerates your plan to contribute back home—scholarship panels love concrete roadmaps.',
        ],
      },
      {
        heading: 'Timeline management',
        paragraphs: [
          'Create a scholarship tracker with requirements, deadlines, and status updates. We share a bilingual spreadsheet template with every student we coach.',
          'Schedule interview practice sessions at least two weeks before the panel. Prepare answers in both English and German to stay authentic.',
        ],
      },
    ],
    takeaway: [
      'Start gathering documents 9–12 months before your intended intake.',
      'Tell a story that connects your achievements to Vietnam’s future needs.',
      'Combine multiple small bursaries to cover living costs alongside tuition.',
    ],
  },
  {
    slug: 'choosing-right-course-germany',
    title: 'How to Choose the Right Course and University in Germany',
    excerpt:
      'Match your strengths with the perfect German course by balancing career goals, visa outcomes, and personal preferences.',
    category: 'Career Advice',
    author: 'Career Counselor',
    date: '2025-10-22',
    readTime: '9 min read',
    emoji: '🎯',
    coverImage:
      'https://images.unsplash.com/photo-1565688427897-579512c85d5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600',
    coverImageAlt: 'Advisor pointing at laptop screen with international student',
    sections: [
      {
        heading: 'Clarify your long-term vision first',
        paragraphs: [
          'Identify the industries booming in both Germany and Vietnam—engineering, IT, renewable energy, and healthcare all seek bilingual talent.',
          'List course outcomes, professional accreditations, and migration pathways to understand how each option supports your visa and career plans.',
        ],
      },
      {
        heading: 'Evaluate university support services',
        paragraphs: [
          'Look beyond rankings. Investigate employability scores, mentorship programs, and international student societies that ease cultural adjustment.',
          'Request course outlines to check group projects, internship requirements, and research components that align with your learning style.',
        ],
        highlights: [
          'Book virtual campus tours to feel each university’s vibe before applying.',
          'Compare graduate salary data using StepStone and LinkedIn insights.',
          'Chat with current international students via our alumni network evenings.',
        ],
      },
      {
        heading: 'Balance budget with opportunity',
        paragraphs: [
          'Create a three-tier shortlist: aspirational, target, and safety options. Factor in scholarships and living costs to calculate your true investment.',
          'Discuss finances openly with your family. We facilitate bilingual meetings so everyone understands deposit schedules and refund policies.',
        ],
      },
    ],
    takeaway: [
      'Rank each university on academics, support, lifestyle, and finances.',
      'Use mock offer comparisons to visualise tuition and scholarship differences.',
      'Stay flexible—Studienkolleg can unlock your dream course within a year.',
    ],
  },
]

export const blogPostBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<string, BlogPost>
