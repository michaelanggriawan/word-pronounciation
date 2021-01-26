// var maxFreq = function (s, maxLetters, minSize, maxSize) {
//   const map = {};
//   for (let i = 0; i < s.length; i++) {
//     let subtr = s.slice(i, minSize + i);

//     if (subtr.length >= minSize) {
//       let subset = new Set(subtr.split(''));
//       console.log(subset, subtr, subset.size <= maxLetters);
//       if (subset.size <= maxLetters) {
//         map[subtr] = (map[subtr] || 0) + 1;
//       }
//     }
//   }

//   return map;
// };

var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let start = 0;
  let end = minSize;

  while (start < s.length - 1) {
    let sub = s.slice(start, end);

    if (sub.length >= minSize) {
      let unique = [];
      for (let l of sub) {
        if (!unique.includes(l)) {
          unique.push(l);
        }
      }
      if (unique.join('').length <= maxLetters) {
        obj[sub] = (obj[sub] || 0) + 1;
      }
    }

    start++;
    end++;
  }

  let max = 0;

  for (let str in map) {
    max = Math.max(max, map[str]);
  }

  return max;
};

console.log(maxFreq('aababcaab', 2, 3, 4));
