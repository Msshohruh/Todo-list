// NAVBAR SECTION
const siteHeader = document.querySelector('.header')
const showBtn = document.querySelector('.show-nav-btn')
const navOverlay = document.querySelector('.hidden-nav')


showBtn.addEventListener('click', ()=>{
    siteHeader.classList.toggle('shownav')
})

navOverlay.addEventListener('click', ()=> {
    siteHeader.classList.toggle('shownav')
})

document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape'){
        siteHeader.classList.remove('shownav')
    }
})

// MODAL SECTION

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('#modal-closer')

function addHidden () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeBtn.addEventListener('click', addHidden)

overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
if (e.code == 'Escape') {
    addHidden()
}
})

// INPUT SECTION

const inputText = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoForm = document.querySelector('.todo-form')


todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = inputText.value
    if (inputValue) {
        addList(inputValue)
    } else {
        alert('Siz hech narsa kiritmadingiz!')
    }
    
    inputText.value = ""
})

function addList(todo){
    // creating li
    const li = document.createElement('li')
    li.classList.add('todo-item')
    // craeting paragraph
    const p = document.createElement('p')
    p.classList.add('todo-item-text')
    p.textContent = todo
    li.appendChild(p)
    // creating buttons
    const checkBtn = document.createElement('button')
    const trashBtn = document.createElement('button')
    
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'

    checkBtn.classList.add('check-btn')
    trashBtn.classList.add('trash-btn')

    li.appendChild(checkBtn)
    li.appendChild(trashBtn)

    // add li to ul
    todos.style.padding = '10px'
    todos.appendChild(li)

    // buttons actions
    checkBtn.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'
    })   
    trashBtn.addEventListener('click', () => {
        li.remove()
        const list = document.querySelectorAll('.todo-item')
        if (list.length == '0') {
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
            todos.style.padding = '0'
        }
    })
}




