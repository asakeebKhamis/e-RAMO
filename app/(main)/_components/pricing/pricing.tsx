"use client";

import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Stars, Zap } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full max-w-340 mx-auto space-y-10">
      {/* header */}
      <div className="space-y-5 text-center">
        <p className=" text-sm font-medium tracking-wider text-main uppercase">
          PRICING
        </p>
        <h1 className=" text-5xl font-bold text-foreground">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto  max-w-2xl text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
          vel venenatis eu sit massa volutpat.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span
            className={`font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors bg-main`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-9" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Annually
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 items-end">
        <PriceSidebar />
        {plans.map((plan) => (
          <PriceCard plan={plan} />
        ))}
      </div>
    </div>
  );
}

const PriceCard = ({ plan }: { plan: any }) => (
  <div
    key={plan.name}
    className={`relative h-fit rounded-3xl p-8 transition-all space-y-6 ${
      plan.featured
        ? "bg-main text-white shadow-xl"
        : "text-foreground border border-border"
    }`}
  >
    {plan.badge && (
      <div
        className={`rounded-lg p-3 text-sm font-medium bg-[#FFFFFF33] text-white flex items-center justify-center gap-2`}
      >
        {starsSVG}
        {plan.badge}
      </div>
    )}

    <div className=" flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#E2F5D8]">
        <span className="scale-90">{plan.icon}</span>
      </div>
      <div>
        <p
          className={`text-sm font-medium ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}
        >
          {plan.subtitle}
        </p>
        <h3
          className={`text-xl font-bold ${plan.featured ? "text-white" : "text-foreground"}`}
        >
          {plan.name}
        </h3>
      </div>
    </div>

    <p
      className={` text-sm leading-relaxed ${plan.featured ? "text-white/80" : "text-muted-foreground"}`}
    >
      {plan.description}
    </p>

    <div className="">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold">
          <span className="text-xl">SAR</span>
          {plan.price}
        </span>
        <span
          className={`text-lg ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}
        >
          /monthly
        </span>
      </div>
    </div>

    <div className="space-y-3">
      <h4
        className={` text-sm font-semibold ${plan.featured ? "text-white" : "text-foreground"}`}
      >
        What's included
      </h4>
      <ul className="space-y-3">
        {plan.features.map((feature: any, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 h-5 w-5 shrink-0 stroke-3 rounded-full p-1 text-white  ${
                plan.featured ? "bg-[#B49D97]" : "bg-main"
              }`}
            />
            <span
              className={`text-sm ${plan.featured ? "text-white/90" : "text-foreground"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <Button
      className={`mt-5 w-full rounded-full font-semibold text-xl h-15 ${
        plan.featured
          ? "bg-white text-main hover:bg-white/90"
          : "bg-primary text-white hover:bg-primary/90"
      }`}
      size="lg"
    >
      Get started
    </Button>
  </div>
);

const PriceSidebar = () => {
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
    <aside className="pe-5">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground">
          Select Form The <br /> Upcoming Options.
        </h3>
      </div>

      <nav className="mb-12 space-y-3">
        {categories.map((category, i) => {
          const isActive = i === 0;

          return (
            <button
              key={category.id}
              className={`flex items-center justify-center gap-2 rounded-lg w-full p-4 text-base sm:text-base font-medium transition-all ${
                isActive
                  ? "text-main bg-main-2/50"
                  : "text-muted-foreground bg-muted"
              }`}
            >
              <div className="relative size-6">
                <Image
                  src={category.icon}
                  alt="Cheer Location"
                  fill
                  className={!isActive ? "grayscale" : ""}
                />
              </div>
              <span>{category.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-border pt-8">
        <h4 className="mb-1 text-lg font-semibold text-foreground">
          Do you face Any Problems ?
        </h4>
        <p className="mb-6 text-sm text-muted-foreground">
          Contact us Anytime Anyplace we will be Happy.
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">{helpDiskSVG} Available 24/7</span>
          <span className="text-main underline font-semibold">Contact Us</span>
        </div>
      </div>
    </aside>
  );
};

const starsSVG = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5565 17.6281C11.6097 17.8416 11.796 18 12.016 18C12.238 18 12.4253 17.8385 12.478 17.6229C12.644 16.9435 12.9672 16.2124 13.4583 15.4297C14.5538 13.7008 16.6941 12.0042 18.6264 11.4565C18.8421 11.3953 19 11.2039 19 10.9797C19 10.7574 18.8447 10.5668 18.6305 10.5074C17.7555 10.2647 16.8963 9.84142 16.0651 9.25C14.2643 7.97584 12.9068 6.11587 12.4796 4.37835C12.4263 4.1616 12.2376 4 12.0144 4C11.7946 4 11.6077 4.15693 11.5536 4.36997C11.3417 5.20487 10.9497 6.01738 10.3776 6.84375C9.15986 8.61034 7.29663 9.94122 5.36486 10.5024C5.1523 10.5641 5 10.7551 5 10.9765C5 11.2027 5.15899 11.3961 5.37698 11.4565C6.29403 11.7105 7.22177 12.1884 8.13542 12.8776C10.0859 14.3405 11.1833 16.129 11.5565 17.6281Z"
      fill="white"
    />
    <path
      d="M3.74659 7.7875C3.77696 7.90951 3.88343 8 4.00916 8C4.136 8 4.24303 7.90772 4.27315 7.7845C4.36803 7.39629 4.55268 6.97854 4.83333 6.53125C5.45934 5.54334 6.68234 4.5738 7.78652 4.26084C7.90974 4.22591 8 4.11649 8 3.98841C8 3.86139 7.91123 3.75247 7.78884 3.71851C7.28886 3.5798 6.79788 3.33795 6.32292 3C5.29388 2.27191 4.51817 1.20907 4.27403 0.2162C4.24358 0.092344 4.13577 0 4.00822 0C3.88262 0 3.77581 0.0896727 3.74492 0.211413C3.62383 0.688495 3.39983 1.15279 3.07292 1.625C2.37706 2.63448 1.31236 3.39498 0.208494 3.71564C0.0870264 3.75092 0 3.86006 0 3.98655C0 4.11581 0.0908522 4.22636 0.215418 4.26086C0.739446 4.40602 1.26958 4.67906 1.79167 5.07292C2.90622 5.90883 3.53334 6.93087 3.74659 7.7875Z"
      fill="white"
    />
  </svg>
);

const helpDiskSVG = (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.28125 5.85937H8.86719V8.20312H10.0391V5.85937V4.6875V2.34375H8.86719V4.6875H8.28125V2.34375H7.10938V4.6875V5.85937V8.20312H8.28125V5.85937Z"
      fill="#66CCFF"
    />
    <path
      d="M12.9688 7.03125H11.7969V5.85937H12.9688V4.6875H11.7969V3.51562H12.9688V2.34375H10.625V4.6875V5.85937V8.20312H12.9688V7.03125Z"
      fill="#59ABFF"
    />
    <path
      d="M15.8984 7.03125H14.7266V2.34375H13.5547V8.20312H15.8984V7.03125Z"
      fill="#59ABFF"
    />
    <path
      d="M18.2422 5.85937C19.2114 5.85937 20 5.07082 20 4.10156C20 3.1323 19.2114 2.34375 18.2422 2.34375H17.0703V4.6875V5.85937V8.20312H18.2422V5.85937ZM18.2422 3.51562C18.5653 3.51562 18.8281 3.77848 18.8281 4.10156C18.8281 4.42465 18.5653 4.6875 18.2422 4.6875V3.51562Z"
      fill="#59ABFF"
    />
    <path
      d="M3.59375 9.375V15.2344H4.76562C5.73488 15.2344 6.52344 14.4458 6.52344 13.4766V11.1328C6.52344 10.1636 5.73488 9.375 4.76562 9.375H3.59375ZM5.35156 11.1328V13.4766C5.35156 13.7996 5.08871 14.0625 4.76562 14.0625V10.5469C5.08871 10.5469 5.35156 10.8097 5.35156 11.1328Z"
      fill="#5C7199"
    />
    <path
      d="M9.45312 14.0625H8.28125V12.8906H9.45312V11.7188H8.28125V10.5469H9.45312V9.375H7.10938V11.7188V12.8906V15.2344H9.45312V14.0625Z"
      fill="#5C7199"
    />
    <path
      d="M11.7969 12.8906C12.12 12.8906 12.3828 13.1535 12.3828 13.4766C12.3828 13.7996 12.12 14.0625 11.7969 14.0625C11.6404 14.0625 11.4932 14.0016 11.3826 13.8909L10.9683 13.4766L10.1396 14.3052L10.5539 14.7195C10.8859 15.0515 11.3274 15.2343 11.7969 15.2343C12.7661 15.2343 13.5547 14.4458 13.5547 13.4765C13.5547 12.5073 12.7661 11.7187 11.7969 11.7187C11.4738 11.7187 11.2109 11.4559 11.2109 11.1328C11.2109 10.8097 11.4738 10.5468 11.7969 10.5468C11.9534 10.5468 12.1005 10.6078 12.2112 10.7184L12.6255 11.1328L13.4541 10.3041L13.0398 9.88984C12.7078 9.55781 12.2664 9.375 11.7969 9.375C10.8276 9.375 10.0391 10.1636 10.0391 11.1328C10.0391 12.1021 10.8276 12.8906 11.7969 12.8906Z"
      fill="#4D5680"
    />
    <path
      d="M15.3125 9.375H14.1406V11.7188V12.8906V15.2344H15.3125V13.6149L16.2223 15.4345L17.2705 14.9105L15.9676 12.3047L17.2705 9.69891L16.2223 9.1748L15.3125 10.9945V9.375Z"
      fill="#4D5680"
    />
    <path
      d="M2.34375 5.85938V4.6875H1.17188V2.92969C1.17188 1.96043 1.96043 1.17188 2.92969 1.17188C3.89895 1.17188 4.6875 1.96043 4.6875 2.92969V4.6875H3.51562V5.85938H4.6875V6.44531C4.6875 6.7684 4.42465 7.03125 4.10156 7.03125H2.34375V8.20312H4.10156C5.07082 8.20312 5.85938 7.41457 5.85938 6.44531V5.85938V4.6875V2.92969C5.85938 1.31426 4.54512 0 2.92969 0C1.31426 0 0 1.31426 0 2.92969V4.6875V5.85938H1.17188H2.34375Z"
      fill="#5C7199"
    />
  </svg>
);

const basicPriceSVG = (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 0C13.9609 -6.00908e-08 9.12816 2.00178 5.56497 5.56497C2.00178 9.12816 4.40533e-07 13.9609 0 19C-4.40533e-07 24.0391 2.00178 28.8718 5.56497 32.435C9.12816 35.9982 13.9609 38 19 38L19 19V0Z"
      fill="#365327"
    />
    <path
      d="M19 38C24.0391 38 28.8718 35.9982 32.435 32.435C35.9982 28.8718 38 24.0391 38 19C38 13.9609 35.9982 9.12817 32.435 5.56498C28.8718 2.00178 24.0391 2.5942e-06 19 2.15366e-06L19 19L19 38Z"
      fill="#B7EB9C"
    />
  </svg>
);

const midPriceSVG = (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="18.4865" height="38" fill="#365327" />
    <rect x="18.4883" width="19.5135" height="38" fill="#EDFFB3" />
    <rect
      x="18.4883"
      y="18.4863"
      width="19.5135"
      height="19.5135"
      fill="#B7EB9C"
    />
  </svg>
);

const bigPriceSVG = (
  <svg
    width="43"
    height="46"
    viewBox="0 0 43 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.5677 33.6464L42.577 33.6413H42.5589L31.9326 27.8833L21.2887 22.1152L10.6443 27.8833L0.0180826 33.6413H0L0.00925157 33.6464L0 33.6515H0.0180826L10.6443 39.4094L21.2887 45.1775L31.9326 39.4094L42.5589 33.6515H42.577L42.5677 33.6464Z"
      fill="#EDFFB3"
    />
    <path
      d="M42.5677 11.5312L42.577 11.5265H42.5589L31.9326 5.76811L21.2887 0L10.6443 5.76811L0.0180826 11.5265H0L0.00925157 11.5312L0 11.5362H0.0180826L10.6443 17.2946L21.2887 23.0627L31.9326 17.2946L42.5589 11.5362H42.577L42.5677 11.5312Z"
      fill="#365327"
    />
    <path
      d="M0.0195312 11.0625V34.1151L21.2901 22.589L0.0195312 11.0625Z"
      fill="#B7EB9C"
    />
    <path
      d="M42.5593 11.0625V34.1151L21.2891 22.589L42.5593 11.0625Z"
      fill="#B7EB9C"
    />
  </svg>
);

const plans = [
  {
    name: "Basic",
    subtitle: "For individuals",
    price: 99,
    description:
      "Lorem ipsum dolor sit amet dolorori sitiol conse cetur adipiscing elit.",
    features: [
      "10 Hours / Week",
      "25 Hours in Shared area / Month",
      "Free 1 hour private office",
      "Up to 3 team members",
    ],
    icon: basicPriceSVG,
    featured: false,
  },
  {
    name: "Enterprise",
    subtitle: "For mid companies",
    price: 199,
    description:
      "Lorem ipsum dolor sit amet dolorori sitiol conse cetur adipiscing elit.",
    features: [
      "All analytics features",
      "Up to (1 Million) tracked visits",
      "Premium support",
      "Up to 10 team members",
    ],
    badge: "Popular Plan (Best Sales)",
    icon: midPriceSVG,
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "For big companies",
    price: 399,
    description:
      "Lorem ipsum dolor sit amet dolorori sitiol conse cetur adipiscing elit.",
    features: [
      "All analytics features",
      "Up to (5 Million) tracked visits",
      "Dedicated support",
      "Up to 50 team members",
    ],
    icon: bigPriceSVG,
    featured: false,
  },
];
