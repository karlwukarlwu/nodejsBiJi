/* 
    静态方法
        Promise.resolve() 创建一个立即完成的Promise
        等价 new Promise(re=>{
                    re()
         })

        Promise.reject() 创建一个立即拒绝的Promise
        Promise.all([...]) 同时返回多个Promise的执行结果
            其中有一个报错，就返回错误
        Promise.allSettled([...]) 同时返回多个Promise的执行结果(无论成功或失败)
           {status: 'fulfilled', value: 579}
           {status: 'rejected', reason: '哈哈'}
        Promise.race([...]) 返回执行最快的Promise（不考虑对错）
        Promise.any([...]) 返回执行最快的完成的Promise
        race 和 any的区别👇
//         https://blog.csdn.net/wq18512847606/article/details/
            113951436#:~:text=Promise.race%20%E8%BF%94%E5%9B%9E%20p1%2Cp2%2
            Cp3%20%E6%9C%80%E5%85%88%E6%89%A7%E8%A1%8C%E7%9A%84%20Promise%20%E5%
            AE%9E%E4%BE%8B%E7%9A%84%20value%20%E6%88%96%E8%80%85,p1%2Cp2%2Cp3%20%E6%9
            C%80%E7%BB%88%E7%8A%B6%E6%80%81%E9%83%BD%E6%98%AF%20reject%20%E5%88%99%E8%B
            F%94%E5%9B%9E%20All%20promises%20were%20rejected%E3%80%82
*/

// Promise.resolve(10).then(r => console.log(r))

// Promise.reject("错误")

// new Promise((resolve, reject) => {
//     resolve(10)
// })

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}


// Promise.all([...]) 同时返回多个Promise的执行结果
// 返回的是一个数组，数组中存储着所有Promise的执行结果
// 其中有一个报错，就返回错误
// Promise.all([sum(1, 2), sum(2, 3), sum(3, 4)]).then (r =>{
//     console.log(r)
// })

// Promise.all([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("哈哈"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })


// Promise.allSettled([...]) 同时返回多个Promise的执行结果(无论成功或失败)
// 返回的是一对象数组，数组中存储着所有Promise的执行结果 无论成功或失败
// {status: 'fulfilled', value: 579}
// {status: 'rejected', reason: '哈哈'}\
// 看不到打断点调试

// Promise.allSettled([
//     sum(123, 456),
//     sum(5, 6),
//     Promise.reject("哈哈"),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })


//        Promise.race([...]) 返回执行最快的Promise（不考虑对错）
//        then只输出对的 想看错的得catch没有catch直接给你报错
// Promise.race([
//     sum(5, 6),
//     // Promise.reject(1111),
//     sum(123, 456),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误")
// })
//
// Promise.any([
//     Promise.reject(1111),
//     Promise.reject(2222),
//     Promise.reject(3333),
//     Promise.resolve(123)
// ]).then(r => {
//     console.log(r)
// }).catch(r => {
//     console.log("错误", r)
// })

setTimeout(() => {
    console.log(1111)
})

Promise.resolve()
    .then(() => {
        console.log(2222)
    })


// console.log(22222)