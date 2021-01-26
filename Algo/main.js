function smallestNegativeBalance(debts) {
  // get borrower name
  let result = [];
  let smallest = null;
  let borrower = {};
  let lender = {};

  for (let debt of debts) {
    let list = debt.split(' ');

    if (borrower[list[0]]) {
      borrower[list[0]] += Number(list[2]);
    } else {
      borrower[list[0]] = Number(list[2]);
    }

    if (lender[list[1]]) {
      lender[list[1]] += Number(list[2]);
    } else {
      lender[list[1]] = Number(list[2]);
    }
  }

  // get smallest value
  for (let [key, val] of Object.entries(borrower)) {
    if (smallest === null) {
      smallest = lender[key] - borrower[key];
    }
    smallest = Math.min(lender[key] - borrower[key], smallest);
  }

  for (let [key, val] of Object.entries(borrower)) {
    if (lender[key] - borrower[key] === smallest) {
      result.push(key);
    }
  }

  console.log(smallest);
  if (smallest > 0) {
      return "Nobody has a negative balance";
  }

  return result.sort((a, b) => a - b);
}

console.log(
  smallestNegativeBalance([
    'Alex Blake 2',
    'Blake Alex 2',
    'Casey Alex 5',
    'Blake Casey 7',
    'Alex Blake 4',
    'Alex Casey 4',
  ]),
);
