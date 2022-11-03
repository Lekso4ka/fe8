// q 3.1
let el = document.querySelector("#div_elem");
el.style.width = "100px";
el.style.height = "100px";

// q 3.3
let lbl = document.querySelector("label");
lbl.setAttribute("for", "target");
lblb.htmlFor = "target";

// q 3.5
let tag = document.querySelector("#photo");
let img = document.createElement("img");
img.style.width = "100px";
img.style.height = "100px";
img.src = tag.innerText;
tag.innerHTML = img.outerHTML;

// q 3.6
let sel = document.querySelector("#numbers");
let n = 10;
while(n <= 550) {
	let opt = document.createElement("option");
	opt.innerText = n;
	opt.value = n;
	sel.append(opt);
	n += 10;
}