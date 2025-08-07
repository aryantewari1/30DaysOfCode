function multiply(a, b) {
  return a * b;
} // this is a normal function.

function curriedMultiplyByA(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy5 = curriedMultiplyByA(5);
const mulBy10 = curriedMultiplyByA(10);

console.log(multiplyBy5(6));
console.log(mulBy10(10));
