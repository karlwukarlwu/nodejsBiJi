const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")

const STUDENT_ARR = require("./data/students.json")

app.set("view engine", "ejs")

app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname,"public")))

app.use(express.urlencoded({extended:true}))

app.get("/hello", (req, res) => {
    res.send("hello")
})
app.get("/students", (req, res) => {
    res.render("students", { stus: STUDENT_ARR })
})
//删除
app.get("/studentsDel",(req,res)=>{
    let id =req.query.id
    // console.log(typeof id)
    // console.log("id",id)
    for (const studentarrElement of STUDENT_ARR) {
        // console.log(studentarrElement)
        // console.log(studentarrElement.id)
        if(studentarrElement.id==id){
            STUDENT_ARR.splice(studentarrElement,1)
        }else {
            console.log("没有找到具有指定 id 的对象")
        }
    }
    const newStu = JSON.stringify(STUDENT_ARR)
    const filePath = path.resolve(__dirname,"./data/students.json")
    newFile(STUDENT_ARR,res)
})

app.get("/studentsAdd",(req,res)=>{
    res.render("addStudent")
})

//添加
app.post("/add-student", (req, res) => {
    const name =req.body.name
    const age =req.body.age
    const gender = req.body.gender
    console.log(gender)
    const address = req.body.address
    const id = STUDENT_ARR.at(-1).id + 1
    const newUser = {
        id,
        name,
        age,
        gender,
        address
    }
    STUDENT_ARR.push(newUser)
    newFile(STUDENT_ARR,res)
})

//记住修改的逻辑是两个server 一个是打到修改页面的 另一个是修改完了提交的
//主页面->中转server->修改页面->中转server->主页面
app.get("/studentsMod",(req,res)=>{
    const id = req.query.id
    const student = STUDENT_ARR.find(item=>item.id==id)
    res.render("update",{student})
})
app.post("/update-student",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    console.log(name)
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    for (const studentarrElement of STUDENT_ARR) {
        if(studentarrElement.id==id){
            studentarrElement.name=name;
            studentarrElement.age=age;
            studentarrElement.gender = gender
            studentarrElement.address = address
        }else {
            console.log("没有找到具有指定 id 的对象")
        }
    }
    newFile(STUDENT_ARR,res)

})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})

function newFile(StudentArr,res){
    const newStu = JSON.stringify(StudentArr)
    const filePath = path.resolve(__dirname,"./data/students.json")
    //其实这里用then看着更好看
    fs.writeFile(filePath,newStu,(err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/students")
        }
    })

    // // 将新的数据写入到json文件中
    // fs.writeFile(
    //     path.resolve(__dirname, "./data/students.json"),
    //     JSON.stringify(STUDENT_ARR)
    // ).then(()=>{
    //     // res.redirect() 用来发起请求重定向
    //     // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求
    //
    //     res.redirect("/students")
    // }).catch(()=>{
    //     // ....
    // })
}
