// 计数器控件 返回四个闭包
const counter = (() => {
  let count = 0
  return {
    get() {
      return count
    },
    add(num) {
      return count += num || 1
    },
    del(num) {
      return count -=num || 1
    },
    reset() {
      return count = 0
    }
  }
})();
console.log(counter.get())
console.log(counter.add(9))
console.log(counter.del(1))
console.log(counter.reset())

var arr = Array.from(new Array(100).keys());
console.log(arr.slice(arr.length - 10, arr.length));