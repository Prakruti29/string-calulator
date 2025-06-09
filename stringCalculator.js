"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (numbers) {
    if (!numbers)
        return 0;
    if (numbers === null || numbers === undefined) {
        throw new TypeError("Input must be a non-null string");
    }
    if (typeof numbers !== "string") {
        throw new TypeError("Input must be a string");
    }
    var delimiter = /,|\n/;
    var numString = numbers;
    if (numbers.substring(0, 2) === "//") {
        var match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            var customDelimiter = match[1];
            delimiter = new RegExp(customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
            numString = numbers.substring(match[0].length);
        }
    }
    var parts = numString
        .split(delimiter)
        .map(function (s) { return s.trim(); })
        .filter(Boolean);
    var nums = parts.map(function (num) { return parseInt(num, 10); });
    var negatives = nums.filter(function (n) { return n < 0; });
    if (negatives.length > 0) {
        throw new Error("Negative numbers not allowed ".concat(negatives.join(",")));
    }
    return nums.reduce(function (sum, n) { return sum + n; }, 0);
};
exports.add = add;
