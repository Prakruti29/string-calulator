"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var stringCalculator_1 = require("./stringCalculator");
var test = function (description, fn) {
    try {
        fn();
        console.log("".concat(description));
    }
    catch (error) {
        console.error("".concat(description));
        console.error(error);
    }
};
exports.test = test;
(0, exports.test)("Empty string should return 0", function () {
    if ((0, stringCalculator_1.add)("") !== 0)
        throw new Error("Expected 0");
});
(0, exports.test)("Null input should throw TypeError", function () {
    try {
        // @ts-ignore: intentionally passing null to test runtime error
        (0, stringCalculator_1.add)(null);
        throw new Error("Expected a TypeError for null input");
    }
    catch (e) {
        if (!(e instanceof TypeError)) {
            throw new Error("Expected a TypeError, got " + e.constructor.name);
        }
    }
});
(0, exports.test)("Undefined input should throw TypeError", function () {
    try {
        // @ts-ignore: intentionally passing undefined to test runtime error
        (0, stringCalculator_1.add)(undefined);
        throw new Error("Expected a TypeError for undefined input");
    }
    catch (e) {
        if (!(e instanceof TypeError)) {
            throw new Error("Expected a TypeError, got " + e.constructor.name);
        }
    }
});
(0, exports.test)("Single number should return itself", function () {
    if ((0, stringCalculator_1.add)("1") !== 1)
        throw new Error("Expected 1");
});
(0, exports.test)("Two numbers should return their sum", function () {
    if ((0, stringCalculator_1.add)("1,5") !== 6)
        throw new Error("Expected 6");
});
(0, exports.test)("Multiple numbers with commas", function () {
    if ((0, stringCalculator_1.add)("1,2,3,4") !== 10)
        throw new Error("Expected 10");
});
(0, exports.test)("New lines between numbers", function () {
    if ((0, stringCalculator_1.add)("1\n2,3") !== 6)
        throw new Error("Expected 6");
});
(0, exports.test)("Custom delimiter ;", function () {
    if ((0, stringCalculator_1.add)("//;\n1;2") !== 3)
        throw new Error("Expected 3");
});
(0, exports.test)("Custom delimiter #", function () {
    if ((0, stringCalculator_1.add)("//#\n2#3#4") !== 9)
        throw new Error("Expected 9");
});
(0, exports.test)("Negative numbers throw error with message", function () {
    try {
        (0, stringCalculator_1.add)("1,-2,3,-4");
        throw new Error("Expected an exception");
    }
    catch (e) {
        if (e.message !== "negative numbers not allowed -2,-4") {
            throw new Error("Incorrect error message: " + e.message);
        }
    }
});
