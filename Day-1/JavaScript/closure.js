function bankAccount() {
  let savings = 0;

  return {
    deposit: (n) => {
      savings = savings + n;
      return savings;
    },
    withdrawal: (n) => {
      if (n > savings) {
        return "Not enough money";
      }
      savings = savings - n;
      return savings;
    },
  };
}

let aryanAcc = bankAccount();
console.log(aryanAcc.deposit(1000));
console.log(aryanAcc.withdrawal(100));
