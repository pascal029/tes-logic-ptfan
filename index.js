function pair(array) {
  let result = 0;
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      result += 1;
      i += 1;
    }
  }
  return result;
}
// console.log(pair([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));

function countWord(string) {
  let result = 0;
  let pattern = /^[A-Z]+$/i;
  let temp = string
    .slice(0, -1)
    .split(" ")
    .map((el) => {
      const match = el.match(pattern);
      return match != null ? el : null;
    })
    .forEach((element) => {
      if (element != null) result += 1;
    });
  return result;
}

console.log(countWord("Kemarin Shopia per[gi ke mall."));
