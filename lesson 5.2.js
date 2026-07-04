//Object

//can store multiple types of values,very important to keep track of information
const student = {
    name :"David",
    age:11,
    gender:"Male",
    isPresent:true,
    greetings:function(){
        console.log("My name is " + this.name)
    }
}

console.log(student)
console.log("")

//we can also do something like this, but we will learn about loops later
for(let x in student){
    console.log(x + ": " + student[x])
}
console.log("")

//just like array(list), we can individually displat informatin in the object
//name,age,gender,and is Present is defined as property of student
console.log("My name is " + student.name)
console.log("I am " + student.age + " years old.")
console.log("")

//if doing concatetation felt annoying,we can use string litarel but need to use backtick (above tab key)
console.log(`My name is ${student.name} and I am $ {student.age}years old.`)
console.log("")

//if we have function in the object,refer to property of the object using'this'
//refer to line 10
student.greetings()
console.log("")

//now we can delete,we can delete aproperty from a object
delete student.name
delete student.isPresent
console.log(student)  //name and isPresent will be gone

console.log("")

//we can also add brand new property into an Object
//when we add a new property,it will appear at the back just like array
student.firstname = "David"
student.lastname = "Beckham"
console.log(student)
console.log("")

student.friends = ["John","Bob","Sally"]
for(let x in student.friends){
    console.log(`${Number(x) + 1}. ${student.friends[x]}`)
    //number starts from 0m beacuse its an array (index number)
    //so we can convert x to Number value,and add 1.
}
console.log("")

//we can also add and object to an object
studentAddress = {
    city: "Kuching",
    postcode: "93050",
    state: "Sarawak"
}
student.address = studentAddress
console.log(student)
