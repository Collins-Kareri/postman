// let arr = [1, 2, 3, 4]
// let filtered = arr.filter((num) => {
//     if (num > arr.length - 1) {
//         return num;
//     }
// })

// console.log(filtered);

// function filter(arr) {
//     return arr.filter((num) => { return num > 3 });
// };

// console.log(filter([1, 2, 3, 4, 5]))


function filter(arr) {
    let values = arr.toString(arr);
    return values.split(',');
};

console.log(filter([1, 2, 3, 4]));