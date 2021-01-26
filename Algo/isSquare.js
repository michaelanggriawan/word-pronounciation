function isSquare(A, B) {
  if (A.length !== B.length) return false;

  let frequencyOne = {}, frequencyTwo = {};

  for (let fOne of A) frequencyOne[fOne] = ++frequencyOne[fOne] || 1;
  for (let fTwo of B) frequencyTwo[fTwo] = ++frequencyTwo[fTwo] || 1;

  for (let key in frequencyOne) {
    let isExist = !(key ** 2 in frequencyTwo) || frequencyOne[key] !== frequencyTwo[key ** 2];
    if (isExist) return false;
  }

  return true;
}
 
console.log(isSquare([1, 2, 3, 2,4], [9, 1, 4, 4,16]));
