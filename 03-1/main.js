const fs = require('fs');

let grid = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/)
    .map(l => l.split(''));

let trees = 0, x = 3; y = 1;
do {
    trees += grid[y][x] === "#";
    x = (x + 3) % grid[0].length;
    y += 1;
} while (y < grid.length);

console.log(trees);