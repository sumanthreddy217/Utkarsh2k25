import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import { technicalEvents, nonTechnicalEvents, mobileGames } from "@/data/events";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Show only first 3 events from each category for homepage
  const featuredTechnicalEvents = technicalEvents.slice(0, 3);
  const featuredNonTechnicalEvents = nonTechnicalEvents.slice(0, 3);
  const featuredMobileGames = mobileGames.slice(0, 3);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
        if (target) {
          setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Featured Events */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-indigo-50" id="technical-events">
        <EventSection
          title="Technical Events"
          events={featuredTechnicalEvents}
          category="technical"
          showViewAll={true}
          showHeader={true}
        />
      </div>

      <div className="bg-gradient-to-tr from-emerald-50 via-white to-indigo-50">
        <EventSection
          title="Non-Technical Events"
          events={featuredNonTechnicalEvents}
          category="non-technical"
          showViewAll={true}
          showHeader={true}
        />
      </div>

      <Element name="mobile-games">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-indigo-50" id="mobileGames">
          <EventSection
            title="Mobile Games"
            events={featuredMobileGames}
            category="mobile-games"
          />
        </div>
      </Element>

      {/* Footer */}
      <footer className="bg-gray-500 backdrop-blur-md text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Utkarsh 2k25</h3>
              <p className="text-primary-foreground/80">
                The ultimate tech fest where innovation meets creativity. Join
                us for an unforgettable experience!
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-5 text-center text-primary-foreground/70">
            <p>&copy; 2025 IT-Department Utkarsh 2k25. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
