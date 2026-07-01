import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <FAQs />
      <Contact />
      <Map />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
