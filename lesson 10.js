//Numbers

console.log(((0.12 * 100) + (0.24 * 100)) / 100)


let x = 10 //this is integer
let y = 10.21 //this is float
//we can  use exponent notation like this
x = 891e-5
y = 123.456e4
console.log(x)
console.log(y)

//extra large or small numbers can be written with exponent notation
let num1 = 10e5
let num2 = 10e-5
console.log(num1)
console.log(num2)

//integers in js(without using exponent notation)are accurate upto 15 digits
let num3 = 999999999999999 //15digits
let num4 = 9999999999999999 //16digits
console.log(num3)
console.log(num4)

//floating point arithmrtic in js is not always accurate
x = 0.2 + 0.1               //this shoul be 0.3 but its not
y = (0.2 * 10 + 0.1 * 10) / 10  //doing it like this should make 0.3
console.log(x)
console.log(y)

//js allows you to combine string and number together
//but it will become a concatenation
console.log("10"+ 5)
console.log("5"+ 10)

//NaN (not a number) is a reversed word to indicate a non-legal number
let fraction = 10/"apple"
console.log(fraction)   //it will not create an error but shows it as NaN

//Infinity / -Infinity
let num5 = 2
while(num5 != Infinity){
    num5 *= num5
}
x = 2 / 0
y = -2 / 0
console.log(num5)
console.log(x)
console.log(y)
console.log(typeof(Infinity))   //Infinity is a number data type

console.log("")
///////////////////////////////////////////////////////////////////////////////////////////////

//Number Methods
let number = 234
console.log(number + "is a" + typeof(number))
console.log(number.toString() + "is a" + typeof(number.toString()))

console.log("")
number = 1.234
console.log(number.toExponential(2))

console.log("")
number = 1.256
console.log(number.toFixed(3))
console.log(number.toFixed(4))
//automatically round-off the  number
console.log(number.toFixed(2))

console.log("")
number = 9.656
console.log(number.toPrecision())
console.log(number.toPrecision(2)) //remove some numbers so the total digits are 2
console.log(number.toPrecision(5))  //add 0s at the end so the total digits are 5
console.log(number.toPrecision(8))

































