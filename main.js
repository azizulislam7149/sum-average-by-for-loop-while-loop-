console.log(90)
let number = 0;
while(number<10){
    console.log(number)
    number++
}
let numbers = [12,345,876,89,23];

let sum = 0;
for(let i = 0; i <numbers.length; i++){
    console.log(numbers[i],'new looping');
    sum = sum + numbers[i];
    console.log('sum of number',sum)
    
}
let arrays = [12,56,98,908,453,876,87];
let sum1 = 0;
let arr = 0;
while(arr < arrays.length){
    console.log(arrays[arr])
    let average = arrays.length;
    console.log('length of array',average);
    sum1 = sum1 + arrays[arr]
    let totalAverage = sum1 / average;
    console.log('average of the array',totalAverage.toFixed(2));

    console.log('while loop sum of array',sum1)
    arr++;
}

