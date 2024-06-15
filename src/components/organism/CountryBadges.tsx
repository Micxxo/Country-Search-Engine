import React from "react";
import { Badge } from "../ui/badge";
import { twMerge } from "tailwind-merge";
import { CountryBadgeProps } from "@/types/interface";
import { motion as m } from "framer-motion";
import { FromLeft } from "@/lib/animation";

export default function CountryBadges({ className, datas }: CountryBadgeProps) {
  return (
    <div className={twMerge("space-x-1", className)}>
      {datas.map((data, key) => (
        <m.div
          initial={FromLeft.initial}
          animate={FromLeft.animate}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.5,
            delay: key * 0.1 + 0.3,
          }}
        >
          <Badge key={key} className="bg-secondary hover:bg-secondary/70">
            {data}
          </Badge>
        </m.div>
      ))}
    </div>
  );
}
