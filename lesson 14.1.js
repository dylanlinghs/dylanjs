const person = {
    firstName:"Dylan",
    lastName:"Ling",
    age:"12",
    birthdate:new Date("2026-06-02"),
}
console.log(person)


const person1 = {
    firstName:"Dan",
    lastName:"Lin",
    age:"22",
    birthdate:new Date("2026-09-07"),
}
console.log(person1)

console.log(` ${person.firstName} ${person1.lastName}`)
console.log(` ${person1.firstName} ${person.lastName}`)
console.log(` ${person.firstName} is ${person.age} years old`)
console.log(` ${person1.firstName} is ${person1.age} years old`)
