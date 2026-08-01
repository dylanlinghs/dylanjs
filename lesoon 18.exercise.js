const map = new Map()
map.set("name" , "John")
map.set("age",25)
map.set(4,"chicken")
map.set({name : "john"},"john") 
map.set({id : 5},8) 
map.set({boolean : true},true)
map.set(NaN,9)
map.set(["John", "Bob"], "heli")
map.set(["Abby", "Caleb", "Jane"], 5)

console.log(map)

