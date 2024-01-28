let passengerAge = 14;
let isStudent = false;
let ticketPrice = 800;

if (passengerAge <= 10) {
  ticketPrice = 0;
  console.log("you've got 100% discount, your ticket price is " + ticketPrice);
} else if (isStudent && passengerAge <= 25 && passengerAge >= 11) {
  ticketPrice = ticketPrice / 2;
  console.log("you've got 50% discount, your ticket price is " + ticketPrice);
} else if (passengerAge >= 60) {
  discount = (ticketPrice * 15) / 100;
  ticketPrice = ticketPrice - discount;
  console.log("you've got 15% discount, your ticket price is " + ticketPrice);
} else {
  console.log("you've got 0% discount, your ticket price is " + ticketPrice);
}
