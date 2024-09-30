import https from 'https'
import axios from 'axios'

// 1.http.get
const req = https.get(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

req.on('response', (res) => {
  // 响应内容拼接
  let content = ''
  res.on('data', (chunk) => {
    content += chunk
  })

  res.on('end', () => {
    console.log(content)
  })

  res.on('error', (err) => {
    console.log(err)
  })
})

// 2.http.request
import https from 'https'

const url = new URL(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
console.log(url)
const req2 = https.request(
  {
    // 设置请求方法
    method: 'GET',
    // http 80 https 443
    port: 443,
    hostname: url.hostname,
    path: url.pathname + url.search
  },
  (res) => {
    let content = ''
    res.on('data', (chunk) => {
      content += chunk
    })
    res.on('end', () => {
      console.log('statusCode', res.statusCode)
      console.log(content)
    })
  }
)
// 发送请求
req2.end()

// 如果之前熟悉 WEB (浏览器) 的中的开发，会感觉这里的回调处理会非常的奇怪，有些别扭。
// 当然 Node.js 里面也可以使用 axios，同时 Node 里也支持 fetch。

// 3.fetch(Node.js 在 18 开始默认开启 fetch 支持)
fetch(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
// 3.使用第三方模块 axios
axios
  .get(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
  )
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.error(err)
  })


