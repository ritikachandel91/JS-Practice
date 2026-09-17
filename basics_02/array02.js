const marvel = ["thor","ironman","spiderman"]
const dc_hero = ["spiderman","flash","batman"]

marvel.push(dc_hero)
console.log(marvel)

marvel.concat(dc_hero)
console.log(marvel)

const all_new_hero = [...marvel , ...dc_hero]
console.log(all_new_hero)

const arr1 = [1,2,3,4,[4,5,6],6,4,5,[9,8,9,10]]
const real = arr1.flat(Infinity)
console.log(real)

console.log(Array.isArray("radha"))
console.log(Array.from("rishi"))
console.log(Array.from({name:"ramayana"}))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))