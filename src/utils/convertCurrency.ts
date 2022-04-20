import { Currency } from "../types";

export const getConvertedCurrencyValue = (
  value: number,
  initialCurrency: Currency,
  currency: Currency
) => {
  if (initialCurrency === currency) {
    return value;
  } else {
    //platinum
    if (initialCurrency === Currency.PLATINUM) {
      switch (currency) {
        case Currency.PLATINUM:
          return value;
        case Currency.GOLD:
          return value * 10;
        case Currency.ELECTRUM:
          return value * 20;
        case Currency.SILVER:
          return value * 100;
        case Currency.COPPER:
          return value * 1000;
        default:
          break;
      }
    }
    //gold
    if (initialCurrency === Currency.GOLD) {
      switch (currency) {
        case Currency.PLATINUM:
          return value / 10;
        case Currency.GOLD:
          return value;
        case Currency.ELECTRUM:
          return value * 2;
        case Currency.SILVER:
          return value * 10;
        case Currency.COPPER:
          return value * 100;
        default:
          break;
      }
    }
    //electrum
    if (initialCurrency === Currency.ELECTRUM) {
      switch (currency) {
        case Currency.PLATINUM:
          return value / 20;
        case Currency.GOLD:
          return value / 2;
        case Currency.ELECTRUM:
          return value;
        case Currency.SILVER:
          return value * 5;
        case Currency.COPPER:
          return value * 50;
        default:
          break;
      }
    }
    //silver
    if (initialCurrency === Currency.SILVER) {
      switch (currency) {
        case Currency.PLATINUM:
          return value / 100;
        case Currency.GOLD:
          return value / 10;
        case Currency.ELECTRUM:
          return value / 5;
        case Currency.SILVER:
          return value;
        case Currency.COPPER:
          return value * 10;
        default:
          break;
      }
    }
    //copper
    if (initialCurrency === Currency.COPPER) {
      switch (currency) {
        case Currency.PLATINUM:
          return value / 1000;
        case Currency.GOLD:
          return value / 100;
        case Currency.ELECTRUM:
          return value / 50;
        case Currency.SILVER:
          return value / 10;
        case Currency.COPPER:
          return value;
        default:
          break;
      }
    }
    return 0;
  }
};
