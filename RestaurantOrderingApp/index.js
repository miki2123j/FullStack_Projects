import {menuArray} from "./data.js"

let isClicked1 = false
const container = document.getElementById("container")
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
        isClicked1 = true
    }
})
let priceArr= []
function handleAddClick(ItemId){
    if(!isClicked1){
        renderYourOrder()
    }
    const targetMenuObj = menuArray.filter(function(item){
        return item.id === Number(ItemId)
    })[0]
    priceArr.push(targetMenuObj.price)
    const totalPrice = priceArr.reduce((total, current) => total + current)
    console.log(targetMenuObj)
    document.getElementById("order-list").innerHTML +=`
                <div class="outter-order-list">
                <div class="inner-order-list">
                <p>${targetMenuObj.name}</p>
                <p class="remove" data-remove="remove">remove</p>
                <p>$${targetMenuObj.price}</p>
                </div>
                </div>`
    document.getElementById("total").innerText = `$${totalPrice}`
}

function renderYourOrder(){
    container.innerHTML += `
    <section class="order" id="order">
            <h2>Your order</h2>
            <div class="order-list" id="order-list">
            </div>
            <div class="total">
                <p>Total Price</p>
                <p id="total"></p>
            </div>
            <button>Complete Order</button>
    </section>`
}

function getMenuHtml(menu){
    return menu.map(m => {
        const {
            name,
            ingredients,
            price,
            emoji,
            id
        } = m
        return `
            <section class="menu">
                <h2 class="emoji">${emoji}</h2>
                <div class="menu-1">
                    <h2>${name}</h2>
                    <p class="ingredients">${ingredients}</p>
                    <p>$${price}</p>
                </div>
                <div class="add-btn" data-add="${id}">
                    +
                </div>
            </section>` 
    }).join('')
}

function render(){
    container.innerHTML = getMenuHtml(menuArray)
}

render()