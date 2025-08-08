import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="text-2xl gradient-text font-bold">G</div>
            <span className="text-xl font-semibold text-gray-900">GDG Gurugram</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-google-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-google-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-google-blue transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-google-blue transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-google-blue transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-0 w-full h-screen bg-white">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-2 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-2 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-2 w-full text-left"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-2 w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-gray-700 hover:text-google-blue transition-colors py-2 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
