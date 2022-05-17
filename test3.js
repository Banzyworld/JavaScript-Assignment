// // • Design a for loop that returns an array of even numbers from 1-100

//  var array = [];
//  for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//      array.push(i)
//      console.log (array)
//     } 
//     // else {
//     //     console.log (i + " odd number")
//     // }
// }





// • Create a function that returns even numbers between two numbers A and B

// let evenNumber = (A, B) => {
// let AB = [];
//    for (i = A; i < B; i++) {
//      if (i % 2 === 0) {
//        AB.push(i) 
//          console.log(AB)
//      } 
//     //  else if (i % 2 != 0) {
//     //      console.log (i + ' not even')
//     //  }
//  }

// }
// evenNumber(10, 40)


// // When would you use a conditional statement?
// //  (a)when you want to reuse a set of statements multiple times 
// //  (b)when you want your code to choose between multiple numbers
// //  (c) when you want to group data together
// //  (d) when you want to loop through a group of statements.


// Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

// let firstFunction = (A,B) => {
//  let sum = (A + B);
//  console.log (sum)  
// }
// firstFunction(100, 2500)

// *** 2nd Method

// const integer1 = 1000
// const integer2 = 2500

// let firstFunction = () => {
//  let sum = (integer1 + integer2);
//  console.log (sum)  


// }
// firstFunction()





// // • Create a function with a function name printSum( ) and print the sum of two numbers.


// let printSum = (Y, Z) => {
// let sum = (Y + Z);
//  console.log (sum)
// }
// printSum (365, 365)
  
//** */ 2nd Method

// let num1 = 365
// let num2 = 365

// let printSum = () => {

//     sum = num1 + num2
//     console.log (sum)

// }
// printSum()









// // • Create a function that returns an array of the names of 10 of your course mates

// const names = ['Abosede Awoniyi', 'Henry Okeyemi', 'David Lawal', 'Omolola Akande', 'Sam Yink', 'Adaobi Ezelioha', 'Unyime Usen', 'Foluso Ojo', 
// 'Eto Olei', 'Keny Ayan']


// let returnNames = () => {
//       var courseMates = []
//       for (i = 0; i < names.length; i++) {
//           courseMates.push(names[i])
//             }
//       console.log (courseMates)
    
// }

// returnNames()


// *** 2nd Method

// const names = ['Abosede Awoniyi', 'Henry Okeyemi', 'David Lawal', 'Omolola Akande', 'Sam Yink', 'Adaobi Ezelioha', 'Unyime Usen', 'Foluso Ojo', 
// 'Eto Olei', 'Keny Ayan'] 
// let returnNames = () => {
      
//       for (i = 0; i < names.length; i++) {
//       names.push [i]
//       }
//       console.log (names)
// }

// returnNames()










// • Add an element to the end of this array [1,2,4]
// let array = [1, 2, 4]
// array.push(89)
// console.log(array);

// • Remove the last element in this array [1,2,3,8]
// let array = [1, 2, 3, 8]
// array.pop()
// console.log (array);

// • Remove the first element in this array [23.77,80,45]
// let array = [23, 7, 80, 45]
// array.shift()
// console.log (array);

// • Add an element to the beginning of the array [[20,30,80],[10,50,55]]
// let array = [[20,30,80],[10,50,55]]
// array [0].unshift(50)
// console.log(array);