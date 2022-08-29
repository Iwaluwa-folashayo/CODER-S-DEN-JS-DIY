
// Exercise: Level 3
// 1. The following is an array of 10 students ages: // const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//    a.Sort the array and find the min and max age
//    b.Find the median age(one middle item or two middle items divided by two)
//    c.Find the average age(all items divided by number of items)
//    d.Find the range of the ages(max minus min)
//    e.Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

// 1a.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages.slice(0,2))  // min age
console.log(ages.slice(9,10)) //max age

// 1b
console.log(ages.slice(4,6))  //median age

// 1c
let totalSum = 0
for(let i= 0; i < ages.length; i++)
totalSum = totalSum + ages[i]
console.log(totalSum)

let averageAge = totalSum / ages.length
console.log(averageAge)   // Average age

// 1d
let max = ages.slice(9,10)
console.log(max)

let min = ages[0]
console.log(min)

console.log(max - min)  //range


// 2. Find the middle country(ies) in the countries array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  console.log(countries[5])
  // Or
  console.log(countries.slice(5,6))
  

  // 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
 let firstHalfCountries = countries.slice(0,5)
console.log(firstHalfCountries)
 
let secondHalfCountries = countries.slice(5,11)
console.log(secondHalfCountries)

firstHalfCountries.push('Norway')
console.log(firstHalfCountries)
 