import React from "react";
import { CallingCodeType, Country, CountryCurrenciesType } from "./types";

export interface InputFormProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ListContainerProps {
  className?: string;
  datas: Array<Country>;
  loading: boolean;
  noData: boolean;
}

export interface SearchCountryProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryDatas: Array<Country>;
  loading: boolean;
  noData: boolean;
}

export interface CountryBadgeProps {
  className?: string;
  datas: Array<string>;
}

export interface CountryLatitudeProps {
  className?: string;
  latlng: Array<number>;
}

export interface CountryGeographyProps {
  className?: string;
  capital: Array<string>;
  region: string;
  subregion: string;
}

export interface CountryInfoInterface {
  triggerTitle: string;
  className?: string;
  callingCodeDatas?: Array<CallingCodeType>;
  currencyDatas?: Array<CountryCurrenciesType>;
  type: string;
}
