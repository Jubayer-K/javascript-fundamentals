const numbers = [12, 98, 5, 41, 23, 78, 46];

const numArray = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    numArray.push(num);
  }
}
console.log(numArray);
