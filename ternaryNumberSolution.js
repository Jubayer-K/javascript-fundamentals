let num1 = 50;
let num2 = 66;

let result;

if(num1>num2){
    result = num1*2;
    console.log(result);
}else{
    result = num1 + num2;
    console.log(result);
}

//using ternary operator

num1>num2 ? result = num1*2 : result = num1 + num2;

console.log(result);