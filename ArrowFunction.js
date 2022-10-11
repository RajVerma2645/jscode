{
    var names=["Shiv","Raj","Aditya","Deepika"]
    
    function returnNameStartsWith(item){
        return item.startsWith("S")
        }
    
    var result = names.filter(returnNameStartsWith)
    
    console.log(result)
    }

    {
        var names=["Shiv","Raj","Aditya","Deepika"]
        
  //      function returnNameStartsWith(item){
    //        return item.startsWith("S")
      //      }
        
        var result = names.filter(item => item.startsWith("D"))  //converted returnNameStartsWith function
        
        console.log(result)
        }
    