"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function MainSharedSpace() {
  const tabs = [
    { id: "shared", label: "Shared Space", icon: "👥" },
    { id: "private", label: "Private Offices", icon: "🏢" },
    { id: "meeting", label: "Meeting Rooms", icon: "📊" },
    { id: "virtual", label: "Virtual Offices", icon: "💻" },
  ];

  const amenities = [
    "Reserved permanent workspace as long as you need",
    "Book a desk by the hour or day in anyplace",
    "A well-prepared place for your service and comfort",
    "Hot desk as often as you need in any place",
  ];

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
    <div className="my_container bg-[#FDF8F2]/50 p-8 rounded-3xl font-dm-sans pt-20 mt-30 relative">
      {/* Tab Navigation */}
      <div className="absolute -top-10 w-full">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-main p-4 rounded-full w-fit mx-auto">
          {categories.map((category, i) => {
            const isActive = i === 0;

            return (
              <button
                key={category.id}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-base sm:text-base font-medium transition-all ${
                  isActive
                    ? "text-main bg-white border-b border-main"
                    : "text-[#F9F8F6]/50 bg-[#7C9A82]/20"
                }`}
              >
                <div className="relative size-6">
                  <Image
                    src={category.icon}
                    alt="Cheer Location"
                    fill
                    className={!isActive ? "invert brightness-0 opacity-90" : ""}
                    style={
                      !isActive ? { filter: "brightness(0) invert(1)" } : {}
                    }
                  />
                </div>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-5 text-[#1A2921]">
          {/* Title */}
          <div className="">
            <h1 className="text-5xl font-bold mb-2">Shared Space</h1>
            <p className="text-xl">(CO Work Space)</p>
          </div>

          {/* Description */}
          <p className=" text-base leading-relaxed">
            Rent as many desks as you need in a dynamic, shared office space.
            Business Address and storage options included.
          </p>

          {/* Amenities List */}
          <div className="space-y-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="shrink-0">
                  <div className="size-3 rounded-full bg-[#B49D97] flex items-center justify-center" />
                </div>
                <p className="">{amenity}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="border-b w-40"></div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">{markSVG}</span>
              <div>
                <p className="flex items-center gap-2">
                  Price Starting From:{" "}
                  <span className="text-2xl font-bold text-foreground">
                    1250 EGP
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Buttons */}
              <Button
                size={"lg"}
                className="h-12 w-45 bg-main hover:bg-main/90"
              >
                Book Now
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                className="h-12 w-45 text-main border-main [&_svg:not([class*='size-'])]:size-5"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-full max-w-md lg:max-w-none rounded-3xl overflow-hidden">
          <Image
            src="/images/shared.png"
            alt="Shared Space Co-Working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const markSVG = (
  <svg
    width="18"
    height="21"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.70967 8.3085L0.301661 14.2118C0.00316069 14.7285 -0.0778302 15.3427 0.0766698 15.9195C0.23117 16.4955 0.608405 16.9875 1.12515 17.2853L3.70967 18.7778C3.71942 19.362 3.95491 19.92 4.36891 20.3333C4.79041 20.7555 5.36267 20.9925 5.95967 20.9925H14.9597C15.5567 20.9925 16.1289 20.7555 16.5504 20.3333C16.9727 19.9118 17.2097 19.3395 17.2097 18.7425V7.3125C17.2097 6.762 17.0072 6.2295 16.6412 5.81775L12.1412 0.755253C11.7144 0.275253 11.1024 0 10.4597 0C9.81692 0 9.20491 0.275253 8.77816 0.755253C7.40866 2.29575 5.16616 4.8195 4.27816 5.81775C3.91216 6.2295 3.70967 6.762 3.70967 7.3125V8.3085ZM5.20967 18.7425V7.3125C5.20967 7.12875 5.27716 6.95175 5.39941 6.8145L9.89941 1.752C10.0412 1.59225 10.2452 1.5 10.4597 1.5C10.6742 1.5 10.8782 1.59225 11.0199 1.752L15.5199 6.8145C15.6422 6.95175 15.7097 7.12875 15.7097 7.3125V18.7425C15.7097 18.9413 15.6309 19.1325 15.4899 19.2728C15.3497 19.4138 15.1584 19.4925 14.9597 19.4925H5.95967C5.76092 19.4925 5.56966 19.4138 5.42941 19.2728C5.28841 19.1325 5.20967 18.9413 5.20967 18.7425ZM3.70967 11.3085L1.60066 14.9618C1.50091 15.1343 1.47392 15.339 1.52568 15.531C1.57743 15.723 1.70265 15.8873 1.87515 15.9863L3.70967 17.046V11.3085Z"
      fill="#365327"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4609 5.24243C9.21894 5.24243 8.21094 6.25043 8.21094 7.49243C8.21094 8.73443 9.21894 9.74243 10.4609 9.74243C11.7029 9.74243 12.7109 8.73443 12.7109 7.49243C12.7109 6.25043 11.7029 5.24243 10.4609 5.24243ZM10.4609 6.74243C10.8749 6.74243 11.2109 7.07843 11.2109 7.49243C11.2109 7.90643 10.8749 8.24243 10.4609 8.24243C10.0469 8.24243 9.71094 7.90643 9.71094 7.49243C9.71094 7.07843 10.0469 6.74243 10.4609 6.74243Z"
      fill="#B49D97"
    />
  </svg>
);
