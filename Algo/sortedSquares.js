var sortedSquares = function (A) {
  for (let i = 0; i < A.length; ++i) A[i] = A[i] * A[i];

  for (let i = 0; i < A.length; ++i) {
    for (let j = 0; j < A.length - i - 1; ++j) {
      if (A[j] > A[j + 1]) {
        let lesser = A[j + 1];
        A[j + 1] = A[j];
        A[j] = lesser;
      }
    }
  }

  return A;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
