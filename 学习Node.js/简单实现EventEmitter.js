// EventEmitter是Node.js中提供的一个监听器类，类似于前端vue中的eventBus事件总线。
// 其原理主要是发布订阅者模式。

class EventEmitter {
  constructor() {
    // 初始化事件对象
    this.events = {}
  }

  // 订阅事件
  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(cb)
    return this
  }

  // 事件触发
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return this
    }
    this.events[eventName].forEach(fn => fn.apply(this, args))
    // 返回自身 方便链式调用
    return this
  }

  // 解绑事件
  off(eventName, cb) {
    if (!this.events[eventName]) {
      return this
    }
    // 没有指定解绑事件，那么移除所有订阅者
    if (!cb) {
      this.events[eventName] = null
      return this
    }
    const index = this.events[eventName].indexOf(cb)
    this.events[eventName].splice(index, 1)
    return this
  }

  // 单次绑定事件
  once(eventName, cb) {
    const fn = () => {
      cb.apply(this, arguments)
      this.off(eventName, fn)
    }
    this.on(eventName, fn)
    return this
  }
}

const ee = new EventEmitter()

// 注册所有事件
ee.once('wakeUp', (name) => { console.log(`${name} 1`) })
ee.on('eat', (name) => { console.log(`${name} 2`) })
ee.on('eat', (name) => { console.log(`${name} 3`) })
const meetingFn = (name) => { console.log(`${name} 4`) }
ee.on('work', meetingFn)
ee.on('work', (name) => { console.log(`${name} 5`) })

ee.emit('wakeUp', 'xx')
ee.emit('wakeUp', 'xx')  // 第二次没有触发
ee.emit('eat', 'xx')
ee.emit('work', 'xx')
ee.off('work', meetingFn)        // 移除事件
ee.emit('work', 'xx')           // 再次工作