const  handleGetCount = (input)=>{
    const count = {}
    for(let i=1;i<=9;i++){

        let sum = 0
      for(let j=0;j<input?.length;j++){
           if(input[j]%i===0){
             sum=sum+1
           }
            count[i]= sum
      }
      
    }
     return count
}

const data = handleGetCount([1,2,8,9,12,46,76,82,15,20,30])