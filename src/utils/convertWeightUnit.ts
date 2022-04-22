import { truncateDecimals } from './numbers';
import { WeightUnit } from './../types/weightUnit';

const convertWeightUnit = (value: number, initialUnit: WeightUnit, unit: WeightUnit) => {
    if (initialUnit === unit) {
        return value
    }
    else if (initialUnit === WeightUnit.KG && unit === WeightUnit.LBS) {
        return truncateDecimals(value * 2.2046);

    } else if (initialUnit === WeightUnit.LBS && unit === WeightUnit.KG) {
        return truncateDecimals(value / 2.2046);

    }
}

export default convertWeightUnit;