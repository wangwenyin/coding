class Counter {
  constructor (limit, count) {
    this.limit = limit;
    this.count = count;
  }
}

class IterableCounter {
  constructor (limit) {
    this.limit = limit;
  }
  [Symbol.iterator] () {
    let count = 1,
        limit = this.limit;
    return {
      next () {
        if (count <= limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    }
  }
}

class GeneratorCounter {
  constructor (limit) {
    this.limit = limit;
  }
  * [Symbol.iterator] () {
      yield * [1, 2, 3];
  }
}

const c = new IterableCounter(3);
const g = new GeneratorCounter();
for (const i of c) {
  console.log(i);
}
for (const i of g) {
  console.log(i);
}
console.log('迭代器函数：', c[Symbol.iterator]);
console.log('数组迭代器对象：', [][Symbol.iterator]());
console.log('自定义迭代器对象：', c[Symbol.iterator]());
console.log('迭代器对象next方法返回值：', c[Symbol.iterator]().next());
console.log('生成器函数：', g[Symbol.iterator]);
console.log('生成器对象：', g[Symbol.iterator]());
console.log('生成器对象next方法返回值：', g[Symbol.iterator]().next());
