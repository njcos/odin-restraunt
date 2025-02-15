import "./styles.css"
import { navigation, home, menu, about } from "../components/nav"
import { homepage } from "../components/homepage"
import { menuPage } from "../components/menu"


navigation()

const content = document.createElement('div')
content.id='content'
document.body.appendChild(content)

homepage()




home.addEventListener('click', () => {
    content.replaceChildren()
    homepage()
})
menu.addEventListener('click', () => {
    content.replaceChildren()
    menuPage()

})
about.addEventListener('click', () => {
    content.replaceChildren()

})