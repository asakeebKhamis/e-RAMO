"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Zap, Clock, MapPinIcon, UserCogIcon } from "lucide-react";

const features = [
  {
    icon: MapPinIcon,
    title: "More Than (662) Location",
    description: "",
  },
  {
    icon: UserCogIcon,
    title: "We Offer All Amenities in Our All Location",
    description: "",
  },
  {
    icon: Clock,
    title: "All Kinds Of Supports 24/7",
    description: "",
  },
];

export default function MainAbout() {
  return (
    <section className="my_container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              About Chair Location
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Chair Location" is a website where you can search, find and
              reserve co-working space, including co-working offices, private
              offices, meeting rooms, and virtual offices near you. It shows the
              features and amenities this space can provide. Professionals and
              businesses can then compare all available co-working spaces to
              find one with the services and facilities that best suit their
              requirements.
            </p>
          </div>

          {/* Why Chair Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Why Chair Location
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="flex items-center justify-center rounded-full w-10 h-10  bg-[#E7CAAA]/60">
                        <IconComponent className="w-6 h-6 text-main" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-main">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Buttons */}
            <Button size={"lg"} className="h-12 w-45 bg-main hover:bg-main/90">
              View Products
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="h-12 w-45 text-main border-main [&_svg:not([class*='size-'])]:size-5"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-1 gap-4 h-full">
          {[
            {
              src: "/images/Group 36870.jpg",
              alt: "Modern collaborative office space",
            },
            {
              src: "/images/Group 36869.jpg",
              alt: "Modern collaborative office space",
            },
            {
              src: "/images/Group 36868.png",
              alt: "Modern collaborative office space",
            },
          ].map((img, idx) => (
            <div
              key={idx}
              className="relative h-48.75 rounded-2xl overflow-hidden border group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
