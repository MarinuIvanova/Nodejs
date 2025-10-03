function filterByNumber(arr, condition) {
    return arr.filter(function(num) {
        return condition(num)
    })
}

function isEven(num) {
    return num % 2 === 0
}

/*const numbers = [1,2,3,4,5,6,7,8,9,10]
const filteredNumbers = filterByNumber(numbers,isEven)
console.log(filteredNumbers)*/

module.exports = [filterByNumber, isEven]
