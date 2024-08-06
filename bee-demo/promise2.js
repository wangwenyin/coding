let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// promise封装ajax
const pAjax = function({method, url, dataType}) {
  const promise = new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = dataType;
    xhr.send();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(new Error(this.statusText));
        }
      }
    }
    xhr.onerror = function(err) {
      reject(err);
    }
  });
  return promise;
}

const p1 = new Promise(resolve => {
  resolve(1)
});
const p2 = new Promise(resolve => {
  resolve(2)
});
Promise.all([p1, p2]).then(res => {
  console.log(res)
});

setTimeout(function () {
  console.log('three');
}, 0);

p1.then(function () {
  console.log('two');
});

console.log('one');