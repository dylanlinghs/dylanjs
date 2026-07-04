//Array and its methods

console.log("1.")
//array can store multiple values
//it is structured like a queue
const names =  ["Caleb","bob","abby","collei","amber"]
//array is considered as an object,but it is not exactly correct
console.log(typeof(names))
console.log("")

console.log("2.")
//we can also create an array like this is not recommended, the best way to create array is the literal method
const cars = new Array("Perodua","Proton","Honda");
console.log(cars)
console.log("")

console.log("3.")
//we can also create an empty array first,and then add values into like this
const students = []
students[0] = "John"
students[1] = "Jane"
console.log("")

console.log("4.")
//array have an index number,and it starts from 0
//names[1] will print bob because abby is at index 0
console.log(names[1])
//we can also concatenate from 2 different arrays
console.log(`${students[1]} and ${names[2]} are best friends`)
console.log("")

console.log("5.")
//js will always use number indexes
//js does not support arrays with named indexes
//note that code below will work,but this does create a named index ,it merely assigns a custom property to the array object
students[2] = "joe"
console.log(students[2])
console.log("")

console.log("6.")
//we can add a new avalue to the array
//since array is structured like a queue,new value will be addded at the back
names.push("jean")
names.push("Barbara")
console.log(names)
console.log("")

console.log("7.")
//we can also delete a value from t6he array
//barbara will be deleted because pop will delete from the back
names.pop()
console.log(names)
console.log("")

console.log("8.")
//we can shift if we want toi delete from the front
//this will also move values at the back to the front(LIKE A QUEUE)
//caleb will be deleted,and bob will be at index 0
names.shift()
console.log(names)
console.log("")

console.log("9.")
//unshift will add value from the front
//this will move values at  the back further back
//lisa will be added and she will be at index 0 
names.unshift("lisa")
console.log(names)
console.log("")

console.log("10.")
console.log(names.toString())                           //convert array into string
console.log(names.sort())                              //sorts the array alphabetically 
console.log(names.length)                           ///returns the number of elements  

console.log(names[names.length - 1])                    //access the last value
console.log(names.join(" and "))
console.log("")                                         //insert in between value


//we can also look through  an array
let text = "<ul>";
names.forEach(myFunction);
text += "<ul>";
function myFunction(value) {
    text += "<li>" + value + "<li>";
}
// //se the input in html
document.getElementById("demo").innerHTML = text;