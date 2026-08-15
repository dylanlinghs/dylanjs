//this keyword

//1. this in aobject
const person = {
    name: "Alex",
    age:20,

    sayHello:function() {
        console.log("Hello,my name is" + this.name)
        console.log("I am " + this.age + "years old.")
    }

};
person.sayHello()

//2.this with multpipe objectss
const player1 = {
    name :"John",
    score: 100,

    showInfo:function() {
        console.log(this.name + " has" + this.score +"points")
    }
}

const player2 = {
    name : "Sarah",
    score:200,

    showInfo:function() {
        console.log(this.name + " has" + this.score +"points")
    }
}
player1.showInfo();
player2.showInfo();


//3.this in a class
class Player {
    constructor(name,score) {
        this.name = name 
        this.score= score
    }

    showInfo() {
        console.log("Player: " + this.name)
        console.log("Score: "+this.score)
    }
}

const player3 = new Player ("Mike", 500)
player3.showInfo()

//4.this in a regular functoin
function regularFunction() {
    console.log("Regular function this:",this)
}
regularFunction()


//5.this with an evnt listener

//add this intp html to see button 
//<button id="button">Click Me</buttton>

// const button = document.getElementById("button")

// if (button) {
//     button.addEventListener("click", function() {
//         console.log("the button was clicked!")
//         console.log("this =",this)

//         this.textContent = "Clicked!"
//     })
// }

//6.arrow function and this
const user = {
    name:"Alex",

    start: function() {
        //arrowe function inherits this from the start() function.
        setTimeout(() => {
            console.log("Arrow function:")
            console.log(this.name)
        },1000)
    }
}
user.start()

//7.call()
const person1 = {
    name:"John"
}
const person2 = {
    name:"Sarah"
}

function greet(){
    console.log("Hello" + this.name)
}

greet.call(person1)
greet.call(person2)

//8.apply()
function introduce(age,job) {
    console.log(this.name + "is" + age +"years old and is a " + job)
}

const person3 = {
    name:"David"
}
introduce.apply(person3, [25,"programmer"])

//9.bind()
const person4 = {
    name:"Emily"
}

function sayName() {
    console.log("My name is" + this.name)
}

const boundFunction = sayName.bind(person4)
boundFunction()

//10.comparing this
const example = {
    name:"Example",

    normalFunction: function(){
        console.log("Normal function:",this.name)
    },

    arrowFunction: () =>{
        console.log("Arrowfunction:",this)
    }
}
example.normalFunction()
example.arrowFunction()

///SUMMARY
console.log("Object method:this efers to the object");
console.log("class method:this refers to th ecurrent instance.");
console.log("Arrow function: this is inherited from the surrounding scope");
console.log("call():Manually sets this.");
console.log("apply(): Manually sets this and accepts arguments as an aray");
console.log("bind(): Create with a new fuinction with a fxed this.")