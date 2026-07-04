const car = {
    Name: "Audi",
    release_date:"1990",
    type:"hybrid",
    average_size:"15 ft",
    country:"Germany",

    Name_date_type:function(){
        console.log(`${this.Name} released in ${this.release_date} and the type is ${this.type}`)
    },

    Size_country:function(){
        console.log(`${this.average_size} is the size ${this.country} is the country it came from`)
    }
}

for(let x in car){
    console.log(x + ": " + car[x])
}
console.log("")