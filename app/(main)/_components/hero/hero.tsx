"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function MainHero() {
  const [activeTab, setActiveTab] = useState("meeting-rooms");

  const categories = [
    {
      id: "shared-space",
      label: "Shared Space",
      icon: "/images/co-working.svg",
    },
    {
      id: "private-offices",
      label: "Private Offices",
      icon: "/images/workplace.svg",
    },
    {
      id: "meeting-rooms",
      label: "Meeting Rooms",
      icon: "/images/conference.svg",
    },
    {
      id: "virtual-offices",
      label: "Virtual Offices",
      icon: "/images/video-call.svg",
    },
  ];

  return (
    <div className="my_container relative w-full h-150 flex mb-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url("/images/hero_bg.png")',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#3F3533] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-30">
          {/* Main Heading */}
          <h1 className="font-dm-sans text-[#F8E9D9] text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-balance leading-tight">
            Office That Fit You
            <br />
            Creative Way To Work
          </h1>

          {/* Card Section */}
          <div className="bg-white rounded-2xl absolute left-20 right-20 -bottom-15 overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-8">
              {categories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 text-base sm:text-base font-medium transition-al rounded-lg ${
                      isActive
                        ? "text-main bg-[#FAFFF7] border-b border-main font-semibold"
                        : "text-muted-foreground bg-[#F7F8F9]"
                    }`}
                  >
                    <div className="relative size-6">
                      <Image
                        src={category.icon}
                        alt="Cheer Location"
                        fill
                        className={`rounded object-cover ${!isActive ? "grayscale" : ""}`}
                      />
                    </div>
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Section */}
            <div className=" bg-[#FFFAF5] p-8">
              <div className="w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                {/* Search Input */}
                <InputGroup className="bg-white h-15 shadow-none border-0 rounded-2xl">
                  <InputGroupInput placeholder="Search Here..." />
                  <InputGroupAddon>
                    <Search className="text-[#B49D97] size-5" />
                  </InputGroupAddon>
                  <InputGroupButton className="flex items-center m-1 cursor-pointer">
                    <div className="relative size-4">
                      <Image
                        src={"/images/fi_17065265.svg"}
                        alt="Cheer Location"
                        fill
                      />
                    </div>
                    <span className="text-xs underline underline-offset-2 text-primary font-semibold">
                      Search Nearby
                    </span>
                  </InputGroupButton>
                </InputGroup>

                {/* Search Button */}
                <Button
                  size={"lg"}
                  className="w-45 h-14 border-0 bg-main hover:bg-main/90 text-lg rounded-lg"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
