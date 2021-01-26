var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; ++i) {
    let counter = 0;
    for (let j = i; j < s.length; ++j) {
      if (!s.slice(i, j).includes(s[j])) {
        ++counter;
      } else {
        break;
      }
    }

    if (counter > max) max = counter;
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
