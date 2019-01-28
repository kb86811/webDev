var check;
while(check !=="yes" || check !== "yeah"){
    check=prompt("are we there yea? ");
}
alert("we are there now");

for(var i=-10; i<20;i++ ){
    console.log(i);
}
// print odd numbers between 300 and 333
for(var i=300; i<=333;i++){
    if((i%2)===1){
        console.log(i);
    }
}
//prints all numbers divisible by 5 and 3 
for(var i=5;i<50;i++){
    if((i%3==0) && (i%5===0)){
        console.log(i);
    }

}
