# Yamz Computer Solutions - Landing Page

This is the official repository for the Yamz Computer Solutions landing page, a modern, responsive single-page application built with Next.js, React, and Tailwind CSS. The project showcases the company's services and brand identity through an engaging user experience with interactive components and smooth animations.

## 🚀 Live Demo

https://yamz-computer-solutions.vercel.app

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript for a type-safe and performant application.
- **Responsive Design**: A mobile-first, fully responsive layout crafted with Tailwind CSS 4.
- **Dynamic Content**: Services section is dynamically rendered from a `services.json` file, making it easy to update.
- **Interactive Components**: 
  - Full-screen video background in the hero section with animated elements.
  - Interactive sliders for "About" and "Services" sections, powered by SwiperJS.
  - Custom hover effects and transitions for a richer user experience.
- **Optimized Performance**: Leverages Next.js features like Image Optimization and is configured with Turbopack for rapid development.
- **Custom Branding**: Integrates custom fonts and a consistent color scheme to match the Yamz Computer Solutions brand.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Slider/Carousel**: SwiperJS 11.2.10
- **Icons**: React Icons 5.5.0
- **Development**: ESLint, Turbopack

## 📋 Implemented Sections

- **Header**: Sticky navigation bar with the company logo and social media links (Facebook, Email).
- **Hero Section**: An immersive, full-screen video background with the company logo (featuring a blue drop-shadow glow) and branding. Includes floating animations for the logo and a downward-pointing arrow to encourage scrolling.
- **About Section**: A two-slide interactive slider showcasing the company's overview, location, mission, and vision.
- **Services Section**: A responsive, multi-item carousel displaying the services offered. Features navigation, dynamic pagination, looping, and loads all content from a JSON file.

## 🚧 Future Development

- **Products Section**: A dedicated area to showcase products for sale.
- **Contact Form**: An interactive form to allow users to send inquiries directly.
- **Footer**: A comprehensive footer with site links, contact information, and social media icons.

## 🚀 Getting Started

### Prerequisites

- Node.js version 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd landing-react-next-tailwind
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or other package managers
    ```

### Running the Development Server

Execute the following command to start the local development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.

## 📁 Project Structure

src/app/ <br>
├── components/ # Reusable React components (e.g., FloatingElement.tsx) <br>
├── data/ # Static data files (e.g., services.json) <br>
├── sections/ # Major page sections (Hero, About, Services, etc.) <br>
├── globals.css # Global styles, Tailwind directives, and custom animations <br>
├── layout.tsx # Root layout for the application <br>
└── page.tsx # The main entry point component for the home page <br>

## 🎯 Key Components

### Header
- Logo integration with Cloudinary
- Navigation menu
- Social media links (Facebook, Email)
- Responsive design
  
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

### Services Section
-   **Dynamic Data**: Maps over `services.json` to generate service cards, making content management simple.
-   **Responsive Carousel**: Uses Swiper's `breakpoints` to display 1, 2, or 3 slides depending on the screen width.
-   **Enhanced UX**: Features `loop` for infinite scrolling and `dynamicBullets` for more engaging pagination.

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
