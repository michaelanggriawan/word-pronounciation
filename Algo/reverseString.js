var reverseWords = function (s) {
  let str = s.split(' ');
  for (let i = 0; i < str.length; i++) {
    let rv = '';
    for (let j = str[i].length - 1; j >= 0; j--) {
      rv += str[i][j];
    }
    str[i] = rv;
    rv = '';
  }
  return str;
};

reverseWords("Let's take LeetCode contest");
