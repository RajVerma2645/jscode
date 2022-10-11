// Create a Set
const letters = new Map([["lettA", "a" ],["LettB", "b"], ["lettC", "c"] ,["lettD", "d"],[" ","b"]]);  //only unique values will be stored

// List all entries
let text = ""
letters.forEach (function(value) {
  return text += value;
  console.log("The values are", text)
})
console.log("Values", letters.values())  // ??
console.log("Keys", letters.keys())  // A A Set has no keys.  So values(), keys() are same.
console.log("Entries",letters.entries())  // A A Set has no keys.  So it displays result in the form of [values, values].

console.log(letters.lettA)
console.log(letters.has("lettA"))
console.log(letters  instanceof Set)