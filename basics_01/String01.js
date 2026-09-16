const name = "ritika"
const repoCount = 50

console.log(name+repoCount+" value ")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ritika')

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.lastIndexOf);
console.log(gameName.length);
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const otherString = gameName.slice(-5,3)
console.log(otherString)

const newString1 ="ritika chandel"
console.log(newString1)
console.log(newString1.trim())

const url = "http://ritika.com/ritika%20chandel"

console.log(url.replace('%20','-'))

console.log(url.includes('ritika'))

console.log(newString1.at(2))
