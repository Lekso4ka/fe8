/*
     5.1
*/
let start = 0, end = 50;
let result = 0;
while (start <= end) {
    // console.log(start, end);
    result += start % 5 === 0 ? start : 0;

    // if (start % 5 === 0) {
    //     result += start;
    // }

    start = start + 1; // start += 1 => start++
}

console.log(result);

/*
    q 5.2
*/

let word = "суббота!";

console.log(word.length);
// console.log(word[1])
// word[word.length - 1] - последний символ строки
n = 0;
while(n < word.length) {
    // console.log(word[n]);
    n++;
}


/*
    for (выражение1; выражение2; выражение3)
    выражение2 - условие! true или false
    выражение1 - выражение, которое может задать параметры для цикла
    выражение3 - выражение, которое срабатывает после блока с кодом
*/
// n = 0;
for (n = 0; n < word.length; n++) {
    // console.log(word[n]);
}
// for (;n;) {
//     console.log(n);
// }
let word2 = "";
for (let i = word.length - 1; i >= 0; i--) {
    word2 += word[i];
}
// console.log(i);
console.log(word2);
/*
for (let i = 1; i <= 7; i += 2) {
    if (i === 1) {
        console.log("Понедельник =(")
    } else if (i === 6) {
        console.log("Суббота!");
        break;
    } else {
        // continue;
    }
    console.log(i);
}
*/

word = "Кабак";
word2 = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     word2 += word[i];
// }
// // console.log(word, word2);
// if (word.toLowerCase() === word2.toLowerCase()) {
//     console.log("Слово является палиндромом!")
// } else {
//     console.log("Слово не является палиндромом!")
// }
let flag = true;
for (let i = 0, cnt = Math.floor(word.length / 2); i < cnt; i++) {
    // console.log(i);
    // console.log(word[i])
    // console.log(word[word.length - 1 - i])
    if (word[i].toLowerCase() === word[word.length - 1 - i].toLowerCase()) { // word[0] => к => word.charAt(0)
        continue;
    } else {
        flag = false;
        break;
    }
}

console.log(flag ? "Слово является палиндромом!": "Слово не является палиндромом!")

/*
    Малышу 0 лет.
    В моментрождения родители оптом купили упаковку свечек на ДР - 500 свечей
    Каждый ДР из упаковки на торт ставится то кол-во свечей, сколько исполнилось лет. На сколько лет хватит упаковки?
*/
age = 0;
candles = 500;

/*
    age = 1 c = 499
    age = 2 c = 497
    age = 3 c = 494
    ....
    age = 20 c = 23
    age = 21 c = 2
*/

while (candles >= age) { // свечек не меньше чем возраст
    age++; // наступил ДР
    candles -= age; // ставим на торт свечки
    // console.log(age, candles);
}
console.log(`В ${age} лет у малыша осталось ${candles} свечек`)