// Create a function with a function name printSum( ) and print the sum of an array.

// let array = [10, 3, 77, 23, 6, 18, 20]

let printSum =(array)=>{

let sum = 0;
for( i=0; i < array.length;  i++){
    sum += array[i]
}
console.log(sum);

}

printSum ([5,5,5]);
