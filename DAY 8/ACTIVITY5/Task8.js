let obj={
    name:"Prakhar",
    age:22,
    dob:"23/08/2002",
    printDetails(){
        console.log(`My name is:${this.name}, my age is:${this.age} and my dob is:${this.dob}`);
    }
}

console.log(obj);
obj.printDetails();