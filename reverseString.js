
let a = 'this is a '

const reverseString = (str) => {
const a = [...str];
let b = ''
for(let i = a.length-1;i>=0;i--){
b+= a[i]

}
return b;
}


console.log(reverseString(a));