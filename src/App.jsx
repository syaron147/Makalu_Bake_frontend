import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/home';
import MenuPage from './Pages/menu';
import AboutPage from './Pages/about';
import ContactPage from './Pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}