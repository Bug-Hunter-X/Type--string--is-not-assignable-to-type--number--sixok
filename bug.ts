function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['a', 'b', 'c'];

const combined = combine(arr1, arr2); // Type error here
console.log(combined);