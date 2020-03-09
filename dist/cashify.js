"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const parser_1 = __importDefault(require("./utils/parser"));
class Cashify {
    constructor(options) {
        this.options = options;
    }
    /**
    * @param amount Amount of money you want to convert.
    * @param options Conversion options.
    * @return Conversion result.
    */
    convert(amount, options) {
        // If provided `amount` is a string, use parsing
        if (typeof amount === 'string') {
            const data = parser_1.default(amount);
            return convert_1.default(data.amount, { ...this.options, from: data.from, to: data.to, ...options });
        }
        return convert_1.default(amount, { ...this.options, ...options });
    }
}
exports.default = Cashify;
