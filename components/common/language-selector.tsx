"use client";

import { Button } from "@/components/ui/button";
import Flag from "react-world-flags";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", flag: "US" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "SA" },
];

export function LanguageSelector({ children }: { children?: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[1]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children || (
          <Button variant="ghost" className="rounded-lg p-0 gap-1">
            <span className="font-cairo">{currentLanguage.nativeName}</span>
            <Flag code={currentLanguage.flag} className="w-5 h-5 rounded" />
            <ChevronDown className="size-4" />
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="p-1">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setCurrentLanguage(lang);
            }}
            className={`flex items-center gap-2 cursor-pointer text-sm ${
              currentLanguage.code === lang.code ? "bg-accent" : ""
            }`}
          >
            <Flag code={lang.flag} className="w-6 h-6 rounded" />
            <span className="font-cairo!">{lang.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
