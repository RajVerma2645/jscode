/*  JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot 
contain  functions as values
JSON Vs JS Obj

The key in the key/value pairs should be in double quotes.
JSON cannot contain function.
JSON can be created and used by other programming languages.

JS Obj - They key in the key/value pair can be without double quotes.
JS Obj can contain functions.
JS Obj can only be used in JS.

JSON.parse() function to convert JSON to Javascript Obj
JSON.stringify() function to  convert JS obj to JSON
*/
// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John

// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

{
    let user = {
        name: "Piyush",
        age: 24,
      };
      
      for (let key in user) {
        alert( key );  // name, age
        alert( user[key] ); // Piyush, 24
      }
}

{
    {
        // json object
    const jsonData = '{ "name": "John", "age": 22 }';
    
    // converting to JavaScript object
    const obj = JSON.parse(jsonData);
    
    // accessing the data
    console.log(obj.age); // 22
    console.log(obj.name); // John
    
    }
    
    {
        // JavaScript object
    const jsonData = { name: "John", age: 22 };
    
    // converting to JSON
    const obj = JSON.stringify(jsonData);
    
    // accessing the data
    console.log(obj); // "{"name":"John","age":22}"  compare with input line 
    
    }
    
    {const settings = {
        username: 'lydiahallie',
        level: 19,
        health: 90,
      };
      
      const data = JSON.stringify(settings, ['level', 'health']);
      console.log(data);// "{"level":19, "health":90}"
      const data1 = JSON.stringify(settings,);  // all key:value pairs
      console.log(data1);// "{"level":19, "health":90}"
      const data2 = JSON.stringify(settings, []);
      console.log(data2);// "{No value}"
     /* The second argument of JSON.stringify is the replacer. The replacer can either be a function or an 
     array, and lets you control what and how the values should be stringified.  If the replacer is an array, 
     only the property names included in the array will be added to the JSON string. In this case, only the 
     properties with the names "level" and "health" are included, "username" is excluded. **data**is now equal 
     to "{"level":19, "health":90}".  If the replacer is a function, this function gets called on every 
     property in the object you're stringifying. The value returned from this function will be the value of the 
     property when it's added to the JSON string. If the value is undefined, this property is excluded from the 
     JSON string.   */
    }
    
}