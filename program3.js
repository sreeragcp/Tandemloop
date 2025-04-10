const handleOutput = (input)=>{
    
    if(input%2==0){
       input = input-1
    }
    else{
        input=input
    }
    for(let i=0;i<=input-1;i++){
        let sum =0
        sum = sum+i*2+1
        console.log(sum);
    }
}
const data = handleOutput(4)