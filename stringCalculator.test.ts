import { add } from './stringCalculator';

export const test=(description: string, fn: () => void)=>{
  try {
    fn();
    console.log(`${description}`);
  } catch (error) {
    console.error(`${description}`);
    console.error(error);
  }
}

test("Empty string should return 0", () => {
  if (add("") !== 0) throw new Error("Expected 0");
});
test("Null input should throw TypeError", () => {
    try {
      // @ts-ignore: intentionally passing null to test runtime error
      add(null);
      throw new Error("Expected a TypeError for null input");
    } catch (e: any) {
      if (!(e instanceof TypeError)) {
        throw new Error("Expected a TypeError, got " + e.constructor.name);
      }
    }
  });
  
  test("Undefined input should throw TypeError", () => {
    try {
      // @ts-ignore: intentionally passing undefined to test runtime error
      add(undefined);
      throw new Error("Expected a TypeError for undefined input");
    } catch (e: any) {
      if (!(e instanceof TypeError)) {
        throw new Error("Expected a TypeError, got " + e.constructor.name);
      }
    }
  });
  

test("Single number should return itself", () => {
  if (add("1") !== 1) throw new Error("Expected 1");
});

test("Two numbers should return their sum", () => {
  if (add("1,5") !== 6) throw new Error("Expected 6");
});

test("Multiple numbers with commas", () => {
  if (add("1,2,3,4") !== 10) throw new Error("Expected 10");
});

test("New lines between numbers", () => {
  if (add("1\n2,3") !== 6) throw new Error("Expected 6");
});

test("Custom delimiter ;", () => {
  if (add("//;\n1;2") !== 3) throw new Error("Expected 3");
});

test("Custom delimiter #", () => {
  if (add("//#\n2#3#4") !== 9) throw new Error("Expected 9");
});

test("Negative numbers throw error with message", () => {
  try {
    add("1,-2,3,-4");
    throw new Error("Expected an exception");
  } catch (e: any) {
    if (e.message !== "negative numbers not allowed -2,-4") {
      throw new Error("Incorrect error message: " + e.message);
    }
  }
});
