"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimatedLight = ({ className }: { className?: string }) => {
  return ["/images/light1.svg", "/images/light2.svg", "/images/light3.svg"].map(
    (src, i) => (
      <motion.div
        key={i}
        className={cn(
          "absolute inset-0 flex items-center justify-center scale-200 md:scale-110 lg:scale-130 pointer-events-none",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 5,
          delay: i * 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src={src}
          alt={`light-${i}`}
          width={1000}
          height={1000}
          className="blur-3xl"
        />
      </motion.div>
    )
  );
};
