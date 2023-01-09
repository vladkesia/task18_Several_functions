// function searchNumber(arr) {
//     let sum = 0
//     let midle = 1
//     if (Array.isArray(arr)) {
//         arr.map(element => {
//             if (!isNaN(element) && typeof element === 'number') {
//                 sum += element
//                 midle++
//             }
//         })
//     }
//     return sum / midle
// }
//
// const array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
// console.log(searchNumber(array))
//
// function doMatch(x, znak, y) {
//     const firstNumber = Number(x)
//     const secondNumber = Number(y)
//     let result
//     if (!isNaN(x) && !isNaN(y)) {
//         switch (znak) {
//             case '+':
//                 result = firstNumber + secondNumber
//                 break;
//             case '-':
//                 result = firstNumber - secondNumber
//                 break;
//             case '*':
//                 result = firstNumber * secondNumber
//                 break;
//             case '/':
//                 result = firstNumber / secondNumber
//                 break;
//             case '%':
//                 result = firstNumber % secondNumber
//                 break;
//             case '^':
//                 result = firstNumber ^ secondNumber
//                 break;
//             default:
//                 result = NaN
//         }
//     }
//     return result
// }
//
// console.log(doMatch(7,'*',2));
//

function searchSymbol(sentence, symbols) {
   if (Array.isArray(symbols) && typeof sentence === 'string') {
        for(let i = 0; i<symbols.length;i++){
            if(typeof symbols[i] === 'number'){
                return new Error('в symbols передаеться массив string')
            }
        }
       for(const elem of symbols) {
           sentence = sentence.split(elem).join('');
       }
       return  sentence
}
}

let test = 'Hello word'
console.log(searchSymbol(test, ['w']));

const input = prompt('Введіть довжину массиву, два числа через кому')
function userArray(input) {
  if(input?.trim()) {
      const arr = input.split(',')
      const sum = +arr[0] + +arr[1]
      if(arr.length === 2 && Number(arr[0]) && Number(arr[1])) {
          const inputArr = prompt(`Введіть ${sum} символів через кому `).split(',')
          if( inputArr !== null && inputArr.length >0 && inputArr.length === sum) {
              const firstArray = []
              const secondArray = []
              for (let i = 0; i < arr[0]; i++) {
                  firstArray.push(inputArr[i])
              }
              inputArr.splice(0, +arr[0])
              for (let i = 0; i < arr[1]; i++) {
                  secondArray.push(inputArr[i])
              }
              const resultArr = [firstArray, secondArray]
              console.log(resultArr)
          }else {
              alert(`Треба було ввесты ${sum} `)
          }
      }else {
          alert('треба ввести дві цифри через кому ')
      }
  }else {
      return alert('ви нічого не ввели або відмінили дію' )
  }

}
userArray(input)

