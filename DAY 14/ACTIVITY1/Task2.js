class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age}`)
    }
    updateNameAge(name,age){
        console.log(`Name: ${this.name} and Age: ${this.age}`)
         this.name=name
         this.age=age
         console.log(`Updated Name: ${this.name} and Updated Age: ${this.age}`)
    }
}


const personObj = new Person("Prakhar", 22);
personObj.updateNameAge("Prerna",12)