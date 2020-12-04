const fs = require('fs');

let grid = fs.readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split(/\n/)
    .map(l => l.split(''));

const trees = (fx, fy) => {
    let trees = 0, x = fx, y = fy;
    do {
        trees += grid[y][x] === "#";
        x = (x + fx) % grid[0].length;
        y += fy;
    } while (y < grid.length);
    return trees;
}
let total = trees(1, 1)
    * trees(3, 1)
    * trees(5, 1)
    * trees(7, 1)
    * trees(1, 2);

console.log(total);