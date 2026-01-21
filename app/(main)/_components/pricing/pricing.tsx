"use client";

import { useState } from "react";
import PriceCard from "./price-card";
import PriceSidebar from "./price-sidebar";

export default function MainPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full max-w-340 mx-auto px-4 space-y-10">
      {/* header */}
      <div className="space-y-5 text-center">
        <p className=" text-sm font-medium tracking-wider text-main uppercase">
          PRICING
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
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
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 items-end">
        <PriceSidebar />
        {plans.map((plan, i) => (
          <PriceCard key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
}

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
