// 看看就行
// ejs模板 跟jsp差不多
const express = require("express")
const path = require("path")
const app = express()

const STUDENT_ARR = [
    {
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "火锅山"
    },
    {
        name: "猪八戒",
        age: 28,
        gender: "男",
        address: "高老庄"
    },
    {
        name: "沙和尚",
        age: 38,
        gender: "男",
        address: "流沙河"
    }
]

let name = "猪八戒"

//设置默认模板引擎
app.set("view engine", "ejs")
    //下面几步基本上写死的 类似惯例
// 配置模板的路径,这里配置的是views文件夹
//第一个是固定的名字 第二个是路径
app.set("views", path.resolve(__dirname, "views"))
// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))
// 配置请求体解析
app.use(express.urlencoded({ extended: true }))

app.get("/hello", (req, res) => {
    res.send("hello")
})

app.get("/students",(req,res)=>{
    //默认去views文件夹下找students 路径写相对views的路径
    res.render("students",{name})
})

    //下面这两步也类似于写死的 一个是连接路由器 一个是返回错误信息
// 可以在所有路由的后边配置错误路由
app.use((req, res) => {
    // 只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("<h1>您访问的地址已被外星人劫持！</h1>")
})


app.listen(3000, () => {
    console.log("服务器已经启动！")
})