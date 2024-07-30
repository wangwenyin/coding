Promise.myAll = function(arr) {
  console.time('promise耗时')
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new TypeError('参数需要是数组！'));
    }
    if (!arr.length) return resolve([]);
    const ans = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
      .then(res => {
        // 不用push,可以保证顺序
        ans[i] = res;
        index++;
        // resolve条件
        if (index === arr.length) {
          console.timeEnd('promise耗时')
          resolve(ans);
        }
      })
      .catch(err => reject(err))
    }
  })
};

(async () => {
  console.log(await Promise.myAll([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 3000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3)
      }, 1000)
    })
  ]))
})();
