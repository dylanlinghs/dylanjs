// Display value using display.log
console.log("Hello")
//print("Hello")       // will execute print function in browser instead

// Primitive Data types
//just like a variable , 1 variable can only store 1 value

//1.string
let username = "John"   //this value can be changed later
console.log(username)

//2.number
let age = 12
console.log(age)
age = 13
console.log(age)

const pi = 3.142      //this value will be a constant(cannot be changed)
console.log(pi)

//3. booolean
let light_switch = false

//4.null
let enemy_name = null
console.log(enemy_name)

//5.  undefined
//pi = 4
//console.log(pi)
//this will return an erroe because pi variable is set as constant

//6. bigint (big number)
let verybignumber = 123456789012345678901234567890
console.log(verybignumber)
//not recommended to use this data type unless you reallly have to
//takes a lot of resources to compute

//Non=-primitive data type
//can store multiple values

//object
let students = {
    student1:"Bob",
    student2:"Jane",
    student3:"Andy" 
}
//we will discuss about object later

//Concantanations
//join multiple values/variable
console.log("My name is " + username + " and i am " + age + " years old.")

let dog = "chihUAHUA" 
console.log(dog)

let cat = "tabby" 
console.log(cat)

let human = "dylan" 
console.log(human)

console.log("My name is " + human + " and my pets are " + cat + " and  " + dog + ".")
