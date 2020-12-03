const fs = require("fs");
const arr = fs
  .readFileSync("input", { encoding: "utf-8" })
  .split("\r\n")
  .map((number) => parseInt(number));
for (let i = 0; i < arr.length - 2; i++)
  for (let j = i + 1; j < arr.length - 1; j++)
    for (let k = j + 1; k < arr.length; k++)
      if (arr[i] + arr[j] + arr[k] === 2020) {
        console.log(`Product: ${arr[i] * arr[j] * arr[k]}`);
        break;
      }
