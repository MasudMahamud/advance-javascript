let bonus = 15;
function sum(first, second) {
    let result = first + second + bonus;
    if (result > 79) {
        const great = "you point is A+"
        console.log(great);
    }
    return result;
}
const output = sum(53, 22);
console.log(bonus);
console.log(output);
