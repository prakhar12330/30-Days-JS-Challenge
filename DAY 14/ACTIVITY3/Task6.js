class Student{
    static count=0;
    //counstructor run every time an ocject is created
    constructor(name, age, studentID) {
        this.name = name
        this.age = age
        this.studentID = studentID
        Student.count++;
    }

    returnID() {
        return this.studentID;
    }
    greeting() {
        console.log(`Hello! My name is: ${this.name} and my age is: ${this.age} and ID is: ${this.studentID}`)
    }

    static getCount(){
        console.log(`Total number of students: ${Student.count}`);
    }
}

let student1 = new Student('Alice', 20, 'S12345');
let student2 = new Student('Bob', 22, 'S12346');
let student3 = new Student('Charlie', 21, 'S12347');

Student.getCount()
