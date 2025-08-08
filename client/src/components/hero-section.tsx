import { Button } from "@/components/ui/button";
import devfestLogoPath from "@assets/Frame 218738_1754666436704.png";

export default function HeroSection() {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Google Developer Group
              <span className="text-blue-600 block">Gurugram</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with developers, learn new technologies, and grow together in Gurugram's vibrant tech community.
            </p>
            <Button 
              onClick={scrollToEvents}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors rounded-lg"
            >
              Upcoming Events
            </Button>
          </div>
          <div className="relative">
            <img 
              src={devfestLogoPath} 
              alt="DevFest Gurugram 2025" 
              className="w-full max-w-md mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
