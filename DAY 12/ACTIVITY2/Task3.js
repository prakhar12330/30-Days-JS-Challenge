function checkFlow() {
    console.log("Try block has the control!!!!");
    // throw new Error();
}

try {
    checkFlow();
}
catch (error) {
    console.log(error);
}
finally{
    console.log("Finally block has the control!!!!");
}
