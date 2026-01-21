import { LanguageSelector } from "@/components/common/language-selector";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="my_container flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"} className="relative w-20 h-20">
        <Image
          src="/images/LOGO.png"
          alt="Cheer Location"
          fill
          className="rounded object-cover"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {[
          { label: "Home", active: true },
          { label: "About", active: false },
          { label: "Products", active: false },
          { label: "How It Works", active: false },
          { label: "Contact Us", active: false },
          { label: "Membership", active: false },
        ].map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`text-sm transition ${
              item.active ? "font-extrabold text-main" : "text-muted-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Buttons */}
        <Button size={"lg"} className="h-12 bg-main hover:bg-main/90">
          Create Account
        </Button>
        <Button
          size={"lg"}
          variant={"outline"}
          className="h-12 px-10! text-main border-main [&_svg:not([class*='size-'])]:size-5"
        >
          <User />
          Login
        </Button>
      </div>
    </header>
  );
}
