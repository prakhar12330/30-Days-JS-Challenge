class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age}`)
    }
    updateNameAge(name, age) {
        console.log(`Name: ${this.name} and Age: ${this.age}`)
        this.name = name
        this.age = age
        console.log(`Updated Name: ${this.name} and Updated Age: ${this.age}`)
    }
}


class Student extends Person{
    constructor(name, age, studentID){
        super(name,age,studentID)
        this.studentID=studentID
    }
    returnID(){
        return this.studentID;
    }
}


const sdnt= new Student("Prakhar",22,12330)
console.log(`Student ID: ${sdnt.returnID()}`)
sdnt.greeting()