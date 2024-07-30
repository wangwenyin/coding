// 工厂模式其实就是将创建对象的过程单独封装

function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

function Factory(name, age, career) {
  let work = []
  switch(career) {
    case 'coder':
      work = ['做需求', '修bug', '摸鱼']
      break
    case 'tester':
      work = ['写用例', '功能测试', '性能测试']
      break
    case 'producter':
      work = ['写Prd', '订会议室', '与coder撕逼']
      break
    case 'boss':
      work = ['喝茶', '看报', '催进度']
      break
  }
  return new User(name, age, career, work)
}

const coder = new Factory('wang', 18, 'coder')
console.log(coder)
