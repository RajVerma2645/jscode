var string = "My name is Mr Shiv Shankar"     //Passed a line
var searchstring = "ShIv"                   // String to searched passed
var result = string.toUpperCase().includes(searchstring.toUpperCase())   // verified for existence of substring.  Without case sensitive 
var result1 = string.includes(searchstring)   // verified for existence of exact substring.  Case sensitive

if (result == 1)         //result is true since we have passed ShIv, which is Shiv.  Without case sensitive
{
    result = "Found"
    var loc = string.toUpperCase().indexOf(searchstring.toUpperCase()) //find starting index of substring in string
}
else
result = "Not found"

console.log(result)
console.log("Found at index " , loc)
console.log(string.slice(loc,loc+searchstring.length))
console.log(result1)                     //result1 false since we have passed ShIv, which is not exactly Shiv.