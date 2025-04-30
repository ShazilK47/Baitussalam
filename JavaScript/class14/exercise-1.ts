
// spread operator exercise # 1
function mergeArrays(arr1, arr2) {
    const mergedArrays = [...arr1, ...arr2]
    return mergedArrays;
}

const array1: number[] = [1, 2, 3]
const array2: number[] = [4, 5, 6]


//to merge number of arays
// To merge a number of arrays using reduce
function tomergeArrays(...args: number[][]): number[] {
  return args.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(tomergeArrays(array1, array2,[3,4,5,6,8]))


// 