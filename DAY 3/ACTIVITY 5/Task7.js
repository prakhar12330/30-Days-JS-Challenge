const year=2024;

// leap year if perfectly divisible by 400

// not a leap year if divisible by 100
// but not divisible by 400

// leap year if not divisible by 100
// but divisible by 4

if(year%400===0 ){
    console.log(`Year is a leap year`);
}
else if(year%100===0){
    console.log(`Year is not a leap year`);
}
else if(year%4===0){
    console.log(`Year is a leap year`);
}
else{
    console.log(`Year is not a leap year`);
}