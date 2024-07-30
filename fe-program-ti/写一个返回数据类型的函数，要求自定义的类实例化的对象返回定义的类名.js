function myTypeof(value) {
   // 判断数据是 null 的情况
  if (value === null) {
    return null + '';
  }
  // 判断数据是引用类型的情况
  if (typeof value === 'object') {
    const toString = Object.prototype.toString;
    const valueType = toString.call(value).slice(8, -1);
    if (valueType === 'Object') {
      // 判断自定义的实例类名
      return value.constructor.name;
    }
    return valueType.toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}

console.log(myTypeof(null))
console.log(myTypeof(1))
console.log(myTypeof(new Date()))
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person('wang', 28);
console.log(myTypeof(person))