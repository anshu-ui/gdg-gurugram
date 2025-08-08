import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleOpenLightbox = (event: CustomEvent) => {
      setImageSrc(event.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={closeLightbox}
    >
      <div className="relative max-w-4xl max-h-full">
        <img 
          src={imageSrc} 
          alt="" 
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
