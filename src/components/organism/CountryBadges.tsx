import React from "react";
import { Badge } from "../ui/badge";
import { twMerge } from "tailwind-merge";
import { CountryBadgeProps } from "@/types/interface"; // Adjust the path based on your project structure

export default function CountryBadges({ className, datas }: CountryBadgeProps) {
  return (
    <div className={twMerge("space-x-1", className)}>
      {datas.map((data, key) => (
        <Badge key={key} className="bg-secondary hover:bg-secondary/70">
          {data}
        </Badge>
      ))}
    </div>
  );
}
