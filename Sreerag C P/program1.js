const handleCalculator =(a,b,operation)=>{
    if(operation==="addition"){
        return a+b
    }
    if(operation==="substraction"){
        return a-b
    }
    if(operation==="divison"){
        return a/b
    }
    if(operation==="multiplication"){
        return a*b
    }
    else{
        return "input proper operation"
    }
}

const data = handleCalculator(1,2,"divison")