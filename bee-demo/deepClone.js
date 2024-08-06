
/* 1、最简单的深拷贝：先序列号，再反序列化 
    存在的问题：
    - 对象属性为函数，undefined，Symbol会被丢弃
    - 他无法实现对函数 、RegExp等特殊对象的克隆
    - 会抛弃对象的constructor,所有的构造函数会指向Object
    - 对象有循环引用,会报错
*/
// 构造函数
function person(pname) {
  this.name = pname;
}

const Messi = new person('Messi');

// 函数
function say() {
  console.log('hi');
};

const oldObj = {
  a: say,
  b: new RegExp('ab+c', 'i'),
  c: Messi
};

oldObj.d = oldObj;

// const newObj = JSON.parse(JSON.stringify(oldObj));

// 无法复制函数
// console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
// console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
// console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
// console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]

/* 2、递归遍历
    存在的问题：
    - 他无法实现对函数 、RegExp等特殊对象的克隆
    - 会抛弃对象的constructor,所有的构造函数会指向Object
    - 对象有循环引用,会报错
*/
function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  const cloneObj = Array.isArray(obj) ? [] : {};
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const v = obj[k];
      cloneObj[k] = typeof v === 'object' ? deepClone(v) : v;
    }
  }
  return cloneObj;
}



/**
* deep clone
* 解决以上问题，当然最安全的方法可以引用lodash工具函数库
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const isType = (obj, type) => Object.prototype.toString.call(obj).slice(8, -1) === type;
const getRegExp = re => {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};

const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};

const cloneObj = clone(oldObj);
console.log(cloneObj);



