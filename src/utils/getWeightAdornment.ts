import { WeightUnit } from './../types/weightUnit';

const getWeightAdornment = (initialUnit: WeightUnit) => {
    switch (initialUnit) {
        case WeightUnit.LBS:
            return "Lbs.";
        case WeightUnit.KG:
        default:
            return "Kg.";
    }
}

export default getWeightAdornment;