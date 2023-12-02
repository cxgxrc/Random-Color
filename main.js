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
        console.log(arrayLetters[i])
        return arrayLetters[i]
    } else {
        console.log(number)
        return number
    }
}

// test 

for (let index = 0; index < 10; index++) {
    generateRadomness()
    
}