export const add = (numbers: string) => {
  if (!numbers) return 0;

  if (numbers === null || numbers === undefined) {
    throw new TypeError("Input must be a non-null string");
  }

  if (typeof numbers !== "string") {
    throw new TypeError("Input must be a string");
  }
  let delimiter = /,|\n/;
  let numString = numbers;

  if (numbers.substring(0, 2) === "//") {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      const customDelimiter = match[1];
      delimiter = new RegExp(
        customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
      numString = numbers.substring(match[0].length);
    }
  }

  const parts = numString
    .split(delimiter)
    .map((s) => s.trim())
    .filter(Boolean);


  const nums = parts.map((num) => parseInt(num, 10));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
};
