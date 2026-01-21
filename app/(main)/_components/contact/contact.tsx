"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  return (
    <div className="my_container text-[#1A2921]">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-4 font-dm-sans">
          Contact Us
        </h1>
        <p className="text-2xl">We Are Here For Your Help</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-start">
        {/* Image Collage Section */}
        <div className="relative w-full h-full">
          <Image
            src="/images/contact.png"
            alt="Office workspace"
            fill
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />
        </div>

        {/* Contact Form Section */}
        <div>
          <form className="space-y-6">
            <label className="hidden md:block text-xl font-semibold text-foreground mb-2">
              Please fill the upcoming fields
              <span className="text-red-500">*</span>
            </label>

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name..."
                className="w-full px-4 py-3 shadow-sm text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:shadow-lg transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail..."
                className="w-full px-4 py-3 shadow-sm text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:shadow-lg transition-all"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number..."
                className="w-full px-4 py-3 shadow-sm text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:shadow-lg transition-all"
              />
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                name="city"
                placeholder="City..."
                className="w-full px-4 py-3 shadow-sm text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:shadow-lg transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message Text..."
                rows={5}
                className="w-full px-4 py-3 shadow-sm text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:shadow-lg transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <Button
                size={"lg"}
                className="h-12 w-75 bg-main hover:bg-main/90"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
