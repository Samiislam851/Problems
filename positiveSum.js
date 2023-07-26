//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
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
