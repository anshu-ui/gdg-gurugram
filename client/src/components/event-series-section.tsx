import { Play } from "lucide-react";

interface EventSeriesProps {
  title: string;
  description: string;
  videoId: string;
  reverse?: boolean;
}

function EventSeries({ title, description, videoId, reverse = false }: EventSeriesProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-64 lg:h-80" 
              src={`https://www.youtube.com/embed/${videoId}`} 
              title={title} 
              frameBorder="0" 
              allowFullScreen
            />
          </div>
          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="h-8 w-8 text-gray-900 ml-1" />
            </div>
          </div>
        </div>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {description}
        </p>
        
        {/* Event highlights */}
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-google-blue/10 text-google-blue rounded-full text-sm font-medium">
            Technical Talks
          </span>
          <span className="px-4 py-2 bg-google-green/10 text-google-green rounded-full text-sm font-medium">
            Hands-on Workshops
          </span>
          <span className="px-4 py-2 bg-google-red/10 text-google-red rounded-full text-sm font-medium">
            Networking
          </span>
          <span className="px-4 py-2 bg-google-yellow/10 text-google-yellow rounded-full text-sm font-medium">
            Expert Sessions
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EventSeriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Event <span className="bg-gradient-to-r from-google-green to-google-blue bg-clip-text text-transparent">Series</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GDG Gurugram organizes world-class events that bring together the best minds in technology. 
            From intimate workshops to large-scale conferences, we create meaningful learning experiences.
          </p>
        </div>

        <div className="space-y-24">
          <EventSeries
            title="DevFest Gurugram"
            description="DevFest is our flagship annual conference - the largest and most inclusive community-led technology event in Gurugram! Join hundreds of developers, designers, and tech enthusiasts for a day filled with inspiring talks, hands-on workshops, and networking opportunities. DevFest brings together Google Developer Experts, industry leaders, and passionate community members to explore cutting-edge technologies including Android, Web, Cloud, AI/ML, and more."
            videoId="QALB9eA1EI0"
          />

          <EventSeries
            title="Google I/O Extended"
            description="Experience the magic of Google I/O right here in Gurugram! Our I/O Extended events bring you live streaming of the main keynotes, expert-led discussions on the latest Google technologies, and interactive sessions where you can dive deep into new product announcements. Connect with fellow developers, share insights, and explore how Google's latest innovations can transform your projects and career."
            videoId="nRT9rkzDMXs"
            reverse
          />

          <EventSeries
            title="Build With AI"
            description="Join the AI revolution with our Build With AI series! These comprehensive workshops and study jams empower developers, students, and professionals to explore and build innovative solutions using Artificial Intelligence and Machine Learning. Focus on Generative AI, TensorFlow, Google Cloud AI services, and practical applications that solve real-world problems. Perfect for both beginners and experienced developers."
            videoId="qJsRlV740sc"
          />
        </div>

        {/* Additional Series Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-google-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl">📱</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Android Study Jams</h3>
            <p className="text-gray-600">Learn Android development with hands-on codelabs and expert mentorship.</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-google-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl">☁️</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Cloud Study Jams</h3>
            <p className="text-gray-600">Master Google Cloud Platform with practical workshops and certifications.</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-google-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl">👩‍💻</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Women Techmakers</h3>
            <p className="text-gray-600">Empowering women in technology through mentorship and community building.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
