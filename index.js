function searchNumber(arr) {
    let sum = 0
    let midle = 0
    if (Array.isArray(arr)) {
        arr.map(element => {
            if (!isNaN(element) && typeof element === 'number') {
                sum += element
                midle++
            }
        })
    }
    return sum / midle
}

const array = [2, 3, 3, 5, 7, 10]
console.log(searchNumber(array))


let input2 = prompt('введіть ваше вираження без пробілів все разом ')

function doMatch(value) {
    if (value !== null && value.trim() !== '' && value.length === 3) {
        const valueArr = value.split('')
        const firstNumber = Number(valueArr[0])
        const secondNumber = Number(valueArr[2])
        const znak = valueArr[1]
        let result
        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            switch (znak) {
                case '+':
                    result = firstNumber + secondNumber
                    break;
                case '-':
                    result = firstNumber - secondNumber
                    break;
                case '*':
                    result = firstNumber * secondNumber
                    break;
                case '/':
                    result = firstNumber / secondNumber
                    break;
                case '%':
                    result = firstNumber % secondNumber
                    break;
                case '^':
                    result = firstNumber ** secondNumber
                    break;
                default:
                    result = NaN
            }
        }
        alert(result)
    } else {
        alert('треба було ввести перше число знак(що треба зробити ) друге число')
    }
}

doMatch(input2)

 const input = prompt('Введіть довжину массиву, два числа через кому')

function userArray(input) {
    const arr = input.split(',')
    let sum = 0
    for (let element of arr){
        if (!Number(element)){
            return alert("повинно бути число і повинно бути більше 0  ")
        }else {
            sum +=Number(element)
        }
    }
    const inputUserArray = prompt(`Введіть ${sum} єлементи массиву`)
    if(inputUserArray !== null && inputUserArray.trim() !== '') {
        const sience = inputUserArray.split(',')
        if(sience.length === sum) {
            const resultArr = []
            let resultString = ''
            for (let i = 0; i < arr.length; i++) {
                const array = []
                for (let j = 0; j < arr[+i]; j++) {
                    array.push(sience[j])
                }
                resultArr.push(array)
                resultString += `[${array}]`
                sience.splice(0, array.length)
            }
            console.log(resultArr)
            alert(`[${resultString}]`)
        }else {
            alert(`колколичество элементов должно быть ${sum} `)
        }

    }else {alert('Треба ввести числа через кому ')}
}

userArray(input)

const firstInput = prompt('введіть речення')
const secondInput = prompt('Ведіть через пробіл символи які треба видалити')

function searchSymbol(sentence, symbols) {
    if (sentence !== null && sentence.trim() !== '' && symbols !== null && symbols.trim() !== '') {
        const array = symbols.split(' ')
        for (let i = 0; i < array.length; i++) {
            if (array[i].length !== 1) {
                return alert('Треба по одному символу через пробіл')
            }
        }
        for (const elem of array) {
            sentence = sentence.split(elem).join('');
        }
        alert(sentence)
    } else {
        alert('Треба було щось ввести')
    }
}


searchSymbol(firstInput, secondInput)
