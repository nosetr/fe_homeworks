
// Global constants
const aNum = +prompt('Enter a number one'),
    bNum = +prompt('Enter a number two')

/**
 * Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
 */
const getMin = (a, b) => Math.min(a, b)
console.log('#1:', `Наименьшее число из ${aNum} и ${bNum} является`,getMin(aNum, bNum))

/**
 * Напишите функцию, которая принимает два числовых аргумента и выводит 
 * в консоль все четные числа от большего к меньшему.
 */
const max = Math.max(aNum, bNum), 
min = getMin(aNum, bNum),
getEven = () => {
    const newArr = []
    for (let i = max; i >= min; i--) {
        if (i % 2 === 0) newArr.push(i)
    }
    return newArr.toString()
}
console.log('#2:',`все четные числа от ${max} к ${min}:`,getEven())

/**
 * Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и 
 * возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
 */
const power = (a, b = 2) => a ** b
console.log('#3:',`${aNum} в степени ${bNum}:`,power(aNum, bNum))

/**
 * Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
 */
const func1 = n => {
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}
console.log('#4:',`сумма всех чисел от 1 до ${aNum} равна`,func1(aNum))

/**
 * Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных
 * чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
 */
const getSum = (n, m, even = true) => {
    let sum = 0
    for (let i = Math.max(n, m); i >= Math.min(n, m); i--) {
        if ((!!even && i % 2 === 0) || (!even && i % 2 !== 0)) sum += i
    }
    return sum
}
console.log('#5:',`от ${aNum} до ${bNum} сумма чётных чисел:`,getSum(aNum, bNum), `и нечётных чисел:`,getSum(aNum, bNum, false));

/**
 * Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый
 * длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько
 * одинаковых по длине элементов - функция возвращает первый из этих элементов.
 * Пример: [ 'one', 'two', 'three' ] => 'three'
 */
const longestStr = (arr) => {
    let str = ''
    arr.map(x => str = (x.length > str.length) ? x : str )
    return (str.length > 0) ? str : null
}
console.log('#6:','самый длинный элемент массива:',longestStr([ 'one', 'three1', 'two', 'three2' ]))
