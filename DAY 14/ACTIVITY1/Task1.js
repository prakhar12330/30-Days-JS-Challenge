class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age}`)
    }
}


const personObj = new Person("Prakhar", 22);
personObj.greeting();