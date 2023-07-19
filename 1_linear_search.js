const array = [1, 2, 5, 7, 33, 11, 56, 45];
count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 56));
console.log('count =', count);
