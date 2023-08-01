
const now = new Date();
const day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let prepand = (hour>=12) ? "PM" : "AM";
if(hour>12){
    hour = hour-12;
}
if(hour==24){
    hour = 0;
    prepand="AM";
}
if(hour<10){
  hour = "0"+hour; 
}
if(minute<10){
  minute = "0"+minute;
}
if(second<10){
  second = "0"+second;
}

const currentDay = dayName[day];
const currentTime = `${hour}:${minute}:${second} ${prepand}`;


console.log("Today is : "+ currentDay) 
console.log("Current Time is : "+currentTime);