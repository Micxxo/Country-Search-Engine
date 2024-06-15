import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { twMerge } from "tailwind-merge";
import { CountryInfoInterface } from "@/types/interface";

export default function CallingCodeTooltip({
  callingCodeDatas,
  currencyDatas,
  type,
  triggerTitle,
  className,
}: CountryInfoInterface) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-primary underline">
            {triggerTitle ? triggerTitle : "-"}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className={twMerge(
            "bg-[#525252] text-white font-sf text-sm space-y-1 font-normal",
            className
          )}
        >
          {type === "calling-codes" && (
            <>
              {callingCodeDatas?.map((data, key) => {
                return <p key={key}>{data.name}</p>;
              })}
            </>
          )}

          {type === "currency" && (
            <>
              {currencyDatas?.map((data, key) => {
                return <p key={key}>{data.name}</p>;
              })}
            </>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
