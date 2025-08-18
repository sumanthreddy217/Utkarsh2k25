//Technical Evnets Images
import projectExpo from "@/assets/Project Expo.jpg";
import uiUxDesign from "@/assets/UI-UX-Design.webp";
import slideDeck from "@/assets/Slide Deck Presentation.png";
import extremeResult from "@/assets/Crazy Output.webp";
import billBoard from "@/assets/poster.jpg";
import questioningEnquiry from "@/assets/Quiz.jpg";

//Non-Technical Evnets Images
import treasureHunt from "@/assets/Treasure Hunt.jpg";
import videoShoot from "@/assets/video-shoot.webp";
import photoBooth from "@/assets/non-tech-event-icon.jpg";
import chessGame from "@/assets/Chess-Game.webp";
import sudoku from "@/assets/Sudoku.jpg";

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
  prize1: string;  //for 1st prize
  prize2: string;  // for 2nd prize
  image: any;    // I changed it "string" to "any" if it get any error change back to "string".
  fullDescription: string;
  rules: string[];
  Note: string[];
  coordinator: {
    name1: string;
    contact1: string;
    name2: string;
    contact2: string;
    // email: string;
  };
  venue: string;
  time: string;
  registrationDeadline: string;
  entryFee: string;
  teamSize: string;
  registrationLink?: string;
}

