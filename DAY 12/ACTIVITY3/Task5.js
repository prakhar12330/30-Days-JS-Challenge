class myError extends Error{
    constructor(message,errorCode){
         super(message);
         this.errorCode=errorCode;
    }
}

function checkInput(str){
     if(str?.trim()===""){
        throw new Error("String is empty",400);
     }
     else{
        return `The string is: ${str}`;
     }
}

try {
   console.log(checkInput(""));
}
catch (error) {
    console.log(error);
}
