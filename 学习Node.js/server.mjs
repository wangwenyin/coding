// 创建 HTTP Service
// 利用 http.createServer 即可创建一个简单的 Web 服务。对于一些简单场景可以不依赖第三方库，实现快速的代码编写实现。
import http from 'http'

const server = http.createServer((req, res) => {
  // 获取请求的路径和方法
  const { url, method } = req
  console.log(method, url)
  console.log('headers', req.headers)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>')
  res.write('Node.js')
  res.write('</h1>')
  res.end()
})
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/')
})
