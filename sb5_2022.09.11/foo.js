let n = Math.random(); // 0 < n < 1
n = Math.random() * 100; // 0 < n < 100
n = Math.floor(n) // 0 <= n < 100
n = Math.round(n) // 0 <= n <= 100
n = Math.ceil(n) // 0 < n <= 100
// console.log(n);



function getRandom(max=11, min=0) {
    return Math.round(Math.random() * (max - min) + min);
}

getRandom(5, 3);
let num = getRandom(100);
console.log(num);

/*
 q 6.2
 В программе объявлены две переменные с числовым значением — num_1 и num_2. Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.


Пример значений переменных:
num_1 = 3

num_2 = 6

Пример результата:
18
*/

function mult(a,b) {
    return a * b;
}
// console.log(mult(num_1, num_2));

/*
 q 4.6
 num = 2

Пример результата:
"4 16 256"
*/

num = 2;
function omnomnom(n) {
    let str = "";
    for (let s = 1; s <= 3; s++) {
        if (s !== 1) {
            str += " ";
        }
        n **= 2
        str += n;
    }
    return str;
}
console.log(omnomnom(getRandom(5,1)))


/*
    6.5
*/
function getNumber(data) {
    let res = parseInt(data);
    if (isNaN(res)) {
      return 0;
    } else {
      return res;
    }
  }
//   console.log(getNumber(data));

  /*
    6.6
  */
    function getPercent(v, tot) {
        return v * 100 / tot	
      }
    //   console.log(getPercent(value, total))