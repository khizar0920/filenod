import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Compaigns from "./pages/Compaigns";
import Pricings from "./pages/Pricings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import TemplateGallery from "./pages/TemplateGallery";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import GDRP from "./pages/GDRP";
<<<<<<< HEAD
import Services from "./pages/Services";

import WebDevelopment from "./components/Services/web-development"; 
import Seooptimization from "./components/Services/Seo-Optimization"; 
import MobileApp from "./components/Services/Mobile-App"; 
import Customsoftware from "./components/Services/Custom-software"; 
import Hostingsolutions from "./components/Services/Hosting-solutions"; 
import GraphicDesign from "./components/Services/Graphic-designing"; 
import ContentWriting from "./components/Services/Content-writing"; 
import Socialmediamanagement from "./components/Services/Social-media-management"; 
import DigitalMarketingPPC from "./components/Services/Digital-marketing"; 
import Webhostingdomains from "./components/Services/Web-hosting-domains"; 

import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
import StartProject from "./pages/StartProject";
import Joinfreelancer from "./pages/Joinfreelancer"; 
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/compaigns" element={<Compaigns />} />
      <Route path="/pricings" element={<Pricings />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Careers" element={<Careers />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/TemplateGallery" element={<TemplateGallery />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Faqs" element={<Faqs />} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Cookies" element={<Cookies />} />
      <Route path="/GDRP" element={<GDRP />} />
<<<<<<< HEAD

      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/Seo-Optimization" element={<Seooptimization />} />
      <Route path="/services/Mobile-App" element={<MobileApp />} />
      <Route path="/services/Custom-software" element={<Customsoftware />} />
      <Route path="/services/Hosting-solutions" element={<Hostingsolutions />} />
      <Route path="/services/Graphic-designing" element={<GraphicDesign />} />
      <Route path="/services/Content-writing" element={<ContentWriting />} />
      <Route path="/services/Social-media-management" element={<Socialmediamanagement />} />
      <Route path="/services/Digital-marketing" element={<DigitalMarketingPPC />} />
      <Route path="/services/Content-writing" element={<ContentWriting />} />
      <Route path="/services/Web-hosting-domains" element={<Webhostingdomains />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/start-project" element={<StartProject />} />
      <Route path="/freelancer" element={<Joinfreelancer />} />
      <Route path="/Services" element={<Services />} />
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
    </Routes>
  );
}
