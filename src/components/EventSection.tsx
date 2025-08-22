import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import techEventIcon from "@/assets/tech-event-icon.jpg";
import nonTechEventIcon from "@/assets/non-tech-event-icon.jpg";

interface Event {
  id: string;
  title: string;
  description: string;
  category: "technical" | "non-technical" | "mobile-games";
  participants: number;
  prize: string;
  image?: string;
}

interface EventSectionProps {
  title: string;
  events: Event[];
  category: "technical" | "non-technical" | "mobile-games";
  showViewAll?: boolean;
  showHeader?: boolean;
}

const EventSection = ({
  title,
  events,
  category,
  showViewAll = true,
  showHeader = true,
}: EventSectionProps) => {
  const defaultImage =
    category === "technical" ? techEventIcon : nonTechEventIcon;

  return (
    <section className="py-1 pb-14">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showHeader && (
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mb-10"></div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={event.image || defaultImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      From 9<sup>th</sup> Sept
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      {event.participants} max
                    </span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      Total Prize Pool : {event.prize}
                    </span>
                  </div>
                </div>

                <Link to={`/event/${event.id}`} className="block">
                  <Button variant="event" className="w-full group/btn">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button Below Cards */}
        {showViewAll && category !== "mobile-games" && (
          <div className="mt-12 flex justify-center">
            <Link to={`/${category}-events`}>
              <Button
                size="lg"
                className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-gray-800"
              >
                View All {title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
