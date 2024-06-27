function fizzBuzzer(n){
    let outputString="";
    if(n%3==0&&n!=0){
        outputString+="Fizz";
    }
    if(n%5==0&&n!=0){
        outputString+="Buzz";
    }
    if(outputString==""){
        outputString=`${n}`;
    }
    console.log(outputString)
}

for(i = -15;i<16;i++){
    fizzBuzzer(i);
}