function maxRepeating(sequence, word) {
  let count = 0;
  let match = word;

  while (sequence.includes(match)) {
    match += word;
    ++count;
  }

  return count;
}

console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));
