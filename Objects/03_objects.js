//oject destructuring

const course={
    courseName: "JS course in hindi",
    price: 1000,
    duration: "3 months",
    description: "This is a JS course in hindi"

}

// course.courseName// not very convenient

//object destructuring
const {courseName, price, duration, description}=course;
console.log(courseName); //JS course in hindi

//if you want to change the name of the key
const {courseName: name, price: cP, duration: cD, description: cDes}=course;
console.log(name); //JS course in hindi

//destructurigg of object used in react js , eg
/*
const navbar=({company}) =>{
    
}
    navbar(company="princeltd")
*/




/*   ******************E V E R Y T H I N G  A B O U T   A P IS******** */
//APIs are used to connect the frontend and backend of the website







