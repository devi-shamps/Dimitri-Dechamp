import React, { useEffect,useRef } from "react";
import './App.css';

function App() {

    useEffect(() => {
        const handleScroll = () => {
            const images = document.querySelectorAll('.scrolling-image');

            images.forEach((image) => {
                const scrollY = window.scrollY;
                const imageRect = image.getBoundingClientRect();

                // Calculez les nouvelles propriétés de style en fonction du défilement
                const translateY = scrollY + window.innerHeight - imageRect.bottom;
                const translateX = (scrollY / window.innerHeight) * window.innerWidth;

                // Appliquez les nouvelles propriétés de style à l'image
                image.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        };

        // Ajoutez un écouteur d'événements de défilement
        window.addEventListener('scroll', handleScroll);

        // Retirez l'écouteur d'événements lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style","top: "+(e.pageY-6)+"px; left: "+(e.pageX-6)+"px;")
        })
        document.addEventListener('click' ,() => {
            cursor.classList.add("expand");

            setTimeout(() =>{
                cursor.classList.remove("expand");
            }, 500)
        })
    })
    return (

        <div className="App">
            <div className="cursor"></div>
            <header className="App-header">
                <a className="text-h6" href="/">
                    <img src='/assets/petit-logo-ecrit.svg' alt="logo"/>
                    <br/>
                    <span className="text-description">Annecy, France</span>
                </a>
                <nav>
                    <a className="text-h6" href="/">CHIBRE.</a>
                    <a className="text-h6" href="/">CHATTE.</a>
                    <a className="text-h6" href="/">ABOUT.</a>
                    <div className="mail">
                        <a href="mailto:dimitri.dechamp@gmail.com">
                            <img src="/assets/Enveloppe.svg" alt="enveloppe"/>
                        </a>
                    </div>
                </nav>
            </header>
            <div className="my-skills-main-reel">
                <div className="my-skills-reel" id="skill-reel">
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                    <div className="reel-item"> &nbsp;  — My skills</div>
                </div>
            </div>
            <div className="scrolling-images-container">
                {/* Ajoutez autant d'images que nécessaire */}
                <div className="scrolling-image">
                    <img src="/gros-logo.svg" alt="Image" />
                </div>
                <div className="scrolling-image"></div>
                {/* ... */}
            </div>
            <div className="container">
                <img src="/gros-logo.svg" className="App-container-logo" alt="groslogo"/>
            </div>
        </div>
    );
}

export default App;
