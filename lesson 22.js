//javascript mathematical operators

console.log("1.basic arthematic operators")
let a = 10
let b = 3
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

console.log("")
console.log("Increment")
let x = 5
x++
console.log(x)

console.log("")
console.log("decrement")
x--
console.log(x)

console.log("")
console.log("Prefix Increment")
//prefix increment
//++x increases x before using its value
let prefix = 5
console.log(++prefix)
console.log(prefix)


console.log("")
console.log("Postfix increment")
//Postfix increment
//x++ uses the value first ,trhen increases it
let postfix = 5
console.log(postfix++)
console.log(postfix)

console.log("")
console.log("prefix decrement")
let prefixDec = 5
console.log(--prefixDec)
console.log(prefixDec)

console.log("")
console.log("postfix decrement")
let postfixDec = 5
console.log(postfixDec--)
console.log(postfixDec)

console.log("")
console.log("")
console.log("2.asignment operators")
let number = 10;

number += 5
console.log(number)

number -= 3
console.log(number)

number *= 2
console.log(number)

number %= 4
console.log(number)

number **= 4
console.log(number)

number += 3
console.log(number)

console.log("")
console.log("")
console.log("3.unary plus")
//unary + attempts to convert a value intoa number
let stringNumber = "10"
console.log(+stringNumber)
console.log(typeof(+stringNumber))

//string constaining decimal
let decimalString = "10.5"
console.log(+decimalString)

//string containing zero
let zeroString = "0"
console.log(+zeroString)

//boolean tru becomes 1
let trueValue = "true"
console.log(+trueValue)

//boolean false becomes 0
let falseValue = "true"
console.log(+falseValue)

//null become 0 
let emptyValue = null
console.log(+emptyValue)

//an invalid number becomes NaN
let text = "Hello"
console.log(+text)

//empty string become 0
let emptyString = ""
console.log(+emptyString)

console.log("")
console.log("")
console.log("4.unary minus")
//unary - changes the value to its negative and also attempts to convert it into a number
let positive = 10
console.log(-positive)

let negative = -10
console.log(-negative)

//uhnary minus as a string
let numberText = "20"
console.log(-numberText)

//unary minus aas a bollean
console.log(-true)
console.log(-false)

//unary minus witha  decimal
let decimal = 5.5
console.log(-decimal)

console.log("")
console.log("")
console.log("5.more unary examples")
//conver string into number
let age = "25"
console.log(+age)

//convert multipple strings
let value1 = "10"
let value2 = "20"
console.log(+value1 + +value2)

//negate a number
let temperature = 30
console.log(-temperature)

//double negative
let money = -500
console.log(-money)

//convert boolean to anumber
console.log(+true)
console.log(+false)

//convert boolean and make it negative
console.log(-true)
console.log(-false)

//convert a decimal string
let price = "19.99"
console.log(+price)

//invalid consversation
let word = "apple"
console.log(+word)
console.log(-word)

//empty string
let empty = ""
console.log(+empty)
console.log(-empty)

//null
let nothing = null
console.log(+nothing)
console.log(+nothing)

console.log("")
console.log("")
console.log("6.comparison opearaters")

//reasult is always:
//true -> comparison is coreect
//false -> comparison is not correct

console.log("more than")
console.log(10 > 5)
console.log(5 > 10)
console.log(10 > 10)

console.log("")
console.log("less than")
console.log(10 < 5)
console.log(5 < 10)
console.log(10 < 10)

console.log("")
console.log("more than or equal to")
console.log(10 >= 5)
console.log(5 >= 10)
console.log(10 >= 10)

console.log("")
console.log("less than or equal to")
console.log(10 <= 5)
console.log(5 <= 10)
console.log(10 <= 10)

console.log("")
console.log("equal to")
// == is called "loose equality".
//java script may convert the types before comparing the values
console.log(5 == "10")
console.log(10 == "5")
console.log(5 == 10)
console.log(10 == 10)

console.log("")
console.log("strict equal to")
// === checks both
//1.values
//2.data types
console.log(5 === "10")
console.log(10 === "5")
console.log(5 === 10)
console.log(10 === 10)

console.log("")
console.log("not equal to")
console.log(5 != "10")
console.log(5 != 10)
console.log(10 != 10)

console.log("")
console.log("")
console.log("7.string comparison")
//strings can be compared.
//Javascript compares strings base on their character values
console.log("apple" === "apple")
console.log("apple" === "orange")
console.log("apple" != "orange")

//alphabetical-style comparison
console.log("apple" < "banana")
console.log("apple" > "banana")

console.log("")
console.log("")
console.log("9.invalid comparison")
//javascript will often still execute thses,but comparison may not mean what you intended
let num = 10
console.log(num = 5)

//warning:
//= is not a comparison operator
//= means assign
//correct comparisons:
//number == 5
//number ===5

console.log("")
console.log("")
console.log("10.Nan comparison")
//NaN means "NOt a number"
///Nan is not equal to itself
let result = NaN
console.log(result === NaN)
console.log(result == NaN)
//uSE NUMBER .isNaN( to check for NaN)
console.log(Number.isNaN(result))

console.log("")
console.log("")
console.log("11.creating range")
//javascript does not support :
//20< temperature <30
//instead,write 2 comparisons 
let temp =25
if (temp > 20 && temp < 30) {
    console.log("temperature is between 20 and 30")
}