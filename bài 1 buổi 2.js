const weight = Number(prompt(" Input your weight(kg): "));
const height = Number(prompt(" Input your height(cm): "));
const h = height * 0.01
const BMI = weight / (h * h);
if  (BMI < 16){
    console.log("You are severely underweight");
} else if (BMI >= 16 && BMI < 18.5){
    console.log("You are underweight");
} else if (BMI >= 18.5 && BMI < 25){
    console.log("You are normal");
} else if (BMI >= 25 && BMI < 30){
    console.log("You are overweight");
} else { 
    console.log("You are obese");
}