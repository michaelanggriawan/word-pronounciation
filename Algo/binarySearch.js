function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
      return true;
    }

    if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}


console.log(binarySearch([1, 3, 5, 7, 8, 9], 5));
