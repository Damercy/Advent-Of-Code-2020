const fs = require("fs");

const input = fs.readFileSync("./input", { encoding: "utf-8" }).split("\r\n");


const noOfCols = input[0].length;
const noOfRows = input.length;
let trees = 0, slopeLevel=0, colLevel=0;


if(input[slopeLevel][colLevel]==="#")
    trees++;

while(slopeLevel<noOfRows-1){
    slopeLevel+=1;
    colLevel=(colLevel+3)%noOfCols;
    console.log(`slopeLevel:${slopeLevel} ::: colLevel:${colLevel}`);
    if(input[slopeLevel][colLevel]==="#")
        trees++;
}

console.log(`No. of trees:${trees}`);