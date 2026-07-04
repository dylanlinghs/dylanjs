//Conditional Statements

//1.if statement

let x = 10

if(x < 5){
    console.log("HELLO")
}

//2.If else statement

let y = 12
if(y> 12){
    console.log("Different conditions will lead to different outcomes")
}
else{
    console.log("ERROR!Make sure y is more than 12.")
}

//if elseif statement

let colour = "red"
if(colour == "red"){
    console.log("We can use these statement to control the flow of our progam")
}
else if(colour == "green"){
    console.log("ERROR!green is not red.")
}
else if(colour == "blue"){
    console.log("ERROR!blue is not red.")
}

//4.if elseif else statement

if (colour == "red"){
    console.log("Later we can use these to determine whether a process will keep on looping or not")
}
else if(colour == "green"){
    console.log("ERROR!green is not red.")
}
else if(colour == "blue"){
    console.log("ERROR!blue is not red.")
}
else{ 
    console.log("ERROR!" + colour + "is not red.")
}

console.log("")

//Logical Operators

//1. or operator
//if any condition is True,result is True
//if all conditions is False,result is False
let a = 20
let b = 3
if(a == 20 || b == 20){
    console.log("a or b are 20")
}

//2.and operator
//if all condition is true, result is True
//if any condition is False,result is False
let c  = 20
let d = 3
if(c == 20 && d == 20){
    console.log("c and d are 20")
}
else{
    console.log("c and d are not 20")
}

//3.not operator
console.log (true)
console.log (!true)//not true = false
console.log (!!true)//not not true = not false = true

console.log("")

//Loops

//1. while loop
let counter = 1
while (counter <= 5){
    console.log("WHILE LOOP number" + counter)
    counter++
}

console.log(" ")

//2. for loop
for(let counter2 = 5; counter2 >=1; counter2--){
        console.log("FOR LOOP number" + counter2)
}
