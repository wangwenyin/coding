class Dog1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log('肉骨头真好吃')
  }
}

// 以上Es6写法完全等价于构造函数写法
function Dog2(name, age) {
  this.name = name
  this.age = age
}

Dog2.prototype.eat = function() {
  console.log('肉骨头真好吃')
}

const dog1 = new Dog1()
const dog2 = new Dog2()
dog1.eat()
dog2.eat()