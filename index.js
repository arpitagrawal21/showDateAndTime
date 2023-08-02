
const today = new Date();
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
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
const currentDate = `${date}-${month}-${year}`;


console.log("Today is : "+ currentDay) 
console.log("Current Time is : "+currentTime);
console.log("Current Date is :"+currentDate);