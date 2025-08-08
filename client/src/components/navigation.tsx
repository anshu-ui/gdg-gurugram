import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            {/* GDG Logo */}
            <div className="w-12 h-12 bg-white rounded-full p-2 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="25" r="15" fill="#4285F4"/>
                <circle cx="25" cy="55" r="15" fill="#34A853"/>
                <circle cx="75" cy="55" r="15" fill="#EA4335"/>
                <circle cx="50" cy="75" r="10" fill="#FBBC04"/>
                <text x="50" y="58" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">G</text>
              </svg>
            </div>
            <div>
              <div className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                GDG Gurugram
              </div>
              <div className={`text-sm transition-colors ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Google Developer Group
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors hover:text-google-blue ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-google-blue ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className={`font-medium transition-colors hover:text-google-blue ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors hover:text-google-blue ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-google-blue ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-0 w-full h-screen bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-3 w-full text-left font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-3 w-full text-left font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-3 w-full text-left font-medium"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-3 w-full text-left font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-3 w-full text-left font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
