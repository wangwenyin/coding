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

// 获取文件信息
fs.statSync('./test.txt')

// 创建目录
fs.mkdirSync('学习Node.js')

fs.writeFileSync('学习Node.js/buffer.js', '// 学习buffer')

// 读取目录所有文件
const files = fs.readdirSync('test-dir')
console.log(files) // 默认情况下只会返回名称。

// 删除文件
fs.unlinkSync('test-dir/test2.txt')
// fs.rmSync('test-dir/test2.txt')

// 删除目录
// 可以使用 fs.rmdirSync 删除目标目录，recursive: true 表明删除包含其子目录。
fs.rmdirSync('test-dir/a', { recursive: true })

// 监听目录变更
// 监听当前目录下所有的文件和子目录中的文件
fs.watch('./', { recursive: true }, (eventType, filename) => {
  console.log(`File '${filename}' has changed: ${eventType}`)
})

// 同步 (Sync)：例如 fs.readFileSync，会阻塞主线程；
// 异步 (Async/Callback)：fs.promises.readFile，fs.readFile，不会阻塞主线程。
// 日常使用中推荐使用 fs/promise 的方式。


// 实践：获取指定目录下所有文件的绝对路径。
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true })

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(path.resolve(dirPath, file.name), arrayOfFiles)
    } else {
      arrayOfFiles.push(path.resolve(dirPath, file.name))
    }
  })

  return arrayOfFiles
}
