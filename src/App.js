import "./App.css";
import Navbar from "./Sections/1 Navbar/Navbar";
import Banner from "./Sections/2 Banner/Banner";
import About from "./Sections/3 About/About";
import Cards from "./Sections/4 Cards/Cards";
import Testimonial from "./Sections/5 Testimonial/Testimonial";
import GirlSec from "./Sections/6 Girl/GirlSec";
import Accourdian from "./Sections/7 Accourdian/Accourdian";
import Footer from "./Sections/8 Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Cards />
      <Testimonial />
      <GirlSec />
      <Accourdian />
      <Footer />
    </>
  );
}

export default App;
