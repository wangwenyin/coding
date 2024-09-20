// 是什么：流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序的,是逐块读取数据、处理内容，用于顺序读取输入或写入输出

// 种类
// 在NodeJS，几乎所有的地方都使用到了流的概念，分成四个种类：

// ●  可写流：可写入数据的流。例如 fs.createWriteStream()  可以使用流将数据写入文件 
// ●  可读流： 可读取数据的流。例如fs.createReadStream() 可以从文件读取内容 
// ●  双工流： 既可读又可写的流。例如 net.Socket 
// ●  转换流： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据 

// 在NodeJS中HTTP服务器模块中，request 是可读流，response 是可写流。还有fs 模块，能同时处理可读和可写文件流

// stream常见的场景有：

// ● get请求返回文件给客户端
// ● 文件操作
// ● 一些打包工具的底层操作

const fs = require('fs')
const path = require('path')

// 两个文件名
const fileName1 = path.resolve(__dirname, 'stream.js')
const fileName2 = path.resolve(__dirname, 'stream-bak.txt')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1)
// 写入文件的 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// 通过 pipe执行拷贝，数据流转
readStream.pipe(writeStream)
// 数据读取完成监听，即拷贝完成
readStream.on('end', function () {
    console.log('拷贝完成')
})
// __dirname指当前文件夹
console.log(__dirname)