
// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Oladunni'
let lastName = 'Iwaluwa'
let country = 'Nigeria'
let city = 'Lagos'
let age = 25
let isMarried = false
let Year = 1996

console.log (typeof firstName) 
console.log (typeof lastName)
console.log (typeof country)
console.log (typeof city)
console.log (typeof age) 
console.log (typeof isMarried)
console.log (typeof Year)


// Check if type of '10' is equal to 10
let numOne = '10'
let numTwo = 10
console.log(typeof numOne==numTwo)


// Check if parseInt('9.8') is equal to 10
let num = '9.8'
console.log(parseInt(num))

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
console.log(4 > 3)

// 4 >= 3
console.log(4 >= 3)

// 4 < 3
console.log(4 < 3)

// 4 <= 3
console.log(4 <= 3)

// 4 == 4
console.log(4 == 4)

// 4 === 4
console.log(4 === 4)

// 4 != 4
console.log(4 != 4)

// 4 !== 4
console.log(4 !== 4)

// 4 != '4'
console.log(4 != '4')

// 4 == '4'
console.log(4 == '4')

// 4 === '4'
console.log( 4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.
let py = 'python'
let jg = 'jargon'

let lengthOfPy = py.length
let lengthOfJg = jg.length
console.log(lengthOfJg != lengthOfPy)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12)

// 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12)

// 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12)

// 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12)

// !(4 > 3)  
console.log(!(4 > 3))

// !(4 < 3) 
console.log(!(4 < 3))

// !(false) 
console.log(!(false))

// !(4 > 3 && 10 < 12) 
console.log(!(4 > 3 && 10 < 12))

// !(4 > 3 && 10 > 12) 
console.log(!(4 > 3 && 10 > 12))

// !(4 === '4') 
console.log(!(4 === '4'))

// There is no 'on' in both dragon and python   
console.log(!("There is no 'on' in both dragon and python"))


// Use the Date object to do the following activities
 // What is the year today?
 const year = new Date()
 console.log(year.getFullYear())

 // What is the month today as a number?
 const month = new Date()
 console.log(month.getMonth() + 1)

 // What is the date today?
 const date = new Date()
 console.log(date.getDate())

 // What is the day today as a number?
 const day = new Date()
 console.log(day.getDay())

 // What is the hours now?
 const hour = new Date()
 console.log(hour.getHours())

 // What is the minutes now?
 const minute = new Date()
 console.log(minute.getMinutes())

 // Find out the numbers of seconds elapsed from January 1, 1970 to now.
 const seconds = new Date()
 console.log(seconds.getTime())