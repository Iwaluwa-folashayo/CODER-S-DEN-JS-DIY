
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let month = 'October'
switch (true) {
    case month == 'Feburary':
      console.log(`${month} has 28 days`)
      break;

    case month == 'April' || 
        month == 'June' || 
        month == 'September' || 
        month == 'November':
      console.log(`${month} has 30 days`)
      break;

    case month == 'January' || 
        month == 'March' || 
        month == 'May' || 
        month == 'July' || 
        month == 'August' || 
        month == 'October' || 
        month == 'December':
      console.log(`${month} has 31 days`)
      break;

    default:
      console.log('month is not part of the year calender.')
  }


