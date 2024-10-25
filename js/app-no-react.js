const overLay = document.getElementById("overlay");

function closeOverlay() {
    overLay.style.opacity = "0";
    overLay.classList.remove("show");
    overLay.innerHTML = '';
}

function openOverlay(projectID) {
    overLay.classList.add("show");
    setTimeout(() => { overLay.style.opacity = "1" }, 300);
    
    //window.scrollTo(0, 0);

    overLay.innerHTML = `<p class="close" onclick="closeOverlay()">x</p><h2>${projects[projectID-1].name}</h2>
    <p>${projects[projectID-1].description}</p>`;

    projects[projectID-1].images.forEach((item, index) => {
        overLay.innerHTML += `<img class="project-img-detail" src="${item.src}">`
    })

}

const myProject = ( project ) => {
    
    let show = (project.enable!==false) ? '' : 'display:none';

    return `<div style="${show}">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <div>` +
            project.images.map(image => (
                `<img class="project-img" key="${image.id}" src="${image.src}" alt="${project.name}" onclick="openOverlay(${project.id})" />`
            )).join('') +
        `</div>
    </div>`;
}

function myApp() {
    return projects.map(project => ( myProject(project) )).join('')
}

const container = document.getElementById('projects');
container.innerHTML = myApp();


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
