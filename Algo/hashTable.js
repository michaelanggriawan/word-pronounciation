let common = [];

function set(store, key, val) {
  let find = false;
  if (store.length > 0) {
    for (let i = 0; i < store.length; i++) {
      if (store[i][0] === key) {
        store[i][1] = val;
        find = true;
      }
    }

    if (!find) {
      store.push([key, val]);
    }
  }

  if (store.length === 0) {
    store.push([key, val]);
  }
}

function get(store, key) {
  for (let i = 0; i < store.length; i++) {
    if (store[i][0] === key) {
      return store[i][1];
    }
  }
  return undefined;
}

function mostCommonWord(words) {
  let arr = words.split(' ');
  let maxWord = 0,
    word = '';

  for (let word of arr) {
    if (typeof get(common, word) !== 'undefined') {
      let prev = get(common, word) + 1;
      set(common, word, prev);
    } else {
      set(common, word, 1);
    }
  }

  for (let i = 0; i < common.length; i++) {
    let key = common[i][0];
    let val = common[i][1];
    if (maxWord < val) {
      maxWord = val;
      word = key;
    }
  }

  return [word, maxWord];
}

console.log(
  mostCommonWord(
    'saya tahu bahwa saya tidak bahwa saya tahu bisa melakukan saya tahu tidak',
  ),
);
