async function asyFun(){
    let prms=await new Promise((resolve,reject)=>{
         setTimeout(()=>{
                resolve("Resolved");
         },3000)
    })
    console.log("Hieeee");
    return prms;
}

asyFun().then((str)=>{
     console.log(str);
});