import {menuArray} from "./data.js"
console.log(menuArray)

function getMenuHtml(menu){
    return menu.map(m => {
        const {
            name,
            price,
            emoji
        } = m
        return `
            <section class="menu">
                <div class="menu-1">
                    <h2>${emoji}</h2>
                    <h2>${name}</h2>
                    <h3>$${price}</h3>
                </div>
            </section>` 
    }).join('')
}

document.getElementById("container").innerHTML = getMenuHtml(menuArray)