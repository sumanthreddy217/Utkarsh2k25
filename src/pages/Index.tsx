import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import {
  technicalEvents,
  nonTechnicalEvents,
  mobileGames,
} from "@/data/events";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import homeHackathon from "@/assets/homeHackathon.png";

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

      {/* Hackathon Section */}
      <section className="min-h-screen pt-32 bg-gradient-to-br from-emerald-200 via-white to-indigo-200 flex items-center justify-center relative overflow-hidden" id="hackathon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
          <span className="absolute top-20 left-6 bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            🌟 Hackathon
          </span>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left relative">
            {/* Title */}
            
            <h2 className="text-4xl utkarsh-title sm:text-5xl font-extrabold text-purple-700 mb-4">
                UTKARSH 2025 {" "}
                <span className="hacksprint-title text-4xl sm:text-5xl font-extrabold bg-gradient-to-r  from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  HackSprint
                </span>
            </h2>
            

            <p className="text-sm uppercase tracking-wide text-purple-700 font-bold mb-2">
              Flagship Event of UTKARSH 2025
            </p>

            <p className="text-gray-900 mb-6 text-base sm:text-lg">
              A 24-hour national coding marathon designed to ignite creativity,
              collaboration, and real-world problem-solving. Hosted by the
              Department of IT at Swarnandhra College of Engineering and
              Technology.
            </p>

            <Link
              to="/hackathon"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              🚀 Explore HackSprint
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={homeHackathon}
              alt="Hackathon 2025"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <div
        className="bg-gradient-to-tr from-emerald-200 via-white to-indigo-200"
        id="technical-events"
      >
        <EventSection
          title="Technical Events"
          events={featuredTechnicalEvents}
          category="technical"
          showViewAll={true}
          showHeader={true}
        />
      </div>

      <div className="bg-gradient-to-br from-emerald-200 via-white to-indigo-200">
        <EventSection
          title="Crazy Events"
          events={featuredNonTechnicalEvents}
          category="non-technical"
          showViewAll={true}
          showHeader={true}
        />
      </div>

      <Element name="mobile-games">
        <div
          className="bg-gradient-to-tr from-emerald-200 via-white to-indigo-200"
          id="mobileGames"
        >
          <EventSection
            title="Mobile Games"
            events={featuredMobileGames}
            category="mobile-games"
          />
        </div>
      </Element>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-[#131328] backdrop-blur-md text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-500">
                UTKARSH 2025
              </h3>
              <p className="text-primary-foreground/80">
                A Three Day National Technical Fest where students can
                experience Tech, Creativity and Enjoyment. Join us for an
                unforgettable experience!
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-5 text-center text-primary-foreground/70">
            <p>&copy; 2025 IT-Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
