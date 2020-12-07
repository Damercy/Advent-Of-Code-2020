const fs = require("fs");

const input = fs.readFileSync("./input", { encoding: "utf-8" }).split("\r\n");
const noOfCols = input[0].length;
const noOfRows = input.length;

function getNoOfTreesEncountered(rightPathCol, downPathRow) {
  let trees = 0,
    slopeLevel = 0,
    colLevel = 0;

  if (input[slopeLevel][colLevel] === "#") trees++;

  while (slopeLevel < noOfRows - 1) {
    slopeLevel += downPathRow;
    colLevel = (colLevel + rightPathCol) % noOfCols;
    if (input[slopeLevel][colLevel] === "#") trees++;
  }
  return trees;
}

function multipliedValue(tree1) {
  return function val2(tree2) {
    return function val3(tree3) {
      return function val4(tree4) {
        return function val5(tree5) {
          return tree1 * tree2 * tree3 * tree4 * tree5;
        };
      };
    };
  };
}

const ans = multipliedValue(getNoOfTreesEncountered(1, 1))(
  getNoOfTreesEncountered(3, 1)
)(getNoOfTreesEncountered(5, 1))(getNoOfTreesEncountered(7, 1))(
  getNoOfTreesEncountered(1, 2)
);
console.log(`No. of trees:${ans}`);
