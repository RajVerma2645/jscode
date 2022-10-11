let myColor = ["Red","Green","White","Black"]
for (i=0;i<myColor.length; i++)
console.log(myColor[i])
let newmyColor= myColor.map(i)
console.log(newmyColor)

//  
let strings = ["avengers", "captain america", "ironman", "black panther"];
let newarr = strings.map(string => {return string.toUpperCase()})
console.log(newarr)