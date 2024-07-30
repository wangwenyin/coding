// 在观察者模式里，至少应该有两个关键角色是一定要出现的——发布者和订阅者。用面向对象的方式表达的话，那就是要有两个类

// 定义发布者类
class Publisher {
  constructor() {
    this.observers = []
    console.log('Publisher created')
  }

  // 增加订阅者
  add(observer) {
    console.log('Publisher.add invoked')
    this.observers.push(observer)
  }

  // 删除订阅者
  remove(observer) {
    console.log('Publisher.remove invoked')
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }

  // 通知所有订阅者
  notify() {
    console.log('Publisher.notify invoked')
    this.observers.forEach(observer => {
      observer.update(this)
    })
  }
}

// 定义订阅者
class Observer {
  constructor() {
    console.log('Observer created')
  }
  update() {
    console.log('Observer.update invoked')
  }
}

// 定义一个具体的需求文档发布类
class PrdPublisher extends Publisher {
  constructor() {
    super()
    // 初始化需求文档
    this.prdState = null
    // 韩梅梅还没有拉群，开发群目前为空
    this.observers = []
  }

  getState() {
    return this.prdState
  }

  setState(state) {
    this.prdState = state
    this.notify()
  }
}

class DevObserver extends Observer {
  constructor() {
    super()
    // 需求文档一开始还不存在，初始化为空
    this.prdState = {}
  }

  // 重写具体的update方法
  update(publisher) {
    this.prdState = publisher.getState()
    this.work()
  }

  // 一个专门搬砖的方法
  work() {
    const prdState = this.prdState
    console.log('996 begins...')
  }
}

const liLei = new DevObserver()
const tester = new DevObserver()
const hanMeiMei = new PrdPublisher()
hanMeiMei.add(liLei)
hanMeiMei.add(tester)
const prd = {
  a: 'coding',
  b: 'testing'
}
hanMeiMei.setState(prd)

