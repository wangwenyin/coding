// 简单实现
Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  const len = this.length || 0;
  for (let i = 0; i < len; i++) {
    res.push(callback.call(thisArg, this[i], i, this));
  }
  return res;
}
const list = [1 , 2, 3].myMap(num => 2*num)
console.log(list)