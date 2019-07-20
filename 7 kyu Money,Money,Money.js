// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
// Note that the principal is not taxed but only the year's accrued interest

//Solution
const calculateYears = (p, i, t, d) =>
  p >= d ? 0 : 1 + calculateYears(p + p * i - p * i * t, i, t, d);
// console.log(calculateYears())