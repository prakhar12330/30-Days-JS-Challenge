function divideTwoNum(a,b) {
     if(!b){
        throw new Error("Denominator is zero");
     }
     else{
        return Math.round(a/b);
     }
}

try{
    console.log(divideTwoNum(24,0))
}
catch(error){
   console.log(error);
}