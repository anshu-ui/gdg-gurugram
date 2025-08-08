import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarX, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { getEvents, Event } from "@/lib/firestore";

// Sample events data that would come from Firebase
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "DevFest Gurugram 2024",
    description: "The biggest developer festival in Gurugram featuring talks on Android, Web, Cloud, and AI/ML technologies by industry experts.",
    date: "2024-12-15",
    location: "Cyber Hub, Gurugram",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    registrationUrl: "https://gdg.community.dev/gdg-gurugram/",
    type: "upcoming"
  },
  {
    id: "2", 
    title: "Android Study Jam",
    description: "Learn Android development fundamentals with hands-on coding sessions and expert guidance.",
    date: "2024-11-20",
    location: "Online Event",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    registrationUrl: "https://gdg.community.dev/gdg-gurugram/",
    type: "upcoming"
  },
  {
    id: "3",
    title: "Google I/O Extended 2024",
    description: "Watch Google I/O livestream with the community and discuss the latest Google technologies and announcements.",
    date: "2024-05-14",
    location: "91Springboard, Gurugram",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "past"
  },
  {
    id: "4",
    title: "Build With AI Workshop",
    description: "Hands-on workshop on building AI-powered applications using Google's machine learning tools and frameworks.",
    date: "2024-03-10",
    location: "WeWork Gurugram",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "past"
  }
];

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const isUpcoming = event.type === 'upcoming';
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            isUpcoming 
              ? 'bg-google-green text-white' 
              : 'bg-gray-600 text-white'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Past Event'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {eventDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        
        {isUpcoming && event.registrationUrl && (
          <Button 
            onClick={() => window.open(event.registrationUrl, '_blank')}
            className="w-full bg-google-blue hover:bg-google-blue/90 text-white font-medium"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Register Now
          </Button>
        )}
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Use sample data for now, will fetch from Firebase later
    setEvents(sampleEvents);
  }, []);

  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting tech events, workshops, and meetups organized by GDG Gurugram community.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl border-2 border-gray-100 bg-gray-50 p-2">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              size="lg"
              onClick={() => setActiveTab('upcoming')}
              className={`font-semibold px-8 rounded-xl transition-all duration-300 ${
                activeTab === 'upcoming' 
                  ? 'bg-google-blue text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'ghost'}
              size="lg"
              onClick={() => setActiveTab('past')}
              className={`font-semibold px-8 rounded-xl transition-all duration-300 ${
                activeTab === 'past' 
                  ? 'bg-google-blue text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              Past Events
            </Button>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <CalendarX className="mx-auto h-16 w-16 text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No {activeTab} events
            </h3>
            <p className="text-gray-600">
              {activeTab === 'upcoming' 
                ? 'Check back soon for new events or browse our past events.' 
                : 'We haven\'t organized any events yet. Stay tuned for upcoming events!'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
