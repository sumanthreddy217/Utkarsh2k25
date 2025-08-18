import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {

  const departments = [
    "Information Technology", 1000,
    "IT & CSD Students", 1000,
  ];


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
              Welcome To{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Utkarsh 2k25
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow text-gray-800">
              From Coding to Celebrating — Experience at Utkarsh 2k25, <br /> at Swarnandhra College
            </p>
          </div>

          {/* Organizing Info */}
          <div className="flex flex-wrap items-center gap-2 gap-y-2 text-muted-foreground justify-center mb-5">
            <span className="font-semibold text-2xl text-gray-900">Organizing by:</span>
            <div className="min-w-[220px] flex items-center text-left">
              <TypeAnimation
                sequence={departments}
                wrapper="span"
                cursor={true}
                speed={250 as any}
                repeat={Infinity}
                className="text-primary font-semibold text-2xl "
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="max-w-[145px] w-full sm:w-auto" onClick={() => {
                const section = document.getElementById("technical-events");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth"});
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