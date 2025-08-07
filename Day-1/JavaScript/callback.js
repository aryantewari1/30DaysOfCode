Array.prototype.NewMap = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i]));
  }

  return newArr;
};

const arr = [1, 2, 3];

console.log(
  arr.NewMap((x) => {
    return x * x;
  })
);
