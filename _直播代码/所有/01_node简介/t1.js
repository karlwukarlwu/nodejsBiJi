// let c = function (a,b){
//     setTimeout(()=>{
//         console.log(a+b)
//     },1000)
// }
//
// let d = new Promise(( reject) => {
//     setTimeout(() => {
//         reject(1 + 3434)
//     }, 1)
//     // resolve(1)
// })
//
// let a = d.then(res => {
//     // return 1
// }, reason => { //reason可以直接省略 那意味着接不到 reject的返回值 不处理 reject
//     console.log(reason)
// })
// console.log("1231")
// console.log(a)
//
// let c2 = new Promise((resolve ,r)=> {
//     throw new Error("DFDFD")
//     return "dfdf"
// })
//
// c2.catch(re=>{
//     console.log(re)
//     throw new Error("dFDD")
// })
//
// let d3 = new Promise(resolve => {
//     return resolve()
// })
//
// d3.then()

// function sa(a, b) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 1000)
//     })
// }
//
// sa(1, 2).then(re =>
//     re + 1).then()

// const st = {
//     PENDING: 0,
//     FULFILLED: 1,
//     REJECTED: 2
// }
//
// class MP {
// //类中默认严格模式
//     lock = true
//     mid
//     status
//
//     constructor(ex) {
//         // (res,rej)=>{
//         //     res("va")
//         //     rej("re")
//         // }
//         // console.log(this)
//         ex(this.#res, this.#rej)
//     }
//
//     #res(val) {
//         console.log(this)
//         // if(this.lock){
//         //     this.mid = val
//         //     this.lock =false
//         // }
//     }
//
//     #rej(res) {
//         console.log(this)
//         // if(this.lock!==false){
//         //     this.mid =res
//         //     this.lock =false
//         // }
//     }
// }
//
//
// const mp = new MP((res, rej) => {
//     res("va")
//     rej("re")
// })


// let c = [1,23,4,5]
// console.log(c)
// c.forEach(()=>{
//     console.log(this)
// })
// c.forEach(function (){
//     console.log(this)
// })

//逻辑是构造 mp mp调用构造器 构造器调用写好的回调函数 回调函数要参数 参数在 new 里面给他赋值


// 函数的变量提升
// fc()
//
// function fc() {
//     console.log("sss")
// }
//
//
// let c = () => {
//     console.log("ccc")
// }
//
// class C1 {
//     constructor(e) {
//         e(this.c)
//         console.log(this)
//     }
//     c=()=>{
//         console.log(this)
//     }
// }
//
// let t =new C1((d)=>{
//     d()
// })
// console.log(t.__proto__ == C1.prototype)
// console.log("dd")

class c1{
    constructor(e) {
        e()
    }
}
let t = new c1(()=>{
    console.log(this)//这个指向的是global而不是C1
})

// let t1 = new Promise((r1,r2)=>{
//     r1(1)
// })
// t1.then(e=>{
//     console.log(e)//这层没有返回值所以下一层的e是undefined
// }).then(e=>{
//     console.log(e)
//     return 5//这层有返回值才有 下一层的e
// }).then(e=>{
//     console.log(e*10)
// })