let prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },2000);
})

prms.then(()=>{
    console.log("Promise Resolved");
}
).catch((err=>{
    console.log(err);
}));