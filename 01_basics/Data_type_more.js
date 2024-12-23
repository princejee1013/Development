//stack and heap memoery allocation in JS
//stack is used for static memory allocation and heap is used for dynamic memory allocation
//all primitive=> stack
//all non-primitive=> heap


//eg
// let a=10;
// let b=a;
// a=20;
// console.log(b);//10  
// //here a is primitive so it is stored in stack so when we change a then b will not change 
// //as b is also stored in stack

// let a=[1,2,3];
// let b=a;
// a[0]=5;
// console.log(b);//[5,2,3]
// //here a is non-primitive so it is stored in heap so when we change a then b will also change
// //as b is also stored in heap
// //so in non-primitive data type the reference is stored in stack and the actual data is stored in heap
// //so when we change the actual data then the reference will also change
// //but in primitive data type the data is stored in stack so when we change the data then the reference will not change
// //as the data is stored in stack
