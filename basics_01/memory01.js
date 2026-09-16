//There are two memory stack(primitive) , heap(non-primitive)

let myName = "RitikaChandel"

let otherName = myName
otherName = "Ritz"
console.log(otherName)//Ritz

let user1 = {
    email : "user@google.com",
    upi :"user@pbl"
}
console.log(user1.email)

let user2 = user1;

user2.email = "Ritika@google.com"
console.log(user2.email)//Ritika@google.com
console.log(user1.email)//Ritika@google.com