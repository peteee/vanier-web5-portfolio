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
