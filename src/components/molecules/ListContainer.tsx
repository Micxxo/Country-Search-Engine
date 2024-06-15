import { ListContainerProps } from "@/types/interface";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FadeUp } from "@/lib/animation";

export default function ListContainer({
  className,
  datas,
  loading,
  noData,
}: ListContainerProps) {
  return (
    <m.div
      initial={FadeUp.initial}
      animate={FadeUp.animate}
      transition={{
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      }}
      className={twMerge(
        "listContainerShadow w-full md:w-[54%] mt-2 rounded-md mx-auto py-3",
        className
      )}
    >
      <div className="px-5 md:px-0">
        {loading && <Skeleton className="w-full h-[30px] rounded-none" />}
        {!loading &&
          datas.slice(0, 5).map((data, key) => (
            <Link to={`/country/${data.name.common}`}>
              <Button
                key={key}
                className="pl-3 text-[16px] h-fit w-full justify-start bg-transparent text-black hover:bg-[#f4f4f4] rounded-none"
              >
                {data.name.common}
              </Button>
            </Link>
          ))}
        {noData && !loading && (
          <p className="text-red-600 pl-3 text-[16px]">Data not found</p>
        )}
      </div>
    </m.div>
  );
}
