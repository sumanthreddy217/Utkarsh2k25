//Technical Evnets Images
import projectExpo from "@/assets/Project Expo.jpg";
import uiUxDesign from "@/assets/UI-UX-Design.webp";
import slideDeck from "@/assets/slideDeck.jpg";
import extremeResult from "@/assets/Crazy Output.webp";
import billBoard from "@/assets/poster.webp";
import questioningEnquiry from "@/assets/Quiz.jpg";
import spontaneous from "@/assets/spontanuousCompetetion.jpg";

//Non-Technical Evnets Images
import treasureHunt from "@/assets/Treasure Hunt.jpg";
import videoShoot from "@/assets/video-shoot.webp";
import photoBooth from "@/assets/PhotoBooth.jpg";
import chessGame from "@/assets/Chess-Game.webp";
import rubicsCube from "@/assets/rubiks-cube.avif";
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
  // date: string;
  participants: number;
  prize: string; //for 1st prize
  prize1: string; //for 1st prize
  prize2: string; // for 2nd prize
  image: any; // I changed it "string" to "any" if it get any error change back to "string".
  fullDescription: string;
  rules: string[];
  Note: string[];
  themes: string[];
  facultyCoordinator: {
    name1: string;
    contact1: string;
    name2: string;
    contact2: string;
    name3: string;
    contact3: string;

    // email: string;
  };
  studentCoordinator: {
    name1: string;
    contact1: string;
    name2: string;
    contact2: string;
    name3: string;
    contact3: string;
    name4: string;
    contact4: string;
  };
  venue: string;
  time: string;
  registrationDeadline: string;
  entryFee: string;
  teamSize: string;
  // registrationLink?: string;
}

