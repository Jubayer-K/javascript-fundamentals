// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(num){
    if(num % 2 === 0){
        result = "Even";
    }
    else if (num % 2 === 1){
        result = "Odd"
    }
    else{
        result = "Enter an integer"
    }
    return result;
}

console.log(odd_even(5));