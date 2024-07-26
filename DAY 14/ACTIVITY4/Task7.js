class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age}`)
    }
    get fullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}


let prsn= new Person("Prakhar","Singh",22)
//you are able to access fullName method as a property
prsn.fullName

