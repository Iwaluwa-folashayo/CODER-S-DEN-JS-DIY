// exercise 1: no 7
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let sliceOut = '30 Days Of Javascript'
console.log(sliceOut.substring(3,21))
console.log(sliceOut.substring(3))

// exercise 2: no 1, 4-8, 10,

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let statement = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another"
console.log(statement)


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatNum = ('9.8')
let floatInt = parseFloat(floatNum)
console.log(floatInt)
console.log(Math.round(floatInt))
console.log(Math.ceil(floatInt))



// Check if 'on' is found in both python and jargon
let py = 'python'
console.log(py.includes('on'))

let jg = 'jargon'
console.log(jg.includes('on'))


// I hope this course is not full of jargon. Check if jargon is in the sentence.

let phrase = 'I hope this course is not full of jargon'
console.log(phrase.includes("jargon"))


// Generate a random number between 0 and 100 inclusively.

let random = Math.random() * 100
console.log(random)

let value = Math.floor(random)
console.log(value)


// Generate a random number between 50 and 100 inclusively
let randM = Math.random(50) * 100
console.log(randM)

let realValue = Math.floor(randM)
console.log(realValue)




// Access the 'JavaScript' string characters using a random number.
let js = 'Javascript'
console.log(js.length)

console.log(js[4])
console.log (js[0])
console.log(js.charAt(3))


// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi
console.log(string.match(pattern))



