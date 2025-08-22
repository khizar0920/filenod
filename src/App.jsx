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
    </Routes>
  );
}
