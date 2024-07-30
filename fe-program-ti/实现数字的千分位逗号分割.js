// 方案一：数组循环
function thousands1(num) {
  const result = [];
  let counter = 0;
  num = (num || 0).toString().split('');
  for (let i = num.length - 1;i >= 0;i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) { result.unshift(',')};
  }
  console.log(result.join(''));
}
thousands1(1234567891)

// 方案二：正则 + 凑整法
function thousands2(num) {
  num = (num || 0).toString();
  const temp = num.length % 3;
  switch(temp) {
    case 1:
      num = '00' + num;
      break;
    case 2:
      num = '0' + num;
      break;
  }
  console.log(num.match(/\d{3}/g).join(',').replace(/^0+/, ''));
}
thousands2(1234567891)

// 方案三：最简单使用toLocaleString
var num = 123456789
//格式化千分位输出
num.toLocaleString()
//格式化为千分位带$符号输出且保留两位小数
num.toLocaleString("en-US",{style:"currency",currency:"USD"})
//格式化为带￥符号输出且保留两位小数
num.toLocaleString("zh-Hans-CN",{style:"currency",currency:"CNY"})