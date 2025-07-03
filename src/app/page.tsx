import Hero from './sections/hero'
import About from './sections/about'
import Services from './sections/services'
import Products from './sections/products'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Products />
    </div>
  );
}
