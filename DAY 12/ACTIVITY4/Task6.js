let prms = new Promise((resolve,reject)=>{
   const num=Math.floor(Math.random()*10);
   if(num>=0 && num<6){
      resolve("Promise Resolved");
   }else{
      reject(new Error("Promise Rejected"));
   }
   console.log(num)
})

prms.then((value)=>{
    console.log(value);

}).catch((error)=>{
     console.log(`${error}`);
})