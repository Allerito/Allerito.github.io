const desc = [
	"I'm very curious and I like to learn and challenge myself.",
    "My hobbies are gaming, coding and improving myself.",
    "I really like to understand how things work, but at the same time I love creating them for helping people to understand.",
    "I'm convinced that creating is the best way to be known.",
    "If you have any suggestions to improve my code, please contact me.",
    "Usually my code is a little buggy, but I'll update it until it finally works.",
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