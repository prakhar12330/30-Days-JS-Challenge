console.log("------Reassignment Using Let------");
let assignedValue = "Hello";
console.log(`Value of variable before reassignment (when let is used) is: ${assignedValue}`);
assignedValue = "Bye";
console.log(`Value of variable after reassignment (when let is used) is: ${assignedValue}`);

console.log("------Reassignment Using Const------");
const assignedValueConst = "Hello";
console.log(`Value of variable before reassignment (when const is used) is: ${assignedValueConst}`);
try{
    assignedValueConst = "Bye";
}
catch(err){
    console.log(`Value of variable after reassignment (when const is used) is: ${err.name} and the reason for ERROR is: ${err.message}`);
}

