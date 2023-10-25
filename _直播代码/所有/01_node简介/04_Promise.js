// Promise就是一个用来存储数据对象
// 但是由于Promise存取的方式的特殊，所以可以直接将异步调用的结果存储到Promise中

// 这个很重要

// 对Promise进行链式调用时
//  后边的方法（then和catch）读取的上一步的执行结果
//      如果上一步的执行结果不是当前想要的结果，则跳过当前的方法

// 逻辑上就是这步写入就写这个 这步不写入就不覆盖 下一步接着调用没覆盖的

/* 
    当Promise出现异常和reject时，而整个调用链中没有出现catch，则异常会向外抛出
*/

const promise = new Promise((resolve, reject) => {
    //一定记住 resolve 和reject 不是我们定义的 是给我们用的
    //不一定要叫resolve和reject 只是个参数名字
    // 你记住第一个位置是 正常执行 第二个参数位置是 error error可以省略就行
    reject("周一到周五19点，不见不散")
})


// catch只处理自己之前的error
//      自己throw的和后面的error不处理
promise
    .then(r => console.log("第一个then", r))
    .catch(r => {//你要是这里没有error、reject参数的话 catch 这一步直接跳过
        throw new Error("报个错玩") //catch 自己出错了 自己就不处理，有后续代码解决
        console.log("出错了")
        return "嘻嘻"
    })
    .then(r => console.log("第二个then", r))
    .catch(r => { //得这里进行处理
        console.log("出错了")
    })

/* 
    promise中的
        then (return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise,
            Promise中会存储回调函数的返回值
        finally
            - finally的返回值，不会存储到新的Promise中
*/
// promise
//     .then(result => {
//         console.log("回调函数", result)
//         return "锄禾日当午"
//     })
//     .then(result => {
//         console.log("第二个then", result)
//         return "超哥真快乐"
//     })
//     .then(result => {
//         console.log(result)
//     })


// promise.then(result => {
//     console.log(result)
// }, reason => {
//     console.log("出错了", reason)
// })

// function sum(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b)
//     }, 1000);
// }


// 最开始的问题 他的顺序有问题
function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

// sum(123, 456).then(result => {
//     sum(result, 7).then(result =>{
//         sum(result, 8).then(result => {
//             console.log(result)
//         })
//     })
// })

// sum(123, 456)
//     .then(result => result + 7)
//     .then(result => result + 8)
//     .then(result => console.log(result))


let a = promise
    .then(result => {
        console.log("回调函数", result)
        return "锄禾日当午" //等这执行的时候 是把值放到promiseResult里面
                          // 用vscode 看 webstorm 看不到
                          //想看存好的设置一个 setTimeout 定时器
    })
console.log(a)
// 为什么 a 的promise result 是undefined
// 因为先执行的是 console.log  then 是绑定事件的 在消息队列里面去了



