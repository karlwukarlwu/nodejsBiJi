//提出需求
function sum(a, b) {
    // const begin = Date.now(); // 让程序停10秒
    setTimeout(() => {
        console.log(a+b)
        return a+b
    },1000)
}

console.log("111111")
const result =sum(123, 456)
console.log(result)

//解决方案
function sum2(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 1000)
}

console.log("111111")

sum2(123, 456, (result) => {
    console.log(result)
})
console.log("222222")

//回调地狱
sum2(123, 456, (result) => {
    sum2(result, 789, (result) => {
        sum2(result, 100, (result) => {
            console.log(result)
        })
    })
})