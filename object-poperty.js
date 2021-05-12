const students = [
    {id:101, name: 'Shihab Khan'},
    {id:111, name: 'Sohim Khan'},
    {id:121, name: 'Shuvo Khan'},
    {id:141, name: 'Salman Khan'},
    {id:171, name: 'Sakib Khan'}
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
    
// }
// console.log(output);

const name = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s =>s.id>120);
const biggerOne = students.find(s =>s.id>120)
console.log(biggerOne);