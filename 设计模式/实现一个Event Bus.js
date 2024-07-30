class EventEmitter {
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {}
  }

  // on用于安装事件监听器，参数是事件命和对应回调
  on(eventName, cb) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = []
    }
    this.handlers[eventName].push(cb)
  }

  // 触发目标事件
  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      const callbacks = this.handlers[eventName]
      callbacks.forEach(cb => {
        cb(args)
      })
    }
  }

  // 移除事件监听
  off(eventName, cb) {
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if (index !== -1) {
      callbacks.splice(index, 1)
    }
  }

  // 注册单次监听
  once(eventName, cb) {
    // 对回调函数进行包装，使其执行完毕后自动移除
    const wrapper = (...args) => {
      cb(args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

// 观察者模式与发布-订阅模式的区别？
// 韩梅梅把所有的开发者拉了一个群，直接把需求文档丢给每一位群成员，这种发布者直接触及到订阅者的操作，叫观察者模式。
// 但如果韩梅梅没有拉群，而是把需求文档上传到了公司统一的需求平台上，需求平台感知到文件的变化、自动通知了每一位订阅了该文件的开发者，这种发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。