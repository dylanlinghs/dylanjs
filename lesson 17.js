//1. creating a set
const numbers = new Set()
console.log(numbers)

console.log("")
//2.add(value)
//Duplicate values are ignored
numbers.add(10)
numbers.add(20)
numbers.add(30)
numbers.add(10) //duplicate(ignored)
console.log(numbers)

console.log("")
//3.has value
console.log(numbers.has(20))
console.log(numbers.has(100))

console.log("")
//4.delete (value)
numbers.delete(20)
console.log(numbers)

console.log("")
//5.size
//returns number of elements
console.log(numbers.size);

console.log("")
//6.clear()
const temp = new Set([1, 2, 3])
console.log(temp)
temp.clear()
console.log(temp)

console.log("")
//7.Iterating using for...of
const fruits = new Set(["Apple","Banana","Orange"])
for(const x of fruits){
    console.log(x)
}

console.log("")
//8.forEach()
fruits.forEach((value) => {
    console.log(value)
})

console.log("")
//9.Iterating with spread operators
console.log([...fruits])

console.log("")
//10.entries()
//returns[value,value]
//because set has no key-value pairs
const entryIterator = fruits.entries()
for(const entry of entryIterator) {
    console.log(entry)
}

console.log("")
//11.Convert Array to Set
//removes duplicates
const array = [1,2,2,3,4,4,5]
const uniqueSet = new Set(array)
console.log(uniqueSet)

console.log("")
//12.convert into array
const uniqueArray = [...uniqueSet]
console.log(uniqueArray)

console.log("")
//13.remove duplicate from an array
const duplicateNumbers = [10,20,20,30,30,40]
const uniqueNumbers = [...new Set(duplicateNumbers)]
console.log(uniqueNumbers)

console.log("")
//14.Union of the 2 Sets
const setA = new Set([1,2,3])
const setB = new Set([3,4,5])
const union = new Set([...setA, ...setB])
console.log(union)

console.log("")
//15.intersection
const intersection = new Set(
    [...setA].filter(value => setB.has(value))
)
console.log(intersection)

console.log("")
//16.Difference
//Values in setA but not in setB
const difference = new Set(
    [...setA].filter(value => !setB.has(value))
)
console.log(difference)

console.log("")
//17.check if a set is empty
const empty = new Set()
console.log(empty.size === 0)

console.log("")
//18.Store different data types
const mixed = new Set()
mixed.add(100)
mixed.add("Hello")
mixed.add(true)
mixed.add({name: "John" })
mixed.add([1,2,3])
console.log(mixed)

console.log("")
//19.Objects are compared by reference
const obj1 = { id : 1}
const obj2 = { id : 1}
const objectSet = new Set()
objectSet.add(obj1)
objectSet.add(obj2)
console.log(objectSet)
console.log(objectSet.size)

console.log("")
//21. checking membership effieciently
const users = new Set(["Alice","Bob","Charlie"])
if (users.has("Bob")) {
    console.log("Bob exists.")
}

