import { ImageSourcePropType } from "react-native";

export type DateType = "deliveryDate" | "receivingDate";
export type PhotoType = "frontImage" | "backImage";
export type CountryType = "Turkey" | "Germany";

export interface FormDataModel {
  deliveryDate: string;
  receivingDate: string;
  selectedCountry: CountryType | null;
  frontImage: ImageSourcePropType | null;
  backImage: ImageSourcePropType | null;
}
