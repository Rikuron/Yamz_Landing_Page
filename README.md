# Yamz Computer Solutions - Landing Page

A modern, responsive landing page for Yamz Computer Solutions built with Next.js, React, TypeScript, and Tailwind CSS. This project showcases the company's services and provides an engaging user experience with interactive components and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS 4
- **Interactive Components**: 
  - Video background hero section with floating animations
  - Interactive slider for About section using SwiperJS
  - Gradient underlines and modern UI elements
- **Custom Fonts**: Integrated Montserrat Bold and Galindo fonts
- **Social Media Integration**: Direct links to Facebook and email contact
- **Optimized Performance**: Next.js Image optimization and modern video formats

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons 5.5.0
- **Slider**: SwiperJS 11.2.10
- **Development**: ESLint, Turbopack

## 📋 Current Sections

- **Hero Section**: Full-screen video background with company branding and floating arrow animation
- **About Section**: Interactive slider showcasing:
  - Company overview with store image
  - Vision and Mission statements
- **Header**: Navigation with logo and social media links

## 🚧 Planned Sections

- Services
- Products  
- Contact
- Footer

## 🎨 Design Features

- **Video Background**: Circuit-themed background video in the hero section
- **Custom Animations**: Floating elements with CSS keyframe animations
- **Interactive Slider**: Navigation arrows for About section content
- **Gradient Elements**: Styled underlines and visual accents
- **Professional Typography**: Custom font integration for branding

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd landing-react-next-tailwind
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

src/ <br>
├── app/ <br>
│ ├── components/ <br>
│ │ └── FloatingElement.tsx <br>
│ ├── sections/ <br>
│ │ ├── about.tsx # Interactive About section with slider <br>
│ │ ├── hero.tsx # Video background hero section <br>
│ │ ├── header.tsx # Navigation header <br>
│ │ ├── contact.tsx # (Planned) <br>
│ │ ├── footer.tsx # (Planned) <br>
│ │ ├── products.tsx # (Planned) <br>
│ │ └── services.tsx # (Planned) <br>
│ ├── globals.css # Global styles and custom CSS <br>
│ ├── layout.tsx # Root layout <br>
│ └── page.tsx # Main page component

## 🎯 Key Components

### Hero Section
- Full-screen video background
- Company branding with custom fonts
- Floating arrow animation
- Overlay for better text readability

### About Section
- SwiperJS slider implementation
- Two-slide navigation (Company overview & Vision/Mission)
- Responsive image and text layout
- Custom navigation arrows

### Header
- Logo integration with Cloudinary
- Navigation menu
- Social media links (Facebook, Email)
- Responsive design

## 🔧 Configuration

- **Next.js Config**: Configured for image optimization and SwiperJS transpilation
- **Tailwind**: Custom theme with company fonts and animations
- **TypeScript**: Strict type checking enabled

## 📱 Responsive Design

The landing page is fully responsive across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting service

For Vercel deployment:
```bash
npm run build
```

## 🤝 Contributing

This is a custom landing page for Yamz Computer Solutions. For modifications or improvements, please follow the existing code structure and maintain TypeScript compatibility.

## 📄 License

This project is private and proprietary to Yamz Computer Solutions.
