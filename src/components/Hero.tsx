import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Utkarsh 2k25 Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              Welcome To{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Utkarsh 2k25
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tech and Fun at its Best
            </p>
          </div>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span>March 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Tech Campus</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/technical-events">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                About Fest
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                5000+
              </div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ₹5L+
              </div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;