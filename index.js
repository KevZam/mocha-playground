function divide(a, b) {
  if (b == 0) {
    throw new Error("Cannot divide by 0");
  }

  return a + b;
}

module.exports = divide;

function sort(list) {
  for (let i = 2; i < list.length; i++) {
    let j = i;
    while (j > 0 && list[j - 1] > list[j]) {
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;
      j--;
    }
  }
  return list;
}

const list = [5, 4, 3, 2, 1];
sort(list);
