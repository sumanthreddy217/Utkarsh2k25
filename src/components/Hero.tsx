import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { TypeAnimation } from "react-type-animation";

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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-background/85 to-background/95"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/45 via-purple-50/90 to-background/9"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold drop-shadow-lg">
              Welcome to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                UTKARSH 2025
              </span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow text-gray-700">
              A Three Day National Technical Fest where students can experience
              Tech, Creativity and Enjoyment.
            </p>
          </div>

          {/* Organizing Info */}
          <div className="flex flex-col flex-wrap items-center gap-2 gap-y-2 text-muted-foreground justify-center mt-5 mb-5">
            <span className="font-semibold text-2xl text-gray-900">
              Organizing by
            </span>
            <div className=" items-center text-center text-gray-700 text-lg font-semibold md:text-2xl sm:text-xl">
              <span className="text-3xl text-bold text-blue-700">
                IT Department
              </span>{" "}
              <br />
              Swarnandhra College of Engineering and Technology
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="max-w-[145px] w-full sm:w-auto"
              onClick={() => {
                const section = document.getElementById("technical-events");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                About Fest
              </Button>
            </Link>
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
