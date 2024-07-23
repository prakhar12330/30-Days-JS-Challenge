let prms1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1st resolved");
    }, 2000);
});

let prms2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2nd resolved");
    }, 3000);
})
let prms3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3rd resolved");
    }, 4000);
})

Promise.all([prms1,prms2,prms3]).then((value)=>{
    console.log(value);
    console.log("all resolved.....");
})