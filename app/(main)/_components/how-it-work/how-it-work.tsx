"use client";

import Image from "next/image";

export default function MainHowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Book, Reach or Call",
      image: "/how-works-1.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      number: 2,
      title: "View Location Info",
      image: "/how-works-2.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      number: 3,
      title: "Search Locations",
      image: "/how-works-3.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  const colors = ["bg-amber-100", "bg-orange-100", "bg-yellow-100"];

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0 space-y-10 text-[#1A2921]">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-foreground mb-4 font-dm-sans">
          How <span className="text-main">It</span> Works
        </h2>
        <p className="text-lg max-w-110 mx-auto">
          Coworking & Flexible Office Marketplace | Search & Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col gap-5">
            {/* Number Badge */}
            <div className="flex items-center gap-3">
              <div
                className={`bg-main-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg text-main`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
            </div>

            {/* Image */}
            <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={`/images/how${i + 1}.png`}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
