import { useState } from "react";
import { Expand } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tech community meetup in Gurugram"
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Developer workshop in India"
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Conference presentation tech"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Networking event developers"
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tech meetup Gurugram"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Developer workshop India"
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Conference tech presentation"
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Networking developers"
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Tech community meetup"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Developer workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Conference presentation tech"
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Networking event developers"
  }
];

interface GalleryImageProps {
  image: { src: string; alt: string };
  onClick: () => void;
}

function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <div 
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={image.src.replace('w=800&h=600', 'w=400&h=300')} 
        alt={image.alt} 
        className="w-full h-48 object-cover rounded-lg" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
        <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6" />
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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our vibrant community events, workshops, and meetups. See the energy and passion that drives our developer community in Gurugram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
