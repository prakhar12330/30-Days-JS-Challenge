function fetchData(data,delay){
   let prms=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },delay)
   });

   return prms;
}

fetchData("Fetching from server 1",1000)
.then((data)=>{
    console.log(data);
    return fetchData("Fetching from server 2",1000);
})
.then((data)=>{
    console.log(data);
    return fetchData("Fetching from server 3",1000);
}).then((data)=>{
    console.log(data);
    console.log("Fetch Complete!!!!");
}).catch((err)=>{
    console.log(err);
})

