import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";
import { technicalEvents } from "@/data/events";

const TechnicalEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-gray-100 to-indigo-200">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Challenge your technical skills and compete with the best minds in technology
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            
            <EventSection
              title="All Technical Events"
              events={technicalEvents}
              category="technical"
              showViewAll={false}
              showHeader={false}
            />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default TechnicalEvents;