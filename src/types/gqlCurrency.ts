
export enum Currency {
    PLATINUM = "PLATINUM",
    GOLD = "GOLD",
    ELECTRUM = "ELECTRUM",
    SILVER = "SILVER",
    COPPER = "COPPER",
}


export enum GqlCurrencies {
    pp = "pp",
    gp = "gp",
    ep = "ep",
    sp = "sp",
    cp = "cp",
}


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
}