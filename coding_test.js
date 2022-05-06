const sum = Array
    .from(new Array(5), (_, k) => k +5)
    .reduce((acc, cur) => acc + cur, 0)

console.log(sum)