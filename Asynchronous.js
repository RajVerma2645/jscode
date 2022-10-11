// {
//     function CallDB(){      // TASK ONE
//     //inbuilt function which delays the execution
//     setTimeout(()=>{
//         console.log("CallDB is done")
//         return 50;
//     }, 4000);

//     }

//     const result = CallDB();
//     console.log(result)         // TASK TWO
//}


   // Typical call back function
//{
//     function CallDB(print){         // LET THIS BE TASK 1 COMPARE WITH ABOVE ONE
//     //inbuilt function which delays the execution
//     setTimeout(()=>{
//         console.log("CallDB is done")
//         print(50);
//     }, 4000);
//     }
// }
// //TASK 2
// const print=function(data){
//     console.log(data)
// }

// const result = CallDB(print);



const fs = require("fs");

const printdata = function(err, data){
    if(!err){
        console.log(data.toString());
    }
        console.log("File Not found")
    
}

fs.readFile("data.txt",printdata)

