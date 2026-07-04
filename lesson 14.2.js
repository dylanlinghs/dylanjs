//dates ands its methods

//data objects are static
//the computer clock is ticking,date objects are not
//there are many ways to create a new date object

//date string
const date1 = new Date("June 02,2026 12:12:00")
console.log(date1)
//year,month
const date2 = new Date("2026-06")
console.log(date2)
//year month day
const date3 = new Date("2026-06-02")
console.log(date3)
//month day year
const date4 = new Date("06-02-2026")
console.log(date4)
console.log("")

//DATE HAS ALOT OF METHODS,but heres some commmon ones
//date to methods
const date5 = new Date();
console.log(date5.toDateString())
console.log(date5.toJSON())
console.log(date5.toUTCString())
console.log(date5.toLocaleString())
console.log(date5.toLocaleTimeString())
console.log("")

//date get methods
//js gets month from 0-11(jan to dec)
const date6 = new Date();
console.log(date6.getDate())
console.log(date6.getDay())
console.log(date6.getMonth())
console.log(date6.getFullYear())
console.log(date6.getTime())
console.log(date6.getTimezoneOffset())
console.log("")

//dadte set methods
const date7 = new Date("June 06,2026")
date7.setDate(15)
date7.setMonth(11)
date7.setFullYear(2020)
console.log(date7)
console.log("")


console.log(date5)
console.log(date7)
//we can compare dates
if (date7.toDateString() > date5.toDateString()){
    console.log(`Today is after ${date7}`)
}
else{
    console.log(`Today is before ${date7}`)
}
console.log("")