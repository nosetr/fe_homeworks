/**
 * Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
 */
for(i = 0; i <= 10; i++) {
    if (i % 2 === 1)
        console.log(i);
}

/**
 * Напишите цикл for, который выводит в консоль все числа от 55 до 20
 */
const arr = []
for(i=55; i >= 20; i--){
    arr.push(i)
}
console.log(arr.join())

/**
 * Дан массив numbers. Вывести в консоль все числа из массива
 * const numbers = [3, 5, 11, 2, 8, 1, 6];
 */
const numbers = [3, 5, 11, 2, 8, 1, 6]
numbers.map(num => console.log(num))

/**
 * Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат 
 */
const numbers_squared = []
numbers.map(num => {numbers_squared.push(num ** 2)})
console.log(numbers_squared)

/**
 * Создать переменную last_elem и передать в нее последний элемент 
 * из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
 */
let last_elem = numbers_squared[numbers_squared.length-1]
console.log(last_elem)

/**
 * Дан объект user. Используя данные из объекта, сформировать строку в формате: 
 * ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
 */
const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)