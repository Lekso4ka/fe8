let c = document.getElementById("cnv");
c.width = 1000;
c.height = 600;
// console.log(c);

const ctx = c.getContext("2d");
// ctx.strokeStyle = "deepskyblue";
// ctx.lineWidth = 5;
// ctx.fillStyle = "deepskyblue";
// ctx.beginPath();
// ctx.strokeStyle = "orangered";
// ctx.moveTo(0,0);
// ctx.lineTo(100,100);
// ctx.lineTo(100,0);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = "forestgreen";
// ctx.moveTo(1000, 600);
// ctx.lineTo(900, 500);
// ctx.lineTo(900, 600);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

/*
    q 6.1
*/
ctx.fillStyle = "deepskyblue"
ctx.fillRect(450, 260, 100, 65);

/*
    q 6.2
*/
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200,100);

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 150);

ctx.stroke();

/*
    q 6.3
*/
const getNumber = max => Math.round(Math.random() * max); 

const color = ["#e74c3c", "#16a085", "#2980b9"];

const drawLine = (context, c = "black") => {
    context.beginPath();
    context.strokeStyle = c;
    context.moveTo(getNumber(1000), getNumber(600));
    context.lineTo(getNumber(1000), getNumber(600));
    context.stroke();
    context.closePath();
}

for (let val of color) {
    drawLine(ctx, val);
}

/*
    q 6.4
*/

let span = 10;
let side = 100;
let x = 0;
let y = 0;
let sqs = [
    ["#ff3d00", "#0bdd38"], 
    ["#2e77da", "#ffd200"],
];

const drawSq = (c, startX, startY, w, h, color) => {
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(startX, startY, w, h);
    c.closePath();
}

for (let i = 0; i < sqs.length; i++) {
    y = span + (side + span) * i;
    for (let j = 0; j < sqs[i].length; j++) {
        x = span + (side + span) * j;
        drawSq(ctx, x, y, side, side, sqs[i][j]);
    }
}

// v2

let squares = [
    { color: "#ff3d00", x: 10, y: 10, w: 100, h: 100 },
    { color: "#0bdd38", x: 120, y: 10, w: 100, h: 100 },
    { color: "#2e77da", x: 10, y: 120, w: 100, h: 100 },
    { color: "#ffd200", x: 120, y: 120, w: 100, h: 100 },
];

for (s of squares) {
    drawSq(ctx, s.x, s.y, s.w, s.h, s.color);
};

/*
    q 6.5
*/

let cx = 150, cy = 150, cw, ch;

for (let i = 2; i <= 100; i += 2) {
    ctx.beginPath()
    ctx.strokeStyle = `rgb(${getNumber(255)},${getNumber(255)},${getNumber(255)})`
    ctx.arc(cx, cy, i, 0, Math.PI * 2)
    ctx.stroke();
    ctx.closePath();
}

/*
    q 6.6
*/
const drawCircle = (c, x, y) => {
    c.beginPath();
    // ctx.fillStyle = `rgb(${getNumber(255)},${getNumber(255)},${getNumber(255)})`
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.fill();
    c.closePath();
}

let drawing = false;
let draw = (e) => {
    requestAnimationFrame(function() {
        switch(e.type) {
            case "mousedown": 
                drawing = true;
                drawCircle(ctx, e.offsetX, e.offsetY);
                break;
            case "moseup": 
                drawing = false;
                break;
            case "mousemove":
                if (drawing) {
                    drawCircle(ctx, e.offsetX, e.offsetY);
                }
                break;
        }
    })
}


document.addEventListener("mousemove", draw);
document.addEventListener("mouseup", draw);
document.addEventListener("mousedown", draw);