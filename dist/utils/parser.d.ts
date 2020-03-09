interface Options {
    amount: number;
    from: string | undefined;
    to: string | undefined;
}
/**
* Expression parser
* @param expression Expression you want to parse, ex. `10 usd to pln` or `€1.23 eur`
* @return Object with parsing results
*/
export default function parse(expression: string): Options;
export {};
