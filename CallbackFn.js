// {
//     function CallDB(){      // TASK ONE
//     //inbuilt function which delays the execution
//     setTimeout(()=>{
//         console.log("CallDB is done")
//         return 50;
//     }, 4000);

const { rejects } = require("assert");
const { Console } = require("console");
const { resolve } = require("path");

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


//    //Example 2
{
function doHomeWork(){
    setTimeout(()=> {console.log("Homework Completed")},1000)
}
function CompletedHW (){
    console.log("Submitted")
}
doHomeWork();
CompletedHW();
}



{
    function doHomeWork(cb){
    setTimeout(()=> {
        console.log("Homework Completed")
    cb()
    },5000)
}

function completedHW (){
    console.log("Submitted")
}

doHomeWork(completedHW);

}
 
const promise = new Promise(resolve(), rejects());          //syntax of promise declaration