import Image from "next/image";

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
export default function PriceSidebar() {
  return (
    <aside className="lg:pe-5">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground text-center md:text-start">
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
          <span className="flex items-center gap-2">
            {helpDiskSVG} Available 24/7
          </span>
          <span className="text-main underline font-semibold">Contact Us</span>
        </div>
      </div>
    </aside>
  );
}

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
