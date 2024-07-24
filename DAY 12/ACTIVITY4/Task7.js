async function myFunc(){
    try{
    let prms = await new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10);
        if (num >= 0 && num < 6) {
            console.log(`Resolved with number: ${num}`);
            resolve(`Number ${num} is less than 6`);
        } else {
            console.log(`Rejected with number: ${num}`);
            reject(new Error(`Number ${num} is 6 or greater`));
        }
    })
    console.log(prms)     
}
    catch(error){
         console.log(error);
    }
}

myFunc();