// {
//     let strings = ["newyork","jersey"]
// console.log(strings.length)
// let strings1=[];
// for (i=0; i<strings.length; i++) {
// strings1[i] = strings[i].toUpperCase()
// }
// }
// {

// {
//     let strings = ["avengers", "captain america", "ironman", "black panther"];
// console.log(strings.map(string => string.toUpperCase()));

// }
// {
//     const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// let newarr = inputWords.filter(string => {return string.length >5})
// console.log(newarr)
// }

// {
//     let inputWords = ["spray", "limit", "elite", "exuberant","destruction", "present"];
// let filtered =[]
// console.log(inputWords.length)
// for (i=0,j=0; i<inputWords.length;i++){
// console.log(inputWords[i])
// if (inputWords[i].length > 5) {
// filtered [j] =inputWords[i]
// j+=1}}
// console.log(filtered);
// }

// {
//     let inputWords = ["spray", "limit", "elite", "exuberant","destruction", "present"];
// let filtered = inputWords.filter(words => words.length >6)
// console.log(filtered);
// }

// {
//     const inputWords = ["spray", "limit", "elite", "exuberant","destruction", "present"];
// console.log(inputWords.filter(words => words.length > 6))
// }

// const MultiD_arr=[1,[[1,2]],[3]]
// console.log(MultiD_arr)    

const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, 
{ name: 'Silver Surfer' } ]
var heros1=[]
function rename(){
 const heros1 = heros.map(function(obj) {
        obj["id: "+heros.indexOf(obj)+" hero"] = obj["name"]
        delete obj["name"]
        return obj
    })
}
rename()
for (i=0;i< heros1.length;i++) 
    console.log(heros1[i])

console.log(heros)
console.table(heros1)
