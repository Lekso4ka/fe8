/*
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
layout = "";

let arr = layout.match(/\d+/g);
console.log(arr);
if (arr) {
    arr = arr.map(function(v) {
        if (v % 2 === 0) {
            return v ** 2
        } else {
            return +v;
        }
    });
    // v2
    arr = arr.map(v => v % 2 === 0 ? v ** 2 : +v);
} else {
    arr = [];
}
/*
    [100, 200, 300] => v + ""
    ["100", "200", "300"]
*/
// console.log(arr || []);
console.log(arr.map(v => `<p>${v}</p>`));

/*
    q 2.5
*/

let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];
// let start = values.findIndex(el => typeof el === "boolean");
// let end = values.findLastIndex(el => typeof el === "boolean");
// console.log(values.slice(start, end + 1));

/*
    q 2.7
*/

values = [10, 18.2, 1120, 980];
let test = -1;

// values.forEach(el => {
//     test = (el + "").length === 4;
// });

test = values.findIndex(el => (el + "").length === 4);
// v2
test = values.findIndex(el => /^\d{4}$/.test(el));

console.log(test >= 0 ? test : "Искомый элемент не был найден");


/*
    el > 999 && el < 10000
    Как предусмотреть числа с запятой ? "123,4 1234,5 12,34" 
*/

/*
    q 2.13
*/

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";
let result = {};


let data = tickets.split(".")
data = data.slice(0, data.length - 1);
for (let val of data) {
    let word = val.match(/[a-z]+/i)[0].toLowerCase();
    result[word] = val.match(/\w+\d+/gi) || [""];
}
console.log(result);

/*
    q 2.16
*/

let array_1 = [2, 4, 7, 8, 1];
let array_2 = [2, 5, 11, 6, 1];

function intersection(a1, a2) {
    let arr = [];
    for (let val of a1) {
        console.log(val);
        // console.log("найден", array_2.find(el => val === el))
        a2.reduce((a, b) => {
            console.log(a, b);
            if (b === val) {
                a.push(b);
            }
            return a;
        }, arr);
    }
    arr.sort((a, b) => b - a);
    return arr;
}

console.log(intersection(array_1, array_2));