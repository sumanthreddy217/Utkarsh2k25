import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";
import { nonTechnicalEvents } from "@/data/events";

const NonTechnicalEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Non-Technical Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Express your creativity and showcase your talents beyond technology
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>
          
          <EventSection
            title="All Non-Technical Events"
            events={nonTechnicalEvents}
            category="non-technical"
          />
        </div>
      </div>
    </div>
  );
};

export default NonTechnicalEvents;