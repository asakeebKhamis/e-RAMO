"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MainSharedSpace() {
  const amenities = [
    "Reserved permanent workspace as long as you need",
    "Book a desk by the hour or day in anyplace",
    "A well-prepared place for your service and comfort",
    "Hot desk as often as you need in any place",
  ];

  const categories = [
    { id: "shared-space", label: "Shared Space", icon: "/images/co-working.svg" },
    { id: "private-offices", label: "Private Offices", icon: "/images/workplace.svg" },
    { id: "meeting-rooms", label: "Meeting Rooms", icon: "/images/conference.svg" },
    { id: "virtual-offices", label: "Virtual Offices", icon: "/images/video-call.svg" },
  ];

  return (
    <section className="my_container relative bg-[#FDF8F2]/50 rounded-3xl px-4 sm:px-8 pt-20 pb-10 mt-32">
      {/* Tabs */}
      <div className="absolute -top-8 left-0 w-full px-4">
        <div className="flex gap-2 overflow-x-auto bg-main p-3 rounded-full w-full md:w-fit mx-auto">
          {categories.map((category, i) => {
            const isActive = i === 0;
            return (
              <button
                key={category.id}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base whitespace-nowrap transition
                  ${
                    isActive
                      ? "bg-white text-main font-semibold"
                      : "bg-white/10 text-white/80"
                  }`}
              >
                <div className="relative size-5 sm:size-6">
                  <Image
                    src={category.icon}
                    alt={category.label}
                    fill
                    className={!isActive ? "invert brightness-0 opacity-80" : ""}
                  />
                </div>
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left */}
        <div className="space-y-5 text-[#1A2921]">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Shared Space
            </h2>
            <p className="text-base sm:text-lg">(CO Work Space)</p>
          </div>

          <p className="text-sm sm:text-base leading-relaxed max-w-xl">
            Rent as many desks as you need in a dynamic, shared office space.
            Business Address and storage options included.
          </p>

          {/* Amenities */}
          <div className="space-y-3">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 size-2.5 rounded-full bg-[#B49D97]" />
                <p className="text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="pt-2">
            <div className="border-b w-32 mb-2" />
            <p className="text-sm sm:text-base">
              Price Starting From{" "}
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                1250 EGP
              </span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="h-12 w-full sm:w-44 bg-main hover:bg-main/90">
              Book Now
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full sm:w-44 text-main border-main"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/images/shared.png"
            alt="Shared Space Co-Working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
