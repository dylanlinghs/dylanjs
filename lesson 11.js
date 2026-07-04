// Boolean and its method

//1. boolean primitive
let x = true
console.log(x)
let y = false
console.log(y)

console.log("")
//2.Boolean  object
const z = new Boolean(false)
console.log(z)

console.log("")
//3.boolean function
//useful if we want to convert other data types into boolean 

//for string, empty string ("") will return false,other strings will return true
const str = Boolean("h")
console.log(str)

//can also use !! to do the samething
const a = 5 
const aBool = !!a
console.log(aBool)
console.log(typeof(aBool))

console.log("")
//all of these data types can be covered into boolean as well 
const a1 = Boolean(undefined)
const a2 = Boolean(null)
const a3 = Boolean(0n) //big int
console.log(a1)
console.log(a2)
console.log(a3)

console.log("")
//4.Boolean coercion
//built-in operation like conditional statements or loops that expect booleans wil first coerce theie arguments tpo booleans

//we can go from
//1." == 0"
//2.false == false
//3.true

//if we go like this:
//1.""
//2.false

//[]will always be true
if([]){
    console.log("test true")
}
else{
    console.log("test failed")
}

console.log("")
//5.booolean methods
const c1 = new Boolean()
const c2 = new Boolean(0)
const c3 = new Boolean(null)
const c4 = new Boolean("")
const c5 = new Boolean(false)
const c6 = new Boolean(true)
const c7 = new Boolean([])
const c8 = new Boolean({})
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)
console.log(c7)
console.log(c8)

console.log("")
console.log(typeof(c1))
console.log(typeof(c2))
console.log(typeof(c3))
console.log(typeof(c4))
console.log(typeof(c5))
console.log(typeof(c6))
console.log(typeof(c7))
console.log(typeof(c8))

console.log("")
console.log(c1.valueOf())
console.log(c2.valueOf())
console.log(c3.valueOf())
console.log(c4.valueOf())
console.log(c5.valueOf())
console.log(c6.valueOf())
console.log(c7.valueOf())
console.log(c8.valueOf())








































































