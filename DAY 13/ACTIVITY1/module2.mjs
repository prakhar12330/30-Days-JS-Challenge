const person={
    name: "Prakhar Singh",
    enrollmentNo: 201194,
    department: "CSE",
    hostelName: "H6",
    roomNo: "6",
    printDetails(){
        console.log(`Name:${this.name}`)
        console.log(`EnrNo:${this.enrollmentNo}`)
        console.log(`Hostel:${this.hostelName}/${this.roomNo}`);
    }
}

export {person}