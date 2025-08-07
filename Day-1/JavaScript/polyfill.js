//polyfill basically means designing a method when it is unavailable

Array.prototype.newReduce = function (fn, initialVal) {
  let acc = this[0];
  let cInd = 1;
  let curr = this[cInd];
  if (initialVal) {
    acc = initialVal;
    cInd = 0;
    curr = this[cInd];
  }

  while (cInd !== arr.length) {
    acc = fn(acc, curr, cInd, this);
    cInd++;
    curr = this[cInd];
  }

  return acc;
};

let arr = [1];

console.log(
  arr.newReduce((acc, curr) => {
    return acc * curr;
  })
);
