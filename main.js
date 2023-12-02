// Generate a random number or digital up to f

const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f']

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function generateRadomness() {
    let number = getRandomIntInclusive(0, 15);
    if (number > 9) {
        let i = number - 10
        return arrayLetters[i]
    } else {
        return number
    }
}

// test 

// for (let index = 0; index < 10; index++) {
//     getHexaColor()
    
// }

function getHexaColor() {
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color = color + generateRadomness();
        return color
    }
}

const background = document.getElementById('color')

const btn = document.getElementById('interface')
btn.addEventListener("click", changeColor)

function changeColor() {
    let i = getHexaColor()
    background.style.backgroundColor = i
    console.log(background.style)

}
