import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarX, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { getEvents, Event } from "@/lib/firestore";

import devfestLogoPath from "@assets/Frame 218738_1754666436704.png";

// Sample events data that would come from Firebase
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "DevFest Gurugram 2025",
    description: "The biggest developer festival in Gurugram featuring talks on Android, Web, Cloud, and AI/ML technologies by industry experts.",
    date: "2025-12-07",
    location: "Cyber Hub, Gurugram",
    imageUrl: devfestLogoPath,
    registrationUrl: "https://gdg.community.dev/gdg-gurugram/",
    type: "upcoming"
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

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting tech events, workshops, and meetups organized by GDG Gurugram community.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('upcoming')}
              className={activeTab === 'upcoming' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-900'}
            >
              Upcoming
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('past')}
              className={activeTab === 'past' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-900'}
            >
              Past Events
            </Button>
          </div>
        </div>

        {activeTab === 'upcoming' && sampleEvents.length > 0 ? (
          <div className="max-w-2xl mx-auto">
            {sampleEvents.filter(event => event.type === 'upcoming').map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <CalendarX className="mx-auto h-16 w-16 text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No upcoming events</h3>
            <p className="text-gray-600">Check back soon for new events or browse our past events.</p>
          </div>
        )}
      </div>
    </section>
  );
}
