// 我们为什么要用promise 因为异步了
// 我们想返回d 但是因为d的值要1000ms之后才返回
// 因此d这里返回undefined 然后过三秒才打印3
// let c = function (a, b, c) {
//     let d
//     setTimeout(() => {
//         d = c(a,b)
//         console.log(d)
//     }, 1000)
//     return d
// }
//
// console.log(c(1,2,(a,b)=>{
//     return a+b
// }))


// let c = function (d,cdd,f) {
//     f(d,cdd) //这是回调函数的意思
// //     f中的参数 会在c 中给你放回来
// }
//
// c(1,2,(a,b)=>{
//     console.log(a+b)
// })
// console.log("111")


// let a = -2
// console.log(a.toString(2))
// console.log((a<<10).toString(2))
// console.log((a>>1).toString(2))

// let a = new Map
// a.set(1,2)
// a.set(21,2)
// a.set(41,2)
//
// for (const aElement of a) {
//     console.log(aElement)
// }

// function f1(){
//     console.log(this)
// }
//
// // f1()
// let a  = [1,2,3,4]
// a.forEach(function () {
//     console.log(this)
// })

// class f2{
//     constructor(a) {
//         // console.log(this)
//         a(this.#s)
//     }
//     #s(){
//         console.log(this)
//     }
// }
//
// let c = new f2((d)=>{
//     d()
// })

// 'use strict'
// function n1() {
//     console.log(this)
// }

// n1()
// let a  = [1,2,3]
// a.forEach(function (){
//     // console.log(this)
// })
//
// a.forEach(()=>{
//     console.log(this)
// })
//
// let d = {
//     f1:function (){
//         console.log(this)
//     }
// }
//
// d.f1()


// class D{
//   constructor(a) {
//       let c =[1,2,4]
//       c.forEach(()=>{
//           console.log(this)
//       })
//       c.forEach(function (){
//           console.log(this)
//       })
//       a(this.fc)
//   }
//   fc(){
//       console.log(this)
//   }
// }
//
// let d2 = new D((c)=>{
//     c()
// })


// function f1() {
//
// }
//
// console.log(f1.name)
// f1.time = 10
// console.log(f1)
//
// let t = function () {
//
// }
// console.log(t.name)
//
// function f(sayHi = function () {
// }) {
//     console.log(sayHi.name); // sayHi（生效了！）
// }
//
// f();
//
//
// function f2(a, ...b) {
//     let t = !a
//
//     if (t) {
//         for (const bElement of b) {
//             if (!bElement.length) {
//                 bElement()
//             } else {
//                 bElement(t)
//             }
//         }
//     }
// }
//
// f2(0, () => {
//     console.log("...")
// }, (a) =>console.log(a))
//
//
// let tew = function f2() {
//
// }
// console.log(f2.name)
// console.log(tew.name)
//
// let arr = [function() {}];
// console.log(arr[0].name)
//
// let t3 = function (a,d,g,c) {
// }
// console.log(t3.length)
//
// function c2(){
//     let c =10
//     console.log("dfd")
// }
// c2.c = 14
// console.log(c2)


// function makeCounter() {
//     // 不需要这个了
//     // let count = 0
//
//     function counter() {
//         return counter.count++;
//     }
//
//     counter.count = 0;
//
//     return counter;
// }
//
// let counter2 = makeCounter();
// console.log(counter2)
//
// console.log(counter2())
// console.log(counter2())

// function f3() {
//     let d= 10
//     f3.d =15
// }
//
// console.log(f3)

class C2{
    constructor(e) {
        console.log(this,2)
        e()
    }
}
class C1{
    then= ()=>{
        return new C2(()=>{
            // 即使是在C2的构造器里面
            // 在C1里面调用也是指向的是C1
            console.log(this,1)
        })
    }
}
let t = new C1()
t.then()