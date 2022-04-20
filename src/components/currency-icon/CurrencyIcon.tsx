import CircleIcon from "@mui/icons-material/Circle";
import DiamondIcon from "@mui/icons-material/Diamond";
import React, { FunctionComponent } from "react";
import { Currency } from "../../types";

type CurrencyIconProps = { currency: Currency };

const CurrencyIcon: FunctionComponent<CurrencyIconProps> = ({ currency }) => {
  switch (currency) {
    case Currency.PLATINUM:
      return <DiamondIcon sx={{ color: "#C0C0C0" }} />;
    case Currency.GOLD:
      return <CircleIcon sx={{ color: "#FFD700" }} />;
    case Currency.ELECTRUM:
      return <CircleIcon sx={{ color: "#4682B4" }} />;
    case Currency.SILVER:
      return <CircleIcon sx={{ color: "#C0C0C0" }} />;
    case Currency.COPPER:
    default:
      return <CircleIcon sx={{ color: "#b87333" }} />;
  }
};

export default CurrencyIcon;
