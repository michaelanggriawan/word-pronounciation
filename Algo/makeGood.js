function makeGood(s) {
  let l = s.split('');
  // check if letter is uppercase
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }

  for (let i = 0, j = i + 1; i < l.length - 1; ++i, ++j) {
    if (
      (l[i] === l[j].toLowerCase() && isUpperCase(l[j])) ||
      (isUpperCase(l[i]) && l[i].toLowerCase() === l[j])
    ) {
      l[i] = '';
      l[j] = '';
      return makeGood(l.join(''));
    }
  }

  return l.join('');
}

console.log(makeGood('leEeetcode'));