export const technicalEvents: Event[] = [
  {
    id: "1.1",
    title: "UI/UX Design Contest",
    description: "48-hour coding challenge with exciting problems",  //need to change
    category: "technical",
    date: "September 9",
    participants: 2,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: uiUxDesign,
    fullDescription: "A 48-hour intensive coding competition where participants solve complex algorithmic problems, build innovative projects, and showcase their programming skills. Teams will work on real-world challenges with mentorship from industry experts.",
    rules: [
      "All designs must strictly follow the given competition theme.",
      "explaining the concept, user research, design process, and final outcome.",
      "web page must be presented using visual aids such as Figma prototypes or live demos.",
      "The presentation must have a time limit of 5 minutes.",
      "While presenting, participants should maintain eye contact with judges and explain design decisions clearly.",
      "Proper explanation of user flow, colour palette selection, and typography is expected.",
      "The maximum limit of participants is 2 members.",
      "web page must be created entirely by the participants themselves and presented at the event.",
      "Be ready to answer questions from judges about your design choices.",
      "The registration process will be completed online through the official event portal"
    ],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from the same department"
    ],
    coordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mrs J.N.D. Lakshmi",
      contact2: "+91 8187879500",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 9, 2025",
    entryFee: "₹100 per Team",
    teamSize: "2 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.2",
    title: "Questioning Enquiry (Quiz)",
    description: "Test your general knowledge, logic, and speed in this fast-paced quiz showdown.",
    category: "technical",
    date: "September 9",
    participants: 3,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: questioningEnquiry,
    fullDescription: "Create stunning, responsive websites using modern web technologies. Participants will be judged on creativity, functionality, responsiveness, and code quality. Themes will be announced at the start of the competition.",
    rules: [
      "Maximum number of participants are 3 members.",
      "Mobiles or electronic devices are not allowed.",
      "The audience should not give any hints or clues to the competitors.",
      "Questions are in the form of multiple choices, visuals include hardware images, logos of computer related etc.",
      "The decision of the quiz master is final and will not be subjected to any changes.",
      "There will be total of 3 rounds. 1st and 2nd rounds will be paper tests with multiple-choice questions and, and the 3rd round will be a visual round, No negative marking.",
      "Question papers will be provided directly to the participants.",
      "For the 3rd round, the questions will be displayed on the screen, there will be buzzer provided in the room, those who know the answer should come and press the buzzer.",
      "Time limit for 1st & 2nd round is 30mintues and 1mintue for visuals.",
      "Top 8 teams will be selected for the final round."
    ],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from the same department."
    ],
    coordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹300 per Team",
    teamSize: "3 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.3",
    title: "Bill Board (poster presentation)",
    description: "Present your ideas visually with impactful posters on tech or social themes.", 
    category: "technical",
    date: "September 9",
    participants: 1,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: billBoard,
    fullDescription: "Apply machine learning and AI techniques to solve real-world datasets and problems. Participants will work with provided datasets to build predictive models and present their solutions to industry experts.",
    rules: [
      "This event is for individual participation.",
      "This presentation must have a time limit of 5 minutes.",
      "Presentation topics must be related to technical.",
      "Participants should come with their posters.",
      "Do not overload the poster with more information.",
      "Use more than 3 colors and more than 3 fonts.",
      "Background should be light and homogeneous.",
      "Participants should maintain eye contact and hand gestures during their presentation.",
      "Use brief and simple language, it is better to avoid text altogether."
    ],
    Note: [
      "ID card is mandatory for participation.",
      "This presentation must have a time limit of 5 minutes."
    ],
    coordinator: {
      name1: "Ms. U. Jenny Grace",
      contact1: "+91 9490702757",
      name2: "MRS. Rupa",
      contact2: "+91 7659029659",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 9, 2025",
    entryFee: "₹100 per Head",
    teamSize: "Single",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },

  {
    id: "1.4",
    title: "Slide Deck (PPT)",
    description: "...",  // need to add
    category: "technical",
    date: "...",
    participants: 3,
    prize1: "₹3,500",
    prize2: "₹2,500",
    image: slideDeck,
    fullDescription: "...",
    rules: [
      "1.	Maximum number of participants are 3 members",
      "Maximum time for a presentation is 10-15mintues, and the maximum slides required are 15 and the minimum slides are 12.",
      "Presentation topics must be related to technical.",
      "Participants should come with their own laptops.",
      "Participants should maintain eye contact and hand gestures while giving their presentation.",
      " Registration will be done online through the website."
    ],
   Note: [
      "ID card is mandatory for participation.",
      "This presentation must have a time limit of 10-15 minutes.",
      "Certificates will be provided for all winners and runners."
    ],
    coordinator: {
      name1: "Mr. P. Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. V. Sivani",
      contact2: "+91 8555831457",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹200 per Head",
    teamSize: "3 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.5",
    title: "Inno Vision (Project Expo)",
    description: "...",  // need to add
    category: "technical",
    date: "...",
    participants: 3,
    prize1: "₹3,500",
    prize2: "₹2,500",
    image: projectExpo,
    fullDescription: "...",
    rules: [
      "Projects should align with Technical theme of the Expo",
      "A detailed project report is required, explaining the concept, methodology & conclusions.",
      "It needs to be presented using visual aids such as posters, model or digital presentations.",
      "This presentation must have time limit of 10 minutes.",
      "While presenting, participants should have eye contact to judges not only to the screen.",
      "Eye contact and hand gestures to be maintained.",
      "The maximum limit of participants is 3 members.",
      "Participants should be prepared to answer questions from judges.",
      "The registration process will be done online through the website."
    ],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from Same department.",
      "This presentation must have time limit of 10 minutes."
    ],
    coordinator: {
      name1: "Mr.Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. V. sivani",
      contact2: "+91 8555831457",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 9, 2025",
    entryFee: "₹200 per Team",
    teamSize: "2-3 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.6",
    title: "Extreme Results",
    description: "...",  // need to add
    category: "technical",
    date: "September 9",
    participants: 1,
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: extremeResult,
    fullDescription: "...",
    rules: [
      "This Event is for individual participation.",
      "The Maximum time limit to write a program is 20 minutes.",
      "Registrations are manual.",
      "Any Output an emoji ,a sketch of your choice .The Output should be Impressive, Attractive and Interesting.",
      "The program can be written in C/C++/Java/Python turtle.",
      "Participants are not allowed to open other tabs during the participation, otherwise they are disqualified.",
      "The event will be conducted in our computer lab."
    ],
    Note: [
      "ID card is mandatory for participation.",
      "This Event have time limit 20 minutes only to write an program."
    ],
    coordinator: {
      name1: "MR. Swami Naidu",
      contact1: "+91 9160984527",
      name2: "DR. Pawan Kalyan",
      contact2: "+91 630917702",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 9, 2025",
    entryFee: "₹100 per Head",
    teamSize: "Single",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
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
    prize1: "₹2,000", 
    prize2: "Null",  
    image: treasureHunt,
    fullDescription: "The Treasure Hunt is a thrilling campus-wide challenge designed to test your teamwork, problem-solving, and navigation skills. Participants will follow a trail of verbal clues scattered across the college, solving riddles and completing tasks to reach the final treasure.",
    rules: [
      "This is a team participation event, with each team consisting of 3 members.",
      "The game will be conducted within the college surroundings or inside classrooms. A single treasure will be hidden.",
      "The treasure map and the first clue will be revealed at the start of the event. Subsequent clues will be provided to guide each team to the hidden treasure.",
      "The time limit for the hunt is 30 to 40 minutes.",
      "The first team to find the treasure within the time limit will be the winner."
    ],
    Note: [
      "Your College ID card is mandatory for participation."
    ],
    coordinator: {
      name1: "Mr. Anand",
      contact1: "+91 9491577090",
      name2: "Mrs. Rupa",
      contact2: "+91 7659029659",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹300 per Team",
    teamSize: "3 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.2",
    title: "VideoGraphy",
    description: "I love editing. It’s one of my favourite parts about video making.",
    category: "non-technical",
    date: "Septmber 9",
    participants: 7,
    prize1: "₹2,000", 
    prize2: "₹1,000",
    image: videoShoot,
    fullDescription: "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    Note: [
      "Format: MP4 / MOV preferred.",
      "Resolution: Minimum  720p.",
      "Clear audio is mandatory."
    ],
    coordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹200 per Team",
    teamSize: "5-7 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.3",
    title: "Photo Booth Contest",
    description: "Making memories one click at a time", 
    category: "non-technical",
    date: "September 9-10",
    participants: +999,
    prize1: "₹2,000", 
    prize2: "₹1,000",
    image: photoBooth,
    fullDescription: "...",
    rules: [
      "Teams of 2-4 members",
      "Python/R programming allowed",
      "Pre-trained models permitted",
      "Dataset provided on spot",
      "8-hour competition"
    ],
    Note: [
      "No Enter Fee"
    ],
    coordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "No Fee",
    teamSize: "NO Need",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.4",
    title: "Check Mate!",
    description: "Chess is not just a game, it’s a battle of minds where every move can change the outcome", 
    category: "non-technical",
    date: "September 10",
    participants: 1,
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: chessGame,
    fullDescription: "...",
    rules: [
      "This is for individual participation.",
      "The time slot for the match will be 20minutes.",
      "Castling moves should be done before checking.",
      "If the match is not completed within the given time, the winner is considered based on who has highest points.",
      "After completion of each match the winner from that match is going to play with the winner of the other match. This process is done till the last match."
    ],
    Note: [
      "ID card is mandatory for participation."
    ],
    coordinator: {
      name1: "MR. K. Raja",
      contact1: "+91 9963744490",
      name2: "MRS. Rupa",
      contact2: "+91 7659029659",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹100 per Head",
    teamSize: "Single",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.5",
    title: "Spontaneous Competation",
    description: "Chess is not just a game, it’s a battle of minds where every move can change the outcome", 
    category: "non-technical",
    date: "...",
    participants: 4,
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: chessGame,
    fullDescription: "...",
    rules: [
      "This is for individual Participation.",
      "Maximum time for presenting is 3 minutes.",
      "Presentation topics will be revealed at the time of conducting events.",
      "Registration will be done online through website.",
    ],
    Note: ["ID card is mandatory for participation."],
    coordinator: {
      name1: "Ms. U. Jenny Grace ",
      contact1: "+91 9490702757",
      name2: "Mrs. Suma ",
      contact2: "+91 9392681899"
    },
    venue: "Swarnandhra College IT Department",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.5",
    title: "Sudoku",
    description: "....", 
    category: "non-technical",
    date: "...",
    participants: 1,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: sudoku,
    fullDescription: "...",
    rules: [
      "This is for individual participation.",
      "Time limit to solve the puzzle will be 30mintues.",
      "This is a puzzle game , its objective is to fill a 9*9 grid with digits from 1 to 9. It is a number placement puzzle.",
      "Each row and column must contain the numbers from 1 to 9, without repetitions.",
      "The digits can only occur once per block.",
      "This game is conducted by providing paper sheets. Those whose sheet matches with the actual answer sheet is declared as the winners.",
      "If there are multiple winners, then those who submit the sheet in less time are chosen as the winner."

    ],
    Note: ["ID card is mandatory for participation."],
    coordinator: {
      name1: "Mr. K. Raja ",
      contact1: "+91 9963744490",
      name2: "Mrs. K. Bhavani ",
      contact2: "+91 8074349394"
    },
    venue: "Swarnandhra College IT Department",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  }
];

export const mobileGames: Event[] = [
  {
    id: "3.1",
    title: "Ludo",
    description: "Roll the dice, strategize, and race your tokens to victory in the classic Ludo game!",
    category: "mobile-games",
    date: "September 10",
    participants: 1,
    prize1: "₹3,000",
    prize2: "₹1,500",
    image: LUDO,
    fullDescription: "Express yourself through the art of dance! Multiple categories including solo, duo, and group performances. From classical to contemporary, hip-hop to folk - all dance forms are welcome. Professional choreographers will judge the performances.",
    rules: [
      "This event is for individual participation.",
      "It is a two-player game (only two players can play at a time).",
      "Players have to play on their own mobiles.",
      "This will be coordinated in a WhatsApp group.",
      "If in case of any technical issues like charging, phone hanging, network issue organizers are not responsible.",
      "After completion of each match, the winner should show the winning screenshot to participate in the next round.",
      "The winners in the last round will be announced as the game winner."
    ],
    Note: [
      "ID card is mandatory for participation."
    ],
    coordinator: {
      name1: "MRS. Lavanya",
      contact1: "+91 9390432125",
      name2: "MRS. Durga",
      contact2: "+91 8790772947",
      
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹100 per Head",
    teamSize: "Single",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "3.2",
    title: "Free Fire",
    description: "Free Fire event—team up, fight hard, and be the last squad standing!",
    category: "mobile-games",
    date: "September 10",
    participants: 4,
    prize1: "₹3,000",
    prize2: "₹2,000",
    image: freeFire,
    fullDescription: "A celebration of musical talent featuring band competitions, solo vocal performances, and instrumental showcases. From rock to classical, acoustic to electronic - all genres welcome. Professional musicians and music directors will judge the performances.",
    rules: [
      "Registrations will be done using college ID cards.",
      "Registrations are manual.",
      "Free fire players can be from our college students only.",
      "Every player with a team should come to the registration desk with their player ID along with their college ID card",
      "Certificates will be provided for all winners and runners"
    ],
    Note: [
      "Participants should be from same department.",
      "ID card is mandatory for participation.",
      "If we find any hacks, that team will be disqualified"
    ],
    coordinator: {
      name1: "Mr. Pawan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. Swami Naidu ",
      contact2: "+91 9701128184"
    },
    venue: "Swarnandhra College IT Department",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹600 per team",
    teamSize: "2-4 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "3.3",
    title: "BGMI",
    description: "Join the PUBG tournament, showcase your survival skills, and claim the Chicken Dinner!",
    category: "mobile-games",
    date: "March 17",
    participants: 1,
    prize1: "₹20,000",
    prize2: "₹20,000",
    image: PUBG,
    fullDescription: "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    Note: [],
    coordinator: {
      name1: "Mr. Pawan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. Swami Naidu ",
      contact2: "+91 9701128184"
    },
    venue: "Swarnandhra College IT Department",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹600 per team",
    teamSize: "2-4 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents, ...mobileGames];