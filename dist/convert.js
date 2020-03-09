"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_rate_1 = __importDefault(require("./lib/get-rate"));
const parser_1 = __importDefault(require("./utils/parser"));
/**
* @param amount Amount of money you want to convert.
* @param options Conversion options.
* @return Conversion result.
*/
function convert(amount, { from, to, base, rates }) {
    var _a, _b;
    // If provided `amount` is a string, use parsing
    if (typeof amount === 'string') {
        const data = parser_1.default(amount);
        return (data.amount * 100) * get_rate_1.default(base, rates, (_a = data.from) !== null && _a !== void 0 ? _a : from, (_b = data.to) !== null && _b !== void 0 ? _b : to) / 100;
    }
    return (amount * 100) * get_rate_1.default(base, rates, from, to) / 100;
}
exports.default = convert;
