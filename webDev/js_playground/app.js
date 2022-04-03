// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');
let db
const openRequest = window.indexedDB.open('notes_db', v)

const displayData = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    const objectStore = db.transaction('notes_os').objectStore("notes_os")
    objectStore.openCursor().addEventListener('success', e => {
        const cursor = e.target.result
        if(cursor){
            const listItem = 
                `
                <li data-note-id="${cursor.value.id}">
                    <h3>${cursor.value.title}</h3>
                    <p>${cursor.value.body}</p>
                    <button id="deleteBtn">Delete</button>
                </li>
                `
            list.innerHTML += listItem
            const deleteBtn = document.querySelector('#deleteBtn')
            // deleteBtn.addEventListener('click', deleteItem)
            cursor.continue()
        } else {
            if(!list.firstChild) {
                const listItem = 
                    `
                    <li>No Notes Stored</li>
                    `
                list.innerHTML = listItem
            }
            console.log("notes displayed")
        }
    })
}

const addData = e => {
    e.preventDefault()
    const newItem = {title: titleInput.value, body: bodyInput.value}
    const transaction = db.transaction(['notes_os'], "readwrite")
    const objectStore = transaction.objectStore('notes_os')
    const addRequest = objectStore.add(newItem)
    addRequest.addEventListener("success", () => {
        titleInput.value = ""
        bodyInput.value = ""
    })
    addRequest.addEventListener("complete", () => {
        console.log('Database modified')
        displayData()
    })
    addRequest.addEventListener('error', () => {
        console.error("failed to modify database")
    })
}


//EventListeners
// handles errors
form.addEventListener("submit", addData)
openRequest.addEventListener('error', () => console.error("X_Xdatabase failed to openX_X"))
// handles success
openRequest.addEventListener("success", () => {
  console.log('~~Database opened successfully~~');
    db = openRequest.result
    displayData()
})
// sets up the database tables
openRequest.addEventListener("upgradeneeded", e => {
    db = e.target.result
    const objectStore = db.createObjectStore("notes_os", {keyPath:'id', autoIncrement:true})
    objectStore.createIndex('title', 'title',{unique: false})
    objectStore.createIndex('body', 'body',{unique: false})
    console.log("||database setup complete||")

})

