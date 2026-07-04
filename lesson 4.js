//fucntions

//1. Function without parameter
let x = 10

function function1(){
    console.log(x + " + " + x + " = " + (x + x))
}
function1()

//2.Function with parameter
function function2(y){
    console.log(y + " + " + y + " = " + (y + y))
}
function2(5)

//3. Return value
function function3(a,b){
    c = a + b
    return c
}
console.log(4 + " + " + 5 + " = " + function3(4, 5))

console.log("")

//JS Controller

function apple(text){
    //is NaN = is not  a number
    //so !isNaN means not(is not a number)
    //which means if text IS a number, cannot convert the string to uppercase
    if(!isNaN(text)){
        console.log("Cannot convert" + text + " to uppercase.")
    }
    else{
        console.log(text.toUpperCase())
    }
}
apple("73110")

function orange(text){
    if (text.length < 5){
        console.log("Text is too Short.")
    }
    else if (text.length > 30){
        console.log("Text is too long.")
    }
    else{
        console.log(text + " is OK.")
    }
}
orange("How are you")




////////
//2.Function with parameter
function var1(num1, num2){
    console.log(num1 + " + " + num2 + " = " + (num1 + num2))
    console.log(num1 + " - " + num2 + " = " + (num1 - num2))
    console.log(num1 + " * " + num2 + " = " + (num1 * num2))
    console.log(num1 + " / " + num2 + " = " + (num1 / num2))
}
var1(23, 34)
 