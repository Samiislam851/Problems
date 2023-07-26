
const a = [1, 2, -3, -5, -5, -4, 5]
const positiveSum = (arr) => {
    let sum = 0;
    for (i of arr) {
        if (i > 0) {
            sum += i
        }
    }
    return sum;
}
console.log(positiveSum(a));
