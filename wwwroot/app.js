
let list = document.querySelector('#list')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

button.addEventListener('click', () => {

    let groceryItem = { item: 'unknown', id: 0 }
    groceryItem.item = input.value;

    fetch('/GroceryList/add',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(groceryItem),
        })
})
