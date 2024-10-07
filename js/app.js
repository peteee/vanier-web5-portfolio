let projects = [
    {
        id: 1, name: 'Project 1', description: 'Description 1...', images: [
            { id: 1, src: 'img/project1-1.jpg' },
            { id: 2, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 2, name: 'Project 2', description: 'Description 2', images: [
            { id: 1, src: 'img/project2-1.jpg' },
            { id: 3, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 3, name: 'Project 3', description: 'Description 3', images: [
            { id: 1, src: 'img/project3-1.jpg' },
            { id: 2, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
            { id: 3, src: 'https://placebear.com/600/400' },
        ]
    },
    {
        id: 3, name: 'Project 4', description: 'Description 4', images: [
            { id: 1, src: 'https://placebear.com/600/400' },
            { id: 2, src: 'https://placebear.com/600/400' },
        ]
    },
]

const Project = ({ project }) => {
    return <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div>
            {project.images.map(image => (
                <img className="project-img" key={image.id} src={image.src} alt={project.name} />
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
