import bgImage from '../imgs/menuBG.jpg'

function menuItem (title, description) {
    const listItem = document.createElement('li')
    const itemHead = document.createElement('h4');
    const itemDescription = document.createElement('p');

    itemHead.textContent = `${title}`;
    itemDescription.textContent = `${description}`
    listItem.appendChild(itemHead);
    listItem.appendChild(itemDescription);

    return listItem


}

function menuList(title) {
    const menuList = document.createElement('ul')
    menuList.classList.add("menu-section")
    const sectionTitle = document.createElement('h2')
    sectionTitle.textContent=`${title}`
    menuList.appendChild(sectionTitle)
    return menuList

}

    function appetizers() {
        const apps = menuList("Appetizers");
        apps.appendChild(menuItem("Skål Platter", "A grand selection of smoked meats, pickled vegetables, and Viking-style flatbreads. Served with honeyed mustard and pickled herring."))
        apps.appendChild(menuItem("Thor’s Hammer Meatballs", "Hearty venison and boar meatballs, flavored with herbs and spices, served with a rich gravy and rustic rye bread."))
        apps.appendChild(menuItem("Norse Dipping Sauces", "Three mighty dips: creamy garlic and dill butter, honey mustard, and a spicy fire-roasted pepper relish, served with thick, warm flatbreads."))
        return apps
    }

    function entrees() {
        const mains = menuList("Main Course");
        mains.appendChild(menuItem("Odin's Roast Boar", "A succulent roast boar, glazed with honey, herbs, and beer, served with mashed root vegetables and wild rice."))
        mains.appendChild(menuItem("Vinking Hunter's Stew", "A rich, slow-cooked stew of venison, elk, and root vegetables, simmered in a hearty broth of mead and herbs. Served with a side of roasted flatbread."))
        mains.appendChild(menuItem("Ragnar's Salmon", "Grilled salmon, topped with a dill and mustard glaze, served with wild foraged greens and a side of potato and leek mash."))
        mains.appendChild(menuItem("Shieldmaiden's Lamb", "Tender roasted lamb shank, marinated in thyme and garlic, served with roasted vegetables and a wild berry sauce."))
        mains.appendChild(menuItem("Ale-Braised Beef Short Ribs", "Slow-cooked beef short ribs braised in dark ale, served with roasted garlic potatoes and steamed greens."))
        return mains
    }

    function sideDisehs() {
        const sides = menuList("Side Dishes");
        sides.appendChild(menuItem("Nordic Root Mash", "A creamy blend of mashed parsnips, carrots, and turnips, seasoned with butter and dill."))
        sides.appendChild(menuItem("Viking Baked Potatoes", "Crispy-skinned potatoes stuffed with smoked salmon, sour cream, and chopped green onions."))
        sides.appendChild(menuItem("Wild Forest Greens", "A refreshing salad of wild greens, berries, nuts, and a honey-mustard dressing."))
        sides.appendChild(menuItem("Fire-Roasted Vegetables", "A mix of seasonal vegetables roasted with honey and herbs over an open flame."))
        return sides
    }

    function desserts() {
        const desserts = menuList("Desserts");
        desserts.appendChild(menuItem("Honeyed Mead Cake", "A rich, spiced cake soaked in honey and mead syrup, served with a dollop of whipped cream."))
        desserts.appendChild(menuItem("Nordic Berry Pudding", "A thick, creamy pudding made from foraged berries and served with a crispy oat crumble."))
        desserts.appendChild(menuItem("Thor's Thorvald's Apple Pie", "A rustic, deep-dish apple pie, spiced with cinnamon and nutmeg, served with a scoop of vanilla ice cream."))
        return desserts
    }

    function drinks() {
        const drinks = menuList("House Drinks");
        drinks.appendChild(menuItem("Viking Mead", "Honey-based fermented beverage, available in sweet, dry, or spiced varieties."))
        drinks.appendChild(menuItem("Ale of the Gods", "A selection of robust ales, including dark stouts, pale ales, and rich porters."))
        drinks.appendChild(menuItem("Frostbite Cider", "A chilled apple cider, crisp and tart with a hint of wild berries."))
        drinks.appendChild(menuItem("Signrun's Elixir", "A refreshing herbal drink made with ginger, mint, and a touch of honey."))
        return drinks
    }


const menuPage = () => {
    const content = document.querySelector("#content")
    const bg = document.createElement('img');
    const menuHero = document.createElement('div')
    const menuCardContainer = document.createElement('div')
    const menuCard = document.createElement('div')
    bg.src= bgImage;
    menuHero.classList.add('hero')
    menuHero.appendChild(bg)
    menuCardContainer.classList.add('menu-card-container')
    menuCard.classList.add('menu-card')
    menuCard.appendChild(appetizers())
    menuCard.appendChild(entrees())
    menuCard.appendChild(sideDisehs())
    menuCard.appendChild(desserts())
    menuCard.appendChild(drinks())
    menuCardContainer.appendChild(menuCard)
    menuHero.appendChild(menuCardContainer)
    




    content.appendChild(menuHero)
    




}

export {menuPage}

