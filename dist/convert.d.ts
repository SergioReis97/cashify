import { Options } from './lib/options';
/**
* @param amount Amount of money you want to convert.
* @param options Conversion options.
* @return Conversion result.
*/
export default function convert(amount: number | string, { from, to, base, rates }: Options): number;
