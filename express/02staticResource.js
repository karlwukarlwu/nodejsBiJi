const express = require("express")
const path = require("path")

const app = express()

//加载静态资源
app.use(express.static(path.resolve(__dirname,"./public")))
// 接下来静态资源可以这样访问
// http://localhost:3000/an.jpg 不用路径加上public
// app.get("/",(req,res)=>{
//     res.send("hello")
// })

//登录功能的实现
app.get("/login",(req,res)=>{
    console.log("请求已收到")
    // req.query 表示查询字符串中的请求参数
    if(req.query.username === "sunwukong" && req.query.password === "123123"){
        res.send("<h1>登录成功</h1>")
    }else {
        res.send("<h1>用户名或密码错误</h1>")
    }
})

app.listen(3000,()=>{
    console.log("服务器已启动")
})

