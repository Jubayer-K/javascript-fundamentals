let weight = 90; // enter weight in kg
let height = 6.3; // enter height in feet




height = height / 3.281; 
let bmi = weight / height ** 2;
console.log("Your Body mass index is :" + bmi);
if (bmi <= 18.4) {
  console.log("You are underweight");
}
else if(bmi >= 18.5 && bmi <= 24.99){
    console.log("You are normal");
}else if (bmi >= 25 && bmi <= 29.99){
    console.log("You are overweight");
}
else {
  console.log("You are obese");
}
