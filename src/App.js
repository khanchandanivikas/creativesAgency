import "./App.css";
import Header from "./Components/Header";
import GridImages from "./Components/GridImages";
import Testimonials from "./Components/Testimonials";
import FourImages from './Components/FourImages';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <GridImages />
      <Testimonials />
      <FourImages />
      <Footer />
    </div>
  );
}

export default App;
