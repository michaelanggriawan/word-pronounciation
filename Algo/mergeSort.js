function merge(arrOne, arrTwo) {
  let res = [];
  while (arrOne.length && arrTwo.length) {
    if (arrOne[0] < arrTwo[0]) {
      res.push(arrOne.shift());
    } else {
      res.push(arrTwo.shift());
    }
  }

  res = [...res, ...arrOne, ...arrTwo];

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10,24,76,73,72,1,9]));
