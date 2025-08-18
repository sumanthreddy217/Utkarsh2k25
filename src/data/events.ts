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
  facultyCoordinator: {
    name1: string;
    contact1: string;
    name2: string;
    contact2: string;
    // email: string;
  };
  studentCoordinator:{
    name1: string;
    contact1: string;
    name2: string;
    contact2: string;
    name3: string;
    contact3: string;
    name4: string;
    contact4: string;
  }
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
    description: "The UI/UX Design Contest is a creative challenge where participants craft intuitive and visually appealing designs to enhance user experience.",  //need to change
    category: "technical",
    date: "September 9",
    participants: 2,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: uiUxDesign,
    fullDescription: "This contest allows participants to showcase their creativity, problem-solving, and design-thinking skills through a web page aligned with the given theme. It emphasizes the entire design journey, from concept and research to process and final outcome. Each team can have up to 2 members and must present their project within 5 minutes using Figma prototypes or live demos. Participants must clearly explain user flow, color choices, and typography, while maintaining confidence and eye contact with the judges. Registrations will be completed online through the official event portal.",
    rules: [
      "All designs must strictly follow the given competition theme.",
      "A detailed design  is required, explaining the concept, user research, design process, and final outcome",
      "Design must be presented using visual aids such as Figma prototypes or live demos",
      "The presentation must have a time limit of 5-10 minutes.",
      "While presenting, participants should maintain eye contact with judges and explain design decisions clearly.",
      "Proper explanation of user flow, colour palette selection, and typography is expected.",
      "The maximum limit of participants is 2 members.",
      "Design must be created entirely by the participants themselves and presented at the event.",
      "web page must be created entirely by the participants themselves and presented at the event.",
      "Be ready to answer questions from judges about your design choices.",
      "The registration process will be completed online through the official event portal"
    ],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from the same department.",
      "Certificates will be provided for all winners and runners ."
    ],
    facultyCoordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mrs J.N.D. Lakshmi",
      contact2: "+91 8187879500",
    },
    studentCoordinator:{
      name1: "S. Madhuri",
      contact1: "+91 8500531461" ,
      name2: "U. Sunitha",
      contact2: "+91 8125301989",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
    },
    venue: "Swarnandhra College IT Department",
    time: "6:00 PM - 9:00 PM",
    registrationDeadline: "September 9, 2025",
    entryFee: "₹200 per Team",
    teamSize: "1-2 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.2",
    title: "Questioning Enquiry (Quiz)",
    description: "The Questioning Enquiry (Quiz) is an exciting technical competition that tests participants’ knowledge through written and visual rounds.",
    category: "technical",
    date: "September 9",
    participants: 3,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: questioningEnquiry,
    fullDescription: "This contest challenges teams to showcase their problem-solving and technical knowledge across multiple rounds. It includes multiple-choice questions, hardware visuals, and logo identifications to keep it engaging and competitive. Each team can have a maximum of 3 members, and mobiles or electronic devices are strictly not allowed. The event consists of 3 rounds: two written tests (30 minutes each) and a final visual buzzer round (1 minute per question). Top 8 teams will qualify for the finals, and the decision of the quiz master will be final.",
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
    facultyCoordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
      
    },
    studentCoordinator:{
      name1: "K. Sai Kiran",
      contact1: "+91 6300269083",
      name2: "N. Kavya",
      contact2: "+91 8121654479",
      name3: "I. Srivalli",
      contact3: "+91 9542992559",
      name4: "P. Bala Gangadhar",
      contact4: "+91 8639450574",
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
    title: "Bill Board (Poster Presentation)",
    description: "The Poster Presentation allows individuals to present technical ideas creatively through well-designed posters.", 
    category: "technical",
    date: "September 9",
    participants: 1,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: billBoard,
    fullDescription: "This event provides a platform for participants to showcase their technical knowledge using visual posters rather than text-heavy slides. It focuses on creativity, clarity, and the ability to explain concepts effectively within a short duration. The contest is for individual participation, and each participant will have 5 minutes to present their poster. Posters should be simple, with light backgrounds, limited text, and no more than 3 colors and 3 fonts. Participants are expected to maintain eye contact, use hand gestures, and explain their ideas clearly during the presentation.",
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
    facultyCoordinator: {
      name1: "Ms. U. Jenny Grace",
      contact1: "+91 9490702757",
      name2: "MRS. Rupa",
      contact2: "+91 7659029659",
      
    },
    studentCoordinator:{
      name1: "G. Sree Vasavi",
      contact1: "+91 9704186330",
      name2: "S. Likitha",
      contact2: "+91 8317570152",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
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
    title: "Slide Deck (PPT Presentation)",
    description: "The PPT Presentation is a technical event where participants demonstrate knowledge and communication skills through impactful slide presentations.",  // need to add
    category: "technical",
    date: "...",
    participants: 3,
    prize1: "₹3,500",
    prize2: "₹2,500",
    image: slideDeck,
    fullDescription: "This contest provides a stage for participants to present technical topics effectively using well-structured slides and confident delivery. It encourages clear communication, technical depth, and engaging presentation style. Teams of up to 3 members must prepare 12–15 slides and deliver their presentation within 10–15 minutes. Participants should bring their own laptops and present with confidence, maintaining eye contact and using hand gestures. Registration will be done online through the official website.",
    rules: [
      "Maximum number of participants are 3 members",
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
    facultyCoordinator: {
      name1: "Mr. P. Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. V. Sivani",
      contact2: "+91 8555831457",
      
    },
    studentCoordinator:{
      name1: "A. Yamuna",
      contact1: "+91 8639226251",
      name2: "T. Manikanta",
      contact2: "+91 7993098539",
      name3: "B.N.B. Chowdary ",
      contact3: "+91 7981729868",
      name4: "M. Sruthi ",
      contact4: "+91 8885005180",
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
    description: "The Project Expo is a platform for participants to showcase innovative technical projects with research, creativity, and practical application.",  // need to add
    category: "technical",
    date: "...",
    participants: 3,
    prize1: "₹3,500",
    prize2: "₹2,500",
    image: projectExpo,
    fullDescription: "This event encourages participants to present their technical projects highlighting concept, methodology, and conclusions through detailed project reports. It emphasizes innovation, problem-solving, and the ability to communicate technical ideas effectively. Teams can have up to 3 members and must present their project within 10 minutes using visual aids such as posters, models, or digital presentations. Participants are expected to maintain eye contact and hand gestures while explaining, focusing on judges rather than just the screen. They must also be prepared to answer questions from judges, and registration will be completed online through the official website.",
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
    facultyCoordinator: {
      name1: "Mr.Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. V. sivani",
      contact2: "+91 8555831457",
      
    },
    studentCoordinator:{
      name1: "P. Tejasri",
      contact1: "+91 7780680811",
      name2: "V. Purnima",
      contact2: "+91 9392543099",
      name3: "V. Hema",
      contact3: "+91 8500691429",
      name4: "",
      contact4: "",
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
    description: "The Extreme Output event challenges individuals to create impressive and creative program outputs within a short time frame.",  // need to add
    category: "technical",
    date: "September 9",
    participants: 1,
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: extremeResult,
    fullDescription: "This is an individual event where participants demonstrate coding skills by producing unique outputs such as emojis, sketches, or other creative visuals. It highlights quick thinking, creativity, and efficient coding in limited time. Participants will be given 20 minutes to write their program in C, C++, Java, or Python (turtle). The contest will be held in the computer lab, and participants are strictly prohibited from opening other tabs during the event. Registrations will be done manually, and only attractive, impressive, and interesting outputs will stand out to the judges.",
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
    facultyCoordinator: {
      name1: "MR. Swami Naidu",
      contact1: "+91 9160984527",
      name2: "DR. Pawan Kalyan",
      contact2: "+91 630917702",
      
    },
    studentCoordinator:{
      name1: "I. Swathi",
      contact1: "+91 9347550698",
      name2: "B. Lohitha",
      contact2: "+91 8121930785",
      name3: "",
      contact3: "" ,
      name4: "",
      contact4: "",
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
    prize2: "",  
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
    facultyCoordinator: {
      name1: "Mr. Anand",
      contact1: "+91 9491577090",
      name2: "Mrs. Rupa",
      contact2: "+91 7659029659",
      
    },
    studentCoordinator:{
      name1: "Tilak Kumar",
      contact1: "+91 6300394653",
      name2: "Viashnavi",
      contact2: "+91 9988797899",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
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
    title: "Short Flim",
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
    facultyCoordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
    },
    studentCoordinator:{
      name1: "B.V.N. Trinadh",
      contact1: "+91 8978232760",
      name2: "Ch. Pravalika",
      contact2: "+91 9515131972",
      name3: "B. Indu",
      contact3: "+91 8247031525",
      name4: "",
      contact4: "",
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
    facultyCoordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mr. V. Manikanta",
      contact2: "+91 6309177002",
    },
    studentCoordinator:{
      name1: "B.V.N. Trinadh",
      contact1: "+91 8978232760",
      name2: "Ch. Pravalika",
      contact2: "+91 9515131972",
      name3: "B. Indu",
      contact3: "+91 8247031525",
      name4: "",
      contact4: "",
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
    title: "Chess",
    description: "The Chess Tournament is a strategic individual event where participants compete to outsmart opponents within a limited time.", 
    category: "non-technical",
    date: "September 10",
    participants: 1,
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: chessGame,
    fullDescription: "This event allows individuals to showcase their focus, strategy, and decision-making through competitive chess matches. It emphasizes quick thinking and proper execution of moves under time constraints. Each match has a 20-minute time slot, and castling must be done before a check. If a match is unfinished within the time, the winner will be decided based on highest points. Winners from each match will advance to face other winners until the final match determines the champion.",
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
    facultyCoordinator: {
      name1: "MR. K. Raja",
      contact1: "+91 9963744490",
      name2: "MRS. Rupa",
      contact2: "+91 7659029659",
      
    },
      studentCoordinator:{
      name1: "M. Madhu" ,
      contact1: "+91 7093094526",
      name2: "Ch. Gangadhar",
      contact2:  "+91 7893094008" ,
      name3: "M. Mohan Krishna Reddy",
      contact3: "+91 9493800555",
      name4:"K. Sumanth Reddy",
    contact4: "+91 9666642377",
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
    facultyCoordinator: {
      name1: "Ms. U. Jenny Grace ",
      contact1: "+91 9490702757",
      name2: "Mrs. Suma ",
      contact2: "+91 9392681899"
    },
    studentCoordinator:{
      name1: "Ch. Pavani",
      contact1: "+91 7569606596",
      name2: "A. Madhu Shalini",
      contact2: "+91 8883476666",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
    },
    venue: "Swarnandhra College IT Department",
    time: "7:00 PM - 11:00 PM",
    registrationDeadline: "September 10, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 members",
    registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.6",
    title: "Sudoku",
    description: "The Sudoku is an individual puzzle-solving event that challenges logical thinking and number placement skills.", 
    category: "non-technical",
    date: "...",
    participants: 1,
    prize1: "₹2,000",
    prize2: "₹1,000",
    image: sudoku,
    fullDescription: "This event tests participants ability to think critically and apply logic to complete a 9×9 Sudoku grid with digits 1–9. The objective is to ensure that each row, column, and block contains all numbers without repetition. It is an individual participation event with a 30-minute time limit, conducted on paper sheets. Winners are decided by whose solution matches the correct answer sheet. In case of multiple correct solutions, the participant who submits in the shortest time will be declared the winner.",
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
    facultyCoordinator: {
      name1: "Mr. K. Raja ",
      contact1: "+91 9963744490",
      name2: "Mrs. K. Bhavani ",
      contact2: "+91 8074349394"
    },
    studentCoordinator:{
      name1: "K. Jayasri",
      contact1: "+91 7816010518",
      name2: "T. Siva Rama Lakshmi ",
      contact2: "+91 9392135675",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
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
    description: "The Ludo is an online individual gaming event where players compete head-to-head for victory.",
    category: "mobile-games",
    date: "September 10",
    participants: 1,
    prize1: "₹3,000",
    prize2: "₹1,500",
    image: LUDO,
    fullDescription: "This event brings excitement and strategy as players compete in two-player Ludo matches conducted online. It is designed for individual participation, with matches played directly on participants’ own mobile devices. The event will be coordinated via a WhatsApp group, where match updates and communication will be shared. After each match, winners must submit a screenshot of their victory to qualify for the next round. The final winners will be decided in the last round, while organizers will not be responsible for technical issues like network or device problems.",
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
    facultyCoordinator:{
      name1: "MRS. Lavanya",
      contact1: "+91 9390432125",
      name2: "MRS. Durga",
      contact2: "+91 8790772947",
      
    },
    studentCoordinator:{
      name1: "G. Priyanka",
      contact1: "+91 9160521248",
      name2: "A. Sanjana",
      contact2: "",
      name3: "M. Anusha",
      contact3: "",
      name4: "",
      contact4: "",
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
    description: "The Free Fire Tournament is an exclusive gaming event for college students to showcase their skills in a competitive battle.",
    category: "mobile-games",
    date: "September 10",
    participants: 4,
    prize1: "₹3,000",
    prize2: "₹2,000",
    image: freeFire,
    fullDescription: "This event is open only to college students, ensuring a fair and exciting in-house gaming competition. Participants must form their teams and register manually by providing both their player ID and college ID card at the registration desk. Matches will be conducted following the standard Free Fire gameplay format, testing teamwork, strategy, and survival skills. Winners and runners will be honored with certificates as recognition of their achievement. Registrations are strictly limited to students with valid college ID verification.",
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
    facultyCoordinator: {
      name1: "Mr. Pawan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. Swami Naidu ",
      contact2: "+91 9701128184"
    },
    studentCoordinator:{
      name1: "K. Dinesh",
      contact1: "+91 8074375217",
      name2: "K. Charan",
      contact2: "+91 7993289759",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
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
    description: "The PUBG Tournament is an exclusive gaming event for college students to compete in high-intensity battle royale matches.",
    category: "mobile-games",
    date: "March 17",
    participants: 1,
    prize1: "₹20,000",
    prize2: "₹20,000",
    image: PUBG,
    fullDescription: "This event is open only to college students, bringing out the thrill of competitive gaming within the campus. Teams must register manually by providing their player ID along with their college ID card at the registration desk. The tournament will test participants’ teamwork, strategy, and survival skills in classic PUBG battle royale gameplay. Winners and runners will be recognized with certificates for their achievements. Registrations are strictly limited to verified students with valid college ID proof.",
    rules: [
      "Individual participation only",
      "Maximum 3 artworks per participant",
      "Any medium allowed",
      "Artworks must be original",
      "Frame your paintings/sketches"
    ],
    Note: [],
    facultyCoordinator: {
      name1: "Mr. Pawan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. Swami Naidu ",
      contact2: "+91 9701128184"
    },
    studentCoordinator:{
      name1: "",
      contact1: "",
      name2: "",
      contact2: "",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
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