export const technicalEvents: Event[] = [
  {
    id: "1.1",
    title: "UI/UX Design Contest",
    description:
      "The UI/UX Design Contest is a creative challenge where participants craft intuitive and visually appealing designs to enhance user experience.", //need to change
    category: "technical",
    // date: "From 9th Sept",
    participants: 2,
    prize: "₹5,000",
    prize1: "₹3,000",
    prize2: "₹2,000",
    image: uiUxDesign,
    fullDescription:
      "This contest allows participants to showcase their creativity, problem-solving, and design-thinking skills through a web page aligned with the given theme. It emphasizes the entire design journey, from concept and research to process and final outcome. Each team can have up to 2 members and must present their project with in 5 minutes using Figma prototypes or live demos. Participants must clearly explain user flow, color choices, and typography.",
    rules: [
      "All designs must strictly follow the given competition theme.",
      "A detailed design  is required, explaining the concept, user research, design process, and final outcome.",
      "Design must be presented using visual aids such as Figma prototypes or live demos.",
      "The presentation must have a time limit of 5-10 minutes.",
      "Proper explanation of user flow, colour palette selection, and typography is expected.",
      "Design must be created entirely by the participants themselves and presented at the event.",
      "The registration process will be completed online through the official event portal",
    ],
    themes: [
      "Blood Donation",
      "Career Counselling Tools",
      "Cultural History & Tourism",
      "Organic Farming Store",
    ],

    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from the same institute.",
      "Certificates will be provided for all winners and runners .",
    ],
    facultyCoordinator: {
      name1: "Mrs. P Tejaswi",
      contact1: "+91 9030880141",
      name2: "Mrs J.N.D. Lakshmi",
      contact2: "+91 8187879500",
      name3: "Mr. D. Manikanta",
      contact3: "+91 6309177002",
    },
    studentCoordinator: {
      name1: "S. Madhuri",
      contact1: "+91 8500531461",
      name2: "U. Sunitha",
      contact2: "+91 8125301989",
      name3: "T. siva Rama Lakshmi",
      contact3: "+91 9392135675",
      name4: "K. Vyshnavi Devi",
      contact4: "+91 9032514673",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹200 per Team",
    teamSize: "1-2 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.2",
    title: "Questioning Enquiry (Quiz)",
    description:
      "The Questioning Enquiry (Quiz) is an exciting technical competition that tests participants’ knowledge through written and visual rounds.",
    category: "technical",
    // date: "From 9th Sept",
    participants: 3,
    prize: "₹5,000",
    prize1: "₹3,000",
    prize2: "₹2,000",
    image: questioningEnquiry,
    fullDescription:
      "This contest challenges teams to showcase their problem-solving and technical knowledge across multiple rounds. It includes multiple-choice questions, hardware visuals, and logo identifications to keep it engaging and competitive. The event consists of 3 rounds: two written tests (30 minutes each) and a final visual buzzer round (1 minute per question). Top 8 teams will qualify for the finals, and the decision of the quiz master will be final.",
    rules: [
      "Maximum number of participants are 3 members.",
      "Mobiles or electronic devices are not allowed.",
      "Questions are in the form of multiple choices, visuals include hardware images, logos of computer related etc.",
      "The decision of the quiz master is final and will not be subjected to any changes.",
      "There will be total of 3 rounds. 1st and 2nd rounds will be paper tests with multiple-choice questions and, and the 3rd round will be a visual round, No negative marking.",
      "For the 3rd round, the questions will be displayed on the screen, there will be buzzer provided in the room, those who know the answer should come and press the buzzer.",
      "Time limit for 1st & 2nd round is 30mintues and 1mintue for visuals.",
      "Top 8 teams will be selected for the final round.",
    ],
    themes: [],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from the same Institute.",
    ],
    facultyCoordinator: {
      name1: "Mr. K. Bhanu Chand",
      contact1: "+91 9160984527",
      name2: "Mrs. M. Pavani",
      contact2: "+91 6301673147",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "K. Sai Kiran",
      contact1: "+91 6300269083",
      name2: "N. Kavya",
      contact2: "+91 8121654479",
      name3: "I. Srivalli",
      contact3: "+91 9398692159",
      name4: "P. Bala Gangadhar",
      contact4: "+91 8639450574",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹300 per Team",
    teamSize: "3 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.3",
    title: "Bill Board (Poster Presentation)",
    description:
      "The Poster Presentation allows individuals to present technical ideas creatively through well-designed posters.",
    category: "technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹4,500",
    prize1: "₹2,500",
    prize2: "₹2,000",
    image: billBoard,
    fullDescription:
      "This event provides a platform for participants to showcase their technical knowledge using visual posters rather than text-heavy slides. It focuses on creativity, clarity, and the ability to explain concepts effectively within a short duration.",
    rules: [
      "This event is for individual participation.",
      "This presentation must have a time limit of 5 minutes.",
      "Presentation topics must be related to technical.",
      "Participants should come with their posters.",
      "Do not overload the poster with more information.",
      "Use more than 3 colors and more than 3 fonts.",
      "Background should be light and homogeneous.",
      "Use brief and simple language, it is better to avoid text altogether.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Ms. U. Jenny Grace",
      contact1: "+91 9490702757",
      name2: "Dr. A. PavanKalyan",
      contact2: "+91 9493491253",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "G. Sree Vasavi",
      contact1: "+91 9704186330",
      name2: "S. Likitha",
      contact2: "+91 8317570152",
      name3: "M. Sneha",
      contact3: "+91 9563668989",
      name4: "S. Sri Divya",
      contact4: "+91 8340091843",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.4",
    title: "Slide Deck (PPT Presentation)",
    description:
      "The PPT Presentation is a technical event where participants demonstrate knowledge and communication skills through impactful slide presentations.", // need to add
    category: "technical",
    // date: "From 9th Sept",
    participants: 3,
    prize: "₹7,000",
    prize1: "₹4,000",
    prize2: "₹3,000",
    image: slideDeck,
    fullDescription:
      "This contest provides a stage for participants to present technical topics effectively using well-structured slides and confident delivery. It encourages clear communication, technical depth, and engaging presentation style. Teams of up to 3 members must prepare 12–15 slides and deliver their presentation within 10–15 minutes. Participants should bring their own laptops. Registration will be done online through the official website.",
    rules: [
      "Maximum number of participants are 3 members",
      "Maximum time for a presentation is 10-15mintues, and the maximum slides required are 15 and the minimum slides are 12.",
      "Presentation topics must be related to technical.",
      "Participants should come with their own laptops.",
      " Registration will be done online through the website.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mr. K. Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. V. Sivani",
      contact2: "+91 8555831457",
      name3: "Mrs. Satya Bhavani",
      contact3: "+91 8074349394",
    },
    studentCoordinator: {
      name1: "A. Yamuna",
      contact1: "+91 8639226251",
      name2: "T. Manikanta",
      contact2: "+91 7993098539",
      name3: "B.N.B. Chowdary ",
      contact3: "+91 7981729868",
      name4: "D. Lavanya ",
      contact4: "+91 9550775655",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹200 per Team",
    teamSize: "1-3 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.5",
    title: "Inno Vision (Project Expo)",
    description:
      "The Project Expo is a platform for participants to showcase innovative technical projects with research, creativity, and practical application.", // need to add
    category: "technical",
    // date: "From 9th Sept",
    participants: 3,
    prize: "₹7,000",
    prize1: "₹4,000",
    prize2: "₹3,000",
    image: projectExpo,
    fullDescription:
      "This event encourages participants to present their technical projects highlighting concept, methodology, and conclusions through detailed project reports. It emphasizes innovation, problem-solving, and the ability to communicate technical ideas effectively.",
    rules: [
      "Projects should align with Technical theme of the Expo",
      "A detailed project report is required, explaining the concept, methodology & conclusions.",
      "It needs to be presented using visual aids such as posters, model or digital presentations.",
      "This presentation must have time limit of 10 minutes.",
      "The maximum limit of participants is 3 members.",
      "Participants should be prepared to answer questions from judges.",
      "The registration process will be done online through the website.",
    ],
    themes: [],
    Note: [
      "ID card is mandatory for participation.",
      "Participants should be from Same institute.",
    ],
    facultyCoordinator: {
      name1: "Mr. V. Swamy Naidu",
      contact1: "+91 9701128184",
      name2: "Mrs. V. sivani",
      contact2: "+91 8555831457",
      name3: "Mrs. Rupa",
      contact3: "+91 7659029659",
    },
    studentCoordinator: {
      name1: "P. Tejasri",
      contact1: "+91 7780680811",
      name2: "B. Lohitha",
      contact2: "+91 8121930758",
      name3: "V. Hema",
      contact3: "+91 8500691429",
      name4: "N. Hema Sri",
      contact4: "+91 9391011544",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹200 per Team",
    teamSize: "3 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.6",
    title: "Extreme Results (Crazy Output)",
    description:
      "The Extreme Output event challenges individuals to create impressive and creative program outputs within a short time frame.", // need to add
    category: "technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹5,000",
    prize1: "₹3,000",
    prize2: "₹2,000",
    image: extremeResult,
    fullDescription:
      "This is an individual event where participants demonstrate coding skills by producing unique outputs such as emojis, sketches, or other creative visuals. It highlights quick thinking, creativity, and efficient coding in limited time. Participants will be given 20 minutes to write their program in C, C++, Java, or Python (turtle). The contest will be held in the computer lab.",
    rules: [
      "This Event is for individual participation.",
      "The Maximum time limit to write a program is 20 minutes.",
      "Any Output an emoji ,a sketch of your choice .The Output should be Impressive, Attractive and Interesting.",
      "The program can be written in C/C++/Java/Python turtle.",
      "Participants are not allowed to open other tabs during the participation, otherwise they are disqualified.",
    ],
    themes: [],
    Note: [
      "ID card is mandatory for participation.",
      "This Event have time limit 20 minutes only to write a program.",
    ],
    facultyCoordinator: {
      name1: "Mr. V. Swamy Naidu",
      contact1: "+91 9701128184",
      name2: "Mr. K. Nagendra Babu",
      contact2: "+91 8125757521",
      name3: "Ms. T. Sailaja",
      contact3: "+91 8977293858",
    },
    studentCoordinator: {
      name1: "K. Priyanka",
      contact1: "+91 9160521248",
      name2: "M. Iswarya",
      contact2: "+91 7893406224",
      name3: "A. Lokeswari",
      contact3: "+91 9000043387",
      name4: "J. Kavitha",
      contact4: "+91 6303803368",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "1.7",
    title: "Spontaneous Competation",
    description: "The stage for the Fearless Mind",
    category: "technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹4,000",
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: spontaneous,
    fullDescription:
      "Spontaneous Competation is a challenge of quick wit and creativity where participants are given the surprise topic on the spot and must present their ideas instantly.",
    rules: [
      "This is for individual Participation.",
      "Maximum time for presenting is 3 minutes.",
      "Presentation topics will be revealed at the time of conducting event.",
      "Registration will be done online through website.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mrs. P. S. J. Silpa",
      contact1: "+91 7997939955",
      name2: "Mrs. J. N. D. Lakshmi",
      contact2: "+91 8187879500",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "Ch. Pavani",
      contact1: "+91 7569606596",
      name2: "A. Madhu Shalini",
      contact2: "+91 8883476666",
      name3: "K. Satyanarayana",
      contact3: "+91 9490202799",
      name4: "R. Pavan Kalyan",
      contact4: "+91 6301008183",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    id: "2.1",
    title: "Treasure Hunt",
    description: "Searching for hidden treasure like it's my day job!",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 3,
    prize: "₹3,000",
    prize1: "₹3,000",
    prize2: "",
    image: treasureHunt,
    fullDescription:
      "The Treasure Hunt is a thrilling campus-wide challenge designed to test your teamwork, problem-solving, and navigation skills. Participants will follow a trail of verbal clues scattered across the college, solving riddles and completing tasks to reach the final treasure.",
    rules: [
      "This is a team participation event, with each team consisting of 3 members.",
      "The game will be conducted within the college surroundings or inside classrooms. A single treasure will be hidden.",
      "The treasure map and the first clue will be revealed at the start of the event. Subsequent clues will be provided to guide each team to the hidden treasure.",
      "The time limit for the hunt is 30 to 40 minutes.",
      "The first team to find the treasure within the time limit will be the winner.",
    ],
    themes: [],
    Note: ["Your College ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mr. Anand",
      contact1: "+91 9491577090",
      name2: "Mrs. Suma",
      contact2: "+91 9392681899",
      name3: "Mrs. K. Durga",
      contact3: "+91 8790772947",
    },
    studentCoordinator: {
      name1: "Tilak Kumar",
      contact1: "+91 6300394653",
      name2: "Viashnavi",
      contact2: "+91 9988797899",
      name3: "R. Lakshmi",
      contact3: "+91 9703162022",
      name4: "K. Charan",
      contact4: "+91 7993289759",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹300 per Team",
    teamSize: "3 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.2",
    title: "Short Flim",
    description:
      "I love editing. It’s one of my favourite parts about video making.",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 7,
    prize: "₹4,000",
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: videoShoot,
    fullDescription:
      "A platform for artists to showcase their creativity through paintings, sketches, digital art, sculptures, and mixed media. Themes include abstract art, portraits, landscapes, and social awareness. Art will be displayed throughout the fest for public viewing.",
    rules: [
      "Each team can have maximum of 7 members.",
      "Shortfilm should not exceed 5 minutes.",
      "Any medium is allowed.",
      "The Theme is your choice, but no vulgarity and discriminatory content.",
    ],
    themes: [],
    Note: [
      "Format: MP4 preferred.",
      "Resolution: Minimum  720p.",
      "If any vulgarity scenes are found shortfilm will be rejected.",
    ],
    facultyCoordinator: {
      name1: "Mr. K. Nagendra Babu",
      contact1: "+91 8125757521",
      name2: "Mrs. Satya Bhavani",
      contact2: "+91 8074349394",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "B.V.N. Trinadh",
      contact1: "+91 8978232760",
      name2: "Ch. Pravalika",
      contact2: "+91 9515131972",
      name3: "K. Lahari",
      contact3: "+91 9032085398",
      name4: "V. Dharani",
      contact4: "+91 9542676569",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹200 per Team",
    teamSize: "2-7 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.3",
    title: "Photo Booth Contest",
    description: "Making memories one click at a time",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹3,500",
    prize1: "₹2,000",
    prize2: "₹1,500",
    image: photoBooth,
    fullDescription:
      " Pose Like a Pro, Party Like a Legend Whether you're dressed to impress or just vibing with friends, our fest photo booth turns every second into a snapshot of joy. Come for the pics, stay for the chaos. ",
    rules: [
      "Student have to take photo with the booth provided.",
      "The photo should be shared to the given website or QR code with respective registered number and phone number .",
      "Only one submission is taken with one registered number.",
      "College id card is compulsory while snapping the photo.",
      "Winners are selected by the digital lucky dip process.",
    ],
    themes: [],
    Note: ["No Entry Fee"],
    facultyCoordinator: {
      name1: "Mr. Ch. Praveen",
      contact1: "+91 9700149259",
      name2: "Mrs. Rupa",
      contact2: "+91 7659029659",
      name3: "Mrs. P. Lavanya",
      contact3: "+91 9390432125",
    },
    studentCoordinator: {
      name1: "B. V. N. Trinadh",
      contact1: "+91 8978232760",
      name2: "Ch. Pravalika",
      contact2: "+91 9515131972",
      name3: "K. Lahari",
      contact3: "+91 9032085398",
      name4: "V. Dharani",
      contact4: "+91 9542676569",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "6pm, Sept 10 ",
    entryFee: "Free",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.4",
    title: "Chess",
    description:
      "The Chess Tournament is a strategic individual event where participants compete to outsmart opponents within a limited time.",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹4,000",
    prize1: "₹2,500",
    prize2: "₹1,500",
    image: chessGame,
    fullDescription:
      "This event allows individuals to showcase their focus, strategy, and decision-making through competitive chess matches. It emphasizes quick thinking and proper execution of moves under time constraints.",
    rules: [
      "This is for individual participation.",
      "The time slot for the match will be 20minutes.",
      "Castling moves should be done before checking.",
      "If the match is not completed within the given time, the winner is considered based on who has highest points.",
      "After completion of each match the winner from that match is going to play with the winner of the other match. This process is done till the last match.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mr. Anand",
      contact1: "+91 9491577090",
      name2: "Mrs. N. Lavanya",
      contact2: "+91 9849932386",
      name3: "Mr. D. Manikanta",
      contact3: "+91 6309177002",
    },
    studentCoordinator: {
      name1: "M. Madhu",
      contact1: "+91 7093094526",
      name2: "Ch. Gangadhar",
      contact2: "+91 7893094008",
      name3: "M. Mohan Krishna Reddy",
      contact3: "+91 9493800555",
      name4: "K. Sumanth Reddy",
      contact4: "+91 9666642377",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.5",
    title: "Sudoku",
    description:
      "The Sudoku is an individual puzzle-solving event that challenges logical thinking and number placement skills.",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹3,500",
    prize1: "₹2,000",
    prize2: "₹1,500",
    image: sudoku,
    fullDescription:
      "This event tests participants ability to think critically and apply logic to complete a 9×9 Sudoku grid with digits 1–9. The objective is to ensure that each row, column, and block contains all numbers without repetition.",
    rules: [
      "This is for individual participation.",
      "Time limit to solve the puzzle will be 30mintues.",
      "This is a puzzle game , its objective is to fill a 9*9 grid with digits from 1 to 9. It is a number placement puzzle.",
      "Each row and column must contain the numbers from 1 to 9, without repetitions.",
      "The participants whose answer sheets match the actual answer key are declared the winners.",
      "If there are multiple winners, then those who submit the sheet in less time are chosen as the winner.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mr. K. Raja ",
      contact1: "+91 9963744490",
      name2: "Mrs. Rupa ",
      contact2: "+91 7659029659",
      name3: "Mr. D. Manikanta",
      contact3: "+91 6309177002",
    },
    studentCoordinator: {
      name1: "K. Jayasri",
      contact1: "+91 7816010518",
      name2: "G. Pavani ",
      contact2: "+91 9390594841",
      name3: "K. Pooja",
      contact3: "+91 8074181904",
      name4: "K. Harini Sri",
      contact4: "+91 9398385454",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "2.6",
    title: "Rubic's Cube",
    description:
      "Unlock the cube, unleash your mind - challenge, focus, solve, repeat, win.",
    category: "non-technical",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹3,500",
    prize1: "₹2,000",
    prize2: "₹1,500",
    image: rubicsCube,
    fullDescription:
      "The Rubik’s Cube is a classic 3D puzzle that challenges your logic, memory, and spatial reasoning. With six colorful faces and over 43 quintillion possible combinations, solving it requires strategy, patience, and a touch of brilliance. Whether you're a speedcubing pro or a curious beginner, it's more than a toy - it's a timeless brain teaser that turns frustration into fascination.",
    rules: [
      "This is for individual participation.",
      "Who solve the cube first will get rewarded.",
      "Each Participatents should bring their own cube.",
    ],
    themes: [],
    Note: ["Every one can participate (No age limit)"],
    facultyCoordinator: {
      name1: "Mr. K. Raja ",
      contact1: "+91 9963744490",
      name2: "",
      contact2: "",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "Chandhu",
      contact1: "+91 7731097968",
      name2: "P. Gangadhar",
      contact2: "+91 8639450574",
      name3: "",
      contact3: "",
      name4: "",
      contact4: "",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
];

export const mobileGames: Event[] = [
  {
    id: "3.1",
    title: "Ludo",
    description:
      "The Ludo is an online individual gaming event where players compete head-to-head for victory.",
    category: "mobile-games",
    // date: "From 9th Sept",
    participants: 1,
    prize: "₹2,500",
    prize1: "₹1,500",
    prize2: "₹1,000",
    image: LUDO,
    fullDescription:
      "This event brings excitement and strategy as players compete in two-player Ludo matches conducted online. It is designed for individual participation, with matches played directly on participants’ own mobile devices.",
    rules: [
      "This event is for individual participation.",
      "It is a two-player game (only two players can play at a time).",
      "Players have to play on their own mobiles.",
      "This will be coordinated in a WhatsApp group.",
      "If in case of any technical issues like charging, phone hanging, network issue organizers are not responsible.",
      "After completion of each match, the winner should show the winning screenshot to participate in the next round.",
    ],
    themes: [],
    Note: ["ID card is mandatory for participation."],
    facultyCoordinator: {
      name1: "Mrs. U. Jenny Grace",
      contact1: "+91 9490702757",
      name2: "Mrs. Suma",
      contact2: "+91 9392681899",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "K.Bindu",
      contact1: "+91 9032257976",
      name2: "A. Sanjana",
      contact2: "+91 8074377887",
      name3: "M. Anusha",
      contact3: "+91 8309478883",
      name4: "G. Dharani",
      contact4: "+91 9390594841",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹100 per Head",
    teamSize: "1 member",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "3.2",
    title: "Free Fire",
    description:
      "The Free Fire Tournament is an exclusive gaming event for college students to showcase their skills in a competitive battle.",
    category: "mobile-games",
    // date: "From 9th Sept",
    participants: 4,
    prize: "₹6,000",
    prize1: "₹4,000",
    prize2: "₹2,000",
    image: freeFire,
    fullDescription:
      "This event is open only to college students, ensuring a fair and exciting in-house gaming competition. Participants must form their teams and register manually by providing both their player ID and college ID card at the registration desk.",
    rules: [
      "Registrations will be done using college ID cards.",
      "Every player with a team should come to the registration desk with their player ID along with their college ID card",
      "Certificates will be provided for all winners and runners",
      "Every player with a team should come to the registration desk with their player ID along with their college ID card.",
    ],
    themes: [],
    Note: [
      "ID card is mandatory for participation.",
      "If we find any hacks, that team will be disqualified",
    ],
    facultyCoordinator: {
      name1: "Dr. Pavan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. K. Bhanu Chand ",
      contact2: "+91 9160984527",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "K. Dinesh",
      contact1: "+91 8074375217",
      name2: "K. Charan",
      contact2: "+91 7993289759",
      name3: "Ch. Srinivas",
      contact3: "+91 9121240269",
      name4: "V. Sagar",
      contact4: "+91 7993875544",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹600 per team",
    teamSize: "4 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
  {
    id: "3.3",
    title: "BGMI",
    description:
      "The PUBG Tournament is an exclusive gaming event for college students to compete in high-intensity battle royale matches.",
    category: "mobile-games",
    // date: "From 9th Sept",
    participants: 4,
    prize: "₹6,000",
    prize1: "₹4,000",
    prize2: "₹2,000",
    image: PUBG,
    fullDescription:
      "This event is open only to college students, bringing out the thrill of competitive gaming within the campus. This tournament will test participants’ teamwork, strategy, and survival skills in classic PUBG battle royale gameplay.",
    rules: [
      "Registrations should be done using college ID cards. ",
      "PUBG players should be from any college students.",
      "Every player with a team should come to the registration desk with their player ID along with their college ID card.",
    ],
    themes: [],
    Note: [
      "ID card is mandatory for participation. ",
      "If we find any hacks that team will be disqualified",
      "Participants are responsible for network and phone charging.",
    ],
    facultyCoordinator: {
      name1: "Dr. Pavan Kalyan ",
      contact1: "+91 9493491253",
      name2: "Mr. K. Bhanu Chand ",
      contact2: "+91 9160984527",
      name3: "",
      contact3: "",
    },
    studentCoordinator: {
      name1: "Prem",
      contact1: "+91 9182925900",
      name2: "Guna",
      contact2: "+91 9346106866",
      name3: "Ch. Rajeev",
      contact3: "+91 9182679803",
      name4: "A. Rahul",
      contact4: "+91 7569119284",
    },
    venue: "Swarnandhra College IT Department",
    time: "9:00 AM - 4:00 PM",
    registrationDeadline: "September 4, 2025",
    entryFee: "₹600 per team",
    teamSize: "4 members",
    // registrationLink: "https://forms.gle/qBfu5Qwov2wrf3gd8"
  },
];

export const allEvents = [
  ...technicalEvents,
  ...nonTechnicalEvents,
  ...mobileGames,
];
