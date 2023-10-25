// const path = require("node:path")


// async function fn2() {
//     return 10
// }
//
// function fn3(num) {
//     return num + 5
// }
//
// function fn4(num) {
//     return num + 10
// }
//
// function fn5(num) {
//     return num + 20
// }
//
// fn2()
//     .then(fn3)
//     .then(fn4)
//     .then(fn5)
//     .then(console.log)
//     .catch(err => console.log("出错了"))
//
//
// async function fn6() {
//     try {
//         let result = await fn2()
//         result = await fn3(result)
//         result = await fn4(result)
//         result = await fn5(result)
//         console.log(result)
//     } catch (e) {
//         console.log("出错了")
//     }
//
// }

// fn6()
// async function fn2(){
//     return 10
// }
// async function fn6(){
//     try{
//         let result = await fn2()
//         console.log(result)
//     }catch(e){
//         console.log("出错了")
//     }
//
// }
// fn6()
//
// function fn22(){
//     return new Promise(resolve => {
//         resolve(10)
//     })
// }
// fn2()
//     .then(num => console.log(num))
// async function fn(){
//     return 10
// }
// let t =fn()
// console.log(t)
//
// let t2 = new Promise(resolve => {
//     resolve(10)
// })
// console.log(t2)
// let c = {
//     age: 18
// }
// let t = {
//     name: c
// }
// console.log(t.name.age)

const a = [1, 2, 3];
a[4]=4
console.log(a)