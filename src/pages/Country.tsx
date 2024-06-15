import CallingCodeTooltip from "@/components/organism/CallingCodeTooltip";
import CountryBadges from "@/components/organism/CountryBadges";
import CountryGeography from "@/components/organism/CountryGeography";
import CountryLatitude from "@/components/organism/CountryLatitude";
import CountryPageSkeleton from "@/components/organism/CountryPageSkeleton";
import { Button } from "@/components/ui/button";
import {
  getByCallingCode,
  getByCurrency,
  searchCountry,
} from "@/services/APIRepository/CountryRepository";
import {
  CallingCodeType,
  CountryCurrenciesType,
  Country as CountryType,
} from "@/types/types";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { FromLeft } from "@/lib/animation";
import NotFound from "./NotFound";

export default function Country() {
  const { name } = useParams<{ name: string }>();
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [combinedCountryCode, setCombinedCountryCode] = useState<string>("");
  const [sameCallingCode, setSameCallingCode] = useState<CallingCodeType[]>([]);
  const [sameCurrency, setSameCurrency] = useState<CountryCurrenciesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountry = async () => {
    if (name) {
      try {
        setLoading(true);
        const response = await searchCountry(name);
        setCountries(response);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  const combineCountryCode = () => {
    const combinedCodes = countries.map(
      (c) => c.idd.root.slice(1) + c.idd.suffixes[0]
    );
    if (combinedCodes.length > 0) {
      setCombinedCountryCode(combinedCodes[0]);
    }
  };

  const getSameCallingCode = async () => {
    try {
      const response = await getByCallingCode(combinedCountryCode);
      setSameCallingCode(response);
    } catch (error) {
      setLoading(false);
    }
  };

  const getSameCurrency = async () => {
    try {
      for (const c of countries) {
        for (const currencyCode of Object.keys(c.currencies)) {
          const response = await getByCurrency(currencyCode);
          setSameCurrency(response);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    combineCountryCode();
    getSameCurrency();
  }, [countries]);

  useEffect(() => {
    if (combinedCountryCode) {
      getSameCallingCode();
    }
  }, [combinedCountryCode]);

  return (
    <>
      {countries.length === 0 && !loading && <NotFound />}
      {loading && <CountryPageSkeleton />}
      {countries
        .filter((item) => item.name.common === name)
        .map((data, key) => {
          return (
            <section className="p-5 md:p-16" key={key}>
              <m.div
                initial={FromLeft.initial}
                animate={FromLeft.animate}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                <Link to={"/"}>
                  <Button className="gap-2">
                    <MdArrowBack className="text-xl" />
                    Back To Homepage
                  </Button>
                </Link>
              </m.div>
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <m.h1
                    initial={FromLeft.initial}
                    animate={FromLeft.animate}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="text-5xl font-bold"
                  >
                    {data.name.common}
                  </m.h1>
                  <m.img
                    initial={FromLeft.initial}
                    animate={FromLeft.animate}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    src={data.flags.svg}
                    width={46}
                    height={30}
                    className="mt-3"
                  />
                </div>
                <CountryBadges
                  datas={data.altSpellings}
                  className="mt-2 flex"
                />
                <div className="block md:flex items-center gap-5 mt-8">
                  <CountryLatitude latlng={data.latlng} />
                  <CountryGeography
                    capital={data.capital}
                    region={data.region}
                    subregion={data.subregion}
                    className="mt-3 md:mt-0"
                  />
                </div>
                <div className="block md:flex items-center mt-10">
                  <m.div
                    initial={FromLeft.initial}
                    animate={FromLeft.animate}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      duration: 0.5,
                      delay: 0.6,
                    }}
                    className="w-full md:w-[45%]"
                  >
                    <h1 className="text-xl font-medium">Calling Code</h1>
                    <h1 className="text-5xl text-primary font-bold py-2">
                      {combinedCountryCode}
                    </h1>
                    <p className="text-sm font-medium cursor-pointer">
                      <CallingCodeTooltip
                        triggerTitle={`${sameCallingCode.length} country`}
                        callingCodeDatas={sameCallingCode}
                        type="calling-codes"
                      />{" "}
                      with this calling code
                    </p>
                  </m.div>

                  <m.div
                    initial={FromLeft.initial}
                    animate={FromLeft.animate}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      duration: 0.5,
                      delay: 0.7,
                    }}
                    className="my-5 md:mt-0"
                  >
                    <h1 className="text-xl font-medium">Currency</h1>
                    <h1 className="text-5xl text-primary font-bold py-2">
                      {Object.keys(data.currencies)}
                    </h1>
                    <p className="text-sm font-medium cursor-pointer">
                      <CallingCodeTooltip
                        type="currency"
                        currencyDatas={sameCurrency}
                        triggerTitle={`${sameCurrency.length} country`}
                      />{" "}
                      with this currency
                    </p>
                  </m.div>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
}
