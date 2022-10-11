/* JavaScript Sets

Properties

A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
A Set can hold any value of any data type. You can create a JavaScript Set by:
Passing an Array to new Set(). Create a new Set and use add() to add values
Create a new Set and use add() to add variables 

typeof returns object:
instanceof Set returns true:

JavaScript Maps

A Map holds key-value pairs where the keys can be any datatype.  A Map remembers the original insertion order
 of the keys.  A Map has a property that represents the size of the map. You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()

JSON

JSON data requires double-quotes for the key
The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs
JSON array is written inside square brackets [ ].
JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot 
contain functions as values. 

You can convert JSON data to a JavaScript object using the built-in JSON.parse() function
SON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

JSON is language independent. You can create and use JSON in other programming languages too

Converting JavaScript Object to JSON
You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 


Methods

new Set() - to initialise new set
add()     - to add item in set
delete()  - to delete item from set
has()     - to check for existence of a value in set
mySet.clear();         //clears all the values in the set
forEach()       -   The forEach() method invokes a function for each Set element:
values()        -   The values() method returns an Iterator object containing all the values in a Set:
keys()
entries()
new Map()       - to initialise a map by passing an array_name.   new Map() is a constructor.
parse()
get()           - to get the  value from set  by giving key   .get("keyname")
clear()         - to delete all Map elements
.instanceof     - Returns true if true  

Set vs Array
The major difference is that arrays can hold duplicate values where as sets cannot.  In arrays, values are 
accessed by index position and in case of sets the values are iterable in the order of insertion.  To add elements
in array, we use the push function and with sets we use the add function. Similarly to remove elements from
set we have the delete function but in case of arrays if we need to remove the last element we use pop and 
for the first element we can use shift function.

*/

// Create a Set
{ const letters = new Set(["a","b","c"]);}

// Create a Set
{const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");}

{// Create Variables
const a = "a", b = "b", c = "c";
// Create a Set
const letters = new Set();
// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);}

// Create a Set
const letters = new Set(["a","b","c","d","b"]);  //only unique values will be stored

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log("The values are", text)
console.log(letters.values())  // ??
console.log(letters.keys())  // A A Set has no keys.  So values(), keys() are same.
console.log(letters.entries())  // A A Set has no keys.  So it displays result in the form of [values, values].


//entries() returns [value,value] pairs instead of [key,value] pairs.

{
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
}

{
    // Create a Map.  You can add elements to a Map with the set() method:
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits.size)
console.log(fruits instanceof Set)  // false because we have defined fruits as Map
console.log(fruits instanceof Map)  // true because we have defined fruits as Map
}

