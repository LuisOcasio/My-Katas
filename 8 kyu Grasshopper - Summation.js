// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//solution
const summation = n => (n ? n + summation(n - 1) : 0);
console.log(summation())