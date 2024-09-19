// 不考虑层级，默认全部展开
// 1.数组flat方法
const list = [1,[2,[3,4]],5]
console.log(list.flat(Infinity))

// 2.循环+递归
function flatten(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = [...res, ...flatten(arr[i])]
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// 3.reduce简写（实质也是递归思想）
function flatten(arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

// 下面是第二个参数需要层级的写法
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

