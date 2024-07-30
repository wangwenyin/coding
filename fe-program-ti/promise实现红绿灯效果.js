// 版本1
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function light(cb, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer)
  })
}

function step() {
  Promise.resolve().then(() => {
    // 先后执行
    return light(red, 3000);
  }).then(() => {
    return light(yellow, 2000);
  }).then(() => {
    return light(green, 1000);
  }).then(() => {
    // 循环执行
    return step();
  })
}

step();

// 版本2
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function changeColor(color, duration) {
  console.log(`The light is now ${color}.`);
  return sleep(duration);
}

function trafficLight() {
  changeColor("red", 3000)
    .then(() => changeColor("green", 2000))
    .then(() => changeColor("yellow", 1000))
    .then(trafficLight);
}

trafficLight();