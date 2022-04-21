import { DistanceUnit } from "../types";

export const convertDistanceUnits = (
  value: number,
  initialUnit: DistanceUnit,
  unit: DistanceUnit
) => {
  if (unit === initialUnit) {
    return value;
  } else if (initialUnit === DistanceUnit.METER) {
    if (unit === DistanceUnit.FEET) {
      return value * 3.2808;
    } else if (unit === DistanceUnit.SQUARES) {
      return value / 1.5;
    }
  } else if (initialUnit === DistanceUnit.FEET) {
    if (unit === DistanceUnit.METER) {
      return value / 3.2808;
    } else if (unit === DistanceUnit.SQUARES) {
      return value / 5;
    }
  } else {
    if (unit === DistanceUnit.METER) {
      return value * 1.5;
    } else if (unit === DistanceUnit.FEET) {
      return value * 5;
    }
  }
};
