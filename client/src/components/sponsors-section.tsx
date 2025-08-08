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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors & Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thanks to the amazing organizations that support and collaborate with GDG Gurugram
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Community Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-100 rounded-xl p-6 w-32 h-32 flex items-center justify-center">
              <div className="text-4xl text-gray-600">💻</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 w-32 h-32 flex items-center justify-center">
              <div className="text-4xl text-green-600">🤖</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 w-32 h-32 flex items-center justify-center">
              <div className="text-4xl text-blue-600">💻</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 w-32 h-32 flex items-center justify-center">
              <div className="text-4xl text-purple-600">☁️</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Partnership with GDG Gurugram?</h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            We believe that collaboration is the key to a dynamic and sustainable technology ecosystem. By becoming a partner or sponsor of GDG Gurugram, you're not just investing in technological advancement; you're also gaining a suite of exclusive benefits:
          </p>

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

          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h4>
            <p className="text-lg text-gray-600 mb-8">Join our community of partners and sponsors who are making a difference in India's tech ecosystem.</p>
            <Button 
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg rounded-lg"
            >
              <Mail className="mr-3 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
