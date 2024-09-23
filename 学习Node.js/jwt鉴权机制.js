// 是什么:JWT（JSON Web Token），本质就是一个字符串书写规范。
// Token，分成了三部分，头部（Header）、载荷（Payload）、签名（Signature），并以.进行拼接。其中头部和载荷都是以JSON格式存放数据，只是进行了编码

// 在目前前后端分离的开发过程中，使用token鉴权机制用于身份验证是最常见的方案，流程如下：

// ● 服务器当验证用户账号和密码正确的时候，给用户颁发一个令牌，这个令牌作为后续用户访问一些接口的凭证
// ● 后续访问会根据这个令牌判断用户时候有权限进行访问


// 如何实现
// Token的使用分成了两部分：

// ● 生成token：登录成功的时候，颁发token
// ● 验证token：访问某些资源或者接口时，验证token

const crypto = require("crypto"),
  jwt = require("jsonwebtoken");
// TODO:使用数据库
// 这里应该是用数据库存储，这里只是演示用
let userList = [];

class UserController {
  // 用户登录
  static async login(ctx) {
    const data = ctx.request.body;
    if (!data.name || !data.password) {
      return ctx.body = {
        code: "000002", 
        message: "参数不合法"
      }
    }
    const result = userList.find(item => item.name === data.name && item.password === crypto.createHash('md5').update(data.password).digest('hex'))
    if (result) {
      // 生成token
      const token = jwt.sign(  
        {
          name: result.name
        },
        "test_token", // secret
        { expiresIn: 60 * 60 } // 过期时间：60 * 60 s
      );
      return ctx.body = {
        code: "0",
        message: "登录成功",
        data: {
          token
        }
      };
    } else {
      return ctx.body = {
        code: "000002",
        message: "用户名或密码错误"
      };
    }
  }
}

module.exports = UserController;

// 在前端接收到token后，一般情况会通过localStorage进行缓存，然后将token放到HTTP请求头Authorization 中，关于Authorization 的设置，前面要加上 Bearer ，注意后面带有空格
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token; // 留意这里的 Authorization
  return config;
})