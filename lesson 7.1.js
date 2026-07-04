const person = {
    firstName: "Jane",
    lastName:"Doe",
    birthyear:"2001",
    gender:"Female",
    height:"170cm",
    faction:"N.E.P.S",

    fullname:function(){
        return `My name is ${this.firstName} ${this.lastName}.`
    },

    get testfunc(){
        return`I am ${this.height}tall,and I am from ${this.faction}.`
    },

    get age(){
        return 2026 - this.birthyear
    },

    set testfunc(name){
        //no name to use this or person for name (it is a parameter)
        //no split method will allow us to seperate multiple strings after each space " "
        const nameArray = name.split(" ")
        console.log(nameArray) // JUST TO CHECK IF IT WORKS

        //we can do this to make sure first letter will be uppercase and the rest will be lowercase
        first = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase
        last = nameArray[1].charAt(0).toUpperCase() + nameArray[1].slice(1).toLowerCase

        //now we update those first and last as the new firstname and lastname
        this.firstName = first
        this.lastName = last
    }
}

//even though this is permissable,it is not a good pratice for security reason
//directly change the value like this will make that object property vulnerable
person.firstName = "Jean"
//we can also know that we show values like this
console.log(person.firstName)  // shoe property
console.log(person.fullname()) // show function /method

//GET and SET
//get will make it so that the function will be treated like a property
//provides a clean way to manage how an objects data is retreived
console.log(person.testfunc)    //no need for brackets anymore
console.log(`I am ${person.age} years old.`)

//set will enable us to customize function freely
person.testfunc = "zHu yuAN"        //set HF function directly like this
console.log(`First Name: ${person.firstname}\nLastName: ${person.lastName}`)

//extra
//Object.definePropowerty(obj, prop, descripter)
//basically we can create a=get and set outside the object
Object.defineProperty(person, "fullname",{
    get : function(){
        return this.firstName + " " + this.lastName;
    }
})

console.log(`My full name is ${person.fullname}`)
