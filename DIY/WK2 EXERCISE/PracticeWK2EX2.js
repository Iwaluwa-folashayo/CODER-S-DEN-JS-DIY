
// Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

// Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let string = '10'
let Num = 10
console.log(typeof string==Num)
console.log(parseInt(string))

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = ('9.8')
let numFloat = parseFloat(num)
console.log(numFloat)
console.log(Math.ceil(numFloat))

// Check if 'on' is found in both python and jargon
let statement = 'phyton and jargon'
console.log(statement.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentenceCheck = 'I hope this course is not full of jargon'
console.log(sentenceCheck.includes('jargon'))

// Generate a random number between 0 and 100 inclusively.
console.log(Math.random() * 100)

// Generate a random number between 50 and 100 inclusively.
console.log(Math.random(50) * 100)

// Generate a random number between 0 and 255 inclusively.
console.log(Math.random() * 255)

// Access the 'JavaScript' string characters using a random number.
let access = 'JavaScript'
let thirdLetter = access[2]
console.log(thirdLetter)

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phraseUse = 'You cannot end a sentence with because because because is a conjunction'
console.log(phraseUse.substring(31,55))