const fs = require("fs");

const arr = fs
  .readFileSync("input", { encoding: "utf-8" })
  .split("\r\n")
  .map((item) => {
    return {
      policy: {
        min: parseInt(item.split(" ")[0].split("-")[0]),
        max: parseInt(item.split(" ")[0].split("-")[1]),
      },
      character: item.split(" ")[1].split(":")[0],
      password: item.split(" ")[2],
    };
  });

let validCount = 0;

arr.forEach((item) => {
  let frequency = findFrequencyOfChar(item.password, item.character);
  if (item.policy.min <= frequency && frequency <= item.policy.max)
    validCount++;
});

console.log(`Part 1: ${validCount}`);

validCount = 0;

arr.forEach((item) => {
  if (
    (item.password[item.policy.min - 1] === item.character &&
      item.password[item.policy.max - 1] !== item.character) ||
    (item.password[item.policy.max - 1] === item.character &&
      item.password[item.policy.min - 1] !== item.character)
  )
    validCount++;
});

console.log(`Part 2: ${validCount}`);

function findFrequencyOfChar(password, character) {
  let count = 0;
  for (let i = 0; i < password.length; i++)
    if (password[i] === character) count++;
  return count;
}
