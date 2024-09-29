## path.join
将多个路径拼接成一个相对路径 (或绝对路径，取决于第一个路径是否为根路径)。
import path from 'path'

console.log(path.join('a', 'b', 'c'))
console.log(path.join(process.cwd(), '/hello', 'world'))

## path.resolve
将多个路径拼接成一个绝对路径，返回一个解析后的绝对路径。
即如果传入相对路径，会以当前工作目录为基准，计算出绝对路径，如果传入了绝对路径，则以传入的绝对路径为基准。
import path from 'path'

console.log('=== path.resolve ===')
console.log(path.resolve('a', 'b', 'c'))
console.log(path.resolve('/hello', 'world', './a', 'b'))

## path.normalize
主要用于规范化路径，将路径中的不规范部分调整为标准格式，可以用于处理以下问题：
1.路径中的斜杠数量过多的情况。
2.路径中存在的 ./ 或 ../，即相对路径的情况。
console.log('=== path.normalize ===')
console.log(path.normalize('a//b//c/d/e/..')) // a/b/c/d

.
.
.

## 本节主要介绍了 path 模块常用的方法：
拼接路径：join，resolve；
解析路径：parse，dirname，basename，extname；
规范化路径：normalize；
获取分隔符：sep。
使用 path 模块可以更加方便和安全地处理文件路径，避免因为不同操作系统使用不同的文件路径分隔符而导致程序运行出错。