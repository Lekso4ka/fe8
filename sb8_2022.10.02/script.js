let car = {
    // обращение к себе и своим свойствам через слово this
    // this - Я (Моё)
    brand: "Lada",
    model: "Priora",
    year: 2006,
    wheels: 3,
    mileage: 280000,
    user: {
        name: "Deniss",
        number: "o999oo99ru"
    },
    getAge: function() {
        let now = new Date();
        return now.getFullYear() - this.year;
    },
    show: function() {
        // 3-rd whell Lada Priora with mileage of 280000 km was bought in 2006
        let nToStr = "";
        switch(this.wheels) {
            case 1: nToStr = this.wheels + "st"; break;
            case 2: nToStr = this.wheels + "nd"; break;
            case 3: nToStr = this.wheels + "rd"; break;
            default: nToStr = this.wheels + "th"; break;
        }
        return `${nToStr} wheel ${this.brand} ${this.model} with mileage of ${this.mileage} km was bought in ${this.year}`;
    },
    showSeller: function(price = 0) {
        // Denis sells his 20y.o. Lada Priora for price rub.
        // Date.getDay() 0 - вс, 6 - сб [1] - Пн)))
        return `${this.user.name} sells his ${this.getAge()} y.o. ${this.brand} ${this.model} for ${price} rub.`
    }
}
// console.log(car.show());
// console.log(car.showSeller(1000000));

/*
    Инкапсуляция 
        (функция делает только то, что надо без лишних слов...)
        Капсула - закрытое пространство
        Вход - передаваемые параметры (аргументы)
        Выход - результат
        Название - что выполняет функция
    Полиморфизм
        Переиспользование кода
    Наследование (ООП)
        ...
*/
const A = {x: 2, y: 5};
const B = {x: 2, y: -3};
const C = {x: -4, y: 8};

// {x: "", y: ""};
// Math, Date, Object, Number
class Point {
    constructor(a = 0, b = 0) {
        this.x = a; // свойство будующего объекта (его координата x)
        this.y = b;
    }
    static getRandom() {
        return Math.floor(Math.random() * 21 - 10);
    }
    moveX(n) {
        this.x = n;
    }
    moveY(n) {
        this.y = n;
    }
    info() {
        this.str = "Двумерная точка"
        return `${this.str} с координатами (${this.x};${this.y})`;
    }
}

const D = new Point();
const E = new Point(-3, -3);
const F = new Point(1, -5);

// console.log(D, E, F);
E.moveX(3);
E.moveY(-2);
// console.log(E.info());
// console.log(E.str);

let stars = [], n = 100;
while(n--) {
    stars.push(new Point(Point.getRandom(), Point.getRandom()));
}
// console.log(stars);
stars.sort((a,b) => {
    if (a.x - b.x > 0) {
        return 1;
    } else if (a.x - b.x < 0) {
        return -1;
    } else {
        return a.y - b.y;
    }
})
// stars.forEach(s => {
//     console.log(s.info());
// });

class Point3D extends Point {
    constructor(a = 0, b = 0, c = 0) {
        super(a, b);
        this.z = c;
        this.str = "Трехмерная точка";
    }
    moveZ(n) {
        this.z = n;
    }
    info() {
        return `${this.str} с координатами (${this.x};${this.y};${this.z})`;
    }
}

const L = new Point3D();
// console.log(L);
// console.log(L.info());

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.word = "Прямоугольник";
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
    toString() {
        return `${this.word} с размерами ${this.width}x${this.height} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}.`
    }
}

let rect = new Rectangle(200, 120);
console.log(rect.toString());

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.word = "Квадрат";
    }
}

let sq = new Square(100);
console.log(sq.toString());