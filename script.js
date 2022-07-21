console.log('JavaScript Executed!')
let dateTime = document.getElementById('dt');
let showDate = document.getElementById('fulldt');
dateTime.addEventListener('click', ()=>{
    const date = new Date; 
    const year = date.getFullYear()
    let month = date.getUTCMonth();
    month +=1
    const month_obj = {
        m1: "January",
        m2: "February",
        m3: "March",
        m4: "April",
        m5: "May",
        m6: "June",
        m7: "July",
        m8: "August",
        m9: "September",
        m10: "October",
        m11: "November",
        m12: "December"
    }
    // console.table(month_obj)
    if (month == 1){
        month = month_obj.m1 
    }
    if (month == 2){
        month = month_obj.m2 
    }if (month == 3){
        month = month_obj.m3
    }if (month == 4){
        month = month_obj.m4 
    }if (month == 5){
        month = month_obj.m5
    }if (month == 6){
        month = month_obj.m6 
    }if (month == 7){
        month = month_obj.m7
    }if (month == 8){
        month = month_obj.m8 
    }
    if (month == 9){
        month = month_obj.m9
    }if (month == 10){
        month = month_obj.m10 
    }if (month == 11){
        month = month_obj.m11
    }if (month == 12){
        month = month_obj.m12
    }
    // console.log(month)
    const DATE = date.getDate()
    let day = date.getDay()
    day +=1
    const day_obj = {
        d1 : "Sunday",
        d2 : "Monday",
        d3 : "Tuesday",
        d4 : "Wednesday",
        d5 : "Thursday",
        d6 : "Friday",
        d7 : "Saturday"
    }
    if (day == 1){
        day = day_obj.d1
    }if (day == 2){
        day = day_obj.d2
    }if (day == 3){
        day = day_obj.d3
    }if (day == 4){
        day = day_obj.d4
    }if (day == 5){
        day = day_obj.d5
    }if (day == 6){
        day = day_obj.d6
    }if (day == 7){
        day = day_obj.d7
    }
    // console.table(day_obj)
    const fullDate = month+" "+DATE+", "+day+", "+year
    console.log(fullDate)
    document.getElementById('fulldt').innerHTML = "Current Date->"+fullDate;
})
setInterval(() => {
    const time = new Date;
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    // console.log(hr+":"+min+":"+sec)
    const fullTime = hr+ " "+"hours"+":"+min+" "+ "minutes"+':'+sec+' '+'seconds'
    // console.log(fullTime)
    document.getElementById('showTime').innerHTML = fullTime
}, 1000);