// q 2.2
let ttl = document.querySelector("#title");
let new_element = document.createElement("h2");
new_element.innerText = "Сегодня солнечно, минус 15";
ttl.parentElement.append(new_element);

// q 2.3
let new_element = document.createElement("li");
new_element.innerText = "Велосипед";
let ul = document.querySelector("ul");
ul.insertBefore(new_element, ul.firstElementChild);

// q 2.5
let tags = document.querySelectorAll("p");
tags.forEach((t, i) => {
	t.id = `p_${++i}`;
})

// q 2.7
let values=[15, 20, 25];
tags = document.querySelectorAll(".elems");
tags.forEach(t => {
	let n = +t.innerText;
	if (values.includes(n)) {
		t.remove();
	}
})

// q 2.9
ul = document.querySelector("#first");
let new_element = document.createElement("li");
ul.append(new_element);
console.log(ul.children.length)

// q 2.10
values = ["велосипед", "ролики", "лыжи"];
let d1 = document.querySelector("#div1"),
    d2 = document.querySelector("#div2");
for (let i = 0; i < d1.children.length; ) {
	let tag = d1.children[i];
	if (values.includes(tag.innerText)) {
		d2.append(tag);
	} else {
		i++;
	}
} 

// q 2.13
let tasks = document.querySelector("#tasks");
console.log(tasks);
tags = Array.from(tasks.querySelectorAll("li"));
tags.sort((a,b) => a.innerText.length - b.innerText.length);
tasks.innerHTML = "";
tasks.append(...tags);