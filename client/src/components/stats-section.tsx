import { Users, Calendar, Award, Globe, Code, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function StatItem({ icon, value, label, color }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= targetValue) {
          clearInterval(interval);
          return targetValue;
        }
        return prev + Math.ceil(targetValue / 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`inline-flex p-4 rounded-full ${color} mb-6`}>
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-3 font-poppins">
        {count >= 1000 ? `${Math.floor(count / 1000)}K+` : `${count}+`}
      </div>
      <div className="text-gray-600 font-medium text-lg">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of developers, designers, and tech enthusiasts who are part of the GDG Gurugram family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <StatItem
            icon={<Users className="h-8 w-8 text-white" />}
            value="5000"
            label="Active Members"
            color="bg-google-blue"
          />
          <StatItem
            icon={<Calendar className="h-8 w-8 text-white" />}
            value="50"
            label="Events Organized"
            color="bg-google-green"
          />
          <StatItem
            icon={<Award className="h-8 w-8 text-white" />}
            value="25"
            label="Expert Speakers"
            color="bg-google-red"
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex p-3 rounded-full bg-google-yellow/10 mb-4">
              <Code className="h-6 w-6 text-google-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Technologies Covered</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-3 rounded-full bg-google-blue/10 mb-4">
              <Globe className="h-6 w-6 text-google-blue" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Industry Partners</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-3 rounded-full bg-google-red/10 mb-4">
              <Heart className="h-6 w-6 text-google-red" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Years of Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
