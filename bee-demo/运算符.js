// 1. 使用&&将返回第一个条件为假的值。如果每个操作数的计算值都为true，则返回最后一个计算过的表达式
let one = 1, two = 2, three = 3;
console.log(one && two && three);
console.log(0 && null);
// 2. 使用||将返回第一个条件为真的值。如果每个操作数的计算结果都为false，则返回最后一个计算过的表达式
console.log(one || two || three); // Result: 1
console.log(0 || null); // Result: null

let json = {
  '0': 'Ronnie',
  '1': 'Rose',
  '2': 'zhangsheng',
  '3': 'Json',
  length: 4
};


console.log([].slice.call(json))

let jsonArr = Array.from(json);
console.log(jsonArr); 


