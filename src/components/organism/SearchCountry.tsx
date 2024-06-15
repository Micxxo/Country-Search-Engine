import React from "react";
import ListContainer from "../molecules/ListContainer";
import InputForm from "../molecules/InputForm";
import { SearchCountryProps } from "@/types/interface";
import { twMerge } from "tailwind-merge";

export default function SearchCountry({
  onChange,
  className,
}: SearchCountryProps) {
  return (
    <div className={twMerge("", className)}>
      <InputForm onChange={onChange} className="mt-3" />
      <ListContainer />
    </div>
  );
}
