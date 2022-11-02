// let n = 2;
// let k = n;

// k = 3;

// console.log(n); // 2
// console.log(k); // 3

// let a = {x: 2};
// let b = a;

// b.x = 3;

// console.log(a); // {x: 3}
// console.log(b); // {x: 3}


// let obj = { a: 1 };

// function f2(o) {
//   o = { hello: 1 };
//   return o;
// }

// obj = f2(obj);

// console.log(obj); 

/*
    q 9.6
    Решето Эратосфена
    https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BE_%D0%AD%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D0%BD%D0%B0
*/

let arr = [];
let n = 0;
while (n++ < 100) {
    arr.push(n);
}
let simp = [];
// Простое число делится на само себя и на 1

for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n) {
        if (n <= 1) {
            continue;
        } else {
            for (let j = i; j < arr.length; j+= n) {
                if (i === j) {
                    simp.push(n);
                    continue;
                } else if (arr[j] % n === 0) {
                    arr[j] = false;
                }
            }
        }
        // do something
    } else {
        continue;
    }
}
let s = 0;
for (let val of simp) {
    s += val;
}
console.log(arr);
console.log(simp);
console.log(s);