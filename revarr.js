
let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
let revarr =[]
let i=0
for (j=arr.length-1;j>=0;j--){
    revarr[i]=arr[j]
    i++}

//for (i=0;i<=revarr.length-1;i++){
    console.log(revarr)
//}

/* not working properly

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
let revarr =new Map()
let i=0
for (j=arr.length-1;j>=0;j--){
    revarr.set(arr[j])
    i++}

for (i=0;i<=revarr.length-1;i++){
    console.log(revarr[i])
}

function processData(input) { 
    for (let i = 0; i < input.length; i++){ 
        if (i % 2 === 0){ 
            var evenum = input[i]; 
            console.log(evenum); } } }; 
processData("hacker  rekcah");

// Not working  Practice question Loops and Iterations Q No 3

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
let revarr =""
let i=0
for (j=arr.length-1;j>=0;j--){
    revarr  +=  (arr[ j ]+" ")
    i++}

//for (i=0;i<=revarr.length-1;i++){
    console.log(revarr)
*/