

const calculator = (a,b, op ) => {
    if(op =='+'){
        return a + b;
    }
    else if(op == '-'){
        return a - b;
    }
    else if(op == '*'){
        return a * b;
    }
    else if(op == '/'){
        return a / b;
    }
}
console.log(calculator(6,5,'-'));