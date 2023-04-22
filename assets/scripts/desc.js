const desc = [
	"I'm a very curious guy and I like to learn and challenge myself.",
	"My hobbies are gaming, coding and improve myself.",
	"I really like understanding how things work, but at the same time I love creating things for others to understand.",
	"I'm convinced that creating is the best way to tell about yourself.",
	"If you have suggestions to improve me, please contact me.",
	"Usually my code is a little buggy, but I'll update it until it works.",
]

const startPhrase = "Hey I'm Ruben Allera aka Allerito. ";
const period = 2000;
const element = document.getElementById("desc");

let index = Math.floor(Math.random() * desc.length);
let txt = "";
let toRotate = desc[index];
let isDeleting = false;

(function type() {
	let speed = 40;

	if (isDeleting) {
		speed /= 2;
	}

	if (!isDeleting && txt === toRotate) {
		speed = period;
		isDeleting = true;
	} else if (isDeleting && txt === "") {
		isDeleting = false;
		index++;
		if (index >= desc.length) {
			index = 0;
		}
		toRotate = desc[index];
		speed = 500;
	}else{
		txt = isDeleting ? toRotate.substring(0, txt.length - 1) : toRotate.substring(0, txt.length + 1);
		element.innerHTML = startPhrase + txt;
	}
	
	setTimeout(type, speed);
})();