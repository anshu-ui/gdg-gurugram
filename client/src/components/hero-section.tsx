import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-google-blue via-google-green to-google-red overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-poppins">
            <div className="mb-4">Google Developer Group</div>
            <div className="bg-gradient-to-r from-google-yellow to-white bg-clip-text text-transparent">
              Gurugram
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Building India's largest tech community in Gurugram through knowledge sharing, 
            networking, and hands-on learning experiences with Google technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToEvents}
              size="lg"
              className="bg-white text-google-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Join Our Events
            </Button>
            
            <Button 
              onClick={() => window.open('https://developers.google.com/community/gdg', '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-google-blue font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80 font-medium">Community Members</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80 font-medium">Events Organized</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80 font-medium">Expert Speakers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">3</div>
              <div className="text-white/80 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
