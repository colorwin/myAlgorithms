function quickSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  const mainIndex = Math.floor(Math.random(array.length - 1));
  const main = array[mainIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i++) {
    if (i === mainIndex) {
      continue;
    }
    const item = array[i];
    if (item < main) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return [...quickSort(left), main, ...quickSort(right)];
}

module.exports = quickSort;