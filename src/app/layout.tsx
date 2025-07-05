import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/header";

export const metadata: Metadata = {
  title: "Yamz Computer Solutions",
  description: "Where Technology Meets Reliability",
  keywords: "Yamz Computer Solutions, Computer Solutions, Computer Repair, Computer Maintenance, Computer Upgrades, Computer Sales, Computer Parts, Computer Accessories, Computer Software, Computer Hardware, Computer Networking, Computer Security, Computer Optimization, Computer Troubleshooting, Computer Training, Computer Consulting, Computer Services, Computer Repairs, Computer Upgrades, Computer Sales, Computer Parts, Computer Accessories, Computer Software, Computer Hardware, Computer Networking, Computer Security, Computer Optimization, Computer Troubleshooting, Computer Training, Computer Consulting, Computer Services",
  icons: {
    icon: "/yamz_logo_only.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
