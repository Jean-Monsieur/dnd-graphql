import { GqlCurrencies, Currency } from "../types";

export const convertgQLCurrency = (currency: GqlCurrencies) => {
  switch (currency) {
    case GqlCurrencies.pp:
      return Currency.PLATINUM;
    case GqlCurrencies.gp:
      return Currency.GOLD;
    case GqlCurrencies.ep:
      return Currency.ELECTRUM;
    case GqlCurrencies.sp:
      return Currency.SILVER;
    case GqlCurrencies.cp:
    default:
      return Currency.COPPER;
  }
};
