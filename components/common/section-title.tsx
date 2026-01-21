import { cn } from "@/lib/utils";

export const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => (
  <p
    className={cn(
      "text-5xl font-extrabold bg-linear-to-r from-main via-main-2 to-main bg-clip-text py-2 text-transparent max-w-3xl",
      className
    )}
  >
    {title}
  </p>
);
