const Projects = [
	{
		title: 'Password Generator',
		description: 'A password generator application made in python',
		
		links: [
			{
				name: 'GitHub',
				icon: 'https://skillicons.dev/icons?theme=dark&i=github',
				link: 'https://github.com/Allerito/Password_Generator'
			},
			{
				name: 'Download',
				icon: 'https://skillicons.dev/icons?theme=dark&i=py',
				link: 'https://github.com/Allerito/Password_Generator/blob/main/main.py'
			}
		],
        img: 'https://media.discordapp.net/attachments/872913652171300875/1087142768612221139/image.png?width=1214&height=682'
	},
	{
		title: 'Project Hevinia',
		description: 'Developed by a group of schoolmates, this 2D platformer game represents the hard work and creativity of its developers. Unfortunately, for various reasons, the game will never be released. In the game, players would have controlled a character on a journey through various environments, facing challenging obstacles and enemies along the way.',
		links: [
            {
                name: 'language',
                icon: 'https://skillicons.dev/icons?theme=dark&i=cs',
            },
            {
                name: 'tool',
                icon: 'https://skillicons.dev/icons?theme=dark&i=unity',
            },
            {
                name: 'GitHub',
                icon: 'https://skillicons.dev/icons?theme=dark&i=github',
                link: 'https://github.com/LotoGames'
            }
        ],
		img: 'https://media.discordapp.net/attachments/872913652171300875/1087142768612221139/image.png?width=1214&height=682'
	},
]

// Show popup with project description
function showDesc(prTitle){
	let project = Projects.find(x => x.title === prTitle);

	// Set project attributes
	document.getElementById("prTitle").innerHTML = prTitle;
	document.getElementById("prDesc").innerHTML = project.description;

	let img = document.getElementById("prImg");
	if(project.img){
		img.src = project.img;
		img.style.display = "block";
	}else{
		img.style.display = "none";
	}

	// Set links
	document.getElementById("prLink").innerHTML = "";

	project.links.forEach(link => {
		let a = document.createElement("a");

		if(link.icon){
			let img = document.createElement("img");

			img.src = link.icon;
			img.title = link.name;

			img.style.marginRight = "5px";
			a.appendChild(img);
		}

		a.href = link.link;

		document.getElementById("prLink").appendChild(a);
	});

	// Show popup
	document.getElementById("popup").style.display = "flex";
}

// Add a listener to to close the popup when the user clicks outside of it
window.addEventListener("click", function(event) {
	if (
		event.target != document.getElementById("popup") &&
		!document.getElementById("popup").contains(event.target) &&
		!document.getElementById("projects").contains(event.target)
	) {

		document.getElementById("popup").style.display = "none";
	}
})