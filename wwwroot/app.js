
let list = document.querySelector('#list')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

function Delete(x) {
    fetch('/GroceryList/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: '', id: x }),
    })
        .then(x => { update() })
}

button.addEventListener('click', () => {
    addToList()
})
document.addEventListener('keydown', () => {
    if (event.keyCode == 13) {
        addToList()
    }
})

function addToList() {
    if (input.value != '') {
        let groceryItem = { item: 'unknown', id: '00000000-0000-0000-0000-000000000000' }
        groceryItem.item = input.value;
        input.value = '';

        fetch('/GroceryList/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(groceryItem),
        })
            .then(x => { update() })
    }
}

function update() {
    fetch('/GroceryList/all')
        .then(x => x.json())
        .then(data => {
            console.log(data)
            list.innerHTML = '';
            data.forEach(d => {
                list.innerHTML +=
                    `<div class="sameLine"><li class="flex-item" id= ${d.id}>${d.item}</li> 
                    <button class="flex-item" onclick=Delete("${d.id}")>Delete</button></div>`
            })
        })
}
update();

