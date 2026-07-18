//RegExp and its methods
//it refers to sequence of characters that forms a specific search pattern

//1.there are two way to create a regexp
//regexp literal
const pattern1 = /.com/
//regexp constructor
const pattern2 = new RegExp(".net")

//2. regexp is an object
console.log(typeof(pattern1))
console.log(typeof(pattern2))
//we can do this to see if regexp works
console.log(pattern1.test("facebook.com"))
console.log(pattern2.test("facebook.com"))

console.log("")
//3.we can use match( to retuen the macthed text)
//match()will only check for the first character starting from the left
//remember:index starts from 0

// \d will return digits / numbers
const text1 = "abcdef9"
console.log(text1.match(/\d/))

//\D will return not a digit / NaN
const text2 = "1234567890"
console.log(text2.match(/\D/))

//\w WILL RETURN letter,.digit,or underscore
const text3 = "$$_##3"
console.log(text3.match(/\w/))

//\W will return special characters (symbol or whitespace)
const text4 = "abc123_!"
console.log(text4.match(/\W/))

//\s will retrun whitespace
const text5 = "abc123_!@#$"
console.log(text5.match(/\s/))

//\S will return not a whitespace
const text6 = "      a"
console.log(text6.match(/\S/))

console.log("")
//4.we can repalce( to replace text )
//replace( will only replace the foirst word starting from the left)
const old_text = "I have 2 pizzas and you have 3 pizzas."
const new_text = old_text.replace(/pizzas/,"burgers")
console.log(old_text)
console.log(new_text)

console.log("")
//5.special characters (any characters)
//return true if the word match with c and t
console.log(/c.t/.test("cart cat"))
console.log(/c.t/.test("the cart"))
//cat returns teur because it is exactly 3 letters,starting with c and ending with d
console.log(/c..t/.test("cart cat"))
console.log(/c..t/.test("the cart"))
//cart returns true because it is exactly 4 letters ,starting c and endoinbg with t

console.log("")
//6.special characters (zero or more)
//returns true if string contains t or th
console.log(/th*/.exec("the sun and the moon"))
console.log(/th*/.exec("sister"))    //will retur a result

console.log("")
//7.special characters (one or more)
//returns true if string contains th
console.log(/th+/.exec("the sun and the moon"))
console.log(/th+/.exec("sister"))    //will retur a null

console.log("")
//8.special characters (zero or one)
//combination of 'colo + u or no u + r' will return true
console.log(/colou?r/.exec("colour"))
console.log(/colou?r/.exec("color"))
console.log(/colou?r/.exec("colou"))

console.log("")
//9. return true if any of the letter exists
console.log(/[aeiou]/.test("sky"))
console.log(/[aeiou]/.test("apple"))

console.log("")
//10. return true if there are any lowercase
console.log(/[a-z]/.test("123abc"))
console.log(/[a-z]/.test("123ABC"))

console.log("")
//11. return true if there are any uppercase
console.log(/[A-Z]/.test("123abc"))
console.log(/[A-Z]/.test("123ABC"))

console.log("")
//12. return true if there are only lowercase
console.log(/^[a-z]+$/.test("ab"))
console.log(/^[a-z]+$/.test("aB"))

console.log("")
//13. return true if there are only uppercase
console.log(/^[A-Z]+$/.test("ab"))
console.log(/^[A-Z]+$/.test("aB"))



