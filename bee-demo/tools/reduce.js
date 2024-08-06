/* reduce 函数可以根据需要进行累加、过滤、分组、映射等操作，是一个非常强大的数组方法。
在数据处理时使用的非常频繁，很多复杂的逻辑如果用reduce去处理，都非常的简洁，
在实际的开发工作过程中，积累了一些常见又超级好用的 reduce 技巧的代码片段 */

// 1、计算数组中每个元素出现的次数
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }

// 2、拍平嵌套数组
const nestedArray = [[1, 2], [3, [4, 5]], [6, 7]];
const myFlat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  }, [])
}
console.log(myFlat(nestedArray));

// 3、按条件分组
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Emily', age: 30 }
];
const groupedPeople = people.reduce((accumulator, currentValue) => {
  const key = currentValue.age;
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(currentValue);
  return accumulator;
}, {});
console.log(groupedPeople);
// Output: {
//   25: [{ name: 'Alice', age: 25 }, { name: 'David', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'Emily', age: 30 }],
//   35: [{ name: 'Charlie', age: 35 }]
// }

// 4、将查询字符串转换为对象
const str = 'key1=value1&key2=value2&key3=value3';
const obj = str.split('&').reduce((acc, cur) => {
  const [key, val] = cur.split('=');
  acc[key] = val;
  return acc;
}, {})
console.log(obj);
// Output: { key1: 'value1', key2: 'value2', key3: 'value3' }

// 5、将对象转换为查询字符串
const params = { foo: "bar", baz: 42 };
const queryString = Object.entries(params).reduce((acc, [key, value]) => {
  return `${acc}${key}=${value}&`;
}, "?").slice(0, -1);
console.log(queryString); // "?foo=bar&baz=42"

// 6、打印斐波那契数列
const fibonacci = n => {
  return [...Array(n)].reduce((accumulator, currentValue, index) => {
    if (index < 2) {
      accumulator.push(index);
    } else {
      accumulator.push(accumulator[index - 1] + accumulator[index - 2]);
    }
    return accumulator;
  }, []);
};
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 7、检查字符串是否是回文字符串
const str2 = 'racecar';
const isPalindrome = str2.split('').reduce((accumulator, currentValue, index, array) => {
  return accumulator && currentValue === array[array.length - index - 1];
}, true);
console.log(isPalindrome); // Output: true

// 8、检查括号是否匹配
const str3 = "(()()())";
const balanced = str3.split("").reduce((acc, cur) => {
  if (cur === "(") {
    acc++;
  } else if (cur === ")") {
    acc--;
  }
  return acc;
}, 0) === 0;
console.log(balanced); // true

// 9、递归获取对象属性
const user = {
  info: {
    name: "Jason",
    address: { home: "Shaanxi", company: "Xian" },
  },
};
function get(config, path, defaultVal) {
  return path.split('.').reduce((config, name) => config[name], config) || defaultVal;
}
get(user, "info.name"); // Jason
get(user, "info.address.home"); // Shaanxi

// 手写 reduce:可以通过手写一个简单的 reduce 函数来更好地理解它的实现原理
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}