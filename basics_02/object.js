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

//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const  course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor)

const user = {
    name: "Ritika",
    age: 27,
    city: "Pune"
};

const { name, age } = user;

console.log(name); // Ritika
console.log(age);  // 27

//JOSN

{
    name:"Ritika-----"
    coursename:"js in English"
    price:"free"
}
