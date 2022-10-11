let result =String(324)
console.log(typeof result, result)
result1=Number(result)
console.log(typeof result1, result1)

var string = "I Love my India"
var string1 = "I Love my India        "

console.log(string.length, string)
console.log(string1.length, string1)

reversing(string,"")
reversing(string1," ")

function reversing(string,seperator){
    rev= string.split(seperator).reverse().join(seperator)
    console.log(rev)

}