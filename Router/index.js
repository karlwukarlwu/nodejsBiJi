const express = require("express")
const path = require("path")
const app = express()
const userRouter = require("./Router/user")
const goodsRouter = require("./Router/goods")

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname, "public")))

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
//将路由提取到单独的文件夹中
//使路由生效 ,需要哪个模块就提那个模块
//路径是 /list
app.use(userRouter)
// 加上一个前缀路径
// 现在的路径是：/goods/list
app.use("/goods",goodsRouter)

app.listen(3000, () => {
    console.log("服务器已经启动！")
})