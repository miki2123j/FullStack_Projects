import {menuArray} from "./data.js"

const container = document.getElementById("container")
let isClicked1 = false
let priceArr= []
let orderArr = []
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
        renderOrderList(orderArr)
        isClicked1 = true
    } else if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }
})
function handleAddClick(itemId){
    const targetMenuObj = menuArray.filter(function(item){
        return item.id === Number(itemId)
    })[0]
    orderArr.push(targetMenuObj)
    priceArr.push(targetMenuObj.price)
}

function handleRemoveClick(index){
    if(orderArr.length === 1){
        container.innerHTML = ""
        render()
        isClicked1 = false
        orderArr = []
        priceArr = []
    } else{
        orderArr.splice(index, 1)
        priceArr.splice(index, 1)
        renderOrderList(orderArr)
    }
}

function renderOrderList(order){
    if(!isClicked1){
        renderYourOrder()
    }
    let template  = ``
    order.forEach((item, index) =>{
        template += `
                <div class="outter-order-list">
                <div class="inner-order-list">
                <p>${item.name}</p>
                <p class="remove" data-remove="${index}">remove</p>
                <p>$${item.price}</p>
                </div>
                </div>`
    })
    const totalPrice = priceArr.reduce((total, current) => total + current)
    document.getElementById("order-list").innerHTML = template 
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