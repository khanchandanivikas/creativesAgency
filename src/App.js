import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GridImages from "./components/GridImages";
import Testimonials from "./components/Testimonials";
import FourImages from './components/FourImages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GridImages />
      <Testimonials />
      <FourImages />
      <Footer />
    </div>
  );
}

export default App;
