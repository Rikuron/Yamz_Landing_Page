import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./sections/header";
import Footer from "./sections/footer";
import GoToTopButton from "./components/GoToTopButton";

export const metadata: Metadata = {
  title: {
    default: "Yamz Computer Solutions - Professional Computer Repair & IT Services",
    template: "%s | Yamz Computer Solutions",
  },
  description: "Professional computer repair, IT services, and technology solutions. Desktop repair, mobile repair, software services, maintenance, and network infrastructure in your area.",
  category: "technology",
  keywords: ["Yamz Computer Solutions", "computer solutions", "computer repair", "desktop repair", "mobile repair", "phone repair", "mobile phone repair", "software installation", "network setup", "GCash services", "gcash services", "technology solutions", "technology", "troublehsooting", "repair", "hardware", "software", "computer maintenance", "computer upgrades", "computer sales", "computer parts", "computer accessories", "computer software", "computer hardware", "computer networking", "computer security", "computer optimization", "computer troubleshooting", "computer training", "computer consulting", "computer services", "computer repairs", "IT services", "IT solutions", "IT consulting", "IT maintenance", "IT network", "IT security", "IT optimization", "IT troubleshooting", "IT training", "IT repairs", "IT upgrades", "IT sales", "IT parts", "IT accessories", "IT software", "IT hardware", "IT networking"],
  authors: [{ 
    name: "Yamz Computer Solutions", 
    url: "https://yamz-computer-solutions.vercel.app" 
  }],
  creator: "Yamz Computer Solutions",
  publisher: "Yamz Computer Solutions",
  metadataBase: new URL("https://yamz-computer-solutions.vercel.app"),
  applicationName: "Yamz Computer Solutions",
  icons: {
    icon: "/yamz_logo_only.ico"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yamz-computer-solutions.vercel.app",
    title: "Yamz Computer Solutions - Professional Computer Repair & IT Services",
    description: "Professional computer repair, IT services, and technology solutions. Desktop repair, mobile repair, software services, maintenance, and network infrastructure in your area.",
    siteName: "Yamz Computer Solutions",
    images: [
      {
        url: "/og-yamz-computer-solutions.jpg",
        width: 1200,
        height: 630,  
        alt: "Yamz Computer Solutions - Professional IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamz Computer Solutions - Professional Computer Repair & IT Services",
    description: "Professional computer repair, IT services, and technology solutions. Desktop repair, mobile repair, software services, maintenance, and network infrastructure in your area.",
    images: [
      {
        url: "/og-yamz-computer-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Yamz Computer Solutions - Professional IT Services",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://yamz-computer-solutions.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Direct favicon links as fallback */}
        <link rel="icon" href="/yamz_logo_only.ico" sizes="any" />
        <link rel="icon" href="/yamz_logo_only.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/yamz_logo_180x180.png" />
                
        {/* Additional structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Yamz Computer Solutions",
              "description": "Professional computer repair and IT services",
              "url": "https://yamz-computer-solutions.vercel.app",
              "telephone": "(+63) 975 309 4719",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gen Aguinaldo St, Poblacion, Iligan City",
                "addressLocality": "Iligan City",
                "addressRegion": "Lanao del Norte",
                "addressCountry": "Philippines"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.2278722",
                "longitude": "124.2409505"
              },
              "openingHours": "Su-Sa 08:00-18:00",
              "priceRange": "$$",
              "image": "https://yamz-computer-solutions.vercel.app/og-yamz-computer-solutions.jpg",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61561472634936",
                // Add other social media URLs
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Computer Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Desktop Repair"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
