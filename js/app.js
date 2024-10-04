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
