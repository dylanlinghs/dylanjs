//Object Iterable

//iteration is loops / repetition
//back in lesson 3, we learned about loop
//some data types like string or array are iterable,which means that thhey can be looped

//string interaction
my_string = "Hello World!"
for(let x of my_string){
    console.log(x)
}

console.log("")

//array iteration
const number = [1, 2, 3, 4, 5]
for(let x of number){
    console.log(x)
}

console.log("")

//object by default is not iterable,because it does not have a method that allows it to be iterable(called [Symbol.iterator])
//which means the code beolw will not work

//to understand how to make an object iterable
//first we need to know about function*,yeild,and next()

function* abc() {
    yield "a"
    yield "b"
    yield "c"
}
const gen1 = abc();
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())

console.log("")

function* index_number() {
    let index = 0
    while (true) {
        yield index++
    }
}
const gen2 = index_number();
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
//can also show it seperately like this
console.log(gen2.next().value)
console.log(gen2.next().done)
//function will always will always yield a value and will not be done beacuse the index number is infinite (or wuntil the integer limit)
//using the yield expresiion,it will return a value and then pause until it needs another value, which means the code will show numbers from 0 to infinity by itself and making the code freeze on runtime

console.log("")

//now  lets  try to make an object iterable
const number_object = {
    start_num: 1,
    last_num:10
}
number_object[Symbol.iterator] = function(){
    return{
        start: this.start_num,
        last: this.last_num,

        //then,create the iteratoe protocol
        //if done is false,yield the next value
        //if done is true, stop the iteration
        next(){
            if(this.start <= this.last){
                return{
                    value: this.start++,
                    done:false
                }
            }
            return{
                done: true
            }
        }
    }
}
console.log(number_object)
console.log("")
for(let x of number_object){
    console.log(x)
}