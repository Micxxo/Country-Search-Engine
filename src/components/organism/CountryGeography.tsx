import { FromLeft } from "@/lib/animation";
import { CountryGeographyProps } from "@/types/interface";
import { twMerge } from "tailwind-merge";
import { motion as m } from "framer-motion";

export default function CountryGeography({
  capital,
  region,
  subregion,
  className,
}: CountryGeographyProps) {
  return (
    <m.div
      initial={FromLeft.initial}
      animate={FromLeft.animate}
      transition={{
        type: "spring",
        stiffness: 200,
        duration: 0.5,
        delay: 0.5,
      }}
      className={twMerge(
        "listContainerShadow p-4 flex items-center justify-between gap-5 w-full md:w-[40%] relative pt-5 pb-8",
        className
      )}
    >
      <div className="text-xl">
        <p>
          Capital:
          <span className="pl-1 font-medium">{capital ? capital : "-"}</span>
        </p>
        <p>
          Region:{" "}
          <span className="pl-1 font-medium">{region ? region : "-"}</span>
          <p>
            Subregion:
            <span className="pl-1 font-medium">
              {subregion ? subregion : "-"}
            </span>
          </p>
        </p>
      </div>
    </m.div>
  );
}
