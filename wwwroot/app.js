
let list = document.querySelector('#list')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

button.addEventListener('click', () => {
    list.innerHTML += '<li>' + input.value + '</li>';
})
