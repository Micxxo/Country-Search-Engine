import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";
import { Label } from "../ui/label";
import { twMerge } from "tailwind-merge";
import { InputFormProps } from "@/types/interface";

export default function InputForm({ className, onChange }: InputFormProps) {
  return (
    <div className={twMerge(" flex items-center justify-center", className)}>
      <Input
        id="input"
        placeholder="Type any country name"
        className="w-1/2 border-accent border-[0.5px] placeholder:text-accent focus-visible:border-primary focus-visible:border-2 focus-visible:border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0 rounded-tr-none rounded-br-none h-14 peer"
        onChange={onChange}
      />
      <Label
        htmlFor="input"
        className="border-[0.5px] border-l-0 border-accent rounded-tr-md rounded-br-md h-14 flex items-center justify-center px-3 peer-focus-visible:border-primary peer-focus-visible:border-2 peer-focus-visible:border-l-0 cursor-pointer"
      >
        <IoIosSearch className="text-accent text-2xl" />
      </Label>
    </div>
  );
}
