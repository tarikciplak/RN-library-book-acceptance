import { CountryType } from "../models/model";
import { calculateWorkingDays } from "./calculateWorkingDays";
import holidaysJson from "./holidays.json"

export interface PenaltyCalculatorProps {
  country: CountryType;
  deliveryDate: Date;
  receivingDate: Date;
}

interface CountryConfig {
  currency: string;
  penaltyPerDay: number,
  weekendDays: number[],
  locale:string
}

const countryConfigurations: Record<CountryType, CountryConfig> = {
  Turkey: {
    currency: "TRY",
    penaltyPerDay: 5.00,
    weekendDays: [0, 1],
    locale:"tr-TR"
  },
  Germany: {
    currency: "EUR",
    penaltyPerDay: 3.50,
    weekendDays: [0, 1],
    locale:"de-DE"
  },
};

export function calculatePenalty(country: CountryType, deliveryDate: string, receivingDate: string): string {
  const countryConfig = countryConfigurations[country];

  const daysLate = calculateWorkingDays(new Date(deliveryDate), new Date(receivingDate), countryConfig.weekendDays, holidaysJson[country].holidays.map(i => { return new Date(i) }));

  if (daysLate <= 10) {
    return `0 ${countryConfig.currency}`;
  }

  const penalty = daysLate * countryConfig.penaltyPerDay;
  
  const formattedAmount = penalty.toLocaleString(countryConfig.locale, { style: 'currency', currency: countryConfig.currency });

  return `${formattedAmount}`;
}