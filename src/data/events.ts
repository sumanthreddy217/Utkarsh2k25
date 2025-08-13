export interface Event {
  id: string;
  title: string;
  description: string;
  category: "technical" | "non-technical";
  date: string;
  participants: number;
  prize: string;
  fullDescription: string;
  rules: string[];
  coordinator: {
    name: string;
    contact: string;
    email: string;
  };
  venue: string;
  time: string;
  registrationDeadline: string;
  entryFee: string;
  teamSize: string;
}

export const technicalEvents: Event[] = [
  {
    id: "coding-marathon",
    title: "Coding Marathon",
    description: "48-hour coding challenge with exciting problems",
    category: "technical",
    date: "March 15-16",
    participants: 4,
    prize: "₹50,000",
    fullDescription: "A 48-hour intensive coding competition where participants solve complex algorithmic problems, build innovative projects, and showcase their programming skills. Teams will work on real-world challenges with mentorship from industry experts.",
    rules: [
      "Teams of 2-4 members",
      "Laptops and development tools allowed",
      "Internet access provided",
      "No external help from mentors during competition",
      "Code must be original and written during the event"
    ],
    coordinator: {
      name: "Arjun Sharma",
      contact: "+91 9876543210",
      email: "arjun@utkarsh2k25.com"
    },
    venue: "Computer Science Lab A",
    time: "9:00 AM - 9:00 AM (Next Day)",
    registrationDeadline: "March 10, 2025",
    entryFee: "₹200 per team",
    teamSize: "2-4 members"
  },
  {
    id: "web-development",
    title: "Web Development Contest",
    description: "Build responsive websites with modern technologies",
    category: "technical",
    date: "March 16",
    participants: 3,
    prize: "₹30,000",
    fullDescription: "Create stunning, responsive websites using modern web technologies. Participants will be judged on creativity, functionality, responsiveness, and code quality. Themes will be announced at the start of the competition.",
    rules: [
      "Teams of 1-3 members",
      "Use any web framework/library",
      "Must be responsive and mobile-friendly",
      "Original design required",
      "6-hour time limit"
    ],
    coordinator: {
      name: "Priya Patel",
      contact: "+91 9876543211",
      email: "priya@utkarsh2k25.com"
    },
    venue: "Web Development Lab",
    time: "10:00 AM - 4:00 PM",
    registrationDeadline: "March 12, 2025",
    entryFee: "₹150 per team",
    teamSize: "1-3 members"
  },
  {
    id: "ai-ml-challenge",
    title: "AI/ML Challenge",
    description: "Solve real-world problems using artificial intelligence",
    category: "technical",
    date: "March 17",
    participants: 4,
    prize: "₹40,000",
    fullDescription: "Apply machine learning and AI techniques to solve real-world datasets and problems. Participants will work with provided datasets to build predictive models and present their solutions to industry experts.",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    coordinator: {
      name: "Dr. Raj Kumar",
      contact: "+91 9876543212",
      email: "raj@utkarsh2k25.com"
    },
    venue: "AI Research Lab",
    time: "9:00 AM - 5:00 PM",
    registrationDeadline: "March 13, 2025",
    entryFee: "₹250 per team",
    teamSize: "2-4 members"
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: "dance-competition",
    title: "Dance Competition",
    description: "Showcase your moves in various dance categories",
    category: "non-technical",
    date: "March 15",
    participants: 8,
    prize: "₹25,000",
    fullDescription: "Express yourself through the art of dance! Multiple categories including solo, duo, and group performances. From classical to contemporary, hip-hop to folk - all dance forms are welcome. Professional choreographers will judge the performances.",
    rules: [
      "Solo, duo, or group (max 8 members)",
      "Performance time: 3-6 minutes",
      "Any dance form allowed",
      "Props allowed (bring your own)",
      "Original choreography preferred"
    ],
    coordinator: {
      name: "Sneha Reddy",
      contact: "+91 9876543213",
      email: "sneha@utkarsh2k25.com"
    },
    venue: "Main Auditorium",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "March 8, 2025",
    entryFee: "₹100 per participant",
    teamSize: "1-8 members"
  },
  {
    id: "music-fest",
    title: "Music Festival",
    description: "Battle of bands and solo performances",
    category: "non-technical",
    date: "March 16",
    participants: 6,
    prize: "₹35,000",
    fullDescription: "A celebration of musical talent featuring band competitions, solo vocal performances, and instrumental showcases. From rock to classical, acoustic to electronic - all genres welcome. Professional musicians and music directors will judge the performances.",
    rules: [
      "Solo or band (max 6 members)",
      "Performance time: 4-8 minutes",
      "Bring your own instruments",
      "Backing tracks allowed",
      "Original compositions get bonus points"
    ],
    coordinator: {
      name: "Vikram Singh",
      contact: "+91 9876543214",
      email: "vikram@utkarsh2k25.com"
    },
    venue: "Open Air Theatre",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "March 9, 2025",
    entryFee: "₹150 per team",
    teamSize: "1-6 members"
  },
  {
    id: "art-exhibition",
    title: "Art Exhibition",
    description: "Display your creativity through visual arts",
    category: "non-technical",
    date: "March 17",
    participants: 1,
    prize: "₹20,000",
    fullDescription: "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    coordinator: {
      name: "Kavya Joshi",
      contact: "+91 9876543215",
      email: "kavya@utkarsh2k25.com"
    },
    venue: "Art Gallery",
    time: "10:00 AM - 6:00 PM",
    registrationDeadline: "March 5, 2025",
    entryFee: "₹50 per artwork",
    teamSize: "Individual"
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];