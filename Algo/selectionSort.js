function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin != i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

console.log(selectionSort([10, 6, 11, 12, 0, -12, 1]));

//  [10, 6, 11, 12, 0, -12, 1]
//  [6, 10, 11, 12, 0, -12, 1]

