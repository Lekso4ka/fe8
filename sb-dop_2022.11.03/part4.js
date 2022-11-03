// q 4.1
let btn = document.querySelector("#btn"),
    el = document.querySelector("#val");
btn.onclick = function() {
	console.log(el.innerText);
}

// q 4.2
let btn = document.querySelector("#btn");
el = document.querySelector("#val");
btn.onclick = function() {
	console.log(el.value);
}

// q 4.3
let sq = document.querySelector("#square");
sq.onclick = function() {
	this.style.opacity = 0;
}

// q 4.4
let btn = document.querySelector("#clicker");
btn.onclick = function() {
	this.innerText = ++this.innerText;
}

// q 4.5
let btn = document.querySelector("#delete");
let points = document.querySelectorAll("#points>li"); 
btn.addEventListener("click", e => {
	points[points.length - 1].remove();
})

// q 4.6
let sq = document.querySelector("#square");
sq.onclick = function() {
	this.style.width = this.offsetWidth * 0.9 + "px";
	this.style.height = this.offsetHeight * 0.9 + "px";
}

// q 4.8
let tags = document.querySelectorAll("p");
tags.forEach(t => {
	t.addEventListener("click", (e) => {
		e.target.innerText = ++e.target.innerText;
	})
})