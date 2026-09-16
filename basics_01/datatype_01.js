"use strict" // treat all js code as newer version

//alert("hello") // we are using nodejs , not browser

let name = "Ritika"
let age = 27
let b = false
//number = 2 to power 53 memory address
//bigint for big number
//String
//boolean = true /false
// null=standalone value
//undefine
//symbol
//object

console.log(typeof age)
console.log(typeof name)
console.log(typeof b)

let num = 10
if(num%2==0){
    console.log("even")
}else{
    console.log("odd")
}

console.log(typeof null)
console.log(typeof undefined)

//Primitive -->
//7types :String , number , boolean , null , undefined , symbol , bigInt 

let s = "Ritika"
console.log(typeof s);

let w = 10
console.log(typeof w);

let e = "Ritika"
console.log(typeof e);

let t = 10>2
console.log(typeof t);

let n =null
console.log(typeof n);

let u = undefined
console.log(typeof u);

let id = Symbol('123')
console.log(typeof id)

const p = Symbol('123')
console.log(id === p)
//Refereence (Non primitive)

//Arrays , objects , Functions
const hero =["shaktiman","naagraj","doga"];
let myobj = {
    name :"ritika",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(hero)
