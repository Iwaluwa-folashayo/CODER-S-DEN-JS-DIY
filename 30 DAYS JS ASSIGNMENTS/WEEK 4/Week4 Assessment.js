
//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//  September, October or November, the season is Autumn.
//  December, January or February, the season is Winter.
//  March, April or May, the season is Spring
//  June, July or August, the season is Summer

//  let month = 'January'
//  if (month == 'September' || 'October' || 'November'){
//     console.log('the season is Autumn');
//   }  

// else if (month == 'December' || 'January' || 'February'){
//     console.log('the season is Winter');
// }

// else if (month == 'March' || 'April' || 'May'){
//     console.log('the season is Spring');
// }

// else if (month == 'June' || 'July' || 'August'){
//     console.log('the season is Summer');
// }
// else{
//     console.log('the month is invalid');
// }

let userInput = 'May'
switch (userInput) {
    case 'September':
    case 'October':
       case'November':
      console.log('the season is autumn');
      break;
    case 'December':
    case 'January' :
    case'February':
      console.log('the season is winter');
      break;
    case 'March':
    case'April' :
    case 'May':
      console.log('the season is Spring');
      break;
    case 'June': 
    case 'July':
    case'August':
      console.log('the season is summer');
      break;
}
