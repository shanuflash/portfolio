export const projects = [
  {
    liveUrl: 'https://nextlevel.shanu.dev',
    sourceUrl: 'https://github.com/shanuflash/nextlevel',
    icon: 'Gamepad2',
    name: 'NextLevel',
    description: 'Track every game you\'ve played, dropped, or dreamed of finishing, with live IGDB metadata, shareable profiles, and OG images generated at the edge.',
    image: '/projects/nextlevel.webp',
    stack: ['Next.js', 'TypeScript', 'Turso', 'Drizzle ORM', 'Better Auth'],
    size: 'large',
  },
  {
    liveUrl: 'https://invoicezz.shanu.dev',
    sourceUrl: 'https://github.com/shanuflash/invoicezz',
    icon: 'FileText',
    name: 'InvoicEzz',
    description: 'Print-ready invoices that deduct stock in real time. Every sale syncs inventory.',
    image: '/projects/invoicezz.webp',
    stack: ['Next.js', 'Redux Toolkit', 'Supabase', 'Tailwind CSS'],
    size: 'medium',
  },
  {
    liveUrl: 'https://whispr.shanu.dev',
    sourceUrl: 'https://github.com/shanuflash/whispr',
    icon: 'MessageSquare',
    name: 'Whispr',
    description: 'Drop-in chat rooms with presence and iMessage-style grouping. Token-scoped anonymous auth, zero backend.',
    image: '/projects/whispr.webp',
    stack: ['Next.js', 'TypeScript', 'Ably Chat', 'Zod'],
    size: 'medium',
  },
  {
    liveUrl: 'https://www.npmjs.com/package/react-attachment-kit',
    sourceUrl: 'https://github.com/shanuflash/react-attachment-kit',
    icon: 'Paperclip',
    name: 'React Attachment Kit',
    description: 'npm package for rich file previews: images, videos, PDFs, and docs with zoom, pan, and custom controls.',
    stack: ['React', 'npm'],
    size: 'small',
  },
  {
    sourceUrl: 'https://github.com/shanuflash/freeram',
    icon: 'MemoryStick',
    name: 'FreeRam',
    description: 'C#/WPF tray app that silently trims background processes and reclaims RAM without rebooting.',
    stack: ['C#', 'WPF'],
    size: 'small',
  },
  {
    liveUrl: 'https://laddr.shanu.dev',
    sourceUrl: 'https://github.com/shanuflash/laddr',
    icon: 'Trophy',
    name: 'Laddr',
    description: 'Drag-and-drop tournament brackets on an infinite canvas, built with @xyflow/react.',
    isWIP: true,
    stack: ['React', '@xyflow/react'],
    size: 'small',
  },
];

export const experience = [
  {
    company: 'SurveySparrow',
    location: 'Chennai, India',
    role: 'Full Stack Developer',
    period: 'Aug 2023 — Present',
    current: true,
    bullets: [
      'Led the rebuild of the legacy Mobile Web platform in under 3 months using React and JavaScript, leveraging **TanStack Query** and **@dnd-kit** to architect a touch-friendly drag-and-drop survey builder integrated with backend APIs that **drove a 200% increase in mobile completion and creation rates**.',
      'Modernized data fetching across the platform by migrating from Redux/Axios to **TanStack Query**, optimizing server-state management and caching to **reduce frontend network overhead by 20%**.',
      'Rebuilt the Ticket Management platform with parent-child ticketing, advanced filtering, keyboard-friendly workflows, and HubSpot/SparrowDesk API support, **improving support team navigation speed by 50%**.',
      'Designed and implemented an interactive Executive Dashboard for Ticket Management, engineering custom date ranges, paginated list views, and chart visualizations to **provide enterprise clients with real-time operational analytics**.',
      'Developed core productivity features including a Lexical-based rich text editor, custom macros, quick replies, and reusable attachment viewers while **integrating Node.js backend services** to automate ticket workflows.',
      'Built full-stack pricing, upgrade, trial expiry, and feature-gating infrastructure, **implementing backend microservices** to enforce usage limits, manage Stripe billing, and handle subscriptions.',
      'Engineered core growth automation tools inside the "Area51" internal super-admin console, creating an automated seasonal campaign manager and handling cross-platform subaccount unlinking **with real-time billing synchronization**.',
      'Expanded authentication and platform security by developing Apple Sign-In, multi-channel 2FA (Email, SMS, TOTP), and password policy enforcement flows **backed by PostgreSQL and Redis**.',
      'Engineered a centralized library of reusable components and shared UI systems including standardized banners, onboarding widgets, and sandbox tooling **reducing frontend development redundancy by 30%**.',
    ],
  },
];

export const education = [
  {
    school: 'Saveetha Engineering College',
    degree: 'B.Tech, Information Technology',
    location: 'Chennai, India',
    period: 'Aug 2020 — May 2024',
  },
];

export const nextLevel = {
  username: 'fl45hy',
  url: 'https://nextlevel.shanu.dev',
};

export const featuredSkills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'Claude Code',
  'Git',
  'Figma',
  'PostgreSQL',
  'Redis',
  'AWS S3',
];

export const contactEmail = 'hello@shanu.dev';

export const socialLinks = [
  {
    href: 'https://github.com/shanuflash',
    icon: 'Github',
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/shanuflash/',
    icon: 'Linkedin',
    alt: 'LinkedIn',
  },
  {
    href: 'https://x.com/shanuflash',
    icon: 'XTwitter',
    alt: 'X',
  },
  {
    href: 'https://instagram.com/shanuflash',
    icon: 'Instagram',
    alt: 'Instagram',
  },
];

export const infoItems = [
  {
    id: 'location',
    icon: 'MapPin',
    content: 'Chennai, India',
  },
  {
    id: 'email',
    icon: 'Mail',
    content: (
      <a href="mailto:hello@shanu.dev">
        hello@shanu.dev
      </a>
    ),
  },
  {
    id: 'linkedin',
    icon: 'Linkedin',
    content: (
      <a
        href="https://www.linkedin.com/in/shanuflash/"
        target="_blank"
        rel="noopener noreferrer"
      >
        in/shanuflash
      </a>
    ),
  },
  {
    id: 'github',
    icon: 'Github',
    content: (
      <a
        href="https://github.com/shanuflash"
        target="_blank"
        rel="noopener noreferrer"
      >
        github/shanuflash
      </a>
    ),
  },
];
