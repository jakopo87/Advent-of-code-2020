const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/);

let count = input.filter(line => {
    let [a, b, c, pwd] = line.split(/:?\s|-/);
    return (pwd[a - 1] === c) ^ (pwd[b - 1] === c);
}).length;
console.log(count);