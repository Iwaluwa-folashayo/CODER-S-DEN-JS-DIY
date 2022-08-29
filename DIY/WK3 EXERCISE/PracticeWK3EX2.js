// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 50

let base = prompt ('Enter a base of triangle')
let height = prompt ('Enter a height of triangle')
const areaOfTri = 0.5 * base * height
console.log(areaOfTri)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = prompt ('Enter number for side a of triangle')
let b = prompt ('Enter number for side b of triangle')
let c = prompt ('Enter number for side c of triangle')
let perimeterOfTri = a + b + c 
console.log(perimeterOfTri)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt ('Enter number for length of rectangle')
let width = prompt ('Enter number for width of rectangle')
let areaOfRect = length * width
let perimeterOfRect = 2 * (length + width)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 let r = prompt ('Enter a number for radius')
 const pi = 3.14
 const areaOfCircle = pi * r * r
 const cirCum = 2 * pi * r

 console.log(areaOfCircle)
 console.log(cirCum)

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 5;
let y = 2*x -2
console.log(y)

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;

let x2 = 6;
let y2 = 10;
let slope = y2-y1/x2-x1;
console.log(slope)

//7. Compare the slope of above two questions.

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xx = -3;
let yy = xx**2 + 6*xx + 9;
console.log(yy)


// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// let hours = prompt ('Enter number of hours')
// let rate = prompt ('Enter number for rate per hour')
// let pay = hours * rate


// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'folashayo'
if(myName.length > 7) {
    console.log('my name is long')
}else {
    console.log('my name is short')
}


// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = 'Oladunni'
let lastName = 'Iwaluwa'
if (firstName.length > lastName.length){
    console.log('Oladunni is longer than Iwaluwa')
}
else{
    console.log('Iwaluwa is longer than Oladunni')
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = 25
let yourAge = 20

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

let user = prompt ('Enter birth year')
if(user <= 2004){
    console.log('You are old enough to drive')
}
else{
    console.log('You will be allowed to drive at age 18 and above')
}


// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of yours you live: 100
// You lived 3153600000 seconds.
let person = prompt('Enter number of years you live')
let now = new Date().getTime()
let secondsPersonLived = now * person 
console.log(secondsPersonLived)


// 15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

//     YYYY-MM-DD HH:mm

const date = new Date ()
const YYY = date.getFullYear()
const MM = date.getMonth() + 1
const DD = date.getDate()
const HH = date.getHours()
const mm = date.getMinutes()

console.log(`${YYY}-${MM}-${DD}  ${HH}:${mm}`)

//     DD/MM/YYYY HH:mm
const timeFormat = new Date ()
const YY = timeFormat.getFullYear()
const M = timeFormat.getMonth() + 1
const D = timeFormat.getDate()
const H = timeFormat.getHours()
const m = timeFormat.getMinutes()

console.log(`${D}/${M}/${YY}  ${H}:${m}`)