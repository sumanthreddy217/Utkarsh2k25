import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Trophy, Mail, Phone, DollarSign, UserCheck } from "lucide-react";
import { allEvents } from "@/data/events";
import Navbar from "@/components/Navbar";
import techEventIcon from "@/assets/tech-event-icon.jpg";
import nonTechEventIcon from "@/assets/non-tech-event-icon.jpg";
import onlineGameIcon from "@/assets/online-game-icon.jpg";


const EventDetail = () => {
  const { id } = useParams();
  const event = allEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const defaultImage = event.image ?? (event.category === "technical" ? techEventIcon : nonTechEventIcon);


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <Badge variant={event.category === "technical" ? "default" : "secondary"}>
              {event.category === "technical" ? "Technical" : "Non-Technical"}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {event.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-hover">
              <img
                src={defaultImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Rules & Eligibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Gameplay Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Event Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.gamerules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Registration</CardTitle>
                  <CardDescription className="text-center">
                    Secure your spot now!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {event.prize}
                    </div>
                    <div className="text-sm text-muted-foreground">Prize Pool</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-sm">Entry Fee</span>
                      </div>
                      <span className="font-semibold">{event.entryFee}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Team Size</span>
                      </div>
                      <span className="font-semibold">{event.teamSize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-primary" />
                        <span className="text-sm">Deadline</span>
                      </div>
                      <span className="font-semibold text-sm">{event.registrationDeadline}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="hero" onClick={() => window.open("https://forms.gle/qBfu5Qwov2wrf3gd8", "_blank")}>
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              {/* Coordinator Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Event Coordinator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold">{event.coordinator.name}</div>
                    <div className="text-sm text-muted-foreground">Event Coordinator</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.coordinator.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.coordinator.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Date</div>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Time</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Venue</div>
                      <div className="text-sm text-muted-foreground">{event.venue}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;