//Task 11,12,13
let username="prakhar1233037313323082002xsingh";
let flag=false;


let countTwo = 0;
for(let i=0;i<username.length;i++){
    if (username[i] == 'p' && username[i] == 'x'){
        console.log(`contains both 'p' and 'x`);
    }
    else if(username[i]=='2' || username[i]=='3'){
        countTwo++;
        console.log(`containes any of 2 or 3`);
    }
    else if(!flag){
        console.log(username);
    }
}