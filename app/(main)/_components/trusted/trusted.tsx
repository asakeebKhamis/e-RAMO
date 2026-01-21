import Image from "next/image";
import React from "react";

export default function MainTrusted() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative w-full py-18"
      style={{
        backgroundImage: 'url("/images/trusted.png")',
      }}
    >
      <div className="z-10 max-w-350 mx-auto px-4 text-secondary grid lg:grid-cols-2 items-center justify-between gap-10 lg:gap-50 h-full">
        <div className="space-y-4 text-center lg:text-start">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Chair Location Is Trusted By The World’s Largest Companies.
          </p>
          <p className="text-lg text-white/70">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Array(8)
            .fill("")
            .map((_, idx) => (
              <TrustedCard
                key={idx}
                src={`/images/company/company${idx + 1}.png`}
                alt={`company${idx + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

const TrustedCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="bg-[#FFFFFF1C] border border-[#97A986] rounded-3xl relative h-28 p-2 overflow-hidden flex items-center justify-center">
      <div className="relative w-35 h-35">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
