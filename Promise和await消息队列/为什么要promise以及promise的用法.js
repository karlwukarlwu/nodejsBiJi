// 1. 定义一个异步操作的函数，使用setTimeout模拟异步操作
function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 1000);
}

// 使用Promise来处理异步操作
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = 123 + 456;
        resolve(result);  // 异步操作成功，存储数据
    }, 1000);
    // reject("操作失败");  // 异步操作失败，存储错误信息
});

// 2. 使用then方法获取Promise中的数据
promise.then((result) => {
    console.log("成功:", result);
}, (reason) => {
    console.log("失败:", reason);
});

// 3. 使用catch方法处理Promise中的错误
promise.catch((reason) => {
    console.log("出错了:", reason);
});

// 4. 使用finally方法，无论成功或失败都会执行
promise.finally(() => {
    console.log("无论成功还是失败，这里都会执行");
});