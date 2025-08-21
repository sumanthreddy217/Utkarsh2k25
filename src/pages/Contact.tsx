import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  // const form = useRef();
  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iumyn1q', 'template_9cm92zs', form.current, {
        publicKey: '6wVkcE2vFBtbWfa8c',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          // console.log('FAILED...', error.text);
          // alert("Failed to Sent Message, Please try again.", error.text);
          const errorMsg = error?.text || error?.message || 'Unknown error';
          console.log('FAILED...', errorMsg);
          alert(`Failed to Send Message. Please try again.\n${errorMsg}`);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 py-10 pt-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions about our college fest? Reach out using the form or
          details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column with Info Cards */}
          <div className="flex flex-col space-y-4">
            <Card className="flex-1 shadow-md hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-emerald-600">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">ithod@swarnandhra.ac.in</p>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-md hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-emerald-600">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">+91 9700149259</p>
              </CardContent>
            </Card>

            <Card className="flex-1 shadow-md hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-emerald-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Swarnandhra College of Engineering and technology, <br />{" "}
                  Seetharampuram, Narsapur, West Godavari, Andhra Pradesh - 534280
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column with Contact Form */}
          <Card className="shadow-lg hover:shadow-xl transition flex flex-col justify-between bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <Input placeholder="Your Name" name="user_name" required />
                <Input type="email" placeholder="Your Email" name="user_email" required />
                <Textarea placeholder="Your Message" rows={4} name="message" required />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
