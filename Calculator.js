function calculator(int, int1, opr){
    let x=parseInt(int); 
    let y=parseInt(int1);
    opr=opr.toString()
    
    if (opr == "+")
        opr=1;
    
        else if (opr == "-")
        opr=2;
    
        else if (opr == "*")
        opr=3;
        
        else if (opr == "/")
        opr=4;
    
        else {
        console.log("Invalid mathematical sign")
        return
        }
        
     switch (opr)  
    {
        case 1 :
            console.log(x+y);
            break;
    
        case 2 :
            console.log(x-y);
            break;
    
        case 3 :
            console.log(x*y);
            break;
    
        case 4 : 
            if (y!=0){ 
            console.log(x/y);
            break;}
    
            else
            {
            console.log("Division by zero not possible");
            break;}
    
        default:
            console.log("Invalid mathematical sign")
            break;
    }
    }
    
    calculator(6, 2, '&') 