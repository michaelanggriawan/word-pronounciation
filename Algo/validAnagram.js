// function validAnagram(A,B){
//    add whatever parameters you deem necessary - good luck!
//   let sortedA = A.split("").sort().join("");
//   let sortedB = B.split("").sort().join("");

//   return sortedA === sortedB;
// }

// console.log(validAnagram("anagram", "nagaram"));

// second solution

function validAnagram(A, B) {
  if (A.length !== B.length) return false;

  let lookup = {};
  for (let l of A) lookup[l] = ++lookup[l] || 1;
  for (let l of B) {
    if (!lookup[l]) {
      return false;
    } else {
      --lookup[l];
    }
  }

  return true;
}

console.log(validAnagram('anagram', 'nagaram'));
