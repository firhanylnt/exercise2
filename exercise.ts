// Problem: 
//  1. Write a code to check whether the number is odd or even
// Hint:
//  1. Find out how to define a number is even or odd
//  2. The formula is number % 2 === 0 
// Solution:
//  1. Define variable and assign value to variable
        let num: number = 25;
        // num = 2
        let result: string;
//  2. Implement the formula
        result = num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
        console.log(result);

// Problem: 
//  2. Write a code to check whether the number is prime number or not
// Hint:
//  1. Find out how to define a number is prime
//  2. The formula is create looping to execute the prime number because a prime number has 2 factor = can only be devided by its own number and can be devided by 1
// Solution:
//  1. Define variable and assign value to variable
        let num2: number = 7;
        // num2 = 6;
        let factor: number = 0;
        let result2: string;
//  2. Implement the formula
        for (let i = 1; i <= num2; i++) {
                if(num2 % i == 0){
                        factor++;
                }
        }
        result2 = factor == 2 ? `${num2} is prime number` : `${num2} is not prime number`;
        console.log(result2);

// Problem: 
//  3. Write a code to find the sum of the numbers 1 to N
// Hint:
//  1. Find out how to sum the number 1 to N
//  2. The formula is create looping to sum the number
// Solution:
//  1. Define variable and assign value to variable
        let num3: number = 5;
        num3 = 3;
        let total3: number = 0;
//  2. Implement the formula
        for (let i = 1; i <= num3; i++) {
                total3 += i;
        }
        console.log(total3);

// Problem: 
//  4. Write a code to find factorial of a number
/// Hint:
//  1. Find out how to sum the number 1 to N
//  2. The formula is create looping to sum the number
// Solution:
//  1. Define variable and assign value to variable
        let num4: number = 4;
        // num4 = 6;
        let total4: number = 1;
//  2. Implement the formula
        for (let i = num4; i > 0; i--) {
                total4 *= i;
        }
        console.log(total4);

// Problem: 
//  5. Write a code to print the first N fibonacci numbers
// Hint:
//  1. Find out how to get fibbonaci number
//  2. The formula is count 2 previous number, start from 0
// Solution:
//  1. Define variable and assign value to variable
        let a: number = 0;
        let b: number = 1;
        let n: number = 15;
        let result5: number = 0;
//  2. Implement the formula
        for (let i = 2; i <= n; i++) {
                result5 = a + b;
                a = b;
                b = result5;
                console.log(result5);
        }
        console.log(result5);
        