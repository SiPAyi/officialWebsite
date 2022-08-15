// if you pass hour and minutes then it will give you the period number;
function whichPeriod(hour,minutes){
//if time is 8 or 9 the below code will be executed
    if(hour == 9 || hour == 8){
        if(minutes >= 30){
            period = hour - 7;
        }
        else{
            period = hour - 8;
        }
    }
    // if time lies between 10 and 15 then the below code
    else if(10 <= hour && hour <= 15){
        if(minutes >= 40){
            period = hour - 7;
        }
        else if(hour == 10 && minutes>=30 && minutes<= 40){
            period = 8; // 8 will be for break
        }
        else{
            period = hour - 8;
        }
    }
    // if time is 16;
    else if(hour == 16 && minutes <= 40){
        period = hour -8;
    }
    else{
        period = 0;
    }
    return period;
}

// this are the all periods in a week if time table was changed then you can change these values;
var allPeriods = 
[['holyday','holyday','holyday','holyday','holyday','holyday','holyday','holyday','holyday'],
 ['mathematics','chemistry','physics lab','physics lab','lunch','english','leisure','telugu','break'],
 ['mathematics','chemistry','physics lab','physics lab','lunch','english','leisure','telugu','break'],
 ['english','chemistry','physics','maths','lunch','IT-lab','IT-lab','physics tutorial','break'],
 ['chemistry lab','chemistry lab','maths','chemistry tutorial','luch','telugu','english','maths tutorial','break'],
 ['physics','english','maths','chemistry','lunch','physics','english','leisure','break'],
 ['IT','chemistry','maths tutorial','physics','lunch','leisure','leisure','leisure','break'],
 ['leisure','chemistry tutorial','maths','physics tutorial','lunch','IT','telugu','leisure','break']
];

// below code using Date() method get some variables and periodNumber
// it(periodNumber) uses whichPeriod fuction which is written above;
var today = Date().split(' '); // split the Date string to => day,month,date,year,time,timezone;
var currentDate = today[2] + '-' + today[1]  + '-' + today[3]; 
var currentTime = Date().split(' ')[4];
var timeArray = currentTime.split(':'); // split the time into [hours,minute,seconds]
var hours = timeArray[0];
var minutes = timeArray[1];
var currentPeriodNumber = whichPeriod(hours,minutes); //* using the function given above it gives periodNumber

/* below code is to get dayNumber;*/
var dayNumber = new Date(); // new Date() will a date string;
dayNumber = dayNumber.getDay(); // getDat() method get the day number from the date string; 

function findPeriodName(){
    /*below code converts dayNumber and currentPeriodNumber to periodName;*/
    var todayArray = allPeriods[dayNumber];
    if(currentPeriodNumber==0){
       var periodName = "college closed" 
    }
    else{
    var periodName = todayArray[currentPeriodNumber-1];
    // alert(currentPeriodNumber-1);
    // alert("hey is it displaying")
}
    return periodName;
}

// using the above function findPeriodName, find the period's name and store it in periodName variable;
var periodName = findPeriodName();

// we can export 
// whichPeriod() function, which need to parameters hours and minutes. It returns the period number;
// allPeriods array, with 7 more nested arrays and that nested arrays have all periods in a day;
//variables => today, currentDate, currentTime, timeArray[hours,minutes,seconds], hours, minutes, currentPeriodNumber, dayNumber;
//findPeriodName() function, which converts dayNumber and currentPeriodNumber to periodName ;
// variables => periodName
