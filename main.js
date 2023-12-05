// Generate a random number or digital up to f

const arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F']
const background = document.getElementById('color')
const random = document.getElementById('change')
const btnn = document.getElementById('changeColor')
const btnCopy = document.getElementById("copy")

// generate random number

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


// Get a random number between 0 to 9 or a letter btw A to F 

function generateRadomness() {
    let number = getRandomIntInclusive(0, 15);
    if (number > 9) {
        let i = number - 10
        return arrayLetters[i]
    } else {
        return number
        
    }
}


// get a six digit color

function getHexaColor() {
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color = color + generateRadomness();
        
    }
    return color
}


// If u click the btn the background of the page will change

btnn.addEventListener("click", changeColor)
btnCopy.addEventListener("click", clipboard)

function changeColor() {
    let i = getHexaColor()
    random.textContent = i;
    background.style.backgroundColor = i;

}

function clipboard() {
    navigator.clipboard.writeText(change.innerText)
   
    
}
