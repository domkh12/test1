import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
function App() {
  return (
    <>
      <NavBarComponent />
      <HeroSection />
      <TemplatesSection />
      <FeatureSection />
      <OurTeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
