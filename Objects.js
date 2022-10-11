/*  JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
You do not need to create classes in order to create objects.
Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.
In JavaScript, "key: value" pairs are called properties.
To access a property of an object from within a method of the same object, you need to use 
the this keyword. 




*/

// object
const student = {
    firstName: 'ram',
    class: 10
};

// object creation
const person = {
    name: 'John',
    age: 20
};
console.log(typeof person); // object

//You can also define an object in a single line.  const person = { name: 'John', age: 20 };
//In JavaScript, "key: value" pairs are called properties.

// accessing property
console.log(person.name); // John

//Here is the syntax of the bracket notation.  objectName["propertyName"]

// accessing property
console.log(person["name"]); // John

{
    // An object can also contain another object. For example,

// nested object
const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

}

// In JavaScript, an object can also contain a function. For example,

{
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() {
        console.log('Hello', this.name) }
}

console.log(person.greet,  person.name); // hello

person.greet(); // ƒ () { console.log('hello'); }
}

/* A JavaScript method is a property containing a function declaration. basically, the JavaScript method is an
object property that has a function value.  JSON data can contain objects and arrays. However, unlike JavaScript 
objects, JSON data cannot contain functions as values
the parseInt() method of Number object is used to convert numeric string value to an integer value.
*/

{
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();
}
console.warn("Please re check")

/*
Destructuring property for customised viewing 

const userActivity3 = { 
                name: "Rahul", 
                jobTitle: "JS Instructor@almabetter.com", 
                work: "rahul@microsoft.com", 
                region: "Hyderabad" 
              }
              
              const { name, jobTitle, work } = userActivity3;
              console.log(name, jobTitle, work);
              */
