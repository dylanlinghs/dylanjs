//display the value
//document.querySelector("#first").innerHTML = "Goodbye"
//you can also create a variable and display its value
//my_variable = document.querySelector("#first")
//my_variable.innerHTML = "Good morning!"

// Arithmetic Operators
let x = 12
let  y = 6
let a = x + y
let b = x - y
let c = x * y
let d = x / y
let e = x ** y//exponent
let f = x % y //modulus
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log("")

//compound assign operators
a += x      //a = (x + y) + x
b -= x      //b = (x - y) - x
c *= x      //c = (x * y) * x
d /= x      //d = (x / y) / x
e **= x      //d = (x ** y) ** x
f %= x      // f = (x % y) % x
//CANNOT be used for arthematic calculations
//his is wrong: result = a += x
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log("")

//Post-fixed operators
x++     // x will become 13
y--     // y will become 5
console.log(x)      
console.log(y)       
console.log("")

//relational operator
console.log(10 == "10")
console.log(10 === "10")
console.log(10 != 10)       //false
console.log(10 > 10)         //false
console.log(10 >= 10)       //true
console.log(10 < 10)         //false
console.log(10 <= 10)       //true