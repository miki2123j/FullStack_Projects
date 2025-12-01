import {menuArray} from "./data.js"
console.log(menuArray)

function getMenuHtml(menu){
    return menu.map(m => {
        const {
            name,
            ingredients,
            price,
            emoji
        } = m
        return `
            <section class="menu">
                <h2 class="emoji">${emoji}</h2>
                <div class="menu-1">
                    <h2>${name}</h2>
                    <p>${ingredients}</p>
                    <h3>$${price}</h3>
                </div>
                <div class="add-btn">
                    +
                </div>
            </section>` 
    }).join('')
}

document.getElementById("container").innerHTML = getMenuHtml(menuArray)