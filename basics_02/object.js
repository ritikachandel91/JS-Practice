//singleton


//object literals
const mysym  = Symbol("Key1")
const Jsuser = {
    name:"Ritika",
    age:27,
    "fullname":"Ritika chandel",
    location:"jaipur",
    [mysym]: "RitikaKey",
    email:"ritika@gmail.com",
    isLoogedIn:false,
    lastLogin:["Monday","saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mysym])

Jsuser.email = "Ritika@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.name = "Ram"
console.log(Jsuser.email)
console.log(Jsuser.name)