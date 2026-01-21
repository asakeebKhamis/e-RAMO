"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, MapPinIcon, UserCogIcon } from "lucide-react";

const features = [
  {
    icon: MapPinIcon,
    title: "More Than (662) Location",
  },
  {
    icon: UserCogIcon,
    title: "We Offer All Amenities in Our All Location",
  },
  {
    icon: Clock,
    title: "All Kinds Of Supports 24/7",
  },
];

export default function MainAbout() {
  return (
    <section className="my_container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              About Chair Location
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              "Chair Location" is a website where you can search, find and reserve
              co-working space, including co-working offices, private offices,
              meeting rooms, and virtual offices near you. It shows the features
              and amenities this space can provide. Professionals and businesses
              can then compare all available co-working spaces to find one with
              the services and facilities that best suit their requirements.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Why Chair Location
            </h3>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E7CAAA]/60 shrink-0">
                      <Icon className="w-5 h-5 text-main" />
                    </div>
                    <h4 className="font-semibold text-main leading-snug">
                      {feature.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="h-12 w-full sm:w-45 bg-main hover:bg-main/90">
              View Products
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full sm:w-45 text-main border-main"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
          {[
            "/images/Group 36870.jpg",
            "/images/Group 36869.jpg",
            "/images/Group 36868.png",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border"
            >
              <Image
                src={src}
                alt="Modern collaborative office space"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
