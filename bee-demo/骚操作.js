// 1. 判断对象的数据类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
console.log(isArray([]))

// 2. 创建过去七天的数组
// 创建特定大小的数组
console.log([...Array(3).keys()])
const weeks = [...Array(7).keys()].map(day => new Date(Date.now() - day*3600*1000*24))
console.log(weeks)

// 3. 生成长度为11的随机字母数字字符串
const randomStr = Math.random().toString(36).substring(2)
console.log(randomStr)

// 4. 随机更改数组元素顺序，混淆数组
let a = (arr) => arr.slice().sort(() => Math.random() - 0.5)
let b = a([1,2,3,4,5])
console.log(b)

// 5. 生成随机十六进制颜色 码 如：'#c618b2'
console.log('#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0'))

// 6. 这是一个臭名昭著的面试题，让你写出他的运行结果
for(i=0;++i<101;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'

// 7. 用字符串返回一个键盘图形
const c= (_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
`)();
console.log(c)

// 8.生成长度为10的随机字母数字字符串
Math.random().toString(36).substring(2);

// 9.优雅的金钱格式化
// 1、使用正则实现
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
console.log(format) // 1,234,567,890
// 2、使用骚操作
function formatCash(str) {
       return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
       })
}
console.log(format) // 1,234,567,890

// 10. console美化
console.info("%c哈哈", "color: #3190e8; font-size: 30px; font-family: sans-serif");