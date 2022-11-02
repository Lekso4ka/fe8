/*
    Проверка установки Node.js
    node -v

    node file.js
*/

/*
    q 1.3
*/

let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>";

function test(txt) {
    let open1 = firstDiv.indexOf("<p>");
    let open2 = firstDiv.lastIndexOf("<p>");
    if (open1 === open2) return false;
    return true;
}

let result = true;
result = test("<p>");
if (result) {
    result = test("</p>");
}
console.log(result);

/*
    что делать если надо проверить правильность синтаксиса html?
    1) найти открывающийся тег (indexOf) => open1
    2) от open1 найти закрывающегося тега (indexOf) => open1 < close1
    3) найти открывающийся тег после close1 => open2 > close1
    4) найти закрывающийся тег в конце => close2 > open2
*/

/*
    БМ
        4 части (25 задач) + (25 доп) => 50
            3 недели
        Зачет
    ПМ
        лекции + практика
*/

/*
    q 1.4
*/

let road = "15 km";
let n = road.split(" ");
console.log(+(n[0] * 0.62).toFixed(1));

// v2
n = parseFloat(road);
console.log(+(n * 0.62).toFixed(1));

/*
    q 1.5
*/

let words = "";
console.log(words.split(" "));
let cnt = words.split(" ").length;
console.log(cnt > 1 ? "В строке больше одного слова" : "В строке одно слово");

// v2
cnt = words.includes(" ");
console.log(cnt ? "В строке больше одного слова" : "В строке одно слово");

/*
    q 1.9
*/
let emails = "exam-ple@ex.ru primer@primer1.com email@com.ru";
emails = "12345";
console.log(emails.split(/\s/g));

// v2
let reg = /[a-z0-9-]+@[a-z]+\.[a-z]{2,}/gi; // \w\d
console.log(emails.match(reg) || [""]);

/*
    q 1.10
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

let tickets = ["BM-12234567:RU", "SD-122345674573:RU", "VG-590234543245:EN", "FF-1267:RU"];

function showInfo(f) {
    switch(f) {
        case 1: return "Выбран билет на концерт";
        case 2: return "Выбран билет в театр";
        default: return "Билет не определен";
    }
}

function testTicket(t) {
    let concert = /[a-z]+-[0-9]{8}\b/i;
    let theatre = /[a-z]+-[0-9]{12}\D/i
    if (concert.test(t)) return showInfo(1);
    if (theatre.test(t)) return showInfo(2);
    return showInfo(3);
}

tickets.forEach(t => {
    console.log(testTicket(t));
});

/*
    <b> <strong>
    <i> <em>

    str
        .search() => index (-1 - нет совпадения)
        .match() => []
    reg
        .test() => boolean (true/false)
        .exec() => []
*/

/*
    q 1.7
*/

let symbols = "floor";
n = symbols.codePointAt(0) + symbols.codePointAt(1);
console.log(n % 2 === 0 ? String.fromCodePoint(n) : "Символ обнаружить не удалось");

/*
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
*/