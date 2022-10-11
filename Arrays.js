/*
Methods

join("separator")  - to append elements of an array in new variable separated by seperator

Arrow function
[function name (){}] ,  [name = () =>{}]

slice(start,end), slice(start), slice().  return the values from start to end.  If end position is greater than 
arr.length it returns elements upto last.  Slice() method does not modifies the original method.  If the start 
is undefined then it starts  extracting from zero. And if the start is greater than the index range, it
returns an empty array.  A negative index can also be used for it. For eg slice(-2) returns the last two elements.
end index is not returned.

splice(start), splice(start, deleteCount), splice(start, deleteCount, item1), splice(start, deleteCount, item1,
item2, itemN) delete the values from start to no of deletecount(if deletecount is 1 then 1 element will be deleted).  
If end position is greater than arr.length it returns elements upto last.  splice() method  modifies the original method.
It also appends item1... at the deleted position.

array declaration - const arrname=[values]
const arrname = new Array(values)

const arr=[1,2,3,4,5]
console.log(arr.push(6))  will give length of array after pushing the value to arr.
push and unshift are same but push to add in last and unshift to add in first
pop and shift are same as above for deleteing.

Mutation meaning modification in structure.
arrnamne.sort()   
.includes(string) - to search string in array
IndexOf function will always return a number.  If the searced value doesnt exist, it will return -1.

If we define an element by arrname.name="Name", it will be in temp storage and will be accessible .name key only.

*/
const newarr=new Array("I","II",3,4)  //valid declaration but should not be implemented for better traversing
console.log(newarr.push(7))           
console.log(newarr)
newarr.unshift(10)    //adding 10 to 0th position
console.log(newarr)
console.log(newarr.pop())  // will display the value popped out  In this case 7
newarr.shift()
console.log(newarr)
newarr.forEach(function(ele,i){
console.log(ele)
})
const exists = newarr.includes("II")   // to check whether newarr contains "II"
const locationOf = newarr.indexOf("II")   // to get index value of  "II"
console.log(exists)
console.log(locationOf)
{  
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
}
{
let dailyActivities = ['eat', 'sleep'];

dailyActivities.unshift('work');    //add an element at the start

console.log(dailyActivities); // ['work', 'eat', 'sleep']
}
{
    let dailyActivities = [ 'eat', 'sleep'];
    
    // this will add the new element 'exercise' at the 3 index
    dailyActivities[3] = 'exercise';  // Index 2 that is 3rd element will be undefined
    
    console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
}

{
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

dailyActivities.pop();    // remove the last element
console.log(dailyActivities); // ['work', 'eat', 'sleep']

const removedElement = dailyActivities.pop();    // remove the last element from ['work', 'eat', 'sleep']

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']
}

{
let dailyActivities = ['work', 'eat', 'sleep'];
dailyActivities.shift();  // remove the first element
console.log(dailyActivities); // ['eat', 'sleep']
}

{
const dailyActivities = [ 'eat', 'sleep'];
console.log(dailyActivities.length); // 2      this gives the total number of elements in an array
}

{
//Operations on arrays

let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];
let ages = [4, 9, 16, 25, 36, 49];
console.log("Initial declaration of dailyactivities", dailyActivities)
console.log("Initial declaration of newRoutine", newRoutine)
console.log("Initial declaration of ages", ages)

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log("Äfter sorting ", dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log("Finding index position of work", position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log("Äfter slicing 1 ", newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log("Concatenating dailyActivities and newRoutine", routine); // ["exercise", "sleep", "work", "eat"]

// filter an array
const adults = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(adults); // [25, 36, 49]

const ages_sqrt = ages.map(Math.sqrt)   //map a function to an array
console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7]


var newvar = ages.map(function(ele){
  return ele*ele
  })
    console.log("Ele * ele = ", newvar)
}

// Note: If the element is not in an array, indexOf() gives -1.

{
let arr = ['h', 'e'];
console.log(arr)
let arr1 = arr;
console.log(arr)
console.log(arr1)
arr1.push('l');

console.log(arr); // ["h", "e", "l"]   Why l is included in arr
console.log(arr1); // ["h", "e", "l"]

}

{
    
let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"
console.log(arr.length)
arr.push('Hi')
console.log(arr)
console.log(arr.length)
}

{
    
// multidimensional array.  Ways to define an array.  1st one 3 D, both rest 2D
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
console.log("Data in 2nd index of 2nd value",  data[1][1])  //4 
console.log("Data in 2nd index", data[1])
let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData1 = [student1, student2, student3];

}

{
    
//  Accessing elements of array
let x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 28]
    ];
    
    // access the first item
    console.log(x[0]); // ["Jack", 24]
    
    // access the first item of the first inner array
    console.log(x[0][0]); // Jack
    
    // access the second item of the third inner array
    console.log(x[2][1]); // 28
    
}

{
    // You can also use the Array's splice() method to add an element at a specified index. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsData.splice(1, 0, ['Peter', 24]);

console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]
}
{
// using push()

let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData[1].push('hello');

console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

}

{
    // Deleting array element using pop()
 
// remove the array element from outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]
}
{
// remove the element from the inner array
let studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1].pop();

console.log(studentsData); // [["Jack", 24], ["Sara"]]

}

{
// Iterating over Multidimensional Array

let studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((students) => {
    students.forEach((data) => {
        console.log(data);
    });
});
}

// The first forEach() method is used to iterate over the outer array elements and the second forEach() is used to iterate over the inner array elements.

//You can also use the for...of loop to iterate over the multidimensional array. For example,

let studentsData = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData) {
  for (let j of i) {
    console.log(i, j); 
  }
}

/* The main difference between .forEach and .map() is that .map() returns a new array. 
If you need the result, but do not wish to mutate the original array, .map() is the clear choice. 
If you simply need to iterate over an array, forEach is a fine choice. */

