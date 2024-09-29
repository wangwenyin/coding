// 1.如果使用原生 API，可使用 http/https 核心模块：
const https = require("https");
 
https
  .get("https://icanhazip.com", (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);
    let data = "";
 
    res.on("data", (chunk) => {
      data += chunk;
    });
 
    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });

  // 2.如果使用第三方库的话，可使用 axios 等
  