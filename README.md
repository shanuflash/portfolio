# Shanu Sivakumar - Portfolio Website

A modern, minimalist portfolio website showcasing my work as a Frontend Developer. Built with Next.js 15 and featuring a clean, terminal-inspired design with a focus on performance and user experience.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with a terminal-inspired aesthetic
- **Responsive Layout**: Optimized for all devices and screen sizes  
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast builds
- **Interactive Elements**: Smooth animations and hover effects
- **Social Integration**: Direct links to GitHub, LinkedIn, and Twitter profiles
- **Contact Information**: Easy access to professional contact details

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: Turbopack for faster development
- **Deployment**: Optimized for Vercel deployment

## 📋 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout component
│   ├── page.js            # Home page component
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── sections/          # Page section components
│   └── ui/               # Base UI components
└── data/                 # Static data and content
    └── portfolio.js      # Portfolio data and configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shanuflash/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Development

- **Development**: `npm run dev` - Starts the development server with Turbopack
- **Build**: `npm run build` - Creates an optimized production build
- **Start**: `npm run start` - Starts the production server

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px) 
- Mobile (320px - 767px)

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in `src/data/portfolio.js`
2. Replace profile images in the `public/` directory
3. Modify color scheme in `src/app/globals.css`
4. Update social links and contact information

## 📄 License

© 2024 Shanu Sivakumar. All rights reserved.

This project is for portfolio demonstration purposes. Please do not copy or redistribute without permission.

## 📞 Contact

- **Email**: [hello@shanu.dev](mailto:hello@shanu.dev)
- **LinkedIn**: [linkedin.com/in/shanuflash](https://linkedin.com/in/shanuflash)
- **GitHub**: [github.com/shanuflash](https://github.com/shanuflash)
- **Twitter**: [@shanuflash](https://x.com/shanuflash)

---

Built with ❤️ using Next.js and Tailwind CSS
