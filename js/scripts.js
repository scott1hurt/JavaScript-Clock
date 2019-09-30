//We need a way to get the current time and have that be updated each second.
//To do this, we are going to create a function that contains a timer to call upon itself each second. 
function showTime(){
    var date = new Date(); // This gets us current date and time

    var hour = date.getHours(); // 0-23 
    var minute = date.getMinutes();// 0-59
    var seconds= date.getSeconds();// 0-59
    var period = "AM"; //We're going to assume we're in an AM start.
    //We need to make sure the hour is displayed in 12 hour time, and we also need to determine whether we should display in AM or PM. 
    // With our hours being between 0 and 23, 0 will equal 12AM and anything above 12 or above is  PM hour. 
    if(hour ===0){
        period = "AM";
    } else if (hour >= 12) {
        period = "PM";
    }
    
    if(hour === 0) {
        hour = 12; //If hour equals 0, change it to 12
    }
    if(hour > 12){
        hour = hour -12; //If hour is greater than 12, subtract 12 from it -13 =1
    }
    hour = (hour < 10) ? ("0" + hour) : hour; //If hour is less than 10, set hour equal to 0 plus the value of hour 
    minute = (minute < 10) ? ("0" + minute): minute;
    seconds = (seconds < 10) ? ("0" + seconds) : seconds
   
    var time = hour + ":" + minute + ":" + seconds + " " + period; //String to store current time
    document.getElementById("clockDisplay").innerText = time;
    
    setTimeout(showTime, 1000); // Schedule the showTime function to be called after 1000ms(1 second)

}
showTime();
