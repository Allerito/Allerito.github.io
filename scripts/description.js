const descriptions = [
  "I am driven by curiosity and constantly seek new challenges to learn and grow.",
  "Passionate about gaming, coding, and continuous self-improvement.",
  "I love deconstructing how things work and building tools that help others understand them.",
  "I believe that creation is the most authentic form of expression.",
  "I welcome feedback—if you have suggestions to improve my code, please reach out.",
  "I view coding as an iterative process; I persist through bugs until the solution is solid.",
  "As a software developer, I am dedicated to crafting fast, secure, and scalable solutions.",
  "My passion lies in leveraging technology to foster growth and innovation.",
  "I combine technical expertise with a creative approach to solve complex problems effectively.",
  "I believe that robust, well-engineered software is the foundation of meaningful progress.",
  "Committed to excellence, I treat every challenge as an opportunity to optimize performance and security.",
  "Transparency and continuous improvement are the core values of my development philosophy.",
  "I actively challenge myself to stay at the forefront of technological advancements.",
  "My goal is to build technology that empowers users and drives global growth.",
];

const startPhrase = "Hey I'm Ruben Allera aka Allerito. ";
const period = 2000;
const element = document.getElementById("description");

let descriptionIndex = Math.floor(Math.random() * descriptions.length);
let txt = "";
let toRotate = descriptions[descriptionIndex];
let isDeleting = false;

function descriptionWriter() {
  let speed = 40; // writing speed

  if (isDeleting) {
    speed /= 2; // deleting speed
  }

  if (!isDeleting && txt === toRotate) {
    speed = period;
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    descriptionIndex++;
    if (descriptionIndex >= descriptions.length) {
      descriptionIndex = 0;
    }
    toRotate = descriptions[descriptionIndex];
    speed = 500;
  } else {
    txt = isDeleting
      ? toRotate.substring(0, txt.length - 1)
      : toRotate.substring(0, txt.length + 1);
    element.textContent = startPhrase + txt;
  }

  setTimeout(descriptionWriter, speed);
}

descriptionWriter();
