import { IconButton } from "@mui/material";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import {
  convertDistanceUnits,
  getDistanceAdornment,
  stringToNbr,
  truncateDecimals,
} from "../../utils";
import { DistanceUnit } from "../../types";
type DistanceUnitDisplayProps = {
  initialValue: string;
};
const DistanceUnitDisplay = ({ initialValue }: DistanceUnitDisplayProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {isShown ? (
        Object.keys(DistanceUnit).map((key) => (
          <span style={{ marginRight: "1rem" }}>
            {truncateDecimals(
              convertDistanceUnits(
                stringToNbr(initialValue),
                DistanceUnit.FEET,
                key as DistanceUnit
              ) ?? 0
            )}{" "}
            {getDistanceAdornment(key as DistanceUnit)}
          </span>
        ))
      ) : (
        <>{initialValue} </>
      )}
      <IconButton
        size="small"
        aria-label="Convert"
        color="secondary"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? <CloseIcon /> : <SquareFootIcon />}
      </IconButton>
    </>
  );
};

export default DistanceUnitDisplay;
