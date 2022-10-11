let heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ]
console.log("Initial values ", heros)
function rename(){
    heros = heros.map(function(obj) {
        obj["id: "+heros.indexOf(obj)+" hero"] = obj["name"]
        delete obj["name"]
        return obj
    })
}
rename()
console.log("Values after renaming name to hero", heros)
console.log(typeof heros)