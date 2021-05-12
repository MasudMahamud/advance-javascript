// const numbers = [ 5, 6, 7, 8, 9, 10];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result); 
// }
// console.log(output);



// const numbers = [ 2, 6, 7, 18, 9, 13];
// const result = numbers.map(function (element) {
//     return element*element;
// })
// console.log(result);



// const numbers = [1, 2, 3, 5, 6, 7, 8];
// const result = numbers.map(x => x*x);
// console.log(result);

// const numbers = [1, 2, 3, 5, 6, 7, 8];
// const bigger = numbers.filter(x => x > 4);
// console.log(bigger);

const numbers = [1, 2, 3, 5, 6, 7, 8];
const isThere = numbers.find(x => x > 4);
console.log(isThere);