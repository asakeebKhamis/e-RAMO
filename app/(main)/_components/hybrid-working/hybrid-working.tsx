import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainHybridWorking() {
  return (
    <section className="my_container space-y-8">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold font-dm-sans">
          Hybrid working can work for you
        </h2>
        <p className="text-gray-500 text-xl">
          Hybrid working offers you the freedom to work closer to clients,
          colleagues or home. It's also greener and more cost-effective. With
          over 4,000 locations globally, nobody is better placed than Regus to
          help you make the best of it.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="relative h-52">
            <Image
              src={`/images/hybrid${i + 1}.png`}
              alt={`Office space ${i + 1}`}
              fill
              className="object-cover rounded-xl"
            />
            {/* Green bg */}
            {i === 1 && (
              <div className="absolute bg-main rounded-t-2xl w-full h-5 start-1/2 -translate-1/2 -bottom-12" />
            )}
          </div>
        ))}
      </div>

      {/* App promo */}
      <div className="bg-[#FDF8F2] rounded-xl pt-8 px-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative">
        {/* Phone image */}
        <div className="w-full h-125 max-w-sm relative">
          <Image
            src="/images/iphone.png"
            alt="Phone with app"
            fill
            className="object-contain"
          />
        </div>

        {/* Text & buttons */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold mb-2 font-dm-sans">
            Explore The Chair Location App
          </h3>
          <p className="text-muted-foreground mb-4 max-w-lg text-base">
            Hybrid working offers you the freedom to work closer to clients,
            colleagues or home.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="relative w-40 h-15.75">
              <Image
                src="/images/google.png"
                alt="Google Play"
                fill
                className="object-contain"
              />
            </Link>
            <Link href="#" className="relative w-40 h-15.75">
              <Image
                src="/images/apple.png"
                alt="App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Decorative hand icon - simplified */}
        <div className="hidden md:block absolute end-0 top-5 w-39.75 h-40.5">
          <Image
            src="/images/hand_pointing.png"
            alt="Hand pointing"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
