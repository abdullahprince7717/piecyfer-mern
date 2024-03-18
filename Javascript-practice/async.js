// Callbacks

function example(cb) {
    console.log("Its a parent function!");
    const a = "Callback Arg";
    cb(a);
}

const callback = (arg) => {
    console.log(arg);
}

example(callback);

//Callback Hell

function example1(cb) {
    console.log("Its a parent function!")
    const a = "Callback Arg";
    cb(a, function (arg) {
        console.log(arg);
    });
}

const callback1 = (arg, cb) => {
    console.log(arg)
    cb("Its a callback function");
}

example1(callback1);


//Promises

const prom = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
    reject("Promise Rejected");
})

prom.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

//Promise Chaining

function f1() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("1 Promise Resolved");
        }
        else {
            reject("Promise Rejected 1st time!");
        }
    })
}

function f2(data) {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve(data + " and Promise Resolved");
        }
        else {
            reject("Promise Rejected 2nd time!");
        }
    })
}

function f3(data) {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve(data + " and Promise Resolved");
        }
        else {
            reject("Promise Rejected 3rd time!");
        }
    })
}


f1()
    .then((res) => {
        return f2(res)
    })
    .then((res) => {
        return f3(res);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })



// Promise Combinators
// Promise.all

Promise.all([f1(), f2("WOW"), f3("YES")])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })



// Promise.race

Promise.race([f1(), f2(), f3()])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })


// Promise.allSettled

Promise.allSettled([f1(), f2(), f3()])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })


// Promise.any

Promise.any([f1(), f2("2"), f3("3")])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })



// Async/Await

async function asyncExample() {
    let a = "Callback Arg";
    const res = await asyncCallback(a);
    console.log(res);
    console.log("Its a parent function!");


}

async function asyncCallback(arg) {
    console.log(arg);
    return "Its a callback function";
}

// asyncExample();


// Async/Await with Promise and try/catch 


async function asyncCallback1(arg) {
    return new Promise((resolve, reject) => {
        if (arg) {
            resolve("Promise Resolved");
        }
        else {
            reject("Promise Rejected");
        }
    })
}

async function asyncExample1() {
    try {
        const res = await asyncCallback1(false);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

asyncExample1();



// Async/Await with Promise.all

async function asyncExample2() {
    try {
        const res = await Promise.all([asyncCallback2(), asyncCallback3()]);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

async function asyncCallback2() {
    return new Promise((resolve, reject) => {
        resolve("Promise Resolved 1");
    })
}

async function asyncCallback3() {
    return new Promise((resolve, reject) => {
        resolve("Promise Resolved 2");
    })
}

asyncExample2();



// Promise Hell 

function promiseHell() {
    f1()
        .then(() => {
            f2()
                .then(() => {
                    f3()
                        .then(() => {
                            f4()
                                .then(() => {
                                    console.log("All Promises Resolved");
                                })
                                .catch((err) => {
                                    console.log(err + " 4th Promise Rejected");
                                })
                        })
                })
        })
        .catch((err) => {
            console.log(err + " 1st Promise Rejected");
        })
}

