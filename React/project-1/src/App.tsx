import "./App.css";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="container md:px-4">
      <Hero />
      <FeaturesSection />
      <FAQ />
      <Newsletter />
    </div>
  );
}

export default App;
