import { ListContainerProps } from "@/types/interface";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ListContainer({ className }: ListContainerProps) {
  return <div className={twMerge("", className)}>ListContainer</div>;
}
