function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    }
    if (sum > 0) {
      --end;
    } else {
      ++start;
    }
  }

  return null;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5, 10]));
