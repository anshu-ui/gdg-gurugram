import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarX } from "lucide-react";

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className={activeTab === 'upcoming' ? 'bg-google-blue text-white' : 'text-gray-500 hover:text-gray-900'}
            >
              Upcoming
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('past')}
              className={activeTab === 'past' ? 'bg-google-blue text-white' : 'text-gray-500 hover:text-gray-900'}
            >
              Past Events
            </Button>
          </div>
        </div>

        <div className="text-center py-20">
          <CalendarX className="mx-auto h-16 w-16 text-gray-300 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">No upcoming events</h3>
          <p className="text-gray-600">Check back soon for new events or browse our past events.</p>
        </div>
      </div>
    </section>
  );
}
