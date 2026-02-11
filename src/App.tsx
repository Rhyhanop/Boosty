
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Coaching } from './components/Coaching';
import { Pricing } from './components/Pricing';
import { Order } from './components/Order';
import { Reviews } from './components/Reviews';
import { Trust } from './components/Trust';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ExtraFeatures } from './components/ExtraFeatures';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Coaching />
        <Pricing />
        <Order />
        <Reviews />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ExtraFeatures />
    </>
  )
}

export default App
