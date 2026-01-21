import { Facebook, Youtube, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="bg-[#F3F5F6] text-center">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="my_container">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Left Section - Logo and Social */}
            <div className="flex flex-col items-center mx-auto md:mx-0 w-fit">
              {/* Logo */}
              <Link href={"/"} className="relative flex w-35 h-27.5">
                <Image
                  src="/images/LOGO.png"
                  alt="Cheer Location"
                  fill
                  className="rounded object-cover"
                />
              </Link>
              <div className="flex flex-wrap gap-3 max-w-20 justify-center">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5 text-main" />
                </Link>
                <Link
                  href="#"
                  aria-label="YouTube"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Youtube className="w-5 h-5 text-main" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-main" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5 text-main" />
                </Link>
              </div>
            </div>

            {/* Main Pages Column */}
            <div className="text-center md:text-start">
              <h3 className="font-bold text-main mb-4 text-2xl">Main Pages</h3>
              <ul className="space-y-4 text-base text-main">
                {[
                  { label: "Home", href: "#" },
                  { label: "About", href: "#" },
                  { label: "How it Works", href: "#" },
                  { label: "Contact Us", href: "#" },
                  { label: "Membership", href: "#" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-center md:justify-start gap-2">
                    <span className="size-1.5 rounded-full bg-main" />
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div className="text-center md:text-start">
              <h3 className="font-bold text-main mb-4 text-2xl">Products</h3>
              <ul className="space-y-4 text-base text-main">
                {[
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
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      href="#"
                      className="hover:underline flex items-center justify-center md:justify-start gap-2"
                    >
                      <div className="relative w-4 h-4">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App Column */}
            <div className="text-center md:text-start">
              <h3 className="font-bold text-main mb-4 text-2xl">
                Download the Chair Location App
              </h3>
              <div className="flex flex-col items-center md:items-start">
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
          </div>

          {/* Divider */}
          <div className="border-t my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-main">
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="hover:underline">
                Privacy & Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </div>
            <p>
              All Copyrights Chair Location | Developed by{" "}
              <b>e-RAMO For Digital Solutions</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
