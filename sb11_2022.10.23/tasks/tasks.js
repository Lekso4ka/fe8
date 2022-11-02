/* q 2.1 */

let new_element = document.createElement("p");
new_element.innerText = "Ура! Мой скрипт отработал верно!";

// document.querySelector("body").innerHTML += new_element.outerHTML;
document.querySelector("#root").appendChild(new_element);

/*
    .innerHTML - добавляет теги как текст, удаляя ранее запрограммированные события по другим тегам в области видимости родителя

    .appendChild() - добавляет тег как объект, сохраняя ранее запрограммированные события. С этим элементов в дальнейшем можно работать.
*/

/*
    q 2.4
*/

let tags = document.querySelectorAll("div");
for (let i = 0; i < tags.length; i++) {
    // tags[i].className = "adds";
    tags[i].classList.add("adds");
}

/*
    q 2.7
*/

let values = [10, 50, 100];
let elems = document.querySelectorAll(".elems");
elems.forEach(el => {
    if (values.filter(v => +el.innerText === v).length) {
        el.remove();
    }
});

/*
    q 2.6
*/
tags = document.querySelectorAll("p");
tags.forEach(el => {
    if (el.innerText.toLowerCase() === "delete") {
        el.remove();
    } 
});

/*
    q 2.8
*/

const d1 = document.getElementById("div1"),
      d2 = document.getElementById("div2"); // +p

console.log(d1.children); // [p]

// for (let i = 0, cnt = d1.children.length; i < cnt; i++) {
while (d1.children.length) {
    d2.appendChild(d1.children[0]);
}
// }


/*
    q 2.11
*/

tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
let root = document.querySelector("#root");

tasks.forEach(task => {
    let p = document.createElement("p");
    p.innerText = task;
    root.append(p);
});

/*
    q 2.12
*/

let tagList = ["div", "p", "h2"];
let hash = {};
for (let tag of tagList) {
    hash[tag] = document.querySelectorAll(tag).length;
}
console.log(hash);

/*
    q 3.2
*/

// document.querySelector("#rainbow").style.color = "#2980b9";
let rain = document.querySelector("#rainbow");
if (rain) {
    rain.style.color = "#2980b9";
}

/*
    q 3.4
*/

if (rain) {
    let text = rain.innerText;
    switch(true) {
        case text >= 1 && text <= 9: 
            rain.style.color = "#c0392b"; 
            break;
        case text >= 10 && text <= 20: 
            rain.style.color = "#e17055"; 
            break;
        default: rain.style.color = "#fdcb6e";
    }
}

/*
    q 3.7
*/

const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
const sel = document.querySelector("select");

for (c of countries) {
    const opt = document.createElement("option");
    opt.value = c.slice(0,2).toLowerCase();
    opt.innerText = c;
    sel.append(opt);
}