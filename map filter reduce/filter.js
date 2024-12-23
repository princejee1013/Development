// const coding=["js", "c++", "java", "python"]

// // storing this foreach loop in a variable
// const values=coding.forEach( (item)=>{
// //   console.log(item) //prints all the element
// //even if you explicitely return it, then also it willl return undefined
//     return item
// })

// console.log(values) //undefined


const myNums=[1,2,3,4,5,6,7,8,9,10]

const newnums=myNums.filter(  (num)=> num>4)
 console.log(newnums) //prints all the numbers greater than 4


 //or
 const newnumss=myNums.filter(  (num)=>{
    return num>4
 })
 console.log(newnumss) //prints all the numbers greater than 4



 console.log("------------------------------")



 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2015 }
  ];

  //filter out the books of genre history only

  const HistoryBooks= books.filter((bk)=> bk.genre==='History')
    console.log(HistoryBooks)

    console.log("------------------------------")


//filter out books that was publised after 2000

const bookAfter2000= books.filter((bk)=>{
    return bk.publish>2000
})

console.log(bookAfter2000)
  
