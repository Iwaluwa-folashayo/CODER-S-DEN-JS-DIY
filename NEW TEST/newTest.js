 // // chunkArrayInGroups(["a", "b", "c", "d"], 2);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// // [].join('') -->

// // 1. reverse a given array without using the reserve method, and get the sum of elements in array.
// // if the array length is greater than ten and an even Number, get the sum of the second half
// // where you got the sum where each element is multiplied by two. 

// given [1,2,3,4], output should be [4,3,2,1] and 10
const given = [1,2,3,4]
let array = [];
let sum = 0;
for (let i = given.length; i >= 1; i--){
    array.push(i)
    sum += given[i-1]
    // console.log(given[i])
    // sum = array[0]+ array[1]+ array[2]+ array[3];
}
console.log(array,sum)


 // // given [1,2,3,4,5,6,7,8,9,10,11,12], you should get [12,10,8,6,4,2] and 21
// // 1. reverse a given array without using the reserve method, and get the sum of elements in array.
// // if the array length is greater than ten and an even Number, get the sum of the second half
// // where you got the sum where each element is multiplied by two. -->

const givenn =  [1,2,3,4,5,6,7,8,9,10,11,12]
let newArr = [];
let secHalfSum = 0;
let even;
for (let i = givenn.length; i >= 1 ; i--){
    newArr.push(i);
    even = newArr.filter((newArr) => newArr % 2 === 0);
}

console.log(newArr)
secondHalf = newArr.splice(6,12)
console.log(secondHalf)

secHalfSum += secondHalf[]
// secondHalf[0] +
// secondHalf[1] +
// secondHalf[2] +
// secondHalf[3] +
// secondHalf[4] +
// secondHalf[5];
console.log(even, secHalfSum)


 // // 2. change a string to uppercase, take away all white spaces at the begining and and end 
// // of the string, and get the first 4 elements of the string. if the string is less than
// // 4 characters, console.log('error'). -->

let string = ' folashayo ';
let upperCase = strings.toUpperCase();
let trimm = upperCase.trim();
let firstFourElement = (trimm.slice(0,4))

if(firstFourElement.length <= 4){
    console.log(firstFourElement)
}
else{
    console.log('error')
}


 // // 3. Get yesterday's date (dayof the week, month, year) -->

const yesterday = new Date();
const yearr = yesterday.getFullYear();
const  monthh = yesterday.getMonth() + 1
const dayOfTheWeek = yesterday.getDay() - 1 

console.log(`${dayOfTheWeek}-${monthh}-${yearr}`)






