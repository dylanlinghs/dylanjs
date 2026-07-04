//string and a its methods
//can contain any characters,as long as it is bounded by double quotes
//charactors insisde a string also constructed liike array(each character has index number)

//primitive string
let my_name = "kelly"
console.log(my_name)
console.log(my_name[0])
console.log(my_name[5])//no value after y,this will return undefined

//you can also acess character position like this
console.log(my_name.charAt(0))
console.log(my_name.charAt(5))//no value after y,this will return empty charactor
console.log("")

//template literal: can interpolate expressions
//for example js allows you to freely use strings with other data types
let num1 = 10
let num2 = 5
console.log(`the result is ${num1 + num2}`)
console.log("")

//can also play around with eval()
let sample = "2 + 2"
console.log(sample)
console.log(eval(sample))
console.log("")

//object string
let username = new String("bobby")
console.log(username)

//diference between primitive and object string
//refer to internet

console.log(typeof(my_name))    //this will return string
console.log(typeof(username))   //this will retun object
//CAN try :primitive data types like numeric/boolean/null/undefined also,it should return string
console.log(username[3])

console.log(my_name.toUpperCase())  //PRIMITIVE string will only boroow this method and js allows this (auto boxing)
console.log(username.toUpperCase())     //object string have this method built in

//always use primitive strings
//object string are rarely neccasery nad can lead to confusion
console.log("")

//even though string constructed like array, does not mean it is nthe dame data types
//this code will work
const names = ["John","Alex","Isaac"]
console.log(names)
names[1] = "Alexa"
console.log(names)

//you cannnot freely change each character inside the string like this
//this code will not work
let friend_name = "Ernold"
console.log(friend_name)
friend_name[0] = "A"
console.log(friend_name)

console.log("")
//relational operators (including == and ===)will compare strings case sensitively
const string1 = "a"
const string2 = "B"

//can play around with the length of the string,compare with upercases, etc.
//uppercase is less thamn lowercase
if (string1 < string2){
    console.log("Hello")
}
else if (string1 > string2){
    console.log("Goodbye")
}
else{
    console.log("HelloGoodbye")
}


console.log("")
//string methods
const sentence = "Hello how are you?"
console.log(`${sentence}`)
console.log(`sentence above contain ${sentence.length}characters.`)
console.log(`${sentence.slice(7)}`) // removes the charcaters from the first 7 index number
const number = 100
console.log(typeof(number))
console.log(typeof(number.toString()))  //convert value to string