// 1.对 [49, 38, 65, 97, 76, 13, 27, 49]进行冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length;i++) {
    for(let j = 0; j < arr.length - 1 - i;j++) {
      // 第一轮结束最后一个一定是最大值,故第二轮最后一个不需要再比，即内层循环j<arr.length-1-i的原因
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // es6可以这样写
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [49, 38, 65, 97, 76, 13, 27, 49];
const sortArr = bubbleSort(arr); // 数组sort方法同原理
console.log(sortArr);

// 2.找出数组中重复元素组成的数组 [1,2,2,3,5,5,6,5] => [2,5]
function duplicates1(arr) {
  // 得到重复出现过的元素组成的数组，再去重   
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      newArr.push(arr[i]);
    }
  }
  return [...new Set(newArr)];
}

function duplicates2(arr) {
  const result = [];
  arr.forEach(item => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item) && result.indexOf(item) === -1) {
      result.push(item);
    }
  })
  return result;
}

// 3.多维数组转一维数组

/* 递归降维 */
function flat1(arr) {
  return arr.reduce((prev, curr, index, list) => {
    if (Array.isArray(curr)) {
      return prev.concat(...flat1(curr));
    }
    return prev.concat(curr);
  }, [])
}

/* es6 flat方法*/
function flat2(arr) {
  return arr.flat(Infinity)
}
