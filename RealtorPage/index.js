import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"


function getPropertyHtml(properties = [placeholderPropertyObj]) {
    return properties.map(property => {
        const {
                propertyLocation,
                priceGBP,
                roomsM2,
                comment,
                image
            } = property
        const totalSize = roomsM2.reduce((total, current) => total + current)

        return `
            <section class="card">
                <img src="./images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>£${priceGBP}/h3>
                    <p>${comment}T</p>
                    <h3>${totalSize} m&sup2;</h3>
                </div>
            </section>` 
    }).join('')
}
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)