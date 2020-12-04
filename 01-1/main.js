const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/)
    .map(Number);

for (const n of input) {
    let l = input.filter(x => x + n == 2020)[0] * n;
    if (isNaN(l)) {
        continue;
    }
    console.log(l);
    break;
}