let myColor = ["Red","Green","White","Black"]
let myColor1=myColor.join(", ")
let myColor2=myColor.join("+ ")
console.log(myColor1,myColor2)

let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}
console.log(person.name, person.isVerified)
person.isVerified=true
delete(person.name)
person.firstName="John"
person.lastName="Snow"
let person1 = person.join(", ")
console.log(person1)