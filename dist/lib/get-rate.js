"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const has_key_1 = __importDefault(require("../utils/has-key"));
/**
 * Get the conversion rate.
 * @param base Base currency.
 * @param rates Object containing currency rates (for example from an API, such as Open Exchange Rates).
 * @param from Currency from which you want to convert.
 * @param to Currency to which you want to convert.
 * @return Conversion result.
*/
function getRate(base, rates, from, to) {
    if (from && to) {
        // If `from` equals `base`, return the basic exchange rate for the `to` currency
        if (from === base && has_key_1.default(rates, to)) {
            return rates[to];
        }
        // If `to` equals `base`, return the basic inverse rate of the `from` currency
        if (to === base && has_key_1.default(rates, from)) {
            return 1 / rates[from];
        }
        // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the relative exchange rate between the two currencies.
        if (has_key_1.default(rates, from) && has_key_1.default(rates, to)) {
            return rates[to] * (1 / rates[from]);
        }
        throw new Error('`rates` object does not contain either `from` or `to` currency!');
    }
    else {
        throw new Error('Please specify the `from` and/or `to` currency or use parsing!');
    }
}
exports.default = getRate;
