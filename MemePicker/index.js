import { catsData } from "./data/data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

getImageBtn.addEventListener('click', getMatchingCatsArray)

emotionRadios.addEventListener('change', highlightCheckedOption)

function getMatchingCatsArray(){
    const isGif = gifsOnlyOption.checked
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotion)
    }
}

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio')
    for( let radio of radioArray){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for( let emotion of emotions){
        radioItems += `
           <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input type="radio",
                id="${emotion}",
                value="${emotion}",
                name= "emotions">
           </div>
        ` 
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)