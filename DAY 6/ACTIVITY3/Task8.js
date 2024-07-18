const arr=[1,2,3,4,5,6,7,8,9,10];

const result=arr.filter((currentValue)=>{
     if(currentValue%2===0)return currentValue;
})

console.log(result);