import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaGamepad, FaLightbulb, FaFilm } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import festPoster from "@/assets/festPoster.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ConfettiExplosion from "react-confetti-explosion";
import intro from "@/assets/intro.mp4";

const departments = ["IT", 2000, "CSE - DS", 2000];

const AboutFest = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    // Trigger confetti blast once on page load
    setIsExploding(true);
    const timer = setTimeout(() => setIsExploding(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6">
      {<Navbar />}

      {/* Confetti Blast */}
      {isExploding && (
        <div className="absolute inset-0 flex justify-center items-start mt-20 z-50">
          <ConfettiExplosion
            force={0.7}
            duration={3000}
            particleCount={200}
            width={1600}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto py-5">
        {/* Hero Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl utkarsh-title font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
            Utkarsh 2025
          </h1>
          <p className="mt-2 text-sm md:text-xl text-blue-300 text-semibold">
            Department of Information Technology <br />
            Swarnandhra College of Engineering and Technology
          </p>
           <p className="mt-2 text-white text-lg md:text-2xl text-semibold">
            Organizing by students of
          </p>
          <p className="mt-2 text-white text-lg md:text-2xl text-semibold">
             {""}
            <TypeAnimation
              sequence={departments}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-500 font-bold"
            />
            
          </p>
        </div>

        {/* Animated Fest Poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
          <img
            src={festPoster}
            alt="Utkarsh 2K25 Fest Poster"
            className="w-full max-w-3xl rounded-xl shadow-lg border border-indigo-500/30"
          />
        </motion.div>

        {/* Description Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 mb-16 border border-indigo-500/20">
          <ul className="list-disc pl-6">
            <li className="text-lg text-indigo-100 mb-4">
              <p><strong className="text-pink-300">Utkarsh 2025</strong> is a
              Three-day celebration of creativity, competition, and community.
              From tech brilliance to informal madness, it’s where ideas come alive.</p>
            
            </li>
            
            <li className="text-lg text-indigo-100 mb-4">
              <p>Cash prizes (Winner & Runner), exclusive showcases, and
              unforgettable moments await. Participants from institutes which
              have national importance like IITs, NITs & IIITs any where in
              India can reimburse one way Sleeper class fare (Indian Railways)</p>  
            </li>
            
            <li className="text-lg text-indigo-100 mb-4">
              <p>
                 One way travel fare (Sleeper Class in Indian Railways) can be
                reimbursed by the participants from other than Andhra and
                Telangana states
              </p>
            </li>

            <li className="text-lg text-indigo-100 mb-4">
              <p>Food and Accommodation is Provided at free of cost for all the participants (excluding host college)</p> 
            </li>
          </ul>
        </div>

        {/* Fest Teaser Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 mb-16 flex justify-center"
        >
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full max-w-4xl rounded-xl shadow-lg border border-pink-500/30"
          >
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Animated Divider */}
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse mb-16"></div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Card Template */}
          {[
            {
              title: "Hackathon",
              icon: "💻",
              items: [
                "A 24-hour coding challenge for tech enthusiasts. This hackathon brings together developers, designers, and innovators for 24 hours of non-stop coding fun. Solve real-world problems and win exciting prizes!",
              ],
            },
            {
              title: "Technical Events",
              icon: "🧠",
              items: [
                "UI/UX Design",
                "Extreme Result (Crazy Output)",
                "Slide Deck (PPT)",
                "Questioning Enquiry (Quiz)",
                "Bill Board (Poster-Presentation)",
                "Inno Vision (Project-Expo)",
                "Spontaneous Competition",
              ],
            },
            {
              title: "Crazy Events",
              icon: "🎭",
              items: [
                "Chess",
                "Sudoku",
                "Treasure Hunt",
                "Photo Booth Contest",
                "Short Film Contest",
              ],
            },
            {
              title: "Mobile Games",
              icon: "🎮",
              items: ["LUDO", "PUBG", "Free Fire"],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 shadow-lg hover:shadow-pink-500/30 transition"
            >
              <div className="absolute -top-5 left-4 bg-indigo-600 p-2 rounded-full shadow-md text-xl">
                {card.icon}
              </div>
              <h2 className="text-xl font-semibold text-pink-300 mb-3">
                {card.title}
              </h2>
              <ul className="list-disc list-inside text-sm text-indigo-200 space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-indigo-400">
          Join us to make this Utkarsh-2025 unforgettable.
        </div>
      </div>
    </section>
  );
};

export default AboutFest;
