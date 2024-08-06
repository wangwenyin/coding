// 观察者模式：定义对象间的一种一对多的依赖关系，当一个对象的状态发生变化时，所有依赖于它的对象都将得到通知并被自动更新

// 被观察者
class Subject {
  constructor() {
    this.observers = []
  }

  add(observer) {
    this.observers.push(observer)
  }

  delete(observer) {
    this.observers = this.observers.filter(o => o !== observer)
  }

  notity() {
    this.observers.forEach(o => o.update())
  }
}
// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }

  update() {
    console.log(`My name is ${ this.name }`)
  }
}

const sub = new Subject()
const ob = new Observer('张三')
// 搜集观察者
sub.add(ob)
// 通知观察者
sub.notity()

// 发布订阅模式：就像孩子们在学校一样，有很多科目老师，每个科目老师就相当于一个发布者，一群孩子就相当于订阅者，每一个老师都是一个不同的实例函数，在发布任务和作业的时候都不会影响到其他人
class Publisher {
  constructor() {
    this.events = {}
  }
  
  // 注册事件
  on(type, fn) {
    (this.events[type] || (this.events[type] = [])).push(fn)
  }

  // 触发事件
  emit(type, params) {
    if (!this.events[type]) return;
    this.events[type].forEach(fn => fn(params));
  }

  // 移除事件
  off(type, fn) {
    if (!arguments.length) {
      // 移除所有
      this.events = {}
    } else if (arguments.length === 1) {
      // 移除某一类
      this.events[type] = []
    } else if (arguments.length === 2) {
      // 移除具体回调
      if (!this.events[type]) return;
      this.events[type] = this.events[type].filter(f => f !== fn);
    }
  }
}

const pub = new Publisher();
const fn = function (params) {
  console.log(`我正在上${params}课`)
}
pub.on('math', fn);
pub.on('english', fn);
pub.emit('math', '数学');
pub.emit('english', '英语');
