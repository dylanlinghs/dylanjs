//Object Display

const person = {
    firstName:"Jane",
    lastName:"Doe",
    birthday:"16/02",
    gender:"Female",
    height:"170cm",
    faction:"N.E.P.S",

    friends:["Zhu Yuan","Qing yi","Seth"],

    address: {
        district:"Sixth Street",
        city:"New Eridu"
    },

    fullname:function(){
        return `My name is ${this.firstName} ${this.lastName}, nice too meet you`
    }
}

//Displaying Object Properties

//1.innerHTML with concatenations
console.log(`${person.firstName }, ${person.birthday}`)

//2. Using for loop
let storeText = ""
for(let x in person){
    storeText = storeText +  person[x] + "<br>"
    documents.getElementById("demo").innerHTML = storeText
}

// Using Object.values()
//object works like an array,so it also have index number(STARTS FROM 0)
documents.getElementsById("demo").innerHTML = Object.values(person)[1]

//Using JSON.stringify
//any JS object can be converted into string
// JSON.stringify will not convert function into string
documents.getElementById("demo").innerHTML = JSON.stringify(person)
//but we can convert function into string manually like this
person.fullname = person.fullname.toString()
document.getElementById("demo").innerHTML = JSON.stringify(person)

//Extra 
//Strigify Array
const user = ["one","two","three"]
const userString = JSON.stringify(user)
documents.getElementById("demo").innerHTML = userString