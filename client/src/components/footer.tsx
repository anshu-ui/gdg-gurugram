import { Mail, MapPin, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl gradient-text font-bold">G</div>
              <span className="text-2xl font-bold">GDG Gurugram</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building a vibrant tech community in Gurugram through knowledge sharing, networking, and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:gdggurugram@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  gdggurugram@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-400 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Gurugram, Haryana
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Google Developer Group Gurugram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
