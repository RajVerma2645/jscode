/*  ==, ===, !=, !===, <,>,<=,>=, &&, ||, !
If else, Switch, 

For loop, while and DO while loop, for in loop 
For (let varname in arr_name )

You should not use for...in to iterate over an array where the index order is important.
One of the better ways to iterate over an array is using the for...of loop.
You can iterate through Set elements using the for...of loop
You can iterate through Map elements using the for...of loop
You can create an iterator manually and use the for...of loop to iterate through the iterators.

Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate 
through the generators using the for...of loop

For loop is flexible.  We can define the values as per our need to access the array value whereas, for...of 
loop is finite.  It will start from first element and continue till last element
For...in loop gives index value of the array

For...each loop is just like for...of loop

For loop is equivalent to while loop and vice versa.  The difference is using of loc of initialisation, 
condition, and updation of value.

For...of Vs For...in loop

The for ...of loop is used to iterate through the values of an iterable whereas for...in loop is used
through the keys of an object.
The For...of lop cannot be used to iterate over an object whereas for...in can be used to iterate over
an iterable such arrays and strings but we should avoid using for...in for iterables.

A for loop is usually used when the number of iterations is known.  And while and do...while loops are 
usually used when the number of iterations are unknown.
The break statement is used to terminate the loop immediately when it is encountered.

The break statement terminates the loop entirely. However, the continue statement only skips the 
current iteration.

In a while loop, continue skips the current iteration and control flow of the program jumps back to the 
while condition.  The continue statement works in the same way for while and do...while loops.

You can use a label to identify a loop, and then use the break or continue statements to indicate whether 
a program should interrupt the loop or continue its execution.Note that JavaScript has no goto statement, 
you can only use labels with break or continue.  In strict mode code, you can't use "let" as a label name. 
It will throw a SyntaxError (let is a reserved identifier).

${var_name} -> returns value stored in var_name

Question - What if we define a "for" loop and it removes one of the properties that has not yet been enumerated?
Ans - That specific property will not be enumerated
*/
const a = true, b = false;
const c = 2;

// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c => 2) && (c <= 2)); // true

// logical OR
console.log(a || a); // true
console.log(a || b);  // true

console.log((c >= 2) || (c < 2)); // true

{
 // program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
}

  //The syntax of the for...in loop is:

// for (key in object) {
    // body of for...in

{
    const student = {
        name: 'Monica',
        class: 7,
        age: 12
    }
    
    // using for...in
    for ( let key in student ) {
    
        console.log(`${key} => ${student[key]}`);       // display the properties
    }
}
/*
{
    const salaries= {
        Jack : 24000,
        Paul : 34000,
        Monica : 55000
    }
    
    // using for...in
    for ( let i in salaries) {
    
        // add a currency symbol
        console.log("$" + salaries[i]);
    
        // display the value
      //  console.log(`${i} : ${salary}`);
    }
}
{
    const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}
}
{
    // array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}
}
{
    // define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
for (let [key, value] of map) {
    console.log(key + ' - ' + value);
}
}
{
console.log("Creation of Iterative function")
    // creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}
}
{
    console.log("Creation of Generator function")
    // generator function
function* generatorFunc() {

    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}
}

{
    //Labeled Continue loop
    let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;   // break could have also been used here
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
}
*/