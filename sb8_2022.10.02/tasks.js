/*
    q 3.5

*/
let employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"],
];
employee = employee.filter(el => el[0] !== "hireDate");
employee.push(["jobName", "IT PROG"]);

console.log(employee);


/*
    [1,2,3,3,3,4,5,1,2,11,1,1,4] => [1,2,3,4,5,11] - Использовать reduce()
*/
let str = "1,2,3,3,3,4,5,1,2,11,1,1,4";
let reg = /1/g
console.log(reg.exec(str));
console.log(str.match(reg));


[["-", "-", "o"],
["-", "x", "-"],
["-", "-", "-"]]

/*
    q 3.6
*/

const array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", {}]
]

function countString(arr) {
    let n = 0;
    n = arr.reduce(function(result, el) {
        if (typeof el[1] === "string") {
            result++;
        }
        return result;
    }, n);
    return `Количество строковых элементов в именованном массиве: ${n}`;
}

console.log(countString(array));

/*
    q 4.4
*/

const props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: () => "привет"
}

const getValue = () => {
    let str = "";
    for (let k in props) {
        // console.log(typeof props[k]);
        if (typeof props[k] !== "function") {
            str += `${k}: ${props[k]}, `;
        }
    }
    str = str.slice(0, str.length - 2);
    return `Значения свойств объекта props (${str})`;
}

console.log(getValue());

/*
    q 4.5
*/

let hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: function() {console.log("Позиция героя: " + this.position)}
}

