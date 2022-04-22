import { DistanceUnit } from '../types';

export const getDistanceAdornment = (initialUnit: DistanceUnit) => {
  switch (initialUnit) {
    case DistanceUnit.METER:
      return "M.";
    case DistanceUnit.FEET:
      return "Ft.";
    default:
      return "Sqr";
  }
};
