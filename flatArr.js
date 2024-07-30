const arr = [1, 2, [3, 4, [5, 6]]];
let flatArr = [];
const flatArrFn = (arr, d = 1) => {
  for (let item of arr) {
    if (Array.isArray(item) && d > 0) {
      flatArrFn(item, d - 1);
    } else {
      item !== void 0 && flatArr.push(item);
    }
  }
  return flatArr;
};

console.log(flatArrFn(arr, Infinity));

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
}
console.log(flatDeep(arr, Infinity));

