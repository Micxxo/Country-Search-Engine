import SearchCountry from "@/components/organism/SearchCountry";
import { searchCountry } from "@/services/APIRepository/CountryRepository";
import { Country } from "@/types/types";
import { useState } from "react";
import { debounce } from "lodash";
import { motion as m } from "framer-motion";
import { FadeUp } from "@/lib/animation";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);

  const getCountry = async (searchTerm: string) => {
    try {
      setLoading(true);
      const response: Country[] = await searchCountry(searchTerm);
      if (response.length === 0) setNoData(true);
      else setNoData(false);
      setCountries(response);
    } catch (error) {
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  const debounceGetCountry = debounce(getCountry, 300);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    debounceGetCountry(searchTerm);
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="w-full">
        <m.h1
          initial={FadeUp.initial}
          animate={FadeUp.animate}
          transition={{
            type: "spring",
            duration: 1.5,
            delay: 0.2,
          }}
          className="text-7xl text-center font-bold"
        >
          Country
        </m.h1>
        <SearchCountry
          onChange={handleSearchChange}
          countryDatas={countries}
          loading={loading}
          noData={noData}
        />
      </div>
    </section>
  );
}
