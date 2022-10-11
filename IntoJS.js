/* You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor().


let result;

result = parseInt('20.01');

console.log(result); // 20

result = parseFloat('20.01');

console.log(result); // 20.01

result = +'20.01';

console.log(result); // 20.01

result = Math.floor('20.01');

console.log(result); // 20


To convert other data types to strings, you can use either String() or toString().  String() takes null 
 and undefined and converts them to string. However, toString() gives error when null are passed.
   
//number to string

let result;

result = String(324);

console.log(result);  // "324"

result = String(2 + 4);

console.log(result); // "6"

//other data types to string

result = String(null);

console.log(result); // "null"

result = String(undefined);

console.log(result); // "undefined"

result = String(NaN);

console.log(result); // "NaN"

result = String(true);

console.log(result); // "true"

result = String(false);

console.log(result); // "false"

// using toString()

result = (324).toString();

console.log(result); // "324"

result = true.toString();

console.log(result); // "true"

To convert other data types to a Boolean, you can use Boolean(). In JavaScript, undefined, null, 0, 
NaN, '' converts to false.   All other values give true.

Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop 
checks. To understand boolean coercion in if statements and operators, we need to understand truthy and 
falsy values. Truthy values are those which will be converted (coerced) to true. Falsy values are those 
which will be converted to false. All values except false, 0, 0n, -0, “”, null, undefined, and NaN are 
truthy values.

Logical operators: Logical operators in javascript, unlike operators in other programming languages, 
do not return true or false. They always return one of the operands.OR ( | | ) operator - If the first 
value is truthy, then the first value is returned. Otherwise, always the second value gets returned.AND 
( && ) operator - If both the values are truthy, always the second value is returned. If the first value 
is falsy then the first value is returned or if the second value is falsy then the second value is returned.
