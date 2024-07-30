// 装饰器模式是指允许在不修改现有对象的情况下，动态地向对象添加额外的行为或功能。装饰器模式通过将对象包装在一个装饰器对象中，从而在运行时动态地添加新的行为或修改现有行为
// 装饰器模式核心要求是在不修改现有对象（类、函数、组件等）的情况下，扩展对象的行为或功能，很明显，这符合我们前面讲过的一个重要的软件设计原则：开闭原则（对扩展开发，对修改关闭）
// 日志装饰器
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling ${fn.name} with arguments: ${args}`);
    const result = fn.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  }
}

function addNumbers(a, b) {
  return a + b;
}

const addNumbersWithLogging = withLogging(addNumbers);

addNumbersWithLogging(2, 3); // output: "Calling addNumbers with arguments: 2,3" and "Result: 5"

// es7已经支持装饰器语法
class MyClass {
  @withLogging
  sayHello() {
    console.log('Hello, world!');
  }
}

const myObject = new MyClass();

myObject.sayHello(); // output: "Calling sayHello with arguments: " and "Hello, world!"
