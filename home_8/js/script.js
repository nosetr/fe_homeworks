/**
 * Написать цикл, который создает множество параграфов с каждым десятым числом 
 * в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
 * Добавить созданные параграфы в div с классом numbers.
 */
const art1 = document.querySelector('#item-1'),
    dv = document.createElement('div')

dv.setAttribute('class','numbers')

for (let i = 100; i >= 50; i -= 10) {
    const pEl = document.createElement('p')
    pEl.innerText = `параграф ${i}`
    dv.append(pEl)
}

art1.append(dv)

/**
 * Написать цикл, который проходится по массиву строк, для каждой строки 
 * создает параграф и добавляет его в div с классом strings_container. 
 * Строки взять произвольные.
 */
const strings = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptates.'
],
art2 = document.querySelector('#item-2'),
strDiv = document.createElement('div')

strDiv.setAttribute('class','strings_container')

strings.map(x => {
    const pEl2 = document.createElement('p')
    pEl2.innerText = x
    strDiv.append(pEl2)
})

art2.append(strDiv)

/**
 * Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, 
 * last_name и age (данные взять произвольные) - и создает карточки только для совершеннолетних 
 * пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
 * Добавить все карточки в div с классом users_container.
 */
const users = [
    {
        first_name: 'Sven',
        last_name: 'Becker',
        age: 25
    },
    {
        first_name: 'Nico',
        last_name: 'Fischer',
        age: 15
    },
    {
        first_name: 'Jens',
        last_name: 'Grube',
        age: 45
    }
],
art3 = document.querySelector('#item-3'),
usrDv = document.createElement('div'),
ulEl = document.createElement('ul')

users.map(x => {
    const {first_name, last_name, age} = x
    if(age >= 18){
        const liEl = document.createElement('li')

        liEl.innerText = `${first_name} ${last_name}, ${age}`

        ulEl.append(liEl)
    }
})

usrDv.append(ulEl)
art3.append(usrDv)