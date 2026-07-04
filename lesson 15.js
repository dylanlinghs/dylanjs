//js math and its methods
//primitive type: number()
//this will convert the value
let num1 = Number("20")
console.log(num1)
console.log(typeof(num1))
//null will be converted to 0 
let num2 = Number(null)
console.log(num2)
//true is 1 false is 0 
let num3 = Number(true)
console.log(num3)
//undefined will be NaN
let num4 = Number(undefined)
console.log(num4)

console.log("")
//OBJECT TYPE: new number()
let num5 = new Number("20")
console.log(num5)
console.log(typeof(num5))
//js allows doing calculations using primitive and object together
console.log(num1 + num5)
//this will return true because both are 20
console.log(num1 == num5)
//this will return false because  different types
console.log(num1 === num5)

console.log("")
//toExponential() RETURNS A STRING,with a number rounded off and written using exponential
let num = 100.12345
console.log(num.toExponential(2))
console.log(num.toExponential(4))
console.log(num.toExponential(6))

console.log("")
//toPrecision() returns a string,with a number written with a specified length
console.log(num.toPrecision(2)) 
console.log(num.toPrecision(4))
console.log(num.toPrecision(6))

console.log("")
//we can convert date to number
let date = Number(new Date("2026-01-01"))
//this will return number of seconds since january 1,1970 until january 1,2026
console.log(date)

console.log("")
//parseInt() parses string and return a whole number
//this will not round off the number
console.log(parseInt("10"))
console.log(parseInt("10.44"))
console.log(parseInt("10.54"))
console.log(parseInt("10.64"))
//any number at the start of string can be parsed too
console.log(parseInt("10 years"))
console.log(parseInt("9Adam has 5 apples"))

console.log("")
//js also has parseFloat()
//does the same thing but rreturn a floating number
console.log(parseFloat("10"))
console.log(parseFloat("10.44"))
console.log(parseFloat("10.54"))
console.log(parseFloat("10.64"))
console.log(parseFloat("10 years"))
console.log(parseFloat("7.3 Adam has 5 apples"))

console.log("")
//object methods

//Number.isInteger() method returns true if the arguments is an integer
console.log(Number.isInteger(10))
console.log(Number.isInteger(10.44))

console.log("")
//Number is Finite() methods returns true if the arguments is not Infinity, -iNfinity,nor Nan
console.log(Number.isFinite(123))

console.log("")
//Number.isNaN()METHOD RETURNS TRUE if the arguments is a safe integer
console.log(Number.isSafeInteger(10))
console.log(Number.isSafeInteger(123456789012345678901234567890))

console.log("")
//WE CAN CHECK the range of what is considered a safe integer
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

let my_number = 777
if(my_number > Number.MAX_SAFE_INTEGER){
    console.log(`${my_number}is not a safe integer!`)
}
else{
    console.log(`${my_number}is  a safe integer!`)
}
