const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n{2,}/);

let valid = 0;
for (const passport of input) {
    valid += (passport.match(/byr:/)
        && passport.match(/iyr:/)
        && passport.match(/eyr:/)
        && passport.match(/hgt:/)
        && passport.match(/hcl:/)
        && passport.match(/ecl:/)
        && passport.match(/pid:/)) ? 1 : 0;
}
console.log(valid);