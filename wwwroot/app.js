
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

    let groceryItem = { item: 'unknown', id: '00000000-0000-0000-0000-000000000000' }
    groceryItem.item = input.value;

    fetch('/GroceryList/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groceryItem),
    })
        .then(x => { update() })
})

function update() {
    fetch('/GroceryList/all')
        .then(x => x.json())
        .then(data => {
            console.log(data)
            list.innerHTML = '';
            data.forEach(d => {
                list.innerHTML += `<li id= ${d.id}>${d.item}<button onclick=Delete("${d.id}")>Slet</button></li>`

            })
        })
}

update();


/* forEach.ArrayOf  {
    document.querySelector('#' + ).addEventListener('click', () => {

    })
} */
