// 最简单的promise
// new Promise((resolve, reject) => {
//   resolve('wangwenyin');
//   reject(new Error('reject')); 
// }).then(data => { console.log(data); }, error => { console.log(error); });
// new Promise((resolve, reject) => {
//   reject(new Error('Error'));
//   resolve('wangwenyin');
// }).then(data => { console.log(data); }, error => { console.log(error); })

// promise简单实现(未实现链式调用)
function MyPromise(executor) {
  this.status = 'pending';
  this.value = null;
  this.onSuccessCallback = [];
  this.onRejectCallback = [];
  const resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'success';
      this.value = value;
      this.onSuccessCallback.forEach(cb => cb(value))
    }
  }
  const reject = (value) => {
    if (this.status === 'pending') {
      this.status = 'reject';
      this.value = value;
      this.onRejectCallback.forEach(cb => cb(value))
    }
  }
  executor(resolve, reject);
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  if (this.status === 'success') {
    onFullfilled(this.value)
  }
  if (this.status === 'reject') {
    onRejected(this.value)
  }
  if (this.status === 'pending') {
    this.onSuccessCallback.push(onFullfilled)
    this.onRejectCallback.push(onRejected)
  }
}

new MyPromise((resolve, _) => {
  setTimeout(() => {
    resolve('wangwenyin')
  }, 0)
}).then(value => { console.log(value) })