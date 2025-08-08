import { Play } from "lucide-react";

interface EventSeriesProps {
  title: string;
  description: string;
  videoId: string;
  reverse?: boolean;
}

function EventSeries({ title, description, videoId, reverse = false }: EventSeriesProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="relative group">
          <img 
            src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLALTLgMMTF3_CzPmBIkaxKIJfa-nQ`}
            alt={title}
            className="w-full h-64 lg:h-80 rounded-xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white rounded-full p-4">
              <Play className="h-8 w-8 text-gray-900 ml-1" />
            </div>
          </div>
        </div>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function EventSeriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Series</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GDG Gurugram is proud to present a series of events that bring together the best of the tech community.
          </p>
        </div>

        <div className="space-y-16">
          <EventSeries
            title="Build With AI"
            description="Build with AI is a global initiative organized by Google Developer Groups (GDG) to empower developers, students, professionals, and tech enthusiasts to explore and build solutions using Artificial Intelligence (AI) and Machine Learning (ML)—especially with a focus on Generative AI."
            videoId="qJsRlV740sc"
          />

          <EventSeries
            title="Google I/O Extended"
            description="Google I/O Extended is a series of community-led tech meetups that bring the knowledge and excitement of Google I/O to developers on a city level, all around the globe. These events are an excellent opportunity for developers to learn about the latest Google developer products and technologies, network with other developers, and get hands-on experience with Google's latest tools."
            videoId="nRT9rkzDMXs"
            reverse
          />

          <EventSeries
            title="DevFest"
            description="DevFest is the largest and most inclusive community-led technology conference in the world! DevFest is proud to embrace developers from all corners of the globe and with diverse backgrounds. Every year, Google Developer Groups host DevFests, where attendees explore developer tools, learn from Google Developer Experts, and connect with other developers from their local community."
            videoId="QALB9eA1EI0"
          />
        </div>
      </div>
    </section>
  );
}
