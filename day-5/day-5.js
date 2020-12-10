const fs = require("fs");

const input = fs.readFileSync("./input", { encoding: "utf-8" }).split("\r\n");

const getSeatID = (row, col) => row * 8 + col;

const generateRowSearchSpace = (searchSpace) => {
  for (let i = 0; i < 128; i++) searchSpace.push(i);
};

const generateColSearchSpace = (searchSpace) => {
  for (let i = 0; i < 8; i++) searchSpace.push(i);
};

function binarySearch(isRow, seatCode) {
  // Remember, we're not searching for a key here, just iterating in binary search fashion.
  const searchSpace = [];
  isRow
    ? generateRowSearchSpace(searchSpace)
    : generateColSearchSpace(searchSpace);
  let low = 0,
    high = searchSpace.length - 1,idx=0;
  console.log(`searchSpace:${searchSpace} --- low:${low} --- high:${high} --- seatCode:${seatCode}`);
  while(low<=high && idx<seatCode.length){
      let mid = low+(high-low)/2;
      if(seatCode[idx]==='F')
        high=mid-1;
      else
       low=mid+1;
      idx++;
  }
}

const getRowInSeats = seat => {
    const firstSevenCharacters = seat.slice(0,7);
    binarySearch(true,firstSevenCharacters);
}

const getColInSeats = seat => {
    const lastThreeCharacters = seat.slice(7,seat.length);
    binarySearch(false,lastThreeCharacters);
}


function calculateSeat() {
  let maxSeatID = -1;
  getRowInSeats("BBFFFFFRRL");
  getColInSeats("BBFFFFFRRL");
//   input.forEach((seat) => {
//     const row = getRowInSeats(seat);
//     const col = getColInSeats(seat);
//     const seatID = getSeatID(row, col);
//     maxSeatID = Math.max(maxSeatID, seatID);
//   });
//   console.log(maxSeatID);
}

calculateSeat();
