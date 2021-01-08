const solution = (number) => {
  let count = 0;
  let arr = [];
  while (number > count) {
    arr.push(count++);
  }

  const content = [0];
  const reducer = (acc, cv) => acc + cv;

  arr.map((number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      content.push(number);
    } else {
      ('not a multiple');
    }
  });
  return content.reduce(reducer);
};
