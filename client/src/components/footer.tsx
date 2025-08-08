import { Mail, MapPin, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-xl">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="25" r="15" fill="#4285F4"/>
                    <circle cx="25" cy="55" r="15" fill="#34A853"/>
                    <circle cx="75" cy="55" r="15" fill="#EA4335"/>
                    <circle cx="50" cy="75" r="10" fill="#FBBC04"/>
                    <text x="50" y="58" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">G</text>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">GDG Gurugram</h3>
                  <p className="text-gray-300">Google Developer Group</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Building India's most vibrant tech community in Gurugram through knowledge sharing, 
                networking, and hands-on learning experiences with Google technologies.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/gdg-gurugram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/@gdggurugram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/gdggurugram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 text-white rounded-xl flex items-center justify-center hover:bg-pink-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/gdggurugram" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 text-white rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-poppins">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('events')}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <a 
                    href="https://gdg.community.dev/gdg-gurugram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Join Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-poppins">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:gdggurugram@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors flex items-center font-medium"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    gdggurugram@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-300 flex items-center font-medium">
                    <MapPin className="h-5 w-5 mr-3" />
                    Gurugram, Haryana, India
                  </span>
                </li>
              </ul>
              
              {/* Google Developer Link */}
              <div className="mt-8">
                <a 
                  href="https://developers.google.com/community/gdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Part of Google Developer Groups
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Google Developer Group Gurugram. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
              Made with ❤️ by GDG Gurugram Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
