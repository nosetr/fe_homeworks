const form = document.querySelector('form')
const userCard = document.createElement('div')
const users = []

// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.
const setListener = () => {
    const articles = document.querySelectorAll('article')
    articles.forEach(x => x.addEventListener('dblclick', () => {
        const id = x.getAttribute('data-id')
        users.splice(id, 1)
        rerender()
    }))
}

// Реализовать функцию rerender.
// Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива.
const rerender = () => {
    const usersEl = document.querySelector('#users')
    usersEl.innerHTML = ''
    users.forEach((value, key) => {
        usersEl.insertAdjacentHTML('afterbegin', 
            `<article data-id="${key}"><div><b>First Name:</b>&nbsp;${value.first_name}</div><div><b>Last Name:</b>&nbsp;${value.last_name}</div><div><b>Age:</b>&nbsp;${value.age}</div></article>`)
    })
    setListener()
}

const callBackFunction = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
        formDataObj = {}
    formData.forEach((value, key) => {
        formDataObj[key] = value
        // Написать скрипт, который при отправке формы выводит собранные данные в консоль:
        console.log(`${key}: ${value}`)
    })
    // Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта:
    users.push(formDataObj)
    // Настроить rerender при добавлении нового пользователя.
    rerender()
}

form.addEventListener('submit', callBackFunction)