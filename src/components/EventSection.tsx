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
  date: string;
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        
        {/* Section Header with Title and Button */}
        {showHeader && (
          <>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h2>

              {/* Show button only if not online-games */}
              {showViewAll && category !== "mobile-games" && (
                <Link to={`/${category}-events`}>
                  <Button variant="outline" size="sm" className="whitespace-nowrap bg-purple-400">
                    View All {title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Decorative Line Under Title */}
            <div className="w-24 h-1 bg-gradient-primary rounded-full mb-14"></div>
          </>
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
                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{event.date}</span>
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
                      Prize: {event.prize}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
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
      </div>
    </section>
  );
};

export default EventSection;
