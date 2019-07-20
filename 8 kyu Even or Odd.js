//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Solution-Using ternary operator
const even_or_odd = n => (n & 1 ? "Odd" : "Even");
console.log(even_or_odd());
