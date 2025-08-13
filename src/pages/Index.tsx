import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import { technicalEvents, nonTechnicalEvents } from "@/data/events";

const Index = () => {
  // Show only first 3 events from each category for homepage
  const featuredTechnicalEvents = technicalEvents.slice(0, 3);
  const featuredNonTechnicalEvents = nonTechnicalEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Events */}
      <div className="bg-secondary/30">
        <EventSection
          title="Technical Events"
          events={featuredTechnicalEvents}
          category="technical"
        />
      </div>
      
      <div className="bg-background">
        <EventSection
          title="Non-Technical Events"
          events={featuredNonTechnicalEvents}
          category="non-technical"
        />
      </div>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Utkarsh 2k25</h3>
              <p className="text-primary-foreground/80">
                The ultimate tech fest where innovation meets creativity. Join us for an unforgettable experience!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Fest</li>
                <li>Events</li>
                <li>Registration</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-primary-foreground/80">
                <p>Email: info@utkarsh2k25.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: Tech Campus, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Utkarsh 2k25. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
