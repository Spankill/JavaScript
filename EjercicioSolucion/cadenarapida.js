/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let res = 1;
  let i = 0,
    l = word.length,
    val = 0,
    cur;
  while (i < l) {
    (val = 1), (cur = word[i]);
    while (i < l - 1 && cur === word[i + 1]) {
      val++;
      i++;
    }
    i++;
    res += val - 1;
  }
  return res;
};
console.log(possibleStringCount("abbcccc"));
console.log(possibleStringCount("abcd"));
console.log(possibleStringCount("aaaa"));
console.log(possibleStringCount("ngvv"));
