import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";
import { technicalEvents } from "@/data/events";
import { Separator } from "@radix-ui/react-dropdown-menu";


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

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto ">
              Cash prizes (Winner & Runner), exclusive showcases and unforgettable moments await. <br /> 

              <hr className="my-4 border-gray-500 rounded-full" />
              
              Participants from institutes which have national importance like IITs, NITs & IIITs any where in India can reimburse one way Sleeper class fare (Indian Railways)

              <hr className="my-4 border-gray-500 rounded-full" />

              One way travel fare (Sleeper Class in Indian Railways) can be reimbursed by the participants from other than Andhra and Telangana states
              
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
