import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" onClick={(e) => scrollToSection('hero', e)} className="text-2xl font-clash font-bold text-gradient tracking-tighter">
          Leveriz
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-light hover:text-primary transition-all">Services</a>
          <a href="#results" onClick={(e) => scrollToSection('results', e)} className="text-light hover:text-primary transition-all">Results</a>
          <a href="#about" onClick={(e) => scrollToSection('about', e)} className="text-light hover:text-primary transition-all">About</a>
          <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="text-light hover:text-primary transition-all">Contact</a>
          <Button 
            onClick={(e) => scrollToSection('contact', e)}
            className="bg-primary text-dark-darker hover:bg-primary/90 hover:shadow-primary-lg transition-all font-medium"
          >
            Contact for Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-light focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-dark z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-xl text-light hover:text-primary transition-all">Services</a>
            <a href="#results" onClick={(e) => scrollToSection('results', e)} className="text-xl text-light hover:text-primary transition-all">Results</a>
            <a href="#about" onClick={(e) => scrollToSection('about', e)} className="text-xl text-light hover:text-primary transition-all">About</a>
            <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="text-xl text-light hover:text-primary transition-all">Contact</a>
            <Button 
              onClick={(e) => scrollToSection('contact', e)}
              className="bg-primary text-dark-darker hover:bg-primary/90 hover:shadow-primary-lg transition-all font-medium mt-4"
            >
              Contact for Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;