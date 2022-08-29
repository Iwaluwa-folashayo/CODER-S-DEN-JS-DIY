// exercise 1. no 7


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

//     exercise 2. no 1, 4-8, 10, 14 & 15
//     1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//     Enter base: 20
//     Enter height: 10
//     The area of the triangle is 50  
let b = prompt ('Enter a base of triangle')
let h = prompt ('Enter a height of triangle')
const areaTri = 0.5 * b * h

console.log(areaTri)


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 let r = prompt ('Enter a number for radius')
 const pi = 3.14
 const area = pi * r * r
 const cirCum = 2 * pi * r

 console.log(area)
 console.log(cirCum)

// 5.Calculate the slope, x-intercept and y-intercept of y = 2x -2

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

// 7. Compare the slope of above two questions.

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = 'Folashayo'
if ('myName.length > 7') {
    console.log('My name is long')
}
else {
    console.log('My name is short')
}

// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of yours you live: 100
// You lived 3153600000 seconds.
// let user = prompt ('Enter number of years')
// let noww = new Date ().getTime()
// let personLive = noww * user

// console.log(personLive)



// 15. Create a human readable time format using the Date time object

//     YYYY-MM-DD HH:mm

const human = new Date ()
const YYYY = human.getFullYear()
const MMM = human.getMonth() + 1
const DDD = human.getDate()
const HHH = human.getHours()
const mmm = human.getMinutes()

console.log(`${YYYY}-${MMM}-${DDD}  ${HHH}:${mmm}`)

//     DD-MM-YYYY HH:mm
const format = new Date ()
const YY = human.getFullYear()
const M = human.getMonth() + 1
const D = human.getDate()
const H = human.getHours()
const m = human.getMinutes()

console.log(`${D}-${M}-${YY}  ${H}:${m}`)


//     Exercises: Level 3

//     Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//         YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date ()
const YYY = now.getFullYear()
const MM = now.getMonth() + 1
const DD = now.getDate()
const HH = now.getHours()
const mm = now.getMinutes()

console.log(`${YYY}-${MM}-${DD}  ${HH}:${mm}`)







