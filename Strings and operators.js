/* === Strict equal to operator
(!==) Strict not equal to operator

 & Bitwise and Op
   | Bitwise or Op
   ^ Bitwise XOR Op
   ~ Bitwise NOT
   << Left shift
   >> Sign-propagating right shift
   >>> Zero-fill right shift 

   ,  evalutes multiple values and returns last operand entered
   ternary operator
   ?: returns value based on condition,  (5>3) ?: success / fail -  sucess
   delete deletes an object's property or an element of an array,  delete x
   typeof - returns type of variable/const
   void - discard the object return value
   in - returns true if property exists in object, prop in object name
   instanceof - returns true if specified object is of the specified object type, object instanceof object_type */

   const a = "Hello"
   console.log(a[2])    // returns l
   console.log(a.charAt(4))  // returns o

// 'Javascript strings are immutable, means we ' +
  'cannot change the value.  However, we can assign' +
   'new value to the var.'

   let ab = "hello"
console.log(ab[0])
ab = "Hello"
console.log(ab[0])

/* Javascript String Objects
Constructor - Returns a reference to the string function that created the object
Length - Returns the length of the string
Prototype- Allows you to add properties and methods to an object

String methods
charAt(index)   -   return the char at index pos.  obj.charAt(4)
concat()    -   Joins two or more strings
replace()   -   replace the string to an array of strings
split()     -   converts the string to an array of strings            
substr(start,length)-    returns a part of a string
substr (start, end) -   returns a part of a string
slice (start, end)  -   returns a part of a string 
toLowerCase()   -   Change case
toUpperCase()   -   Change case
trim()      -   removes whitespace from the string
includes()  -   searches for a string and returns a Boolean value
search()    -   searches for a string and returns a position of a match
*/

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

//Use (\) backspace char to use special char in strings \"Peter\"

/*  \" for double quotes. \\for backslash.  \n new line. \r carriage return
    \v vertical tab, \t horizontal tab, \b backspace, \f formfeed */


// concatenation operator
console.log('hello' + 'world');

let abc = 'JavaScript';

abc += ' tutorial';  // abc = abc + ' tutorial';
console.log(abc);

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence)

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord)

// Output becomes Guide! Javascript this to Welcome
var reverseEachWord = reverseBySeparator(string, " ");
console.log(reverseEachWord)

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);

}

// The spread operator is also indicated by the ... operator. 
// It’ll spread an object’s property into another object and 
// spread the array entries into another array.
const foo = [1, 2, 3];
const bar = [3, 4, 5];
const baz = [...foo, ...bar];
console.log(baz);


var test = "Learning javascript with Almabetter"
var len = test.length
console.log("Length is ", len)
var str = "Almabetter"
//var result = Boolean(str in test) 
// var  sliced_content = slice