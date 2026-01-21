"use client";

import {
  Heart,
  MapPin,
  Users,
  Clock,
  ChevronRight,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface Listing {
  id: number;
  image: string;
  badge: {
    text: string;
    color: string;
  };
  category: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  capacity: number;
  status: "open" | "closed";
  price: number;
  currency: string;
}

const listings: Listing[] = [
  {
    id: 1,
    image: "/images/office.png",
    badge: { text: "Available", color: "#A7BC9D" },
    category: "Shared Area",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    rating: 4.9,
    reviews: 162,
    capacity: 12,
    status: "open",
    price: 20,
    currency: "SAR",
  },
  {
    id: 2,
    image: "/images/office.png",
    badge: { text: "Not Availble", color: "#AE5B5B" },
    category: "Meeting Room",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    rating: 4.9,
    reviews: 162,
    capacity: 12,
    status: "closed",
    price: 20,
    currency: "SAR",
  },
  {
    id: 3,
    image: "/images/office.png",
    badge: { text: "Available", color: "#A7BC9D" },
    category: "Private Office",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    rating: 4.9,
    reviews: 162,
    capacity: 12,
    status: "closed",
    price: 20,
    currency: "SAR",
  },
  {
    id: 4,
    image: "/images/office.png",
    badge: { text: "Not Availble", color: "#AE5B5B" },
    category: "Meeting Room",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    rating: 4.9,
    reviews: 162,
    capacity: 12,
    status: "closed",
    price: 20,
    currency: "SAR",
  },
];

export default function MainListings() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  return (
    <section className="my_container font-dm-sans">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-foreground mb-2">
          Latest Listings
        </h2>
        <p className="text-xl">Check our latest listings</p>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-card rounded-lg overflow-hidden shadow-xs border transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden group">
              <Image
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-linear-to-b from-[#1A2921]"></div>

              {/* Badge */}
              <div
                className={`absolute top-5 -start-15 -rotate-40 px-3 py-1 w-50 text-sm font-semibold text-center`}
                style={{
                  backgroundColor: listing.badge.color,
                }}
              >
                {listing.badge.text}
              </div>

              {/* Action Icons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => toggleFavorite(listing.id)}
                  className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Toggle favorite"
                >
                  <Heart
                    size={15}
                    className={`${
                      favorites.includes(listing.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400 fill-gray-400"
                    }`}
                  />
                </button>
                <button
                  className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Share"
                >
                  <Share2 size={15} className="text-main" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Category and Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-main font-medium bg-[#F4F1ED] p-1.5 rounded-lg">
                  {listing.category}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">
                    ⭐ {listing.rating} ({listing.reviews} Review)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {listing.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {listing.description}
              </p>

              {/* Meta Information */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs">
                  {userSVG}
                  <span className="text-main">
                    {listing.capacity}{" "}
                    <span className="text-[#64748B]">Per</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {calenderSVG}
                  <span
                    className={
                      listing.status === "open"
                        ? "text-main font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {listing.status === "open" ? "Open" : "Closed"}
                  </span>
                </div>
              </div>

              <div className="border-b mb-3"></div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Starts From: <b>{listing.price}</b> {listing.currency}{" "}
                    /HOUR{" "}
                  </p>
                </div>
                <button className="cursor-pointer text-main hover:text-primary/80 transition-colors bg-[#F8FFF3] p-1 rounded-full">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const userSVG = (
  <svg
    width="12"
    height="16"
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.52544 7.59189C0.684996 5.54088 2.11079 3.19995 4.32119 3.19995H5.59876C7.80919 3.19995 9.23499 5.54088 8.39454 7.59189C8.22366 8.00891 7.82289 8.29531 7.36247 8.29531H7.03332L6.47959 10.6119C6.31038 11.3198 5.69348 11.84 4.95998 11.84C4.22647 11.84 3.60957 11.3198 3.44036 10.6119L2.88665 8.29531H2.5575C2.09705 8.29531 1.69632 8.00891 1.52544 7.59189ZM4.32119 4.15995C2.85808 4.15995 1.80713 5.74747 2.41376 7.22786C2.44446 7.3028 2.50621 7.33531 2.5575 7.33531H3.0074C3.39463 7.33531 3.70967 7.60904 3.79486 7.96558L4.37406 10.3887C4.44638 10.6913 4.69764 10.88 4.95998 10.88C5.22231 10.88 5.47358 10.6913 5.5459 10.3887L6.1251 7.96558C6.21028 7.60904 6.52535 7.33531 6.91255 7.33531H7.36247C7.41374 7.33531 7.4755 7.3028 7.50622 7.22786C8.11281 5.74747 7.06187 4.15995 5.59876 4.15995H4.32119Z"
      fill="#907D78"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.95891 0.96C4.34035 0.96 3.83891 1.46144 3.83891 2.08C3.83891 2.69856 4.34035 3.2 4.95891 3.2C5.57747 3.2 6.07891 2.69856 6.07891 2.08C6.07891 1.46144 5.57747 0.96 4.95891 0.96ZM2.87891 2.08C2.87891 0.931245 3.81017 0 4.95891 0C6.10764 0 7.03891 0.931245 7.03891 2.08C7.03891 3.22876 6.10764 4.16 4.95891 4.16C3.81017 4.16 2.87891 3.22876 2.87891 2.08Z"
      fill="#907D78"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.48 10.8799C0.745094 10.8799 0.96 11.0948 0.96 11.3599C0.96 11.4627 1.00657 11.6007 1.1737 11.7701C1.34287 11.9415 1.61146 12.1178 1.98124 12.2764C2.71911 12.5926 3.7719 12.7999 4.96 12.7999C6.1481 12.7999 7.2009 12.5926 7.93875 12.2764C8.30854 12.1178 8.57715 11.9415 8.7463 11.7701C8.91341 11.6007 8.96 11.4627 8.96 11.3599C8.96 11.0948 9.17491 10.8799 9.44 10.8799C9.70509 10.8799 9.92 11.0948 9.92 11.3599C9.92 11.7873 9.71584 12.1543 9.42957 12.4444C9.14534 12.7324 8.75782 12.9697 8.31693 13.1587C7.43334 13.5374 6.24614 13.7599 4.96 13.7599C3.67384 13.7599 2.48665 13.5374 1.60308 13.1587C1.16215 12.9697 0.774656 12.7324 0.490419 12.4444C0.204154 12.1543 0 11.7873 0 11.3599C0 11.0948 0.214906 10.8799 0.48 10.8799Z"
      fill="#907D78"
    />
  </svg>
);

const calenderSVG = (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.66797 7.83325C5.66797 7.55712 5.89184 7.33325 6.16797 7.33325H9.5013C9.77744 7.33325 10.0013 7.55712 10.0013 7.83325C10.0013 8.10939 9.77744 8.33325 9.5013 8.33325H6.16797C5.89184 8.33325 5.66797 8.10939 5.66797 7.83325ZM3.66797 7.83325C3.66797 7.55712 3.89183 7.33325 4.16797 7.33325H4.17396C4.4501 7.33325 4.67396 7.55712 4.67396 7.83325C4.67396 8.10939 4.4501 8.33325 4.17396 8.33325H4.16797C3.89183 8.33325 3.66797 8.10939 3.66797 7.83325ZM3.66797 10.4999C3.66797 10.2238 3.89183 9.99992 4.16797 9.99992H7.5013C7.77744 9.99992 8.0013 10.2238 8.0013 10.4999C8.0013 10.7761 7.77744 10.9999 7.5013 10.9999H4.16797C3.89183 10.9999 3.66797 10.7761 3.66797 10.4999ZM8.9953 10.4999C8.9953 10.2238 9.21917 9.99992 9.4953 9.99992H9.5013C9.77744 9.99992 10.0013 10.2238 10.0013 10.4999C10.0013 10.7761 9.77744 10.9999 9.5013 10.9999H9.4953C9.21917 10.9999 8.9953 10.7761 8.9953 10.4999Z"
      fill="#365327"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.83203 0C3.10817 0 3.33203 0.22386 3.33203 0.5V1.83333C3.33203 2.10947 3.10817 2.33333 2.83203 2.33333C2.55589 2.33333 2.33203 2.10947 2.33203 1.83333V0.5C2.33203 0.22386 2.55589 0 2.83203 0ZM10.832 0C11.1082 0 11.332 0.22386 11.332 0.5V1.83333C11.332 2.10947 11.1082 2.33333 10.832 2.33333C10.5559 2.33333 10.332 2.10947 10.332 1.83333V0.5C10.332 0.22386 10.5559 0 10.832 0Z"
      fill="#365327"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.15947 0.666748H7.5072C8.81633 0.666735 9.8538 0.666728 10.6658 0.784748C11.5048 0.906702 12.1753 1.16346 12.699 1.72966C13.2176 2.29031 13.4481 2.9987 13.5585 3.88642C13.6667 4.75629 13.6667 5.87108 13.6667 7.29348V7.70668C13.6667 9.12908 13.6667 10.2439 13.5585 11.1137C13.4481 12.0015 13.2176 12.7099 12.699 13.2705C12.1753 13.8367 11.5048 14.0935 10.6658 14.2154C9.8538 14.3334 8.81633 14.3334 7.5072 14.3334H6.15947C4.85037 14.3334 3.81288 14.3334 3.00086 14.2154C2.16184 14.0935 1.49143 13.8367 0.967693 13.2705C0.449087 12.7099 0.218567 12.0015 0.108167 11.1137C-1.31925e-05 10.2439 -6.56201e-06 9.12908 1.0466e-07 7.70675V7.29341C-6.56201e-06 5.87108 -1.31925e-05 4.75628 0.108167 3.88642C0.218567 2.9987 0.449087 2.29031 0.967693 1.72966C1.49143 1.16346 2.16184 0.906702 3.00086 0.784748C3.81288 0.666728 4.85037 0.666735 6.15947 0.666748ZM3.14469 1.77436C2.43152 1.87801 2.01281 2.07247 1.70179 2.40869C1.38566 2.75047 1.19881 3.21952 1.10052 4.00984C1.00091 4.81079 1 5.86335 1 7.32888V7.67128C1 9.13682 1.00091 10.1893 1.10052 10.9903C1.19881 11.7806 1.38566 12.2497 1.70179 12.5915C2.01281 12.9277 2.43152 13.1221 3.14469 13.2258C3.87651 13.3321 4.84125 13.3334 6.2 13.3334H7.46667C8.8254 13.3334 9.79013 13.3321 10.522 13.2258C11.2351 13.1221 11.6539 12.9277 11.9649 12.5915C12.281 12.2497 12.4679 11.7806 12.5661 10.9903C12.6657 10.1893 12.6667 9.13682 12.6667 7.67128V7.32888C12.6667 5.86335 12.6657 4.81079 12.5661 4.00984C12.4679 3.21952 12.281 2.75047 11.9649 2.40869C11.6539 2.07247 11.2351 1.87801 10.522 1.77436C9.79013 1.66799 8.8254 1.66675 7.46667 1.66675H6.2C4.84125 1.66675 3.87651 1.66799 3.14469 1.77436Z"
      fill="#365327"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.332031 4.5C0.332031 4.22386 0.555891 4 0.832031 4H12.832C13.1082 4 13.332 4.22386 13.332 4.5C13.332 4.77614 13.1082 5 12.832 5H0.832031C0.555891 5 0.332031 4.77614 0.332031 4.5Z"
      fill="#365327"
    />
  </svg>
);
