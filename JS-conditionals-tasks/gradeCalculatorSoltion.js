let score = 33;

if (score >= 90 && score <= 100) {
  console.log("you've got grade A");
} else if (score >= 80 && score <= 89) {
  console.log("you've got grade B");
} else if (score >= 70 && score <= 79) {
  console.log("you've got grade C");
} else if (score >= 60 && score <= 69) {
  console.log("you've got grade D");
} else if (score >= 0 && score <= 59) {
  console.log("you've got grade F");
}
else{
    console.log("invalid input");
}