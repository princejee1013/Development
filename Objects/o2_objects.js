//objects with singleton=>constructor

// const tinderUser= new Object()  //creating object using constructor or it is a singleton object

const tinderUser={} //this is literal form of object
tinderUser.name="Prince";
tinderUser.age=30;
tinderUser.email="prince@gmail.com"
tinderUser.isLoggedIn= false  







console.log(tinderUser);

// V V V  V V V V  V V V V V  I I II I I I I II I I I I II I
console.log(Object.keys(tinderUser)) //[ 'name', 'age', 'email', 'isLoggedIn' ] it will print all the keys in  an object in a array format. it is used in web dev projects , 


//similarly values can also be generated
console.log(Object.values(tinderUser)) //[ 'Prince', 30, 'prince@gmail.com', false ]



//similarly entries can also be generated
console.log(Object.entries(tinderUser)) //it will print all the keys and values in an array format. it is used in web dev projects , below is the o/p

/* [
    [ 'name', 'Prince' ],
    [ 'age', 30 ],
    [ 'email', 'prince@gmail.com' ],
    [ 'isLoggedIn', false ]
  ]
*/

//sometime we need to loopp through thr object and printing some value but if it doesnt exisit then crash can happen in site

//to avoid this we use hasOwnProperty method
if(tinderUser.hasOwnProperty("name")){
    console.log(tinderUser.name);
}

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true








//NESTED object
const regularUser={
    email: "some@gmail.com",
    fullname: {
      userFullName :{
        firstName: "John",
        lastName: "Doe"
      }
    },
}

// console.log(regularUser.fullname.userFullName.firstName);

//combining two objects
const obj1={
    name: "Prince",
    age: 30
}
const obj2={
    email: "some@gmail.com",
    isLoggedIn: false,
}
///*V V V V V V I I I I I I  , I N T E R V I E W */
// const obj3={obj1, obj2}
// console.log(obj3); //it will print obj3 that contain 2 objectes inside it, but we want ot merge two objects 
//  const obj3=Object.assign(obj1, obj2)
//  console.log(obj3);    //{ name: 'Prince', age: 30, email: 'some@gmail.com', isLoggedIn: false }, but obj 1 qnd obj2 entered in obj1 only as they thought obj1 is the target and thus obj1 get modified and gave the following output when printed below. that's why to avoid to modify the obj 1 we take a empty object as target that i s being filed by obj1 and obj2. this is implemented below.
// console.log(obj1); //{ name: 'Prince', age: 30, email: 'some@gmail.com', isLoggedIn: false }

 const obj3=Object.assign({}, obj1, obj2)
console.log(obj3); //{ name: 'Prince', age: 30, email: 'some@gmail.com', isLoggedIn: false } //correct syntax to merge, HERE THE NEW EMPTY OBJECT {} ACT AS A TEGET OBJECT.


//BUT WE USE SPREAD OPERATOR TO MERGE TWO OBJECT LIKME IN ARRAYS
const obj4={...obj1, ...obj2} //{ name: 'Prince', age: 30, email: 'some@gmail.com', isLoggedIn: false }


