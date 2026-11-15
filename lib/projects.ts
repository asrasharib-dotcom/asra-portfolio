export type Result = { value: string; label: string }

export type VideoGroup = {
  title: string
  videos: { src: string; title: string }[]
}

export type PerformanceGroup = {
  title: string
  images: { src: string; alt: string; caption?: string }[]
}

export type Project = {
  slug: string
  index: string
  title: string
  category: string
  summary: string
  image: string
  tags: string[]
  overview: string
  objective: string
  responsibilities: string[]
  approach: string
  deliverables: string[]
  results: Result[]
  gallery?: { src: string; alt: string; caption: string }[]
  videoGroups?: VideoGroup[]
  performanceGroups?: PerformanceGroup[]
}

export const projects: Project[] = [
  {
    slug: 'educational-brands',
    index: '01',
    title: 'Educational Brands',
    category: 'Social Media Content',
    summary:
      'Informative posts and promotional campaigns that make learning brands feel clear, credible and worth following.',
    image: '/images/work-education.png',
    tags: ['Instagram', 'Facebook', 'LinkedIn'],
    overview:
      'Ongoing social media content for education-focused brands, balancing informative, value-led posts with promotional campaigns for admissions, courses and events.',
    objective:
      'Build trust with students and parents through consistent, helpful content while supporting enrolment-focused campaigns.',
    responsibilities: [
      'Planning monthly content around academic calendars and key intake periods',
      'Writing captions and informative carousel copy',
      'Designing post graphics in line with brand guidelines',
      'Coordinating promotional campaign content and launch timing',
    ],
    approach:
      'Complex information was broken into simple, scannable carousels and short videos. Promotional posts were paired with genuinely useful content so the feed never felt like a constant advert.',
    deliverables: [
      'Informative carousels & static posts',
      'Promotional campaign creatives',
      'Short-form video content',
      'Monthly content calendars',
    ],
    results: [],
    gallery: [
      {
        src: '/images/social/feed-01-.jpg',
        alt: 'Anonymized social media feed mockup',
        caption: 'Feed management & content design',
      },
      {
        src: '/images/social/feed-02-.jpg',
        alt: 'Anonymized social media feed mockup',
        caption: 'Grid consistency',
      },
      {
        src: '/images/social/feed-04-.jpg',
        alt: 'Anonymized social media feed mockup',
        caption: 'Content publishing',
      },
    ],
  },

  {
    slug: 'ecommerce-campaigns',
    index: '02',
    title: 'E-commerce Campaigns',
    category: 'AI Product Videos',
    summary:
      'AI-powered product videos and creative concepts that help products stand out in a crowded feed.',
    image: '/images/work-ecommerce.png',
    tags: ['AI Video', 'Instagram', 'TikTok'],
    overview:
      'Creative campaigns for e-commerce products, using AI tools to produce polished product videos and fresh visual concepts without the cost of a full production shoot.',
    objective:
      'Create scroll-stopping product content that shows products in their best light and supports sales-focused campaigns.',
    responsibilities: [
      'Developing creative concepts for product campaigns',
      'Producing AI-powered product videos',
      'Editing and finishing videos for each platform',
      'Writing hooks and captions to support each creative',
    ],
    approach:
      'Each concept began with the product’s key selling point, then AI tools were used to build cinematic scenes and motion around it, finished with careful editing for pacing and platform format.',
    deliverables: [
      'AI-generated product videos',
      'Campaign concept decks',
      'Platform-ready edits (Reels, Stories, TikTok)',
      'Caption & hook copy',
    ],
    results: [],
    gallery: [
      {
        src: '/images/work-ecommerce.png',
        alt: 'E-commerce creative portfolio sample',
        caption: 'Product content concepts',
      },
      {
        src: '/images/social/feed-03-.jpg',
        alt: 'Anonymized e-commerce social feed mockup',
        caption: 'E-commerce feed design',
      },
    ],
  },

  {
    slug: 'ai-video-creation',
    index: '03',
    title: 'AI Video Creation',
    category: 'AI & UGC-Style Content',
    summary:
      'AI-generated videos and realistic UGC-style content that feels native to social platforms.',
    image: '/images/ai-video-creation-cover.jpg',
    tags: ['AI Video', 'UGC-Style', 'Short-Form'],
    overview:
      'A collection of AI-generated video work, including e-commerce product videos and realistic UGC-style content created for social platforms.',
    objective:
      'Give brands a flexible way to produce engaging, authentic-feeling video content using AI-assisted creative production.',
    responsibilities: [
      'Developing creative concepts and video scripts',
      'Generating and refining AI video scenes',
      'Editing, captioning and sound design',
      'Adapting content for short-form social platforms',
    ],
    approach:
      'Different creative directions were developed for product-focused e-commerce videos and UGC-style content. AI-generated scenes were refined through editing to create platform-ready videos.',
    deliverables: [
      'E-commerce AI UGC videos',
      'AI UGC-style content',
      'AI-generated brand videos',
      'Short-form vertical edits',
    ],
    results: [],
    videoGroups: [
      {
        title: 'ECOMMERCE AI UGC CONTENT',
        videos: [
          {
            src: '/videos/AI Ecommerce UGC video/Ecom 3-.mp4',
            title: 'E-commerce AI UGC Video 01',
          },
          {
            src: '/videos/AI Ecommerce UGC video/Ecom 4 --.mp4',
            title: 'E-commerce AI UGC Video 02',
          },
          {
            src: '/videos/AI Ecommerce UGC video/Ecomsnaps --.mp4',
            title: 'EcomSnaps AI UGC Video',
          },
        ],
      },
      {
        title: 'AI UGC CONTENT',
        videos: [
          {
            src: '/videos/AI UGC Video/ACP 2 (online-video-cutter.com).mp4',
            title: 'ACP Video 01',
          },
          {
            src: '/videos/AI UGC Video/ACP 3 (online-video-cutter.com).mp4',
            title: 'ACP Video 02',
          },
          {
            src: '/videos/AI UGC Video/FCA- Creative 1 (online-video-cutter.com).mp4',
            title: 'FCA Creative 01',
          },
          {
            src: '/videos/AI UGC Video/FCA- Creative 1 (online-video-cutter.com) (1).mp4',
            title: 'FCA Creative 02',
          },
          {
            src: '/videos/AI UGC Video/FCA- Creative 1 (online-video-cutter.com) (2).mp4',
            title: 'FCA Creative 03',
          },
          {
            src: '/videos/AI UGC Video/FCA- Creative 1 (online-video-cutter.com) (3).mp4',
            title: 'FCA Creative 04',
          },
          {
            src: '/videos/AI UGC Video/FCA- Creative 1 (online-video-cutter.com) (4).mp4',
            title: 'FCA Creative 05',
          },
        ],
      },
    ],
  },

  {
    slug: 'company-branding',
    index: '04',
    title: 'Company Branding',
    category: 'Employer & Corporate Branding',
    summary:
      'Employer branding, employee-generated content and corporate campaigns that show the people behind a company.',
    image: '/images/company-branding-cover.jpg',
    tags: ['LinkedIn', 'Employer Branding', 'EGC'],
    overview:
      'Corporate and employer branding content that presents companies as great places to work and credible partners to do business with.',
    objective:
      'Strengthen company reputation and culture visibility through authentic, people-first content.',
    responsibilities: [
      'Planning employer branding and culture content',
      'Coordinating employee-generated content',
      'Creating corporate campaign creatives',
      'Maintaining a consistent brand voice across channels',
    ],
    approach:
      'Rather than polished corporate messaging alone, the content centred real team moments, employee voices and behind-the-scenes stories, framed within a consistent visual identity.',
    deliverables: [
      'Employer branding posts',
      'Employee-generated content series',
      'Corporate campaign creatives',
      'Event & milestone coverage',
    ],
    results: [],
  },

  {
    slug: 'social-media-strategy',
    index: '05',
    title: 'Social Media Strategy',
    category: 'Content Strategy',
    summary:
      'Strategic content planning built around brand goals, audience interests and platform-specific content.',
    image: '/images/noor-atelier.jpg',
    tags: ['Content Strategy', 'Research', 'Planning'],
    overview:
      'A collection of social media strategy work focused on content direction, audience relevance and consistent brand communication.',
    objective:
      'Create a clear content direction that connects social media activity with brand goals.',
    responsibilities: [
      'Researching trends and relevant content ideas',
      'Planning content pillars and monthly calendars',
      'Developing platform-specific content strategies',
      'Aligning content with brand voice and objectives',
    ],
    approach:
      'Content ideas were organised into relevant themes and planned around audience interests, platform formats and brand objectives.',
    deliverables: [
      'Content strategy and planning',
      'Content pillars and creative direction',
      'Monthly content calendars',
      'Platform-specific content ideas',
    ],
    results: [],
  },

  {
    slug: 'social-media-management',
    index: '06',
    title: 'Social Media Management',
    category: 'Content & Platform Management',
    summary:
      'Social media management across Instagram, TikTok, LinkedIn and Meta, showcasing content creation, feed management and platform performance across multiple managed accounts.',
    image: '/images/social-media-management-cover.jpg',
    tags: ['Instagram', 'LinkedIn'],
    overview:
      'A selection of social media management work across multiple accounts and brands, highlighting feed design, brand-specific creatives and visual content created for different industries. All examples are presented anonymously to maintain client confidentiality.',
    objective:
      'Showcase the ability to create consistent, engaging and brand-aligned social media content that reflects each brand’s identity and maintains a cohesive visual presence across platforms.',
    responsibilities: [
      'Planning and maintaining content calendars',
      'Coordinating and scheduling social media posts',
      'Maintaining consistent feed design and brand voice',
      'Reviewing content performance and engagement',
      'Monitoring platform insights across managed accounts',
      'Preparing and reviewing Meta Ads performance reports',
    ],
    approach:
      'Each brand was approached with its own visual identity, audience and content style in mind. The focus was on creating cohesive social media feeds, designing brand-specific creatives and maintaining consistent visual communication across different platforms. Content was tailored to reflect each brand’s personality while keeping the overall presentation clear, engaging and visually consistent.',
    deliverables: [
      'Social media feed examples',
      'Brand-specific social media designs',
    ],
    results: [],
    gallery: [
      {
        src: '/images/social/feed-01-.jpg',
        alt: 'Social media feed management example',
        caption: 'Social Media Feed Management',
      },
      {
        src: '/images/social/feed-02-.jpg',
        alt: 'Social media grid design example',
        caption: 'Instagram Grid & Content Design',
      },
      {
        src: '/images/social/feed-03-.jpg',
        alt: 'Social media content example',
        caption: 'Content Planning & Publishing',
      },
      {
        src: '/images/social/feed-04-.jpg',
        alt: 'Social media management example',
        caption: 'Social Media Content Management',
      },
      {
        src: '/images/social/Fragrance Brand.jpg',
        alt: 'Fragrance brand social media content',
        caption: 'Fragrance Brand',
      },
      {
        src: '/images/social/Jewellery Brand.jpg',
        alt: 'Jewellery brand social media content',
        caption: 'Jewellery Brand',
      },
      {
        src: '/images/social/Restaurant Brand.jpg',
        alt: 'Restaurant brand social media content',
        caption: 'Restaurant Brand',
      },
      {
        src: '/images/social/Self Care Brand.png',
        alt: 'Self care brand social media content',
        caption: 'Self Care Brand',
      },
      {
        src: '/images/social/Beauty & Salon Brand.jpg',
        alt: 'Beauty and salon brand social media content',
        caption: 'Beauty & Salon Brand',
      },
    ],
    performanceGroups: [
      {
        title: 'INSTAGRAM PERFORMANCE',
        images: [
          { src: '/images/results/ig-dashboard-345k.jpg', alt: 'Instagram account performance dashboard' },
          { src: '/images/results/ig-dashboard-855k.jpg', alt: 'Instagram account performance dashboard' },
          { src: '/images/results/ig-march-reach.jpg', alt: 'Instagram reach performance' },
          { src: '/images/results/ig-views-1-5m.jpg', alt: 'Instagram video views performance' },
          { src: '/images/results/ig-views-512k.jpg', alt: 'Instagram video views performance' },
          { src: '/images/results/post-engagement.jpg', alt: 'Instagram post engagement insights' },
          { src: '/images/results/insta short form reel.jpeg', alt: 'Instagram short-form reel insights' },
          { src: '/images/results/insta short form reel 2.jpeg', alt: 'Instagram short-form reel insights' },
          { src: '/images/results/insta short form reel 3.jpeg', alt: 'Instagram short-form reel insights' },
          { src: '/images/results/Short-form Video1.jpeg', alt: 'Short-form video performance insights' },
          { src: '/images/results/Short-form Video 2.jpeg', alt: 'Short-form video performance insights' },
          { src: '/images/results/Short-form Video3.jpeg', alt: 'Short-form video performance insights' },
          { src: '/images/results/Short-form Video4.jpeg', alt: 'Short-form video performance insights' },
          { src: '/images/results/Short-form Video5.jpeg', alt: 'Short-form video performance insights' },
          { src: '/images/results/Short-form Video6.jpeg', alt: 'Short-form video performance insights' },
        ],
      },
      {
        title: 'TIKTOK PERFORMANCE',
        images: [
          { src: '/images/results/tiktok 134.6k.jpeg', alt: 'TikTok account performance' },
          { src: '/images/results/tiktok 143.4k.jpeg', alt: 'TikTok account performance' },
          { src: '/images/results/tiktok 195.7k.jpeg', alt: 'TikTok account performance' },
          { src: '/images/results/tiktok 223.2k.jpeg', alt: 'TikTok account performance' },
          { src: '/images/results/tiktok-363k.jpg', alt: 'TikTok account performance' },
        ],
      },
      {
        title: 'LINKEDIN PERFORMANCE',
        images: [
          { src: '/images/results/Linkedin Result OUT of network 86% .jpeg', alt: 'LinkedIn out-of-network performance' },
          { src: '/images/results/Linkedin Result OUT of network 89% .jpeg', alt: 'LinkedIn out-of-network performance' },
          { src: '/images/results/Linkedin Result OUT of network 92% .jpeg', alt: 'LinkedIn out-of-network performance' },
          { src: '/images/results/Linkedin Result OUT of network 97% .jpeg', alt: 'LinkedIn out-of-network performance' },
        ],
      },
      {
        title: 'META ADS PERFORMANCE',
        images: [
          { src: '/images/results/Meta Ads before result 1.jpg', alt: 'Meta Ads performance before optimisation' },
          { src: '/images/results/Meta Ads After result 1.jpg', alt: 'Meta Ads performance after optimisation' },
          { src: '/images/results/Meta Ads before result 2.jpg', alt: 'Meta Ads performance before optimisation' },
          { src: '/images/results/Meta Ads after result 2.jpg', alt: 'Meta Ads performance after optimisation' },
        ],
      },
    ],
  },

  {
    slug: 'personal-creator-account',
    index: '07',
    title: 'Personal Creator Account',
    category: 'Organic Growth & UGC Content',
    summary:
      'An independently managed lifestyle and UGC creator account, showcasing organic reach, short-form video creation and audience engagement.',
    image: '/images/creator-account-cover.jpg',
    tags: ['Instagram', 'UGC', 'Lifestyle', 'Organic Growth'],
    overview:
      'An independently managed Instagram creator account focused on lifestyle and UGC-style personal content. Since February 2026, I have been creating and publishing short-form videos, experimenting with creative formats and developing content that attracts new audiences through organic discovery.',
    objective:
      'To build a recognizable creator presence, expand organic reach and gain practical experience in short-form video strategy, audience behaviour and content performance.',
    responsibilities: [
      'Researching content trends and creative ideas',
      'Developing Reel concepts, hooks and storytelling',
      'Creating lifestyle and UGC-style videos',
      'Shooting and editing short-form content',
      'Writing captions and managing publishing',
      'Reviewing Instagram Insights and audience engagement',
    ],
    approach:
      'My approach combines lifestyle storytelling, relatable concepts, visual creativity and consistent short-form video publishing. I focus on researching trends, developing engaging Reel ideas, creating and editing videos, and evaluating performance to understand what resonates with the audience.',
    deliverables: [
      'Lifestyle and UGC-style Reels',
      'Short-form video concepts',
      'Content creation and editing',
      'Instagram content publishing',
      'Organic performance tracking',
    ],
    results: [
      { value: '1,033', label: 'Current Followers' },
      { value: '169K', label: 'Highest Reel Views' },
      { value: '30K', label: 'Typical Recent Reel Views' },
      { value: '509,033', label: 'Accounts Reached · 90 Days' },
      { value: '6.6K', label: 'Profile Visits · 90 Days' },
      { value: '5 / Week', label: 'Reels Publishing Frequency' },
    ],
    gallery: [
      {
        src: '/images/creator-account/reel-2.png',
        alt: 'Instagram creator Reel',
        caption: 'Recent Reels with around 40K views',
      },
      {
        src: '/images/creator-account/reel-3.png',
        alt: 'Instagram creator Reel',
        caption: 'Recent Reels with around 30K views',
      },
    ],
    performanceGroups: [
      {
        title: 'INSTAGRAM ACCOUNT PERFORMANCE',
        images: [
          {
            src: '/images/creator-account/profile.jpg',
            alt: 'Instagram creator profile showing current followers',
            caption: 'Current Instagram Profile',
          },
          {
            src: '/images/creator-account/90-day-reach.png',
            alt: 'Instagram accounts reached in the last 90 days',
            caption: '509K+ Accounts Reached in 90 Days',
          },
          {
            src: '/images/creator-account/profile-visits.png',
            alt: 'Instagram profile visits in the last 90 days',
            caption: '6.6K Profile Visits in 90 Days',
          },
          {
            src: '/images/creator-account/highest-reel-169k.png',
            alt: 'Highest performing Reel with 169K views',
            caption: 'Highest Performing Reel — 169K Views',
          },
        ],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}