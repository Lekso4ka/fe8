// q 1.1
let el = document.querySelector(".secret");
console.log(el.nodeName.toLowerCase());
console.log(el.tagName.toLowerCase());
console.log(el.localName);

// q 1.2
el = document.querySelector("#elem");
console.log(el.localName);

// q 1.4
let els = document.querySelectorAll(".target");
console.log(els[els.length - 1].localName);

// q 1.6
let tag = document.querySelector(".links");
tag.innerHTML = `<a>${tag.innerText}</a>`;

// q 1.7
let tag = document.querySelector(".content");
let text = tag.innerText;
tag.innerHTML = `<b>${text}</b>`;

// q 1.8
let elements = document.getElementsByClassName("price");
let sum = 0;
for (let i = 0; i < elements.length; i++) {
	sum += +elements[i].innerText;
}
console.log(sum)

// q 1.9
let tags = document.getElementsByClassName("numeric");
Array.from(tags).forEach(t => {
	let n = +t.innerText;
	if (n < 0) {
		t.innerHTML = `<b>${n}</b>`;
	}
})

// q 1.10
let result = 0;
let elems = document.querySelectorAll(".numeric");
elems.forEach(elem => result += +elem.innerText);
