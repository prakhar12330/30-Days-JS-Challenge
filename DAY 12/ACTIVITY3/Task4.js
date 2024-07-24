class myError extends Error{
    constructor(message){
        super(message);
    }
}

try{
      if(1!=2){
        throw new myError("Not equal");
      }
}
catch(error){
     console.log(error);
}
