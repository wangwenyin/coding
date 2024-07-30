// 创建单例方式1：静态方法
class SingleDog {
  show() {
    console.log('我是一个单身狗')
  }
  static getInstance() {
    if (!SingleDog.instance) {
      // 不存在则创建
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1 === s2)

// 创建单例方式2：闭包
function SingleDog2() {}
SingleDog2.prototype.show = function() {
  console.log('我是一个单身狗')
}
const getInstance = (function() {
  let instance = null
  return function() {
    if (!instance) {
      instance = new SingleDog()
    }
    return instance
  }
})()

console.log(new getInstance() === new getInstance())
