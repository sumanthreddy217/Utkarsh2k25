import React from "react";
import { FaLaptopCode, FaGamepad, FaLightbulb, FaFilm } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import festPoster from "@/assets/festPoster.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const departments = [
  "IT Department", 1000,
  "CSE - Data Science", 1000,
];


const AboutFest = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6">
      {<Navbar />}

      <div className="max-w-6xl mx-auto py-5">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
            Utkarsh 2025
          </h1>
          
          

          <p className="mt-2 text-sm text-white">
            Swarnandhra College of Engineering and Technology
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

        {/* Non Animated Fest Poster */}
        {/* <div className="mb-16 flex justify-center">
          <img
            src={festPoster}
            alt="Utkarsh 2K25 Fest Poster"
            className="w-full h-full max-w-3xl rounded-xl shadow-lg border border-indigo-500/30"
          />
        </div> */}

        {/* Description Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 mb-16 border border-indigo-500/20">
          <p className="text-lg text-indigo-100 mb-4">
            <strong className="text-pink-300">Utkarsh 2k25</strong> is a
            Three-day celebration of creativity, competition, and community.
            From tech brilliance to informal madness, it’s where ideas come
            alive.
          </p>
          <p className="text-lg text-indigo-100">
            Cash prizes (Winner & Runner), exclusive showcases, and
            unforgettable moments await. Some events are open to all colleges,
            others are Swarnandhra exclusives.
          </p>
        </div>

        {/* Fest Teaser Video... "if there is an video" */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 mb-16 flex justify-center"
        >
          <video
            controls
            className="w-full max-w-4xl rounded-xl shadow-lg border border-pink-500/30"
          >
            <source src="/assets/utkarsh-teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div> */}

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
                "Extreme Result",
                "Slide Deck (PPT)",
                "Questioning Enquiry (Quiz)",
                "Bill Board (Poster-Presentation)",
                "Inno Vision (Project-Expo)",
                "Spontaneous Competition",
              ],
            },
            {
              title: "Informal Events",
              icon: "🎭",
              items: [
                "Chess",
                "Sudoku",
                "Treasure Hunt",
                "Photo Booth Contest",
                "Videography Contest",
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
