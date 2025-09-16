import { Metadata } from 'next'
import Hero from './sections/hero'
import About from './sections/about'
import Services from './sections/services'
import Products from './sections/products'
import Contact from './sections/contact'
import Footer from './sections/footer'

export const metadata: Metadata = {
  title: 'Yamz Computer Solutions - Professional Computer Repair & IT Services',
  description: "Professional computer repair, IT services, and technology solutions. Desktop repair, mobile repair, software services, maintenance, and network infrastructure in your area.",
  keywords: ["Yamz Computer Solutions", "computer solutions", "computer repair", "desktop repair", "mobile repair", "phone repair", "mobile phone repair", "software installation", "network setup", "GCash services", "gcash services", "technology solutions", "technology", "troublehsooting", "repair", "hardware", "software", "computer maintenance", "computer upgrades", "computer sales", "computer parts", "computer accessories", "computer software", "computer hardware", "computer networking", "computer security", "computer optimization", "computer troubleshooting", "computer training", "computer consulting", "computer services", "computer repairs", "IT services", "IT solutions", "IT consulting", "IT maintenance", "IT network", "IT security", "IT optimization", "IT troubleshooting", "IT training", "IT repairs", "IT upgrades", "IT sales", "IT parts", "IT accessories", "IT software", "IT hardware", "IT networking"],
  openGraph: {
    title: 'Yamz Computer Solutions - Professional Computer Repair & IT Services',
    description: 'Get reliable computer repair, mobile phone repair, software services, and IT solutions.',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
    </main>
  );
}
