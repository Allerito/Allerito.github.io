const Projects = [
    {
        title: "Password Generator",
        description: "A password generator application made in python, it allows to randomly generate a password where the user can choose which characters wants, when the password is generated it'll be automatically copied in user clipboard.",
        
        links: [
            {
                name: "Python",
                icon: "https://skillicons.dev/icons?theme=dark&i=py",
                link: "https://docs.python.org/3/",
            },
            {
                name: "Github",
                icon: "https://skillicons.dev/icons?theme=dark&i=github",
                link: "https://github.com/Allerito/Password_Generator",
            }
        ],
        img: "https://media.discordapp.net/attachments/842649255608975360/1099461452533878884/PasswordGenerator.png",
    },
    {
        title: "Project Hevinia",
        description: "Developed by a group of schoolmates, this 2D platformer game represents the hard work and creativity of its developers. Unfortunately, for various reasons, the game will never be released. In the game, players would have controlled a character on a journey through various environments, facing challenging obstacles and enemies along the way.",
        links: [
            {
                name: "C#",
                icon: "https://skillicons.dev/icons?theme=dark&i=cs",
                link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            },
            {
                name: "Unity",
                icon: "https://skillicons.dev/icons?theme=dark&i=unity",
                link: "https://unity.com/"
            },
            {
                name: "GitHub",
                icon: "https://skillicons.dev/icons?theme=dark&i=github",
                link: "https://github.com/LotoGames",
            }
        ],
        img: "https://media.discordapp.net/attachments/842649255608975360/1099461698953424966/ProjectHevinia.png",
    },
    {
        title: "Account Manager",
        description: "An account manager application made in python, it allows to saving your accounts information on your local pc",
        links: [
                    {
                name: "Python",
                icon: "https://skillicons.dev/icons?theme=dark&i=py",
                link: "https://docs.python.org/3/",
            },
            {
                name: "Figma",
                icon: "https://skillicons.dev/icons?theme=dark&i=figma",
                link: "https://www.figma.com/",
            },
            {
                name: "Download",
                icon: "https://skillicons.dev/icons?theme=dark&i=github",
                link: "https://github.com/Allerito/Account_Manager",
            }
        ],
        img: "https://cdn.discordapp.com/attachments/842649255608975360/1115218895490523136/image.png",
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
