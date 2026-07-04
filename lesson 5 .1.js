const player = {
    name :"sans",
    age:30,
    power:"unknown",
    gender:"Male",
    highest_ranking:true,
    aura:function(){
        console.log(this.name + " is " + this.age + " years old.")
    }
}

for(let x in player){
    console.log(x + ": " + player[x])
}
console.log("")

console.log("My name is " + player.name)
console.log("I am " + player.age + " years old.")
console.log("I am a " + player.gender)
console.log("my power is " + player.power )

console.log("")

console.log(`My name is ${player.name} and I am $ {player.age}years old.`)
console.log(`I am a  ${player.age} and my power is $ {player.power}.`)
console.log("")

delete player.name
delete player.isPresent
console.log(player) 

console.log("")

