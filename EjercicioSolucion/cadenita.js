var possibleStringCount = function (word) {
  let n = word.length,
    ans = 1;
  for (let i = 1; i < n; ++i) {
    if (word[i - 1] === word[i]) {
      ++ans;
    }
  }
  return ans;
};

console.log(possibleStringCount("abbcccc"));
console.log(possibleStringCount("abcd"));
console.log(possibleStringCount("aaaa"));
console.log(possibleStringCount("ngvv"));
