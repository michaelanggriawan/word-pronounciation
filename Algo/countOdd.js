var countOdds = function (low, height) {
  let counter = 0;
  while (low <= height) {
    if (low % 2 === 1) {
      ++counter;
    }
    ++low;
  }

  return counter;
};

// var countOdds = function (low, height, counter = 0) {
//   if (low % 2 === 1) ++counter;

//   if (low < height) {
//     return countOdds(++low, height, counter);
//   }
  
//   return counter;
// };

console.log(countOdds(8, 10));
