// var longestStrChain = function (words) {
//   let lookUp = {};
//   let max = 0,
//     maxWord;
//   words.sort((a, b) => a.length - b.length);

//   for (let word of words) {
//     lookUp[word] = 0;
//   }

//   for (let word of words) {
//     for (let i = 0; i < word.length; ++i) {
//       let substr = word.slice(0, i) + word.slice(i + 1);
//       Object.keys(lookUp).map((k) => {
//         if (k.includes(substr)) {
//           ++lookUp[k];
//           if (max <= lookUp[k]) {
//             max = lookUp[k];
//             maxWord = k;
//           }
//         }
//       });
//     }
//   }
//   console.log(lookUp)
//   return maxWord;
// };

var longestStrChain = function(words) {
    if (words.length == 0) return 0;
    words.sort((a,b) => a.length - b.length); // sort from shortest to longest
    let m = new Map(); // (key, value) in m represents (word, longest length of chain of this word)
    for (let word of words) {
        m.set(word, 1);
        for (let i = 0; i < word.length; i++) {
            let substr = word.slice(0,i) + word.slice(i+1);
            if (m.has(substr)) m.set(word, Math.max(m.get(word), m.get(substr) + 1));
        }
    }
    console.log(m)
    return Math.max(...m.values());
};

console.log(longestStrChain(["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]));
