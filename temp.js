// const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

// function myCallback(a, b)
// {
//  // Your code here
//  // Parameters are purely optional.
//  console.log(a);
//  console.log(b);
// }


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var s = "bcd"
    const re = (s.charAt(0)== s.charAt(s.length-1)) ? "true" : "false" 
    return re;
       /*
     * Do not remove the return statement
     */

    
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}