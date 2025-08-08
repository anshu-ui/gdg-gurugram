import { Users, Youtube, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
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
    }, 20);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {count >= 1000 ? `${Math.floor(count / 1000)}K+` : `${count}+`}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<Users className="h-10 w-10 text-google-blue" />}
            value="4000"
            label="Community Members"
          />
          <StatItem
            icon={<Youtube className="h-10 w-10 text-google-red" />}
            value="500"
            label="YouTube Subscribers"
          />
          <StatItem
            icon={<Linkedin className="h-10 w-10 text-google-blue" />}
            value="1000"
            label="LinkedIn Followers"
          />
          <StatItem
            icon={<Instagram className="h-10 w-10 text-google-red" />}
            value="7000"
            label="Instagram Followers"
          />
        </div>
      </div>
    </section>
  );
}
