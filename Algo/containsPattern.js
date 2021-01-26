function containsPattern(arr, m, k) {
  let patterns = [];
  let cloneArr = arr;
  let str = arr.join('');

  while (cloneArr.length) {
    if (cloneArr.slice(0, m).length === m) {
      patterns.push(cloneArr.slice(0, m));
    }
    cloneArr = cloneArr.slice(m);
  }

  for (let pattern of patterns) {
    let maxSoFar = 0;
    let num = pattern.join('');
    while (str.includes(num)) {
      num += pattern.join('');
      maxSoFar++;
    }
    if (maxSoFar >= k) {
      return true;
    }
  }

  return false;
}

console.log(
  containsPattern([3, 1, 2, 3, 4, 2, 1, 2, 2, 1, 2, 2, 4, 3, 4, 1, 1], 2, 2),
);
