
let number =15

function fizzBuzzer(n){

    for(i = 0;i<n+1;i++){
        let outputString="";
        if(i%3==0&&i!=0){
            outputString+="Fizz";
        }
        if(i%5==0&&i!=0){
         outputString+="Buzz";
        }
        if(outputString==""){
            outputString=`${i}`;
        }
        console.log(outputString)
    }
}
fizzBuzzer(number);

