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
    high = searchSpace.length - 1,
    idx = 0;
  while (low <= high && idx < seatCode.length - 1) {
    let mid = low + (high - low) / 2;
    if (seatCode[idx] === "F" || seatCode[idx] === "L") high = mid - 1;
    else low = mid + 1;
    idx++;
  }
  return Math.round(
    seatCode[idx] === "F" ? Math.min(high, low) : Math.max(high, low)
  );
}

const getRowInSeats = (seat) => {
  const firstSevenCharacters = seat.slice(0, 7);
  return binarySearch(true, firstSevenCharacters);
};

const getColInSeats = (seat) => {
  const lastThreeCharacters = seat.slice(7, seat.length);
  return binarySearch(false, lastThreeCharacters);
};

function calculateSeat() {
  // part-1
  let filledSeats = [];
  let maxSeatID = -1;
    input.forEach((seat) => {
      const row = getRowInSeats(seat);
      const col = getColInSeats(seat);
      const seatID = getSeatID(row, col);
      filledSeats.push(seatID);
      maxSeatID = Math.max(maxSeatID, seatID);
    });
    console.log(maxSeatID);

  // part-2
    console.log(filledSeats.sort());
    const actualSeats = [];
    const set = new Set();
    filledSeats.forEach(seat => set.add(seat));
    set.forEach(seat => actualSeats.push(seat));
    console.log(actualSeats);
}


calculateSeat();