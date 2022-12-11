import Back from "./components/Back";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Second from "./components/Second";
import Third from "./components/Third";


function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <Hero />
      <Second />
      <Third />
      <Footer />
      <Back />
    </div>
  );
}

export default App;
