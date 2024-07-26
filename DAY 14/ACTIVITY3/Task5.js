class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age}`)
    }
}

Person.greeting()