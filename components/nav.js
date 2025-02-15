const header = document.createElement("header")
const nav = document.createElement("nav")
const body = document.body

function Button(name) {
    const firstLetter = name.charAt(0).toUpperCase();
    const remainingLetters = name.slice(1);
    const capitalizedWord = firstLetter + remainingLetters;
   const button = document.createElement("button")
    button.classList.add(name)
    button.textContent= capitalizedWord
    return button
}

const home = new Button("home");
const about = new Button("about");
const menu = new Button("menu");


const navigation = () => {
    header.classList.add("nav-header")
    nav.classList.add("nav")
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    header.appendChild(nav)
    body.appendChild(header)

   
}
    
 export {navigation, home, about, menu}