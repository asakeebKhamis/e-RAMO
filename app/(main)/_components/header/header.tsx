"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/common/language-selector";

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Products", active: false },
    { label: "How It Works", active: false },
    { label: "Contact Us", active: false },
    { label: "Membership", active: false },
  ];

  return (
    <header className="my_container relative flex items-center justify-between py-3">
      {/* Logo */}
      <Link href="/" className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src="/images/LOGO.png"
          alt="Cheer Location"
          fill
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`text-sm transition ${
              item.active
                ? "font-extrabold text-main"
                : "text-muted-foreground hover:text-main"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Section Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSelector />

        <Button size="lg" className="h-12 bg-main hover:bg-main/90">
          Create Account
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="h-12 px-10 text-main border-main"
        >
          <User className="me-2" />
          Login
        </Button>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <LanguageSelector />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className=" p-2 rounded-lg border"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full shadow-lg md:hidden z-50 origin-top transition-transform duration-300 ease-out bg-background ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              onClick={() => setOpen(false)}
              className={`text-sm ${
                item.active ? "font-bold text-main" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button className="bg-main hover:bg-main/90">Create Account</Button>

            <Button variant="outline" className="text-main border-main">
              <User className="me-2" />
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
