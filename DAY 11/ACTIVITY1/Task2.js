let prms = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("Failed"));
    },2000)
})
prms.then(function(){
    console.log("Resolved");
}).catch(function(err){
    console.log(`${err}`);
})