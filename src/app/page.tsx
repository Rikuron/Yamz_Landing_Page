import Hero from './sections/hero'
import About from './sections/about'
import Services from './sections/services'
import Products from './sections/products'
import Contact from './sections/contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}
