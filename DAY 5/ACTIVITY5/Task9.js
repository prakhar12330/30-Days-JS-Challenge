function sayHello(){
    console.log("Hello");
}
const callFunction=(sayHello,times)=>{
     for(let i=0;i<times;i++){
        sayHello();
     }
}

callFunction(sayHello,5);