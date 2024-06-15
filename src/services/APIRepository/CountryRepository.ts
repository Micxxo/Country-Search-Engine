import { CallingCodeType, Country, CountryCurrenciesType } from "@/types/types";
import { axiosInstance } from "../API";

export const searchCountry = async (name: string): Promise<Country[]> => {
  try {
    const response = await axiosInstance.get<Country[]>(
      `/${import.meta.env.VITE_API_VERSION_LATEST}/name/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return [];
  }
};

export const getByCallingCode = async (
  code: string
): Promise<CallingCodeType[]> => {
  try {
    const response = await axiosInstance.get<CallingCodeType[]>(
      `/${import.meta.env.VITE_API_VERSION_OLD}/callingcode/${code}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return [];
  }
};

export const getByCurrency = async (
  code: string
): Promise<CountryCurrenciesType[]> => {
  try {
    const response = await axiosInstance.get<CountryCurrenciesType[]>(
      `/${import.meta.env.VITE_API_VERSION_OLD}/currency/${code}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return [];
  }
};
