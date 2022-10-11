/* 
 Map.clear( ) Method    -   It deletes all the elements in the set
 Map.delete(key) Method   -   It deletes the pair of key-values for that particular key passed as parameter.
 Map.entries( ) Method -  This method returns an iterator that contains an array of [key,value] for each element in the map.
 Map.forEach() Method
 Map.get( ) Method    -   It returns the value associated with the key. If there is no such key then it returns undefined.
 Map.has(key) Method    -   It returns a boolean value based on whether the key is present in the set or not.
Map.keys() Method
.size() -   It returns the no. of items in the set.
set(key, value) – This method adds the pair of key and value.

Map vs Object
As we know, an object also allows us to store key-value pairs and retrieve them but there are some 
differences between a map and an object. Let us have a look at them:  In object, the key is always 
a string or a symbol whereas in the case of map, you can use any type be it functions, objects or 
primitive types. In Map, you can check the number of elements with the help of size. Objects does 
not allows this.  When you have a huge amount of data where you want to add or delete elements frequently,
 then in such a case the performance of maps is better than objects.  A map is always ordered and iterable. But
 objects are not ordered and iterable.

*/

let mp=new Map()
mp.set("a",11);
mp.set("b",2);
mp.set("c",5);
console.log(mp.keys())
console.log(mp.values())
console.log(mp)
