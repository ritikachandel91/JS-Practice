const myArr = [2,3,4,5,6,8]
const myHero = ["shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[3])

//Array method


console.log(myArr.pop())

myArr.push(19)
console.log(myArr)
console.log(myArr.pop())

console.log(myArr)

myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

console.log(myArr)

//slice()  → doesn't change original
//splice() → changes original

console.log("a",myArr)
console.log("slice -->",myArr.slice(3,1)),
console.log("splice -->",myArr.splice())