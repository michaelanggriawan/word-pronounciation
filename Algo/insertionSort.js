function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let currVal = arr[i];

    let j = i - 1;
    while (j >= 0 && currVal < arr[j]) {
      arr[j + 1] = arr[j];
      --j;
    }

    arr[j + 1] = currVal;
  }

  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
// [12, 11, 13, 5, 6]
// [11, 12, 13, 5, 6]
// [5, 11, 12, 13, 6]
