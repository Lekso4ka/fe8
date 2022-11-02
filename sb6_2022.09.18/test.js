const getNumber = function(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let nums = [];
let n = 30000000;
let sum;
while(n--) {
    nums.push(getNumber());
}

// console.log(nums);

console.time("for");
sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);
console.timeEnd("for");

console.time("for in"); 
sum = 0;
for (let i in nums) { // Не для массивов! Запрещено!
    sum += nums[i];
}
console.log(sum);
console.timeEnd("for in");

console.time("for of");
sum = 0;
for (let val of nums) {
    sum += val;
}
console.log(sum);
console.timeEnd("for of");

console.time("forEach");
sum = 0;
nums.forEach(function(el) {
    sum += el;
})
console.log(sum);
console.timeEnd("forEach");


