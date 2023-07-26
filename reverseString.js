
//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


let a = 'this is a string'

const reverseString = (str) => {
const a = [...str];
let b = ''
for(let i = a.length-1;i>=0;i--){
b+= a[i]

}
return b;
}


console.log(reverseString(a));