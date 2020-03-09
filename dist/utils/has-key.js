"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if an object contains a key.
 * @param obj The object to check.
 * @param key The key to check for.
*/
function hasKey(obj, key) {
    return key in obj;
}
exports.default = hasKey;
