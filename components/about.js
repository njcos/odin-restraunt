import bgImage from "../imgs/aboutBG.jpg"

const aboutPage = () => {
    const content = document.querySelector('#content')
    const hero = document.createElement('div')
    const bg = document.createElement('img')
    const textContainer = document.createElement('div')
    const title = document.createElement('h2')
    const info = document.createElement("p")
    const aboutInfo = document.createElement('div')
    textContainer.classList.add('menu-card-container')
    aboutInfo.classList.add('about-info')
    bg.src=bgImage
    hero.classList.add('hero')
    title.textContent="About"
    info.textContent="Welcome to Odin, where the spirit of the ancient Norse warriors comes alive with every meal. Nestled at the heart of the village, our restaurant is a tribute to the legendary feasts and fierce traditions of Viking culture. Here, we believe in celebrating the bounty of the land, the strength of the sea, and the wild flavors that powered the mighty Vikings on their raids and voyages.  At Odin, we craft our dishes with the finest meats, fresh herbs, and the heartiest grains — just as the Norse gods intended. From the robust flavors of slow-cooked meats to the sharp tang of wild foraged greens, every bite takes you back to a time of warriors, shieldmaidens, and gods.  Our long wooden tables, crackling firepits, and the hum of mead-filled goblets create the perfect atmosphere for friends, family, and fellow adventurers to gather. Whether you’re here to raise a mug of mead in honor of Odin or savor a hearty feast fit for a Viking king, Odin is where legends are made.  So come, sit with us, share a story, and enjoy a feast worthy of the gods. Skål!"

    aboutInfo.appendChild(title)
    aboutInfo.appendChild(info)
    textContainer.appendChild(aboutInfo)
    hero.appendChild(bg)
    hero.appendChild(textContainer)
    content.appendChild(hero)

}

export {aboutPage}