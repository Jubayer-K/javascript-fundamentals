/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let num = 0;
let sum = 1;
while (true) {
  sum = sum + num;
  if (sum >= 100) {
    break;
  }
  num++;
}
