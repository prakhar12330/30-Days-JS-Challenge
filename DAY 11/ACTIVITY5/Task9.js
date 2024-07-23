let prms1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st resolved");
    }, 6000);
});

let prms2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2nd resolved");
    }, 5000);
})
let prms3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3rd resolved");
    }, 4000);
})

Promise.race([prms1, prms2, prms3]).then((value) => {
    console.log(value);
})