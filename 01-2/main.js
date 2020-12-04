const fs = require('fs');
const { exit } = require('process');

let input = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/)
    .map(Number);

for (let i = 0; i < input.length; i++) {
    const a = input[i];

    for (let j = i + 1; j < input.length; j++) {
        const b = input[j];

        for (let k = j + 1; k < input.length; k++) {
            const c = input[k];

            if (a + b + c === 2020) {
                console.log(a * b * c);
                exit();
            }
        }
    }
}