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
    <section className="my_container relative w-full min-h-130 sm:min-h-155 mb-48d">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: 'url("/images/hero_bg.png")' }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#3F3533] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        {/* Heading */}
        <h1 className="text-center text-[#F8E9D9] font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight mb-12">
          Office That Fit You
          <br />
          Creative Way To Work
        </h1>

        {/* Card */}
        <div className="relative bg-white rounded-2xl max-w-6xl mx-auto overflow-hidden shadow-lg -bottom-10  sm:-bottom-25 md:-bottom-35">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-4 sm:p-6">
            {categories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 text-sm sm:text-base rounded-lg transition w-full sm:w-fit
                    ${
                      isActive
                        ? "bg-[#FAFFF7] text-main border-b-2 border-main font-semibold"
                        : "bg-[#F7F8F9] text-muted-foreground"
                    }`}
                >
                  <div className="relative size-5 sm:size-6">
                    <Image
                      src={category.icon}
                      alt={category.label}
                      fill
                      className={!isActive ? "grayscale" : ""}
                    />
                  </div>
                  <span className="whitespace-nowrap">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="bg-[#FFFAF5] p-4 sm:p-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3">
              <InputGroup className="bg-white h-14 rounded-2xl">
                <InputGroupInput placeholder="Search Here..." />
                <InputGroupAddon>
                  <Search className="size-5 text-[#B49D97]" />
                </InputGroupAddon>
                <InputGroupButton className="flex items-center gap-2 m-1">
                  <div className="relative size-4">
                    <Image src="/images/fi_17065265.svg" alt="Nearby" fill />
                  </div>
                  <span className="text-xs font-semibold underline text-primary hidden md:block">
                    Search Nearby
                  </span>
                </InputGroupButton>
              </InputGroup>

              <Button
                size="lg"
                className="h-14 w-full md:w-44 bg-main hover:bg-main/90 text-base rounded-lg"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
