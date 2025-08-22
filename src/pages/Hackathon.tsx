import React from "react";
import { Calendar, Clock, MapPin, Users, DollarSign, Phone, Mail, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import hackathon from "@/assets/hackathon.jpg"; // update this path as you needed

// need to set 2 googlr forms link

const HackathonPage: React.FC = () => {

  const event = {
    title: "HACKSPRINT",
    description: "A 24-hour National coding marthon to innovate, collaborate, and conquer real-world challenges.",
    category: "technical",
    fullDescription:
      "The National Hackathon is a 24-hour coding and innovation marathon aimed at fostering creativity, problem-solving, and teamwork among college students across the nation. Organized by the Department of Information Technology at Swarnandhra College of Engineering and Technology, this event offers a platform for students to showcase their technical skills and innovative ideas.",
    rules: [
      "Team size 2-4 members, All participants must be pursuing their studies.",
      "The hackathon will run continuously for 24 hours, participants should be prepared to stay on campus during this period.",
      "All work must be original, high plagiarism will result in immediate disqualification.",
      "Participants should bring their own laptops and required accessories.",
      "Respectful behavior and adherence to the code of conduct are mandatory.",
      "Lunch, Snacks & Dinner will be provided.",
    ],
    domains: [
      "Cyber Security and Privacy",
      "Healthcare Innovation",
      "SpaceTech Exploration",
      "FinTech Financial Inclusion",
      "Sustainable Smart Cities",
      "Smart Agriculture"
    ],
    note: [
      "Eligibility: Open to all college students across India",
      "Certificates will be awarded to all participants.",
    ],
    prize: "₹75,000",
    entryFee: "₹300 Per Head ",
    note2: "₹200 Per Head",
    teamSize: "2-4 members",
    registrationDeadline: "September 4, 2025",
    facultycoordinator: {
      name1: "Mr. Kondaveti Raja",
      contact1: "+91 9963744490",
      name2:"Mr. Ch R K Raju",
      contact2:" +91 9000266299",
    },
    studentcoordinator: {
      name1: "D. Raghava",
      contact1: "+91 9059088332",
      name2: "I. Swathi",
      contact2: "+91 9347550698",
      name3:"K. Vinay Kumar Reddy",
      contact3: "+91 8374936876",
      name4:"B. Indu",
      contact4: "+91 8247031525",
    },
    // date:  "10th Sept - 11th Sept, 2025",
    time: "10:00 AM – 10:00 AM",
    venue: "Swarnandhra College of Engineering and Technology",
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12 mt-11">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-3 py-1 rounded-full mb-4">
              Technical
            </span> 
            <h1 className="text-4xl md:text-5xl hacksprint-title bg-gradient-to-r  from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold dark:text-white mb-3 leading-tight ">
              {event.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {event.description}
            </p>
            <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-200 mb-8 text-lg font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> 10<sup>th</sup> Sept - 11<sup>th</sup> Sept, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" /> {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" /> {event.venue}
              </div>
            </div>
            <a
              href="https://forms.gle/yeptw6jAhVdPs2ps5 "
              target="_blank"
              className="inline-block px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
            >
              Register Now
            </a>
          </div>
          <div className="flex-1">
             <img
              src={hackathon}
              alt="Hackathon Banner"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-12 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Rules &Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Rules & Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Domains */}
              <Card>
                <CardHeader>
                  <CardTitle>Domains</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.domains.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="font-bold">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Note</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.note.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Entry Details</CardTitle>
                  <CardDescription className="text-center">
                    Secure your spot now!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {event.prize}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Prize Pool
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-sm">Entry Fee</span>
                      </div>
                      <span className="font-semibold">{event.entryFee}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-sm">For Swarnandhra Students</span>
                      </div>
                      <span className="font-semibold">{event.note2}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Team Size</span>
                      </div>
                      <span className="font-semibold">{event.teamSize}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-primary" />
                        <span className="text-sm">Deadline</span>
                      </div>
                      <span className="font-semibold text-sm">
                        {event.registrationDeadline}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" variant="hero" onClick={() => window.open("https://forms.gle/yeptw6jAhVdPs2ps5 ", "_blank")}>
                    Register Now
                  </Button>
                </CardContent>
              </Card>


              {/* Faculty Coordinators */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Coordinators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.facultycoordinator.name1}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        {event.facultycoordinator.contact1}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.facultycoordinator.name2}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        {event.facultycoordinator.contact2}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>


              {/* Student Coordinator */}
              <Card>
                <CardHeader>
                  <CardTitle>Student Coordinators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.studentcoordinator.name1}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.studentcoordinator.contact1}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.studentcoordinator.name2}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.studentcoordinator.contact2}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.studentcoordinator.name3}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.studentcoordinator.contact3}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="font-semibold">
                      {event.studentcoordinator.name4}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.studentcoordinator.contact4}</span>
                    </div>
                  </div>

                
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HackathonPage;
