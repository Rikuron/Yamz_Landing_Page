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
  - A dynamic header that changes on scroll.
  - Active navigation highlighting that tracks the user's position on the page.
  - A "Go to Top" button for improved navigation.
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
- **Custom Hooks**: React Hooks for scroll-based interactions.

## 📋 Implemented Sections

- **Header**: A sticky, dynamic navigation bar with active section highlighting, the company logo, and social media links.
- **Hero Section**: An immersive, full-screen video background with the company logo (featuring a blue drop-shadow glow) and branding. Includes floating animations for the logo and a downward-pointing arrow to encourage scrolling.
- **About Section**: A two-slide interactive slider showcasing the company's overview, location, mission, and vision.
- **Services Section**: A responsive, multi-item carousel displaying the services offered. Features navigation, dynamic pagination, looping, and loads all content from a JSON file.
- **Products Section**: A dedicated area to showcase products for sale.
- **Contact Section**: An interactive area for users to get in touch.
- **Footer**: A comprehensive footer with site links, contact information, and social media icons.
- **Go To Top Button**: A button that appears on scroll to take the user back to the top of the page.

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
├── hooks/ # Custom React hooks for managing component state and side effects. <br>
├── sections/ # Major page sections (Hero, About, Services, etc.) <br>
├── globals.css # Global styles, Tailwind directives, and custom animations <br>
├── layout.tsx # Root layout for the application <br>
└── page.tsx # The main entry point component for the home page <br>

## 🎯 Key Components

### Header
- **Dynamic UI**: Header background and style change on scroll.
- **Active Section Highlighting**: Navigation links are highlighted as the user scrolls through sections.
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
  - Vision/Mission commented out
- Responsive image and text layout
- Custom navigation arrows

### Services Section
-   **Dynamic Data**: Maps over `services.json` to generate service cards, making content management simple.
-   **Responsive Carousel**: Uses Swiper's `breakpoints` to display 1, 2, or 3 slides depending on the screen width.
-   **Enhanced UX**: Features `loop` for infinite scrolling and `dynamicBullets` for more engaging pagination.

### Products Section
- Displays a collection of products available for purchase.
- Clean, grid-based layout.
- Responsive design for all screen sizes.

### Contact Section
- Provides contact information and ways to get in touch.
- Designed for easy user interaction.

### Footer
- Contains essential links, contact details, and social media icons.
- Consistent branding and design.

### GoToTopButton
- A reusable component that appears when the user scrolls down the page.
- Provides a smooth scroll-to-top animation when clicked.
- Visibility is controlled by the `useGoToTopButton` hook.

### Custom Hooks
- **`useScrollActivity`**: Tracks scroll position to manage the header's dynamic state and highlight the active navigation section.
- **`useGoToTopButton`**: Monitors the scroll position to determine when the "Go to Top" button should be visible.

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
