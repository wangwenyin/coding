# 对Node 的理解
Node.js 就是一个服务器端的、非阻塞式I/O的、事件驱动的JavaScript运行环境

## 优缺点
优点：

● 处理高并发场景性能更佳
● 适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作

因为Nodejs是单线程，带来的缺点有：

● 不适合CPU密集型应用
● 只支持单核CPU，不能充分利用CPU
● 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃

# Node 有哪些全局对象
下面给出一些常见的全局对象：

●  Buffer 可以处理二进制以及非Unicode编码的数据
●  process  进程对象，提供有关当前进程的信息和控制 process.env.NODE_ENV process.nextTick
●  console 
●  clearInterval、setInterval 
●  clearTimeout、setTimeout 
●  global 全局命名空间对象，process、console、setTimeout等都有放到global中

## 模块级别的全局对象
这些全局对象是模块中的变量，只是每个模块都有，看起来就像全局变量，像在命令交互中是不可以使用，包括：

● __dirname 获取当前文件所在的路径，不包括后面的文件名
● __filename 获取当前文件所在的路径和文件名称，包括后面的文件名称
● exports module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容
● module 对当前模块的引用
● require 用于引入模块、 JSON、或本地文件。 
