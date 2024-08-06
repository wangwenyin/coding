// const tasks = [];

// const output = i => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(i);
//     resolve();
//   }, 1000*i);
// });

// for (var i = 0; i < 5; i++) {
//   tasks.push(output(i))
// };

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// })

const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

(async () => { //声明即执行的async
  for (var i = 0; i < 5; i++) {
      await sleep(1000);
      console.log(i);
  }

  await sleep(1000);
  console.log(i);

})();

