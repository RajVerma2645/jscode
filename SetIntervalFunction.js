//Not working

var countdown = function (numb){
    let num= parseInt(numb-1)
    let output=""
    setInterval(add(), 1000)
     
    function add(){
         if (num==0)
           return output += "DONE"; 
          {
            output += (num.toString() +" ")
            console.log(num)
            num--;
          }
                   }
}
    var result = countdown (4)
    console.log(result)