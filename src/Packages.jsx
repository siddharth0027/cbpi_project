import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Packages = () => {
  const { updatePackagesPage } = useGlobalContext();

  useEffect(() => updatePackagesPage(), []);

  return <HeroSection />;
 
  const packages = () => {
    <div></div>
  }
};

export default Packages;
