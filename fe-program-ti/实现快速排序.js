function quickSort(arr) {
  console.time('快速排序耗时');
  if (!Array.isArray(arr)) return 'arr is not an Array';
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  // 需要删除中间值
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [], right = [];
  for (let item of arr) {
    if (pivot > item) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  console.timeEnd('快速排序耗时');
  // 递归
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]))

