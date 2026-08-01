//1.Create a map
const map = new Map()

//2. set() - Add key-values pairs
map.set("name" , "John")
map.set("age",25)
map.set("city","New YORK")
///any datatype can be a key
const objKey = {id : 1}
map.set(objKey,"Object Key")
map.set(100,"Number Key")
console.log("Initial map:",map)

console.log("")

//3. get() - get value using key
console.log("get('name'):" , map.get("name"))

//4. has() - check if key exists
console.log("has('age'):", map.has("age"))
console.log("has('salary'):", map.has("salary"))

//5.size - number of entries
console.log("Size:",map.size)

console.log("")

//6.keys() - get all Keys
console.log("Keys:")
for(const key of map.keys())  {
    console.log(key)
}

console.log("")

//7. values() - Get all values
console.log("Values:")
for(const value of map.values())  {
    console.log(value)
}

console.log("")

//8.entries() - get all key-value pairs
console.log("Entries:")
for(const [key,value] of map.entries())  {
    console.log(key, "=>", value)
} 

console.log("")

//9.forEach() - iterate through map
console.log("forEach():")
map.forEach((value,key) => {
    console.log(`${key} : ${value}`)
})

console.log("")

//10.delete() - Remove a key
map.delete("city")
console.log("After delete('city'):")
console.log(map)

console.log("")

//11.clear() - remove all entries
map.clear()
console.log("After clear():")
console.log(map)

//12. size after the clear
console.log("Final Size:", map.size)

console.log("")

//exrtra notes

//instead of adding entries one by one,you ca create aa map with initial data
const map2  = new Map([
    ["name" , "John"],
    ["age",25],
    ["city","New YORK"]
])
console.log(map2)

console.log("")

//calling set() with an existing key replaces its values
map2.set("age",30)
console.log(map2.get("age"))

console.log("")

//set() returns the map itself, so you can chain multiple calls.
const map3 = new Map()
map3.set("a", 1)
    .set("b",2)
    .set("c", 3)
console.log(map3)

console.log("")

//a map is iterable so you dont have to call entries()
for (const [key,value] of map3) {
    console.log(key , value);
}

console.log("")

//convert map into an array
const array1 = [...map3]
console.log(array1)

console.log("")

//convert array to a map
const array2 = [
    ["x",10],
    ["y",20]
]
const map4 = new Map(array2);
console.log(map4)

console.log("")

//Convert map into an object (only if the keys are strings)
const obj2 = Object.fromEntries(map4)
console.log(obj2)

console.log("")

//convert an object to a map
const obj3 = {
    name :"John",
    age : 25
}
const map5 = new Map(Object.entries(obj3))
console.log(map5)


console.log("")

//Objects keys are compared by reference
const objectA = { id: 1}
const objectB = { id: 1}
const map6 = new Map()
map6.set(objectA,"First")
console.log(map6.get(objectA))
console.log(map6.get(objectB))

console.log("")

//Use ay datatype as a key
const map7 = new Map()
map7.set(true,"Boolean")
map7.set(null,"Null")
map7.set(undefined,"Undefied")
map7.set(() => {}, "Function")
map7.set([],"Array")

console.log("")

//map accepts NaN as a key
const map8 = new Map()
map8.set(NaN,"Not a Number")
console.log(map8.get(NaN))

