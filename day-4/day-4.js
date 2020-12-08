const fs = require("fs");

const input = fs.readFileSync("./input",{encoding:"utf-8"}).split("\r\n");
input.push("");

const fieldsRequired = ["byr","iyr","eyr","hgt","hcl","ecl","pid","cid"];

function getNoOfValidPassports(){
    const formattedInput = input.map((entry,idx) =>{
        //console.log(entry)
        const finalEntry=[]
        const entryValue = entry.split(" ").map(p =>p.split(":"));
        //finalEntry = entryValue.

        //console.log(entryValue);
        entryValue.forEach(val => {
            if(val[0].length===0)

            else{

            }

        });
    });
}

getNoOfValidPassports();