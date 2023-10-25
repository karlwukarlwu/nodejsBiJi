//引入express模块
// 这个要npm install的
const express = require("express")
// 获取服务器的实例
const app = express()

//第二步 为服务器设置路由
/*
    如果希望服务器可以正常访问，则需要为服务器设置路由，
        路由可以根据不同的请求方式和请求地址来处理用户的请求

        app.METHOD(...)
            METHOD 可以是 get 或 post ...

    中间件（use）
        - 在express我们使用app.use来定义一个中间件
            中间件作用和路由很像，用法很像
            但是use不区分请求的方式，只看路径

        - 和路由的区别
            1.会匹配所有请求
            2.路径设置父目录
                比如设置了 /abc 可以访问 /abc/xxx和/abc
         路由是精确匹配


*/
// 第三步 用中间件（看需求）
// 中间件的作用是做一些公共的操作
// next() 是回调函数的第三个参数，它是一个函数，调用函数后，可以触发后续的中间件
// next() 不能在响应处理完毕后调用
app.use((req, res, next) => {
    console.log("111", Date.now())
    //这里放send没有意义
    // res.send("<h1>111</h1>")

    next() // 放行，我不管了~~
})

app.use((req, res, next) => {
    console.log("222", Date.now())
    // res.send("<h1>222</h1>")
    next()
})

app.use((req, res) => {
    console.log("333", Date.now())
    //下面有get就别send了
    // res.send("<h1>333</h1>")
})

// 路由开始设置（第二步 ）
app.get("/",(req,res)=>{

    console.log("有人访问我了~")
    // 在路由中，应该做两件事
    // 读取用户的请求（request）
    // req 表示的是用户的请求信息，通过req可以获取用户传递数据
    console.log(req.url)

    // res 表示的服务器发送给客户端的响应信息
    // 可以通过res来向客户端返回数据
    // sendStatus() 向客户端发送响应状态码
    // status() 用来设置响应状态码，但是并不发送
    // send() 设置并发送响应体
    // res.sendStatus(404)
    // res.status(200)
    res.send("<h1>这是我的第一个服务器</h1>")

})





//第一步 启动服务器
//app.listen(端口号)
//  来启动服务器 服务器挂起
// 协议名://ip地址:端口号/路径
// http://localhost:3000
// http://127.0.0.1:3000
app.listen(3000, () => {
    console.log("服务器启动成功~")
})

