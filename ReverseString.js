{
    var teststring = "This is Almabetter course. "+  
"This is fine course "

var revteststr = teststring.split(" ").reverse().join(" ")
console.log(revteststr)
var revteststr1 = teststring.split("").reverse().join("")
console.log(revteststr1)

var revteststr2 = teststring.split("\n").reverse().join("")
console.log(revteststr2)
}
{
let str="I live in Jodhpur"
let strrev=''

for (i=str.length-1;i>=0;i--)
   strrev += str[i]
   
   console.log(strrev)
}