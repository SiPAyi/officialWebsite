//print currentDate on html
document.getElementById('date').innerHTML = currentDate; 

//print currentTime on html
document.getElementById('time').innerHTML = currentTime; 


/*below will print the period name */
document.getElementById('period').innerHTML = periodName;

// document.getElementById('getAttend').style.display = "none";

//to modify attendence button
var attendenceBtn = document.getElementById('getAttend') ;
attendenceBtn.addEventListener('click',showMsg);


if(currentPeriodNumber == 0 || currentPeriodNumber == 8){
    attendenceBtn.style.backgroundColor = "red";
    attendenceBtn.innertHTML = "not available now";
    alert("Hey it's not college time!!");
}
else if(dayNumber == 0){
    attendenceBtn.style.backgroundColor = "red";
    attendenceBtn.textContent = "not available now";
    alert("Hey it's holyday, Enjoy the day man  :) ");
}
else{
    attendenceBtn.textContent = "Get Attendence" ;
    function showMsg(){
        attendenceBtn.textContent = "Done";
        alert('You have successfully got the attendence for ' + periodName + " at " + currentTime);
    }
}
// modification of Attendence button is completed here

//getting locationg

var div  = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    div.innerHTML = "The Browser Does not Support Geolocation";
  }
}

function showPosition(position) {
  div.innerHTML = "Latitude: " + position.coords.latitude + " ; Longitude: " + position.coords.longitude;
}
// var currentPosition = showPosition(position)

function showError(error) {
  if(error.PERMISSION_DENIED){
      div.innerHTML = "The User have denied the request for Geolocation.";
  }
}
getLocation();
//getting location

