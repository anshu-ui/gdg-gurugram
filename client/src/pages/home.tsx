import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import EventsSection from "@/components/events-section";
import AboutSection from "@/components/about-section";
import EventSeriesSection from "@/components/event-series-section";
import SponsorsSection from "@/components/sponsors-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Home() {
  return (
    <div className="bg-white font-poppins">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <AboutSection />
      <EventSeriesSection />
      <SponsorsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <Lightbox />
    </div>
  );
}
