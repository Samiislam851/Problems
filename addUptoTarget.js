//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
let arr = [1,2,3,4,5,6,7,8,9]
const targetVal = 18;
const myFunc = (arr, val) => {
    for (let i = 0; i < arr.length-1; i++) {
             for(j=i+1;j<arr.length; j++){
                if(arr[i]+arr[j]==val){
                  return [i,j]
                }
             }

    }
    return 'The value is not possible with this array';
}
console.log(myFunc(arr,targetVal));
