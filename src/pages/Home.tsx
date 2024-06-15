import { FadeUp } from "@/lib/animation";
import { getAll } from "@/services/APIRepository/CountryRepository";
import { Country } from "@/types/types";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import SearchCountry from "@/components/organism/SearchCountry";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [allCountry, setAllCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const getAllCountry = async () => {
    try {
      setLoading(true);
      const response: Country[] = await getAll();
      if (response.length === 0) {
        setNoData(true);
      } else {
        setNoData(false);
        setAllCountry(response);
      }
    } catch (error) {
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  const searchCountryData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearched(true);
    if (query === "") {
      setCountries([]);
      setSearched(false);
      setNoData(false);
    } else {
      const filteredCountries = allCountry.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      );
      setCountries(filteredCountries);
      setNoData(filteredCountries.length === 0);
    }
  };

  useEffect(() => {
    getAllCountry();
  }, []);

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
          onChange={searchCountryData}
          countryDatas={countries}
          loading={loading}
          noData={searched && noData}
        />
      </div>
    </section>
  );
}
