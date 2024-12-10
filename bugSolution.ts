function combineNumbers(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

function combineStrings(arr1: string[], arr2: string[]): string[] {
  return arr1.concat(arr2);
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: string[] = ['a', 'b', 'c'];
const arr4: string[] = ['d', 'e', 'f'];

const combinedNumbers = combineNumbers(arr1, arr2); 
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]

const combinedStrings = combineStrings(arr3, arr4);
console.log(combinedStrings); // ['a', 'b', 'c', 'd', 'e', 'f']