let projects = [
    {
        id: 1, name: 'Project 1', enable: true, description: 'Description 1...', images: [
            { id: 1, src: 'img/project1-1.jpg' },
            { id: 2, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 2, name: 'Project 2', enable: false, description: 'Description 2', images: [
            { id: 1, src: 'img/project2-1.jpg' },
            { id: 2, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 3, name: 'Project 3', enable: true, description: 'Description 3', images: [
            { id: 1, src: 'img/project3-1.jpg' },
            { id: 2, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
            { id: 4, src: 'https://placebear.com/600/400' },
            { id: 5, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 4, name: 'Project 4', enable: true, description: 'Description 4', images: [
            { id: 1, src: 'https://placebear.com/600/400' },
            { id: 2, src: 'https://placebear.com/600/400' },
        ]
    },
]

const overLay = document.getElementById("overlay");

function closeOverlay() {
    overLay.style.opacity = "0";
    overLay.classList.remove("show");
    overLay.innerHTML = '';
}

function openOverlay(project) {
    overLay.classList.add("show");
    setTimeout(() => { overLay.style.opacity = "1" }, 300);
    
    //window.scrollTo(0, 0);

    overLay.innerHTML = `<p class="close" onclick="closeOverlay()">x</p><h2>${project.name}</h2>
    <p>${project.description}</p>`;

    project.images.forEach((item, index) => {
        overLay.innerHTML += `<img class="project-img-detail" src="${item.src}">`
    })

}

const Project = ({ project }) => {
    let show = (project.enable!==false) ? 'block' : 'none';

    return <div style={{display: show}}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div>
            {project.images.map(image => (
                <img className="project-img" key={image.id} src={image.src} alt={project.name} onClick={() => openOverlay(project)} />
            ))}
        </div>
    </div>
}

function MyApp() {
    return (
        <>
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </>
    );
}

const container = document.getElementById('projects');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);



const myMenu = document.querySelector("#menu");
const myPanel = document.querySelector("#panel");
const myCloseBtn = document.querySelector("#close");
const mobileLinks = document.querySelectorAll("#panel nav a");

myMenu.addEventListener("click", function() {
    myPanel.classList.add("slide-in");
});
myCloseBtn.addEventListener("click", function() {
    myPanel.classList.remove("slide-in");
});

mobileLinks.forEach(function(item) {
    item.addEventListener("click", function() {
        myPanel.classList.toggle("slide-in");
    });
});
