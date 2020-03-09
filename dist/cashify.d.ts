import { Options } from './lib/options';
export default class Cashify {
    readonly options: Partial<Options>;
    constructor(options: Partial<Options>);
    /**
    * @param amount Amount of money you want to convert.
    * @param options Conversion options.
    * @return Conversion result.
    */
    convert(amount: number | string, options?: Partial<Options>): number;
}
