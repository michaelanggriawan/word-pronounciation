

function searchString(long, short) {
  let len = short.length;
  let end = len;
  let start = 0;
  let count = 0;
 
  while(start < long.length - 1) {
    let s = long.split('').slice(start,end).join('');
    if ( s !== short) {
      ++start;
      ++end;
    } else {
      ++count;
      ++start;
      ++end;
    }
  }
  
  return count;
}
