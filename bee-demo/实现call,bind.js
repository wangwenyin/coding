Function.prototype.myCall = function(context = window, ...args) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  // 避免覆盖context中已存在的fn
  const fn = Symbol['fn'];
  // 关键的一步(this的隐式绑定)
  context[fn] = this;
  const res = context[fn](...args);
  // 清理context
  delete context[fn];
  return res;
}

/*  
  实现bind的步骤，我们可以分解成为三部分：
    - 修改this指向
    - 动态传递参数
    - 兼容new关键字
*/
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  const args = [...arguments].slice(1),
        fn = this;
  return function Fn() {
    return fn.apply(
      // 兼容new绑定(此处this，arguments是内部函数的)
      this instanceof Fn ? new fn(...arguments) : context,
      // 多级传参
      args.concat(...arguments)
    )
  }
}
