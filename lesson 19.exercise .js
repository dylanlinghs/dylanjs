function te(object1,object2){
     if (object1.age > object2.age){
        console.log("HELLO!")
    }
    else if (object2.age > object1.age){
        console.log("GoodBye!")
    }
    else{
        console.log("...")
    }
    console.log("name:",object1.name)
    console.log("hobby:",object1.hobby)
    console.log("name:",object2.name)
    console.log("hobby:",object2.hobby)
}

const object1 = {
    name:"ti",
    age:43,
    hobby:"play games"
}
const object2 = {
    name:"te",
    age:33,
    hobby:"play games"
}

te(object1,object2)
