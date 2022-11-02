let name = "Pavel";
console.log(name);

//const age = 30; // var
let age;
age = 40;
console.log(age);
// var age = 40;


const mFC = "blue";
// mFC = "orange";

console.log(mFC);

/*
    quest 3.1
*/

name = "Всеволод";
let last_name = "\nСтарозубов";

let quantity = name.trim().length + last_name.trim().length;
// quantity = name + last_name;

// console.log(name.trim().length + last_name.trim().length);

console.log(quantity);

/*
    quest 3.3
*/
let word_1 = "велосипед", word_2 = "полезен";
console.log(word_1 + " " + word_2);


/*
    quest 3.7
*/

const obj = {
    name: "Anatoly",
    age: "32",
    last_name: "Petrov"
}

let str = `Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`;

str = "Имя: \"" + obj.name + "\" Фамилия: '" + obj.last_name + "' Возраст: " + obj.age;

console.log(str);
console.log(str);

/*
    quest 3.10
*/

let num_1 = "3", num_2 = "5";

/*
    Number
        "2" => 2
        "2" * 1 => 2
        "2" / 1 => 2
        "2" - 0 => 2
        +"2" => 2
    String
        true + "" => "true"
        "23" == 23 // true
        "23" === 23 // false

    Boolean
        true
            1, 2, 4, -6, 7, -3.5
            "Hello", " ", "aaa"
        false
            0
            ""
            null
            undefined
    null
    undefined
*/
console.log(+num_1 + +num_2);

// Дом / 3
// Машина * 2

// "b" + "a" + + "a" + "a"
// "baNaNa"


/*
    quest 3.11
*/

let size = "500.5%";
// size = parseInt(size); // целое число
size = parseFloat(size); // десятичное число 
console.log(size);

/*
1.23.toFixed(3)
'1.230'
(1/3).toFixed(4);
'0.3333'
(2/3).toFixed(4);
'0.6667'
+(2/3).toFixed(4);
0.6667
*/

/*
    quest 3.12
*/

let a = "5px", b = "7px", c = "10px";

let v = parseFloat(a) * parseFloat(b) * parseFloat(c);
console.log(v);

/*
    quest 4.2
*/

let price = "tralala";
price = parseInt(price);

if (price <= 0) {
    console.log("Число не корректное");
} else if (isNaN(price)) {
    console.log("Не число");
} else {
    console.log(price);
}

// if (age > 18) {
//     console.log("Вы можете работать");
// }
// if (fridge) {
//     console.log("Можно покушать");
// }
// if (dog) {
//     console.log("Вы гуляете два раза в день");
// }

/*
    quest 4.6
*/

price = 10000;
let range = "day", s = "";

switch(range) {
    case "month":
        s = "в месяц";
        break;
    case "day":
        s = "в день";
        break;
    case "week":
        s = "в неделю";
        break;
    default:
        s = "в бесконечность";
}
console.log(`${price} Р ${s}`);

// console.log("")

/*
    quest 4.8
*/
a = 2, b = null;
let sign = "/";
let result;

switch(sign) {
    case "+": result = +a + +b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": 
        if (b) { // b !== 0
            result = a / b;
        } else {
            result = "Делить на 0 нельзя!";
        }
        break;
}
console.log(result);

/*
    q 4.3
*/
a = 32;
b = 5;
c = 14;

if (a >= b && a >= c) { 
    // b < a && c < a; 
    // 0 <= a <= c !!!!!!!!!!!!!!!! УЖАСЫ!!!!!!!!!!; a >= 0 && a <= c
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

/*
    word = корова;
    phrase = ходили и мычали;

    Дано число n (если получится - случайное число в диапазоне от 1 до 10000);

    Использовать Math.random();

    Правильно написать фразу "По полю ходила и мычала 1 корова"
                             "По полю ходило и мычало 198 коров" и т.д.

    Для решения задачи вспомнить оператор % и почитать до 30 значени;
*/

