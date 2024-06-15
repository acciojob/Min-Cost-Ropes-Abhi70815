function mincost(arr) {
    let cost = 0;
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        const newRope = arr.shift() + arr.shift();
        cost += newRope;
        arr.push(newRope);
        arr.sort((a, b) => a - b); // This sort can be inefficient for large arrays
    }
    return cost;
}

console.log(mincost([4, 3, 2, 6])); // Output should be 29
console.log(mincost([1, 2, 3, 4, 5])); // Output should be 33

module.exports = mincost;
