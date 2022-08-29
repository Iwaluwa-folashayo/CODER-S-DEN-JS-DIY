
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// using swith condition
let score = 66;
switch(true){
    case score >= 80 && score <= 100:
        console.log('A');
        break;
    case score >= 70 && score <= 79:
        console.log('B');
        break;
    case score >= 60 && score <= 69:
        console.log('C');
        break;
    case score >= 50 && score <= 59:
        console.log('D');
        break;
    case score >= 40 && score <= 49:
        console.log('E');
        break;
    case score >= 0 && score <= 40:
        console.log('F');
        break;
    default:
        console.log('Advice to withdraw');
}

// using if else if else condition
let scores = 30;
    if(scores >= 80 && scores <= 100){
        console.log('A')
    }
    else if(scores >= 70 && scores <= 79){
        console.log('B')
    }
    else if(scores >= 60 && scores <= 69){
        console.log('C')
    }
    else if(scores >= 50 && scores <= 59){
        console.log('D')
    }
    else if(scores >= 40 && scores <= 49){
        console.log('E')
    }
    else if(scores >= 0 && scores <= 40){
        console.log('F')
    }
    else{
        console.log('Advice to withdraw')
    }


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// using switch condition method
let seasonCheck = 'April';
switch(true){
    case  seasonCheck =='September' ||
          seasonCheck == 'October' || 
          seasonCheck == 'November':
    console.log('the season is Autumn');
    break;

    case seasonCheck == 'December' || 
         seasonCheck == 'January' || 
         seasonCheck =='Feburary':
    console.log('the season is Winter');
    break;

    case seasonCheck == 'March' || 
         seasonCheck =='April' || 
         seasonCheck == 'May':
    console.log('the season is Spring');
    break;

    case seasonCheck == 'June' || 
         seasonCheck == 'July' || 
         seasonCheck =='August':
    console.log('the season is Summer');
    break;

    default:
    console.log('not a valid month ')

}

// using if else if else condition method
let seasonsInput = 'julY'
let seasons = seasonsInput.toLowerCase()

if (seasons == 'september' || 
    seasons == 'october' || 
    seasons =='november'){
    console.log('the season is Autumn');
}

else if (seasons =='december' || 
        seasons =='january' || 
        seasons =='february'){
    console.log('the season is Winter');
}

else if (seasons =='march' || 
        seasons =='april' || 
        seasons =='may'){
    console.log('the season is Spring');
}

else if (seasons == 'june' || 
         seasons =='july' || 
         seasons =='august'){
    console.log('the season is Summer');
 }

 else{
    console.log('invalid month')
 }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

// using switch method
let day = 'Monday'
switch(true){   
case day == 'Monday' || 
    day =='Tuesday' || 
    day =='Wednesday' || 
    day =='Thursday' || 
    day =='Friday':
console.log(`${day} is a weekday`);
break;

case day == 'Saturday' || 
    day =='Sunday':
console.log(`${day} is a weekend`);
break;

default:
    console.log('invalid day')
}


// using if else if else condition method

let days = 'Monday'

if(days == 'Monday' || 
   days =='Tuesday' || 
   days =='Wednesday' || 
   days =='Thursday' || 
   days =='Friday'){
console.log(`${days} is a weekday`);
}
else if (days == 'Saturday' || 
         days =='Sunday'){
console.log(`${days} is a weekend`);
   }
else{
        console.log('not a valid week')
}



