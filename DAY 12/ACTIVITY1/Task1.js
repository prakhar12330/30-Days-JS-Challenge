function throwError() {
    throw new Error("Failed, An Error Is Caught");
}

try{
    throwError();
}
catch(error){
   console.log(error);
}


