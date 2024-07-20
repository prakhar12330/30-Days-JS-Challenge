function restSumFunction(...args){
   let total=0;
   for(const a of args){
    total+=a;
   }
   return total;
}

console.log(restSumFunction(1,2,3,4,5));