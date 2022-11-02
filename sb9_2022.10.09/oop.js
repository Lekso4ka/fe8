/*
    q 5.3
*/
let firstName = "Александр",
    lastName = "Петров";

class User {
    constructor(n,sn) {
        this.firstName = n;
        this.lastName = sn;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const result = name.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const user = new User(firstName, lastName);

/*
    q 5.4
*/

let name = "Pizza",
    phone = "81234567890";

class Delivery {
    constructor(n,p) {
        this.name = n;
        this.phone = p;
        // this.validPhone = /^\+{1}/.test(p);
    }
    get validPhone() {
        return /^\+{1}/.test(this.phone);
    }
}

const deliveryName = new Delivery(name, phone);

/*
    q 5.5
*/

// class User extends Permissions {
//     constructor(n) {
//         super();
//         this.name = n;
//     }
// }


/*
    q 5.6
*/

let array = [2, 4, 7, 8, 1],
    num = 2;

const queue = (n, arr) => {
    arr.sort((a,b) => a - b)
    let s = 0;
    for (let i = 0; i < n; i++) {
        s += arr[i];
    }
    return s;
}

console.log(queue(num, array));


const findMinSum = function(num) {
    console.log(arguments);
    // const arr = array[0];
    // console.log(arr);
    // let nums = new Array(num).fill(Infinity);
    // console.log(nums);
    // arr.forEach(num => {
    //   for (let i = 0; i < nums.length; ++i) {
    //     if (nums[i] <= num) continue;
  
    //     nums.splice(i, 0, num);
    //     nums.pop();
    //     break;
    //   }
    // });
  
    // nums = nums.map(x => x === Infinity ? 0 : x);
  
    // const sum = nums.reduce((a, b) => a + b, 0);
    
    // return sum;
  }
  
  const array1 = [2, 4, 7, 8, 1];
  const num1 = 2;
  
  console.log(findMinSum(num1, ...array1));

// v 2
const queue2 = function(n) {
    let args = Array.from(arguments);
    args.shift();
    args.sort((a,b) => a - b)
    let s = 0;
    for (let i = 0; i < n; i++) {
        s += args[i];
    }
    return s;
}

console.log(queue2(num, ...array));

/*
    q 3.4 // Не прописано что требуется глобальная переменная
*/

function count(){
	return `Количество элементов в массиве: ${array.length}`;
}
console.log(count());