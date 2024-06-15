import SearchCountry from "@/components/organism/SearchCountry";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="w-full">
        <h1 className="text-7xl text-center font-bold">Country</h1>
        <SearchCountry onChange={handleInputChange} />
      </div>
    </section>
  );
}
