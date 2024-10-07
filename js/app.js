function MyApp() {
    return (
        <>
            <figure>
                <img src="https://www.placebear.com/300/300" alt=""></img>
                <figcaption>Lorem ipsum dolor sit.</figcaption>
            </figure>
            <figure>
                <img src="https://www.placebear.com/300/300" alt=""></img>
                <figcaption>Lorem ipsum dolor sit.</figcaption>
            </figure>
            <figure>
                <img src="https://www.placebear.com/300/300" alt=""></img>
                <figcaption>Lorem ipsum dolor sit.</figcaption>
            </figure>
            <figure>
                <img src="https://www.placebear.com/300/300" alt=""></img>
                <figcaption>Lorem ipsum dolor sit.</figcaption>
            </figure>
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
