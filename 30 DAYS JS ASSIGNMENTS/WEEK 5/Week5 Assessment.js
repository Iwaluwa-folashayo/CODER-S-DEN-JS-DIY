


    // First remove all the punctuations and change the string to array and count the number of words in the array

    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    let word = text.split(' ')
    console.log(word.length)


//     In the following shopping cart add, remove, edit items
//          add 'Meat' in the beginning of your shopping cart if it has not been already added
//         add Sugar at the end of you shopping cart if it has not been already added
//         remove 'Honey' if you are allergic to honey
//         modify Tea to 'Green Tea'

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('meat')
    console.log(shoppingCart)

    shoppingCart.push('sugar')
    console.log(shoppingCart)

    const shoppingCartRemove = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCartRemove.pop()
    console.log(shoppingCartRemove)

    shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)


//     In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add Souto the countries list.
let Countries = ['SouthAfrica', 'Ghana', 'Ethiopia', 'London', 'Italy']
console.log(Countries.includes('Ethiopia'))
console.log(Countries[2].toUpperCase())

//     In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
console.log(webTechs.includes('Sass'))
webTechs.push("Sass")
console.log(webTechs)

//     Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)



// Exercise: Level 3

//     The following is an array of 10 students ages:

//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//         Sort the array and find the min and max age
//         Find the median age(one middle item or two middle items divided by two)
//         Find the average age(all items divided by number of items)
//         Find the range of the ages(max minus min)
//         Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ages.sort()
    console.log(ages)


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