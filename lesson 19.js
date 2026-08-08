//OBECTS AS ARGUMENTS

//1.PASSING ANA OBJECT
function greet(person){
    console.log("Hello "+ person.name + "!");
}
const user1 = {
    name : "Alice",
    age : 25
}
greet(user1)

//2.Passing multiple properties

function displayStudent(student){
    console.log("Name:",student.name)
    console.log("Age:",student.age)
    console.log("Grade:",student.grade)
}
const student = {
    name:"John",
    age: 18,
    grade : "A"
}
displayStudent(student)

//3.Objject destruturing

function displayStudentInfo({ name, age, grade})  {
    console.log("Name:",student.name)
    console.log("Age:",student.age)
    console.log("Grade:",student.grade)
}
displayStudentInfo(student)

//4.objects are passed by reference

function updateAge(person){
    person.age = 30;
}
const user2 = {
    name : "Alice",
    age : 25
}
console.log("Before:",user2)
updateAge(user2)
console.log("After :",user2)

//5.creating a copy of an object

function updateUser(person){
    //create a copy of this object
    const copy = {...person }
    copy.age = 30
    console.log("Modified Copy:",copy)
}
const user3 = {
    name : "Alice",
    age : 25
}
updateUser(user3)
console.log("Original Object:",user3)


//6.default object values

function createUser({name, age = 18}){
    console.log("Name:",name)
    console.log("Age :",age)
}
createUser({
    name:"David"
})

//7.real world example

function registerUser(user){
    console.log("User information")
    console.log("----------------")
    console.log("Name   :",user.name)
    console.log("Age    :",user.age)
    console.log("Job    :",user.job)
    console.log("Country:",user.Country)
    console.log("Gender :",user.gender)
    console.log("Email  :",user.email)
}
const employee = {
    name: "Alice",
    age: 25,
    job: "Engineer",
    country:"Malaysia",
    gender:"Female",
    email:"alice@email.com"
}
registerUser(employee)


//8.property does not exist

function showLastName(person){
    console.log("Last Name:",person.lastname);
}
const user4 = {
    name: "Alice"
}
showLastName(user4)

//9.missing object argumants

function greetSafe(person = {}){
    console.log("Name:",person.name);
}
greetSafe();

//10.using dotnotation

function printCar(car){
    console.log("Brand :",car.brand);
    console.log("Model :",car.model);
    console.log("Year :",car.year);
}
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
}
printCar(car)


//11.updating multiple properties

function updateProducts(product) {
    product.price = 1500;
    product.stock = 20;
}
const laptop = {
    name:"Gaming Laptop",
    price: 1200,
    stock:10
}
console.log("Before Update:",laptop)
updateProducts(laptop)
console.log("After Update:",laptop)