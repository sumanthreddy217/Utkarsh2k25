import React from "react";
import { FaLaptopCode, FaGamepad, FaLightbulb, FaFilm } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const AboutFest = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6">
      { <Navbar/> }

      <div className="max-w-6xl mx-auto py-5">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
            Utkarsh 2k25
          </h1>
          <p className="mt-4 text-xl text-indigo-200 italic">
            Ignite the Spark. Celebrate the Spirit.
          </p>
          <p className="mt-2 text-sm text-indigo-400">
            Swarnandhra College of Engineering and Technology
          </p>
        </div>

        {/* Description Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 mb-16 border border-indigo-500/20">
          <p className="text-lg text-indigo-100 mb-4">
            <strong className="text-pink-300">Utkarsh 2k25</strong> is a
            multi-day celebration of creativity, competition, and community.
            From tech brilliance to informal madness, it’s where ideas come
            alive.
          </p>
          <p className="text-lg text-indigo-100">
            Cash prizes, exclusive showcases, and unforgettable moments await.
            Some events are open to all colleges, others are Swarnandhra
            exclusives.
          </p>
        </div>

        {/* Animated Divider */}
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse mb-16"></div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Card Template */}
          {[
            {
              title: "Technical Events",
              icon: "🧠",
              items: [
                "Slide Deck (PPT)",
                "Questioning Enquiry (Quiz)",
                "Poster Presentation",
                "Project Expo",
                "UI/UX Design",
              ],
            },
            {
              title: "Informal Events",
              icon: "🎭",
              items: [
                "Dance Battle",
                "Treasure Hunt",
                "Stand-up Comedy",
                "Photography Contest",
              ],
            },
            {
              title: "Hackathons",
              icon: "💻",
              items: [
                "Code Sprint",
                "Design Jam",
                "AI Challenge",
                "Web3 Buildathon",
              ],
            },
            {
              title: "Exclusive Events",
              icon: "🎓",
              items: [
                "Swarnandhra Star",
                "Department Showcases",
                "Faculty vs Students Debate",
              ],
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
          Registration opens soon. Stay tuned for updates and announcements.
        </div>
      </div>
    </section>
  );
};

export default AboutFest;
