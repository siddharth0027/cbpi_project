import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import Books from "./Books";
import Packages from "./Packages";
import FAQ from "./FAQ";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
      <Packages />
      <Books/>
      <FAQ/>
    </>
  );
};

export default Home;
