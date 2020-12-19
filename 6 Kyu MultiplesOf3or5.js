const solution = (number) => {
  let count = 0;
  let arr = [];
  while (number > count) {
    arr.push(count++);
  }
  let content = [0];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let multiplesOf = arr.map((element, i) => {
    if (element % 3 === 0 || element % 5 === 0) {
      content.push(element);
    } else {
      return 'not a multiple';
    }
  });
  return content.reduce(reducer);
};
