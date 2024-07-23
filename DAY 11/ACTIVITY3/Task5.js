async function asyFun() {
   try{ 
    let prms = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed"));
        }, 3000)
    })
    console.log(prms);
    }
    catch(err){
        console.log(`${err}`);
    }
}

asyFun();

