// This program makes sure that the divisor is not
// equal to 0 before it performs a divide operation.
var num1, num2, quotient;

// Get the two numbers
num1 = prompt("Enter the numerator ", "");
num2 = parseInt(prompt("Enter the denominator ", ""));

// If num2 is not zero, perform the division.
if (num2 !== 0) {
  quotient = num1 / num2;
  console.log("The quotient of " + num1 + " divided by " +
              num2 + " is " + quotient.toFixed(2));

} else {
  console.log("Division by zero is not possible.");
  console.log("Please run the program again and enter");
  console.log("a number other than zero");

}

// Without parseInt around the denominator input the line below appears:
// The quotient of 555 divided by 0 is Infinity
