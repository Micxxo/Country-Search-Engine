import { CountryLatitudeProps } from "@/types/interface";
import { twMerge } from "tailwind-merge";
import Globe from "../../assets/svgs/globe.svg";
import { ArrayToString } from "@/helper/formatter";
import { useEffect, useState } from "react";

export default function CountryLatitude({
  latlng,
  className,
}: CountryLatitudeProps) {
  const [LatLong, setLatLong] = useState<string>("");

  useEffect(() => {
    if (latlng) {
      setLatLong(ArrayToString(latlng));
    }
  }, []);

  return (
    <div
      className={twMerge(
        "listContainerShadow p-4 flex items-center justify-between gap-5 w-full md:w-[45%] relative pt-5 pb-8",
        className
      )}
    >
      <div>
        <p className="text-xl font-medium">LatLong</p>
        {LatLong && (
          <h1 className="text-5xl font-bold pt-3 text-primary">{LatLong}</h1>
        )}
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={Globe} alt="My SVG Image" width={204} height={120} />
      </div>
    </div>
  );
}
