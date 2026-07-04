//Constructor function 
//special,reusable JavaScript functions useed to create and initialize objects

const Person = function(firstname , lastname,age){
    //Person properties 
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

    //Person method
    this.fullname = function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

//create new objects frm the function
const employee1 = new Person("John","Lee", 20)
const employee2 = new Person("Nicole","Demara", 21)

//can display each object like this
 console.log(employee1)
 console.log(employee2)
 console.log("")

 //can also call the fullname method for each object
 employee1.fullname()
 employee2.fullname()
 console.log("")

 /////////////////////////////////////////////////////////

 //Object prototype
 //we can add new property or method into the function

 //adding new property called language
 Person.prototype.language = "English"

 //adding new method called greeting
 Person.prototype.greeting =  function(){
    console.log(`I am ${this.firstname} ${this.lastname} and i am ${this.age} years old.`)
 }

 //we can use those prototypes like this
 employee1.greeting()
 console.log(`${employee1.firstname} speaks in ${employee1.language}.`)
 console.log("")

 employee2.greeting()
 console.log(`${employee2.firstname} speaks in ${employee2.language}.`)
 console.log("")

 //we can cvreate a brand new emoplotyeee and it will have the same prototypes
 const employee3 = new Person("Yuzuha","Ukinami", 18)
 employee3.greeting()
 console.log(`${employee3.firstname} speaks in ${employee3.language}.`)
 console.log("")
 //notice that every employees will have the same language value

 //if we try to display the object itself.things added using prototype will be listed under__proto__
 console.log(employee3)
 console.log(Person.prototype)  //this will display the prototype only
 console.log("")

 //we can check whether a property belongs to the function or not
 console.log(employee3.hasOwnProperty('firstname'))    //this will return true
 console.log(employee3.hasOwnProperty('language'))    //this will return false
 //language exist inside porperty only,not inside the function
 console.log("")

 //we can also add a method using prototype into an array
 //keep in mind array is an individual instances.very different compared to a constructor function
 //this function will affect all arrays in this file
 Array.prototype.testfunc = function () {
    console.log(`${this[0]} + ${this[1]}`)
 }

 const testarray1 = [1, 2, 3]
 testarray1.testfunc()  //will return 1 + 2

  const testarray2 = [4, 5, 6]
 testarray2.testfunc()  //will return 4 + 5