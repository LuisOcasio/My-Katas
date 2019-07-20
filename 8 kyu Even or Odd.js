//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Solution-Using ternary operator
even_or_odd = number => {
    return number % 2 === 0 ? "Even" : number % 2 === 1 ? "Odd" : "Odd";
};

console.log(even_or_odd());