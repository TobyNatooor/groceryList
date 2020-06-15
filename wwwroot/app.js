
let list = document.querySelector('#list')
let button = document.querySelector('#button')
let input = document.querySelector('#input')

function kill(x) {
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
list.addEventListener("click", (e) => {
    if (document.querySelector(`#${CSS.escape(e.target.id)}`).style.color == 'red') {
        document.querySelector(`#${CSS.escape(e.target.id)}`).style.color = 'black'
    } else {
        document.querySelector(`#${CSS.escape(e.target.id)}`).style.color = 'red'
    }
});
document.querySelector('#delete').addEventListener("click", () => {
    list.childNodes.forEach(child => {
        if (child.style.color == 'red') {
            kill(child.id)
            update();
        }
    })
});


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
            .then(x => update())
    }
}

function update() {
    fetch('/GroceryList/all')
        .then(x => x.json())
        .then(data => {
            list.innerHTML = '';
            data.forEach(d => {
                list.innerHTML += `<li class="flex-item" id="${d.id}">${d.item}</li>`;
            })
        })
}
update();
