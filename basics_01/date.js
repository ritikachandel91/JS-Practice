let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,23,5,3,9)
console.log(myCreatedDate.toLocaleString())

let myCreatedD2 = new Date("05-27-1999")
console.log(myCreatedD2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedD2.getTime())
console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())

