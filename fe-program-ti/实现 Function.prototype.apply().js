// 第一个参数是绑定的this，默认为window，第二个参数是数组或类数组
Function.prototype.myApply = function(context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + 'is not a function');
  }
  // 确保唯一性
  const fn = Symbol('fn');
  // 关键点：绑定函数到传入的context
  context[fn] = this;
  // 调用函数，即利用了this的显示绑定
  const res = context[fn](...args);
  // 清除副作用
  delete context[fn];
  return res;
}

function foo(key) {
  this[key] = 'off';
  return this;
}
console.log([].myApply({}, ['foo']))
