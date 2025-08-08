import { useState } from "react";
import { Expand } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "DevFest Gurugram 2023 - Main Conference Hall",
    category: "DevFest"
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", 
    alt: "Android Study Jam - Coding Workshop",
    category: "Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Google I/O Extended 2024 - Keynote Presentation",
    category: "I/O Extended"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Build With AI Workshop - Participants Learning ML",
    category: "AI Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "GDG Gurugram Monthly Meetup - Networking Session",
    category: "Meetup"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Flutter Study Jam - Mobile Development Workshop",
    category: "Flutter"
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Cloud Study Jam - Google Cloud Platform Training",
    category: "Cloud"
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Women Techmakers Event - Diversity in Tech Panel",
    category: "WTM"
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "GDG Gurugram Community Volunteers - Team Photo",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Web Development Bootcamp - Coding Session",
    category: "Web Dev"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Firebase Workshop - Database Integration Demo",
    category: "Firebase"
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "GDG Gurugram Annual Celebration - Community Awards",
    category: "Celebration"
  }
];

interface GalleryImageProps {
  image: { src: string; alt: string; category: string };
  onClick: () => void;
}

function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <img 
        src={image.src.replace('w=800&h=600', 'w=400&h=300')} 
        alt={image.alt} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-4">
        <div className="text-white">
          <div className="text-sm font-medium mb-1">{image.category}</div>
          <div className="text-xs opacity-90">{image.alt}</div>
        </div>
        <Expand className="text-white h-6 w-6 flex-shrink-0" />
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    // Trigger lightbox event for the shared lightbox component
    window.dispatchEvent(new CustomEvent('openLightbox', { detail: imageSrc }));
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Community <span className="bg-gradient-to-r from-google-red to-google-yellow bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our vibrant community events, workshops, and meetups. 
            See the energy and passion that drives our developer community in Gurugram.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to see your photo here? Join our next event!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('events');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-google-blue text-white font-semibold rounded-2xl hover:bg-google-blue/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Join Our Events
          </button>
        </div>
      </div>
    </section>
  );
}
