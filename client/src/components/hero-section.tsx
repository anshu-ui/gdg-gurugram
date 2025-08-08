import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Google Developer Group
              <span className="gradient-text"> Gurugram</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with developers, learn new technologies, and grow together in Gurugram's vibrant tech community.
            </p>
            <Button 
              onClick={scrollToEvents}
              className="inline-flex items-center px-8 py-4 bg-google-blue text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Upcoming Events
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="DevFest Gurugram" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
