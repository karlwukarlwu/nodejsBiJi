/* 

    CommonJS规范
        - 引入模块
            - 使用require("模块的路径")函数来引入模块
            - 引入自定义模块时
                - 模块名要以./ 或 ../开头
                - 扩展名可以省略
                    - 在CommonJS中，如果省略的js文件的扩展名
                        node，会自动为文件补全扩展名
                            ./m1.js 如果没有js 它会寻找 ./m1.json
                            寻找顺序
                            js --> json --> node（特殊）
            - 引入核心模块时
                - 直接写核心模块的名字即可
                - 也可以在核心模块前添加 node:
                const path = require("node:path")
            - 引入文件夹当模块
                - 如果引入的是一个文件夹，且文件夹中存在一个叫做index.js的文件 默认引入这个文件
                const hello = require("./hello") // ./hello/index.js 这个就是默认引入的文件

        - 模块的导出
        可以通过exports 一个一个的导出值
        exports.a = "孙悟空"
        exports.b = {name:"白骨精"}
        exports.c = function fn(){
            console.log("哈哈")
        }

        也可以直接通过module.exports同时导出多个值
        module.exports = {
          a: "哈哈",
          b: [1, 3, 5, 7],
          c: () =>{
                console.log(111)
            }
        }


    console.log(__filename) // __filename表示当前模块的绝对路径

    console.log(__dirname) // 当模块所在目录的路径
*/
const m1 = require("./m1")
// const path = require("path")
const path = require("node:path")

const m2 = require("./m2.cjs")

const hello = require("./hello") // ./hello/index.js

// console.log(m1)
// m1.c()

console.log(hello)
