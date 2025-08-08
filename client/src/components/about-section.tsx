import { Heart, Users, Code, Lightbulb, Target, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function Feature({ icon, title, description, color }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`inline-flex p-3 rounded-full ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            About <span className="bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">GDG Gurugram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Google Developer Group (GDG) Gurugram is a vibrant community of passionate developers, designers, 
            entrepreneurs, and tech enthusiasts who come together to learn, share, and grow with Google technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To build the largest and most inclusive tech community in Gurugram, fostering innovation, 
                learning, and collaboration among developers while promoting Google's cutting-edge technologies 
                and best practices in software development.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">What We Do</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We organize a wide range of events from intimate study jams and workshops to large-scale 
                conferences like DevFest. Our activities include technical talks, hands-on codelabs, 
                networking sessions, and collaborative projects that help developers stay updated with 
                the latest trends and technologies.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="GDG Gurugram speaker session" 
                className="rounded-2xl shadow-xl" 
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Workshop participants coding" 
                className="rounded-2xl shadow-xl mt-8" 
              />
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Tech presentation at DevFest" 
                className="rounded-2xl shadow-xl -mt-8" 
              />
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Networking session at GDG event" 
                className="rounded-2xl shadow-xl" 
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-google-yellow rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-google-blue rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Users className="h-6 w-6 text-white" />}
            title="Inclusive Community"
            description="Welcoming developers, designers, and tech enthusiasts of all skill levels and backgrounds"
            color="bg-google-blue"
          />
          <Feature
            icon={<Code className="h-6 w-6 text-white" />}
            title="Hands-on Learning"
            description="Interactive workshops, codelabs, and study jams with real-world projects and applications"
            color="bg-google-green"
          />
          <Feature
            icon={<Lightbulb className="h-6 w-6 text-white" />}
            title="Innovation Focus"
            description="Exploring cutting-edge technologies like AI/ML, Cloud Computing, Android, and Web Development"
            color="bg-google-red"
          />
          <Feature
            icon={<Target className="h-6 w-6 text-white" />}
            title="Career Growth"
            description="Networking opportunities, mentorship programs, and skill development for professional advancement"
            color="bg-google-yellow"
          />
          <Feature
            icon={<Globe className="h-6 w-6 text-white" />}
            title="Global Network"
            description="Connect with GDG communities worldwide and Google Developer Experts for broader perspectives"
            color="bg-purple-500"
          />
          <Feature
            icon={<Heart className="h-6 w-6 text-white" />}
            title="Community Impact"
            description="Contributing to local tech ecosystem growth and empowering the next generation of developers"
            color="bg-pink-500"
          />
        </div>
      </div>
    </section>
  );
}
