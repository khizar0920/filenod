import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HelmetConfig from "../seo/HelmetConfig";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import IndustrySolutions from "../components/IndustrySolutions";
import ClientSays from "../components/ClientSays";
import TrustedCompanies from "../components/TrustedCompanies";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <HelmetConfig
        title="Filenod | Digital Solutions Company"
        description="Filenod provides innovative digital solutions, including web development, SEO, branding, and hosting services to grow your business online."
      />

      <Header />
      <Hero />
      <Services />
      <IndustrySolutions/>
      <ClientSays/>
      <TrustedCompanies/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
