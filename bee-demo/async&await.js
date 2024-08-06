
async function f() {
  // 等同于
  // return 123;
  return await 123;
}

f().then(v => console.log(v))


// async函数返回的结果会被包装成promise对象
const fetch = require('node-fetch'); // fetch是window提供的，nodejs环境中可以用node-fetch模块

async function getTitle(url) {
  let res = await fetch(url);
  let html = await res.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
// getTitle('https://github.com/wangwenyin/vue-music/blob/master/README.md').then(console.log);

// async&await实现休眠效果
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
};

async function one2FiveInAsync() {
  for (let i=1;i<=5;i++) {
    await sleep(1000);
    console.log(i);
  }
};
// one2FiveInAsync();


// 错误处理的两种方法
async function f2() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f2()
.then(v => console.log(v));

async function f3() {
  await Promise.reject('出错了').catch(() => {})
  return await Promise.resolve('hello world');
}
f3().then(v => console.log(v));

