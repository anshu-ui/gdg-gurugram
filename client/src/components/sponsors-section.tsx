import { Button } from "@/components/ui/button";
import { Users, Star, Handshake, Search, Lightbulb, Heart, Mail } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function SponsorsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Amazing <span className="bg-gradient-to-r from-google-yellow to-google-red bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're grateful to work with incredible organizations that share our vision of building 
            a stronger tech ecosystem in Gurugram and empowering developers across India.
          </p>
        </div>

        {/* Partner Logos Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center font-poppins">Trusted Community Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Google */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">🎯</div>
            </div>
            {/* Tech Partners */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">💻</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">🚀</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">⚡</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">🎨</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24">
              <div className="text-3xl">🌟</div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="bg-gradient-to-br from-google-blue/5 via-white to-google-green/5 rounded-3xl p-12 lg:p-16 shadow-2xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Why Partner with GDG Gurugram?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our mission to build India's strongest tech community. Partnership with GDG Gurugram opens doors 
              to exclusive opportunities, meaningful connections, and impactful brand visibility in the thriving 
              Indian technology ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Benefit
              icon={<Users className="h-8 w-8 text-google-blue" />}
              title="Reach Potential Developers"
              description="Gain direct access to our vibrant community of over 4000+ developers, designers, and tech enthusiasts in Gurugram."
            />
            <Benefit
              icon={<Star className="h-8 w-8 text-google-yellow" />}
              title="Enhance Brand Recognition"
              description="Put your brand in the spotlight within Gurugram's tech scene through our diverse events and digital platforms."
            />
            <Benefit
              icon={<Handshake className="h-8 w-8 text-google-green" />}
              title="Unlock Networking Opportunities"
              description="Build strategic connections with top digital talents, industry leaders, and leading tech companies in Gurugram."
            />
            <Benefit
              icon={<Search className="h-8 w-8 text-google-red" />}
              title="Recruit Top Tech Talent"
              description="Engage directly with attendees from various tech backgrounds, including developers, software engineers, and startup founders."
            />
            <Benefit
              icon={<Lightbulb className="h-8 w-8 text-google-blue" />}
              title="Establish Thought Leadership"
              description="Share your company's expertise, case studies, or latest technologies through dedicated sessions or workshops."
            />
            <Benefit
              icon={<Heart className="h-8 w-8 text-google-red" />}
              title="Demonstrate Community Support"
              description="Showcase your commitment to local tech ecosystem development and fulfill your CSR goals with real impact."
            />
          </div>

          {/* Partnership CTA */}
          <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Make an Impact?
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of forward-thinking partners and sponsors who are shaping the future 
              of technology in India. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-google-blue hover:bg-google-blue/90 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="mr-3 h-5 w-5" />
                Partner with Us
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => window.open('mailto:gdggurugram@gmail.com?subject=Sponsorship Inquiry', '_blank')}
                className="border-2 border-google-blue text-google-blue hover:bg-google-blue hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Sponsorship Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
