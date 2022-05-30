// Musical groups have special names based on the number of people in the group. For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

// Directions:
// Write a series of conditional statements that:

// • Prints "not a group" if musicians is less than or equal to 0
// • Prints "solo" if musicians is equal to 1
// • Prints "duet" if musicians is equal to 2
// • Prints "trio" if musicians is equal to 3
// • Prints "quartet" if musicians is equal to 4
// • Prints "this is a large group" if musicians is greater than 4
// TIP: Test your code with different values. For example,

// If musicians equals 3, then "trio" should be printed to the console.

// If musicians equals 20, then "this is a large group" should be printed to the console.

// If musicians equals -1, then "not a group" should be printed to the console.

// Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!

// Solution

const musicians = [-1,0,-2,3,2,4,15,50,-20,4,8,-9,2,3]
function musicalGroup () {
for (i = 0; i < musicians.length; i++)

if (musicians [i] <= 0) {
console.log ('not a group')} 
else if (musicians [i] == 1) {
    console.log ('solo')
}
else if (musicians [i] == 2) {
    console.log ('duet')
}
else if (musicians [i] == 3) {
    console.log ('trio')
}
else if (musicians [i] == 4) {
    console.log ('quartet')
}
else if (musicians [i] > 4) {
    console.log ('this is a large group')
}




}
musicalGroup ([-1,0,-2,3,2,4,15,50,-20,4,8,-9,2,3])










// const groups = ['not a group', 'solo', 'duet', 'trio', 'quartet', 'large group']
// for (i=0; i < musicians.length; i++) {
//          if (musicians[i] <= 0)
//          {console.log (groups[0])}
//          else if (musicians[i] = 1)
//          {console.log (groups[1])}
//          else if (musicians[i] = 2)
//          {console.log (groups[2])}
//          else if (musicians[i] = 3)
//          {console.log (console.log)}
//          else if (musicians[i] = 4)
//          {console.log (groups[4])}
//          else if (musicians[i] >= 5)
//          {console.log (groups[5])}
    






// const musicians = []

// let musicalGroup = () => {
// let groups = ['not a group', 'solo', 'duet', 'trio', 'quartet', 'large group']
//  for (i=0; i < musicians.length; i++) {
//      if (musicians[i] <= 0)
//      {return groups[0]}
//      else if (musicians[i] = 1)
//      {return groups[1]}
//      else if (musicians[i] = 2)
//      {return groups[2]}
//      else if (musicians[i] = 3)
//      {return groups[3]}
//      else if (musicians[i] = 4)
//      {return groups[4]}
//      else if (musicians[i] >= 5)
//      {return groups[5]}

//  }
// //    console.log (musicians[-1,0,-2,3,2,4,15,50,-20])
// }
//  musicalGroup ([-1,0,-2,3,2,4,15,50,-20])

















// const musicians = [-1,0,-2,3,2,4,15,50,-20]
// let groups = ['not a group', 'solo', 'duet', 'trio', 'quartet', 'large group']
// let musicalGroup = () => {
//  for (i=0; i < musicians.length; i++) {
//      if (musicians[i] <= 0)
//      {return groups[0]}
//      if (musicians[i] = 1)
//      {return groups[1]}
//      if (musicians[i] = 2)
//      {return groups[2]}
//      if (musicians[i] = 3)
//      {return groups[3]}
//      if (musicians[i] = 4)
//      {return groups[4]}
//      if (musicians[i] >= 5)
//      {return groups[5]}

//  }

// }
//  musicalGroup ()
//  console.log()

// const musicians = [-1,0,-2,3,2,4,15,50,-20]
// let printMusicalgroup = (musicians) => {
//  let notagroup = 0
//  let solo = 0
//  let duet = 0
//  let trio = 0
//  let quartet = 0
//  let largegroup = 0

//  for (i=0; i < musicians.length; i++) {
//      if (musicians[i] <= 0)
//      {notagroup++}
//      if (musicians[i] = 1)
//      {solo++}
//      if (musicians[i] = 2)
//      {duet++}
//      if (musicians[i] = 3)
//      {trio++}
//      if (musicians[i] = 4)
//      {quartet++}
//      if (musicians[i] >= 5)
//      {largegroup++}

//  }
// }

// //  printMusicalGroup (musicians)
// // let musicians = [2, -1, -2, 4, 2]
// // for (i = 0; i < musicians.length; i++) {
// // if (musicians = 2){
// //     console.log ('duet')}
// // if (musicians <= 0){
// //     console.log ('notagroup')
// // }
// }


// let musicians = [2, -1, -2, 4, 2]
// function musicalGroup () {
// for (i = 0; i < musicians.length; i++) {
// if (musicians = 2){
//     return ('duet')}
// if (musicians <= 0){
//     return ('notagroup')}
// }

// }
// musicalGroup ()