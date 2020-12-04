const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/);

let count = input.filter(line => {
    let [min, max, c, pwd] = line.split(/:?\s|-/);

    let l = (pwd.match(new RegExp(c, "g")) || []).length;
    return min <= l && l <= max;
}).length;
console.log(count);