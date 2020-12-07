const fs = require("fs");

const input = fs.readFileSync("./input",{encoding:"utf-8"}).split("\r\n")

const fieldsRequired = ["byr","iyr","eyr","hgt","hcl","ecl","pid","cid"];

console.log(input);