const fs = require("fs");

// 文件读取
let buf = fs.readFileSync("README.md");
let data = fs.readFileSync("README.md", "utf8");

console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(data); // Hello

// 文件追加写入
fs.appendFileSync("README.md", "今天系统学习Node.js");
let newData = fs.readFileSync("README.md", "utf8");

console.log(newData); // Hello world

// 文件拷贝
fs.copyFileSync("package.json", "README.md");
let copyData = fs.readFileSync("README.md", "utf8");

console.log(copyData); // Hello world

// 创建目录
fs.mkdirSync('学习Node.js')

fs.writeFileSync('学习Node.js/buffer.js', '// 学习buffer')
