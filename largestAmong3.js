const num1 = parseFloat(prompt("Enter first value: "));
const num2 = parseFloat(prompt("Enter second value: "));
const num3 = parseFloat(prompt("Enter third value: "));
//built-in method
const largest = Math.max(num1, num2, num3);
console.log("The largest number is " + largest);

//can also done with if(num1>=num2 &&num1>=num3 )method