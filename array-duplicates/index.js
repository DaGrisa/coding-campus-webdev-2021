const duplicates = [1, 2, 2, 3, 6, 7, 2, 3, 5, 7, 8, 9, 9, 3];

function removeDuplicates(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(removeDuplicates(duplicates));

function unionAll(firstArray, secondArray) {
  const result = [];
  for (const item of firstArray) {
    result.push(item);
  }
  for (const item of secondArray) {
    result.push(item);
  }
  return result;
}

const arrayOne = [1, 2, 3, 1];
const arrayTwo = [4, 5, 6];
const combinedArray = unionAll(arrayOne, arrayTwo);
console.log(combinedArray);

function union(firstArray, secondArray) {
  var combined = unionAll(firstArray, secondArray);
  var result = removeDuplicates(combined);
  return result;
}

const unionedArray = union(arrayOne, arrayTwo);
console.log(unionedArray);

const intersectPartOne = [1, 2, 3, 4, 6, 6];
const intersectPartTwo = [3, 3, 4, 5, 6];
const intersection = intersect(intersectPartOne, intersectPartTwo);
console.log(intersection);

function intersect(arrayOne, arrayTwo) {
  const result = [];
  for (const itemOne of arrayOne) {
    for (const itemTwo of arrayTwo) {
      if (itemOne == itemTwo) {
        result.push(itemOne);
        break;
      }
    }
  }
  return result;
}
