import { Rates } from './options';
/**
 * Get the conversion rate.
 * @param base Base currency.
 * @param rates Object containing currency rates (for example from an API, such as Open Exchange Rates).
 * @param from Currency from which you want to convert.
 * @param to Currency to which you want to convert.
 * @return Conversion result.
*/
export default function getRate(base: string, rates: Rates, from: string | undefined, to: string | undefined): number;
