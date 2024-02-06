// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers , size){
        let sum = 0 ;
        for(let number of numbers){
            sum = sum + number;
        }

        let average = sum / size;

        return average;
}

console.log(make_avg([1, 2, 3, 4, 5], 5));