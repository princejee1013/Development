//for using dates use temporal 
//dates
 const date=new Date() 
    console.log(typeof date) //object
 console.log(date.toDateString()) //2024-09-28T13:53:05.465Z
    console.log(date.toTimeString()) //13:53:05 GMT+0000 (Coordinated Universal Time)
    console.log(date.toLocaleDateString()) //9/28/2024
    console.log(date.toLocaleTimeString()) //1:53:05 PM
    console.log(date.toISOString()) //2024-09-28T13:53:05.465Z
    console.log(date.toUTCString()) //Sat, 28 Sep 2024 13:53:05 GMT
    console.log(date.toDateString()) //Sat Sep 28 2024
    console.log(date.toJSON()) //2024-09-28T13:54:58.171Z

