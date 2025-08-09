import { Users, BookOpen, Network, Code } from "lucide-react";
import angular from "@assets/angular.jpeg";
import angular1 from "@assets/angular1.jpeg";
import io from "@assets/io.jpeg";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About GDG Gurugram</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Google Developer Group (GDG) Gurugram is a local community of developers who are interested in Google's developer technology including Android, Web, Cloud, Machine Learning, Flutter and more.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We organize events ranging from small meetups to large-scale conferences like DevFest to create spaces for developers to learn, connect, and grow together. Our community welcomes developers of all levels, from beginners to experts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={angular} 
              alt="Sandhika Galih giving a talk at GDG Gurugram event"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img 
              src={angular1} 
              alt="Hadian Rahmat giving a talk at GDG Gurugram event"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img 
              src={io} 
              alt="Danang Juffry giving a talk at GDG Gurugram event"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
              alt="Participants at GDG Gurugram event"
              className="rounded-lg object-cover h-32 w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="h-6 w-6 text-blue-600" />}
            title="Inclusive Community"
            description="Open to developers of all experience levels"
          />
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-green-600" />}
            title="Knowledge Sharing"
            description="Learn from experts and share your knowledge"
          />
          <FeatureCard
            icon={<Network className="h-6 w-6 text-red-600" />}
            title="Networking"
            description="Connect with fellow developers and professionals"
          />
          <FeatureCard
            icon={<Code className="h-6 w-6 text-yellow-600" />}
            title="Hands-on Learning"
            description="Participate in workshops and codelabs"
          />
        </div>
      </div>
    </section>
  );
}
