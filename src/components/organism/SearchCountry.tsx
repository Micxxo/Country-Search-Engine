import ListContainer from "../molecules/ListContainer";
import InputForm from "../molecules/InputForm";
import { SearchCountryProps } from "@/types/interface";
import { twMerge } from "tailwind-merge";

export default function SearchCountry({
  onChange,
  className,
  countryDatas,
  loading,
  noData,
}: SearchCountryProps) {
  return (
    <div className={twMerge("", className)}>
      <InputForm onChange={onChange} className="mt-3" />
      <ListContainer datas={countryDatas} loading={loading} noData={noData} />
    </div>
  );
}
