/*
    q 9.4
*/
let list_1 = [12, 3];
let list_2 = [2, 1];
list_1 = list_1.concat(list_2);

// console.log(list_1);

for (let i = 0; i < list_1.length; i++) {
    list_1[i] = list_1[i] ** 2;
}
console.log(list_1);

/*
    q 9.7
*/

let list = [2, 45, 3, 23, 6];

// [2, 3, 6, 23, 45]

// let max = Math.max(...list);
// let min = Math.min(...list);
// console.log(max, min);

list.sort(function(next, now) {
    // console.log(next);
    // console.log(now);
    // next - now > 0 => now остается на месте
    // next - now < 0 => значение меняются местами
    return next - now;
});
console.log(list[0] * list[list.length - 1]);

/*
    q 9.9
*/

let sentence = "Завтра будет лучше чем вчера "

// ['Завтра', 'будет', 'лучше', 'чем', 'вчера']
let words = [];
let text = "";

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
        text += char;
    } else {
        words.push(text);
        text = "";
    }
}
if (text.length) {
    words.push(text);
    text = "";
}
console.log(words);

/*
    q 9.13
*/

list = [];
let min = 10, max = 20;

while (min <= max) {
    list.push(min);
    min++;
}

console.log(list);

/*
    q 9.12
*/

list = [2, 54, 2, 54, false, 2];
let result = 0;

for (let val of list) {
    // console.log(val);
    if (typeof val === "boolean") {
        break;
    } else {
        result += val;
    }
}
console.log(result);

/*
    q 9.15
*/

list = ["Лёша", "default", "полке", "клопа", "нашёл"];
result = 0;

for (let val of list) {
    if (val.toLowerCase() !== "default") {
        result++;
    }
}

console.log(result);

/*
    q 9.16
*/

list = ["почтовый","желание","абсолютный","закрытый"];
result = "";

list.forEach(function(w) {
    result += w[0];
});

console.log(result);

