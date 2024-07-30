// 1、保护代理
// 所谓“保护代理”，就是在访问层面做文章，在 getter 和 setter 函数里去进行校验和拦截，确保一部分变量是安全的

// 普通私密信息
const baseInfo = ["age", "career"];
// 最私密信息
const privateInfo = ["avatar", "phone"];

// 用户（同事A）对象实例
const user = {
  // ...(一些必要的个人信息)
  isValidated: true,
  isVIP: false,
};
// 规定礼物的数据结构由type和value组成
const present = {
  type: "巧克力",
  value: 60,
};

// 为用户增开presents字段存储礼物
const girl = {
  // 姓名
  name: "小美",
  // 自我介绍
  // aboutMe: '...'（大家自行脑补吧）
  // 年龄
  age: 24,
  // 职业
  career: "teacher",
  // 假头像
  // fakeAvatar: 'xxxx'(新垣结衣的图片地址）
  // 真实头像
  // avatar: "xxxx"(自己的照片地址),
  // 手机号
  phone: 123456,
  // 礼物数组
  presents: [],
  // 拒收50块以下的礼物
  bottomValue: 50,
  // 记录最近一次收到的礼物
  lastPresent: present,
};

// 掘金婚介所推出了小礼物功能
const JuejinLovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert("您还没有完成验证哦");
      return;
    }

    //...(此处省略其它有的没的各种校验逻辑)

    // 此处我们认为只有验证过的用户才可以购买VIP
    if (user.isValidated && privateInfo.indexOf(key) !== -1 && !user.isVIP) {
      alert("只有VIP才可以查看该信息哦");
      return;
    }
  },

  set: function (girl, key, val) {
    // 最近一次送来的礼物会尝试赋值给lastPresent字段
    if (key === "lastPresent") {
      if (val.value < girl.bottomValue) {
        alert("sorry，您的礼物被拒收了");
        return;
      }

      // 如果没有拒收，则赋值成功，同时并入presents数组
      girl.lastPresent = val;
      girl.presents = [...girl.presents, val];
    }
  },
});

// 2、虚拟代理-图片预加载 
// 预加载主要是为了避免网络不好、或者图片太大时，页面长时间给用户留白的尴尬。常见的操作是先让这个 img 标签展示一个占位图

class preLoadImg {
  constructor(imgNode) {
    this.imgNode = imgNode
  }
  setSrc(imgUrl) {
    this.imgNode.src = imgUrl
  }
}

class proxyImage {
  // 占位图
  static LOADING_URL = 'XXXXX'

  constructor(targetImg) {
    this.targetImg = targetImg
  }

  setSrc(targetUrl) {
    this.targetImg.setSrc(this.LOADING_URL)

    const image = new Image()
    image.onload = () => {
      this.targetImg.setSrc(targetUrl)
    }
    image.src = targetUrl
  }
}

// 3、缓存代理
function addAll() {
  console.log('重新进行了一次计算')
  let result = 0
  const len = arguments.length
  for (let index = 0; index < len; index++) {
    result += arguments[index]    
  }
  return result
}

const proxyAddAll = (function() {
  // 将结果进行缓存
  let resultCache = {}
  return function() {
    const argStr = Array.prototype.join.call(arguments, ',')
    if (argStr in resultCache) {
      return resultCache[argStr]
    }
    return resultCache[argStr] = addAll(...arguments)
  }
})()

console.log(proxyAddAll(1,2,3,4,5,6))
console.log(proxyAddAll(1,2,3,4,5,6))