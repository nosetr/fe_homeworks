/**
 * Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
 */
const dv1 = document.createElement('div'),
    btn1 = document.createElement('button')
dv1.classList.add('dv1')
document.body.append(dv1, btn1)
btn1.addEventListener('click', () => dv1.classList.add('active'))

/**
 * Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
 */
const dv2 = document.createElement('div'),
    btn2 = document.createElement('button')
dv2.classList.add('dv2')
dv2.style.backgroundColor = 'pink'
document.body.append(dv2, btn2)
btn2.addEventListener('click', () => {
    dv2.style.backgroundColor = 'blue'
    console.log(dv2.style.backgroundColor)
})

/**
 * Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
 */
const dv3 = document.createElement('div'),
    btn3 = document.createElement('button')
let wdtHgt = 150
dv3.style.width  = wdtHgt + 'px',
dv3.style.height = wdtHgt + 'px'
btn3.addEventListener('click', () => {
    wdtHgt += 20 
    dv3.style.width = wdtHgt + 'px'
    dv3.style.height = wdtHgt + 'px'
})
document.body.append(dv3, btn3)

/**
 * Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
 */
const dv4 = document.createElement('div'),
btn4 = document.createElement('button')
dv4.classList.add('root')
btn4.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerText = 'Текст параграфа произвольный'
    p.style.backgroundColor = 'blue'
    dv4.append(p)
})
document.body.append(dv4, btn4)

/**
 * Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
 */
const dv5 = document.createElement('div'),
    btn5 = document.createElement('button')
let i = 0
dv5.classList.add('root')
btn5.addEventListener('click', () => {
    i++
    const p = document.createElement('p')
    p.style.backgroundColor = (i%2 === 0) ? 'green' : 'blue'
    dv5.append(p)
})
document.body.append(dv5, btn5)