// Part 1: Variables and Data Types

// Question 1: Student Information
let studentName = "Rahim";
let age = 20;
let grade = "A";

console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Grade: " + grade);

// Question 2: Basic Calculator
let num1 = 20;
let num2 = 5;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));


// Part 2: Conditions

// Question 3: Even or Odd
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Question 4: Find the Largest Number
let a = 15;
let b = 28;
let c = 10;

if (a >= b && a >= c) {
    console.log("The largest number is: " + a);
} else if (b >= a && b >= c) {
    console.log("The largest number is: " + b);
} else {
    console.log("The largest number is: " + c);
}


// Part 3: Loops

// Question 5: Print Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Question 6: Sum of Numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100: " + sum);


//Part 4: Arrays

// Question 7: Find the Largest Array Element
let numbers = [12, 45, 7, 89, 23, 56];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest array element is: " + largest);


//Part 5: Functions

// Question 8: Add Two Numbers
function add(num1, num2){
    return num1 + num2; 
}
console.log(add(10, 20));
console.log(add(5, 7));

// Question 9: Factorial Function
function factorial(n) {
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result; 
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));

// Question 10: Check for a Prime Number
function isPrime(num) {
    if(num <= 1) {
        return false;
    }

    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        } 
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));
