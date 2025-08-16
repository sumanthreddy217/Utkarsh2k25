//Technical Evnets Images
import projectExpo from "@/assets/Project Expo.jpg";
import uiUxDesign from "@/assets/UI-UX-Design.webp";
import slideDeck from "@/assets/Slide Deck Presentation.png";
import extremeResult from "@/assets/Crazy Output.webp";
import billBoard from "@/assets/poster.jpg";
import questioningEnquiry from "@/assets/Quiz.jpg";

//Non-Technical Evnets Images
import treasureHunt from "@/assets/Treasure Hunt.jpg";
import rubicsCube from "@/assets/rubiks-cube.avif";
import videoShoot from "@/assets/video-shoot.webp";
import photoBooth from "@/assets/non-tech-event-icon.jpg";
import chessGame from "@/assets/Chess-Game.webp";

//Online Games Images
import freeFire from "@/assets/garena-free-fire.jpg";
import PUBG from "@/assets/pubg-go.jpg";
import LUDO from "@/assets/Ludo.jpg";


export interface Event {
  id: string;
  title: string;
  description: string;
  category: "technical" | "non-technical" | "mobile-games";
  date: string;
  participants: number;
  prize: string;
  image: any;    // I changed it "string" to "any" if it get any error change back to "string".
  fullDescription: string;
  rules: string[];
  gamerules: string[];
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
    id: "1.1",
    title: "UI/UX Design Contest",
    description: "48-hour coding challenge with exciting problems",  //need to change
    category: "technical",
    date: "March 15-16",
    participants: 4,
    prize: "₹50,000",
    image: uiUxDesign,
    fullDescription: "A 48-hour intensive coding competition where participants solve complex algorithmic problems, build innovative projects, and showcase their programming skills. Teams will work on real-world challenges with mentorship from industry experts.",
    rules: [
      "Teams of 2-4 members",
      "Laptops and development tools allowed",
      "Internet access provided",
      "No external help from mentors during competition",
      "Code must be original and written during the event"
    ],
    gamerules: [],
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
    id: "1.2",
    title: "Questioning Enquiry (Quiz)",
    description: "Build responsive websites with modern technologies",   // need to change
    category: "technical",
    date: "March 16",
    participants: 3,
    prize: "₹30,000",
    image: questioningEnquiry,
    fullDescription: "Create stunning, responsive websites using modern web technologies. Participants will be judged on creativity, functionality, responsiveness, and code quality. Themes will be announced at the start of the competition.",
    rules: [
      "Teams of 1-3 members",
      "Use any web framework/library",
      "Must be responsive and mobile-friendly",
      "Original design required",
      "6-hour time limit"
    ],
    gamerules: [],
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
    id: "1.3",
    title: "Bill Board (poster presentation)",
    description: "Solve real-world problems using artificial intelligence",  // need to change
    category: "technical",
    date: "March 17",
    participants: 4,
    prize: "₹40,000",
    image: billBoard,
    fullDescription: "Apply machine learning and AI techniques to solve real-world datasets and problems. Participants will work with provided datasets to build predictive models and present their solutions to industry experts.",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
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
  },

  {
    id: "1.4",
    title: "Slide Deck (PPT)",
    description: "...",  // need to add
    category: "technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: slideDeck,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  },
  {
    id: "1.5",
    title: "Inno Vision (Project Expo)",
    description: "...",  // need to add
    category: "technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: projectExpo,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  },
  {
    id: "1.6",
    title: "Extreme Results",
    description: "...",  // need to add
    category: "technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: extremeResult,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: "2.1",
    title: "Treasure Hunt",
    description: "Searching for hidden treasure like it's my day job!",
    category: "non-technical",
    date: "March 15",   // need to change
    participants: 3,
    prize: "₹25,000",  // need to change
    image: treasureHunt,
    fullDescription: "The Treasure Hunt is a thrilling campus-wide challenge designed to test your teamwork, problem-solving, and navigation skills. Participants will follow a trail of verbal clues scattered across the college, solving riddles and completing tasks to reach the final treasure.",
    rules: [
      "No splitting up—teams must stay together.",
      "No tampering with clues meant for other teams.",
      "No running in buildings or restricted zones.",
      "Respect college property and avoid disrupting classes.",
      "No arguments with coordinators, volunteers, or other teams",
      "Cheating, bribery, or stealing clues = disqualification.",
      "Each participant must be a registered student or fest attendee"
    ],
    gamerules: [
      "Clues will guide teams from one location to the next",
      "Each clue must be solved before moving forward",
      "Physical tasks or challenges (if any) must be completed to earn the next clue",
      "Do not tamper with or remove clues meant for other teams",
      "Use of mobile phones or internet is only allowed if specified in the clue"
    ],
    coordinator: {
      name: "D.Tilak Kumar",
      contact: "+91 XXXXXXXX",
      email: "Tilak@utkarsh2k25.com"
    },
    venue: "Main Auditorium",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "March 8, 2025",
    entryFee: "₹100 per participant",
    teamSize: "2-3 members"
  },
  {
    id: "2.2",
    title: "Rubics Cube",
    description: "Slow and steady wins the race of solving the Rubik’s cube",
    category: "non-technical",
    date: "March 16",
    participants: 6,
    prize: "₹35,000",
    image: rubicsCube,
    fullDescription: "A celebration of musical talent featuring band competitions, solo vocal performances, and instrumental showcases. From rock to classical, acoustic to electronic - all genres welcome. Professional musicians and music directors will judge the performances.",
    rules: [
      "Solo or band (max 6 members)",
      "Performance time: 4-8 minutes",
      "Bring your own instruments",
      "Backing tracks allowed",
      "Original compositions get bonus points"
    ],
    gamerules: [],
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
    id: "2.3",
    title: "Video Shoot",
    description: "I love editing. It’s one of my favourite parts about video making.",
    category: "non-technical",
    date: "March 17",
    participants: 1,
    prize: "₹20,000",
    image: videoShoot,
    fullDescription: "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    gamerules: [],
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
  },
  {
    id: "2.4",
    title: "Photo Booth Contest",
    description: "Making memories one click at a time", 
    category: "non-technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: photoBooth,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  },
  {
    id: "2.5",
    title: "Check Mate!",
    description: "Chess is not just a game, it’s a battle of minds where every move can change the outcome", 
    category: "non-technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: chessGame,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  },
  {
    id: "2.6",
    title: "Spontaneous Competation",
    description: "Chess is not just a game, it’s a battle of minds where every move can change the outcome", 
    category: "non-technical",
    date: "...",
    participants: 4,
    prize: "...",
    image: chessGame,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    gamerules: [],
    coordinator: {
      name: "...",
      contact: "+91 xxxx",
      email: "...."
    },
    venue: "...",
    time: "...",
    registrationDeadline: "...",
    entryFee: "...",
    teamSize: "..."
  }
];

export const mobileGames: Event[] = [
  {
    id: "3.1",
    title: "Ludo",
    description: "Roll the dice, strategize, and race your tokens to victory in the classic Ludo game!",
    category: "mobile-games",
    date: "March 15",
    participants: 8,
    prize: "₹25,000",
    image: LUDO,
    fullDescription: "Express yourself through the art of dance! Multiple categories including solo, duo, and group performances. From classical to contemporary, hip-hop to folk - all dance forms are welcome. Professional choreographers will judge the performances.",
    rules: [
      "Solo, duo, or group (max 8 members)",
      "Performance time: 3-6 minutes",
      "Any dance form allowed",
      "Props allowed (bring your own)",
      "Original choreography preferred"
    ],
    gamerules: [],
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
    id: "3.2",
    title: "Free Fire",
    description: "Free Fire event—team up, fight hard, and be the last squad standing!",
    category: "mobile-games",
    date: "March 16",
    participants: 6,
    prize: "₹35,000",
    image: freeFire,
    fullDescription: "A celebration of musical talent featuring band competitions, solo vocal performances, and instrumental showcases. From rock to classical, acoustic to electronic - all genres welcome. Professional musicians and music directors will judge the performances.",
    rules: [
      "Solo or band (max 6 members)",
      "Performance time: 4-8 minutes",
      "Bring your own instruments",
      "Backing tracks allowed",
      "Original compositions get bonus points"
    ],
    gamerules: [],
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
    id: "3.3",
    title: "BGMI",
    description: "Join the PUBG tournament, showcase your survival skills, and claim the Chicken Dinner!",
    category: "mobile-games",
    date: "March 17",
    participants: 1,
    prize: "₹20,000",
    image: PUBG,
    fullDescription: "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    gamerules: [],
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

export const allEvents = [...technicalEvents, ...nonTechnicalEvents, ...mobileGames];