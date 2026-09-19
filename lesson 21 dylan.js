//javascript factory function
//A factory function is a normL FUNCTION that creates and returns an object
function createPlayer(name,level) {
    return {
        name:name,
        level: level
    }
}

//creATE  OBJECTS USING factory function
const player1 = createPlayer("John", 10)
const player2 = createPlayer("Alex", 10)

console.log("Player 1:", player1)
console.log("Player 2:", player2)

console.log("Player 1:",player1)
console.log("Player 2:",player2)

console.log("")

//2.basic factory function syntax
function createCar(brand,color) {
    return {
        brand: brand,
        color: color
    }
}

const car1 = createCar("Toyota","Red")
const car2 = createCar("Honda","Blue")
console.log("Car 1:",car1)
console.log("Car 2:",car1)

console.log("")

//3.factory function with methods
//a factory can also create objects that contain function clled methods
function createPlayerWithMethods(name,health) {
    return {
        name:name,
        health:health,
        attack() {
            console.log(this.name+"attacks!")
        },
        heal() {
            this.health == 10;
            console.log(this.name +"healed!")
        }
    }
}

const player3 = createPlayerWithMethods("John",100)
const player4 = createPlayerWithMethods("Alex",80)

player3.attack()
player4.heal()

console.log("Alex's health:",player4.health)

console.log("")

//4.how this works
//inside an object methods ,this refers to the object that called the method
player3.attack()   //here: this ===player3

//therefore:
//this.name === player3.name
//this.health === player3.health

console.log("")

//5.why use factory funfction 
//woithout a factory function
const enemy1= {
    name:"Goblin",
    health: 100,
    damage:20
}

const enemy2= {
    name:"skeleton",
    health: 80,
    damage:15
}

const enemy3= {
    name:"Zombie",
    health: 120,
    damage:25
}

console.log(enemy1)
console.log(enemy2)
console.log(enemy3)

//instead of repeatedly writing objects,we can use a factory function
function createEnemy(name,health,damage) {
    return {
        name:name,
        health:health,
        damage:damage
    }
}

const enemy4 = createEnemy("Goblin",100,20)
const enemy5 = createEnemy("skeleton",80,15)
const enemy6 = createEnemy("zombie",120,25)

console.log("")

//6.shorthand property syntax
//instead of writng:
function createPerson1(name,age) {
    return {
        name: name,
        age: age
    }
}

//javascript allows u to write:
function createPerson2(name,age) {
    return {
        name,
        age
    }
}

const person = createPerson2("John",25)

console.log("person name:",person.name)
console.log("person age:",person.age)

console.log("")

//factory function with privatae variables
//variables created inside the factory function can be kept private from the outside
function createBankAccount(owner,balance) {
    //priate variable
    let money = balance
    return {
        owner,
        deposit(amount) {
            money += amount
        },
        getBalance() {
            return money
        }
    }

}

const account = createBankAccount("John",100)
console.log("Owner:",account.owner)
console.log("Starting balance:",account.getBalance())
account.deposit(-34)
console.log("New balance:",account.getBalance())

//thi does not work :
//console.log.log(account.money);
//"money is private and cannot be accesed directly,
// we have to use getBalance() instead"

console.log("")

//8.factory function vs consstructor function

//factory fucntion 
function createPerson(name) {
    return{
        name: name
    }
}
//no new is needed

//constructor function
function Person(name) {
    this.name = name
}
//new isrequired

const person2 = new Person("Alex");
console.log("Constructor person:" , person2);

//Factory:
//createPerson("John")

//constuctor :
//new Person("Alex")

console.log("")

//9.complete game character example
//this is more of an advanced factory function

function createCharacter(name,health,attackPower) {
    return{
        name,
        health,
        attackPower,

        //attack another character
        attack(target) {
            target.health -= this.attackPower
            console.log(this.name + "attacked" + target.name + " for" + this.attackPower + "damage!")
        },

        //heal the character
        heal(amount) { 
            this.health += amount
            console.log(this.name+" healed for" + amount + "HP!")
        },

        //display chracter information
        getStatus() {
            console.log(
                this.name + "| Health: "+ this.health + "| Attack: "+ this.attackPower
            )
        }
    }
}

//create 2 characters 
const player = createCharacter(
    "Player",
    100,
    25
)

const enemy = createCharacter(
    "Goblin",
    80,
    15
)

//dissplay their stats
player.getStatus()
enemy.getStatus()

//player attacks goblin
player.attack(enemy)

//check goblin health
enemy.getStatus()

//goblin attacks player
enemy.attack(player)

//check player health
player.getStatus()

//player heals 
player.heal(20)

//check player health again
player.getStatus()






