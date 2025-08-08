import { Heart, Share, Network, HandHeart } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About GDG Gurugram</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Google Developer Group (GDG) Gurugram is a local community of developers who are interested in Google's developer technology including Android, Web, Cloud, Machine Learning, Flutter and more.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              We organize events ranging from small meetups to large-scale conferences like DevFest to create spaces for developers to learn, connect, and grow together. Our community welcomes developers of all levels, from beginners to experts.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <Feature
                icon={<Heart className="h-6 w-6 text-google-red" />}
                title="Inclusive Community"
                description="Open to developers of all experience levels"
              />
              <Feature
                icon={<Share className="h-6 w-6 text-google-blue" />}
                title="Knowledge Sharing"
                description="Learn from experts and share your knowledge"
              />
              <Feature
                icon={<Network className="h-6 w-6 text-google-green" />}
                title="Networking"
                description="Connect with fellow developers and professionals"
              />
              <Feature
                icon={<HandHeart className="h-6 w-6 text-google-yellow" />}
                title="Hands-on Learning"
                description="Participate in workshops and codelabs"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Speaker at GDG Gurugram event" 
              className="rounded-xl shadow-lg" 
            />
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Workshop at GDG Gurugram event" 
              className="rounded-xl shadow-lg mt-8" 
            />
            <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Presentation at GDG Gurugram event" 
              className="rounded-xl shadow-lg -mt-8" 
            />
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Participants at GDG Gurugram event" 
              className="rounded-xl shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
