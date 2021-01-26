function arrayNesting(nums) {
  let s = [nums[0]];
  let idx = 0;
  d = nums[s[idx]];
  while (true) {
    d = nums[s[idx]];
    if (!s.includes(d)) {
      if (d) {
        s.push(d);
        idx++;
      } else {
        break;
      }
    }
  }

  s.push(nums[s.length - 1]);
  return s;
}

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
