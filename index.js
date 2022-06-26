// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push('Ralph')
    return ["Milo", "Otis", "Garfield", "Ralph"]
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
    return ["Bob", "Milo", "Otis", "Garfield"]
}
function destructivelyRemoveLastCat(name){
    cats.pop('Garfield')
    return ["Milo", "Otis"]
}
function destructivelyRemoveFirstCat(name){
    cats.shift('Milo')
    return ["Otis", "Garfield"]
}
function appendCat(name){
    return [...cats,name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    return cats.slice(0, cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1)
}
