/* What’s the spread operator?

The spread operator is also indicated by the ... operator. It’ll spread an object’s property into another object and spread the array entries into another array.

For example, if we have:
*/
{
const foo = [1, 2, 3, 4];
const bar = foo;
console.log(bar);
console.log(typeof foo, typeof bar)
//Then we get [1, 2, 3] as the value of bar since we made a copy of foo and assigned it to bar with the spread operator.
}
//It’s also useful for merging arrays. For instance, if we have:

{
const foo = [1, 2, 3];
const bar = [3, 4, 5];
const baz = [...foo,...bar]  //+" " + "," + bar;
console.log(baz);
console.log(typeof foo, typeof bar, typeof baz)
//Then baz would be [1, 2, 3, 3, 4, 5] since we combined the entries of the foo and bar arrays into the baz array.

}