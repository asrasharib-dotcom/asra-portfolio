export type Result = { value: string; label: string }

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
  /** Only add figures you can verify (e.g. from platform analytics). */
  results: Result[]
  gallery?: { src: string; alt: string; caption: string }[]
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
      { src: '/images/social/feed-01.jpg', alt: 'Anonymized social media feed mockup', caption: 'Feed management & content design' },
      { src: '/images/social/feed-02.jpg', alt: 'Anonymized social media feed mockup', caption: 'Grid consistency' },
      { src: '/images/social/feed-04.jpg', alt: 'Anonymized social media feed mockup', caption: 'Content publishing' },
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
      { src: '/images/work-ecommerce.png', alt: 'E-commerce creative portfolio sample', caption: 'Product content concepts' },
      { src: '/images/social/feed-03.jpg', alt: 'Anonymized e-commerce social feed mockup', caption: 'E-commerce feed design' },
    ],
  },
  {
    slug: 'ai-video-creation',
    index: '03',
    title: 'AI Video Creation',
    category: 'AI & UGC-Style Content',
    summary:
      'AI-generated videos and realistic UGC-style content that feels native to social platforms.',
    image: '/images/work-ai-video.png',
    tags: ['AI Video', 'UGC-Style', 'Short-Form'],
    overview:
      'A body of AI-generated video work, from realistic UGC-style clips to stylised brand visuals, built for short-form platforms.',
    objective:
      'Give brands a fast, flexible way to produce authentic-feeling video content at scale.',
    responsibilities: [
      'Scripting UGC-style videos and voiceovers',
      'Generating and refining AI video scenes',
      'Editing, captioning and sound design',
      'Adapting content for each platform’s format',
    ],
    approach:
      'Scripts were written the way real people talk, then AI video and voice tools were combined with hands-on editing so the final pieces feel natural rather than synthetic.',
    deliverables: [
      'UGC-style video ads',
      'AI-generated brand videos',
      'Scripts & storyboards',
      'Captioned vertical edits',
    ],
    results: [],
    gallery: [
      { src: '/images/work-ai-video.png', alt: 'AI video creative portfolio cover', caption: 'AI video concept' },
    ],
  },
  {
    slug: 'company-branding',
    index: '04',
    title: 'Company Branding',
    category: 'Employer & Corporate Branding',
    summary:
      'Employer branding, employee-generated content and corporate campaigns that show the people behind a company.',
    image: '/images/work-branding.png',
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
    gallery: [
      { src: '/images/work-branding.png', alt: 'Corporate branding creative portfolio sample', caption: 'Corporate & employer branding' },
    ],
  },
  {
    slug: 'social-media-strategy',
    index: '05',
    title: 'Social Media Strategy',
    category: 'Planning & Community',
    summary:
      'Content calendars, organic content and platform-specific plans that keep brands consistent and engaged.',
    image: '/images/work-strategy.png',
    tags: ['Strategy', 'Content Calendars', 'Community'],
    overview:
      'End-to-end social media strategy, from audience research and content pillars to calendars, platform-specific planning and day-to-day community engagement.',
    objective:
      'Create a clear, repeatable system for organic growth and consistent brand presence.',
    responsibilities: [
      'Defining content pillars and tone of voice',
      'Building monthly content calendars',
      'Tailoring plans for each platform',
      'Managing comments, messages and community engagement',
    ],
    approach:
      'Each strategy started with research into the audience and competitors, then turned insights into pillars and a calendar that the brand could actually sustain week after week.',
    deliverables: [
      'Social media strategy documents',
      'Monthly content calendars',
      'Platform-specific content plans',
      'Community engagement guidelines',
    ],
    results: [],
    gallery: [
      { src: '/images/work-strategy.png', alt: 'Social media strategy portfolio sample', caption: 'Content planning' },
      { src: '/images/social/feed-01.jpg', alt: 'Anonymized social media feed mockup', caption: 'Content pillars in practice' },
    ],
  },
  {
    slug: 'paid-social-campaigns',
    index: '06',
    title: 'Paid Social Campaigns',
    category: 'Meta Ads Management',
    summary:
      'Meta Ads campaigns I managed directly — from audience setup and creatives to monitoring and optimisation.',
    image: '/images/work-paid-social.png',
    tags: ['Meta Ads', 'Facebook', 'Instagram'],
    overview:
      'Paid social campaigns on Meta platforms where I handled campaign management, pairing ad creative with targeting and ongoing optimisation.',
    objective:
      'Reach the right audience efficiently and support specific campaign goals through paid placements.',
    responsibilities: [
      'Setting up campaigns, ad sets and audiences in Meta Ads Manager',
      'Preparing ad creatives and copy',
      'Monitoring performance and adjusting budgets',
      'Reporting on campaign performance',
    ],
    approach:
      'Creatives were tested in variations, audiences refined based on early signals, and budget shifted towards what performed best throughout each campaign.',
    deliverables: [
      'Campaign structure & audience setup',
      'Ad creatives & copy variations',
      'Performance monitoring',
      'Campaign reports',
    ],
    results: [],
    gallery: [
      { src: '/images/work-paid-social.png', alt: 'Paid social campaign portfolio cover', caption: 'Meta Ads campaign work' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
