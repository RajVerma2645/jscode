{
    const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter());  //result 20
  console.log(shape.perimeter());  // result 20 and NaN
  console.log(typeof shape.perimeter()) // object
}

{
    [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
}
{
    const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
console.log("Printing data of array of numbers", arrayOfNumbers)

}
{
    let newList = [1, 2, 3].push(4);
// console.log(newList.push(5));
}

{
    const nums = [1, 2, 3];

nums.slice(0, 1)
console.log(nums);
nums.splice(0, 1)
console.log(nums);
nums.unshift(4)

console.log(nums);
}

{
    const emojis = ['a', 'b', 'c', 'd'];
    emojis.push('e');
    emojis.splice(0, 2);
    // emojis = [...emojis, 'f'];
    emojis.length = 0;
}

{
    const config = {
        languages: [],
        set language(lang) {
        return this.languages.push(lang);
        },
        };
        
        console.log(config.language);
}

{
    var capitals = [{ // creating an object 'capital' with
        "Burma": "Naypyitaw",
        "Burma": "Ji" // key "Burma" and value "Naypitaw"
    }];
    console.log(capitals);

    function rename() { // function to rename on button click
        capitals = capitals.map(function(obj) {
            obj['Myanmar'] = obj['Burma']; // Assign new key
            delete obj['Burma']; // Delete old key
            return obj;
        });
        console.log(capitals);
    }
    rename()
}


    let strings = ["avengers", "captain america", "ironman", "black panther"]
let newarr = strings.map(function(caps){
    return caps.toUpperCase()
});
console.log(newarr)
