const a = () => {
  let n = 5;
  return function () {
    console.log(n);
  };
};

a()();
