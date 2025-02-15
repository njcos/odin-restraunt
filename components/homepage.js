import image from "../imgs/exterior.jpg"
import logo from "../imgs/odin logo.min.svg"

const homepage = () => {

    const content = document.querySelector('#content')
    const hero = document.createElement('div');
    const heroImage = document.createElement('img');
    const heroText = document.createElement('div')
    const logoImage = document.createElement('img')
    const text = document.createElement('h1')
    heroText.classList.add('hero-text')
    text.textContent="ODIN"
    logoImage.src = logo;
    logoImage.classList.add('hero-logo')
    heroImage.src = image;
    hero.classList.add('hero');
    hero.appendChild(heroImage);
    heroText.appendChild(logoImage);
    heroText.appendChild(text);
    content.appendChild(hero);
    content.appendChild(heroText)

};

export {homepage}