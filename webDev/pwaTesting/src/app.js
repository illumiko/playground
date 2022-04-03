const taskContainer = document.querySelector('#theTaskContainer') 
const inputTitle = document.querySelector("#titleInput")
const inputTask = document.querySelector("#taskInput")
const addTask = document.querySelector(("#submit"))
//helper func
const ifExist = (storeName) => {
    if(!openReq.result.objectStoreNames.contains(storeName)) {
        openReq.result.createObjectStore(storeName, {keyPath: "id", autoIncrement:true})
    }
}
//init db
let db
const openReq = indexedDB.open("todo", 2)
openReq.onerror = (err) => console.warn(err)
openReq.onsuccess = (ev) => {
    console.log('~~DB inited~~')
    updateList()
}
openReq.onupgradeneeded = (ev) => {
    ifExist("todos")
}

const updateList = (ev) => {
    if (ev) {ev.preventDefault()} // only occurs the fucntion is called inside a form
    let tx = openReq.result.transaction('todos', 'readonly') //needed for all get,put,delete actions
    tx.oncomplete = ev => console.log('Data request made from db successfully') 
    let req = tx.objectStore('todos').getAll()
    req.onsuccess = ev => {
        console.log("Data successfully loaded")
        if (ev.target.result.length !== 0) {
            let data = ev.target.result
            taskContainer.innerHTML = `<h1 class="text-4xl text-red-400 pb-8">Tasks</h1>`
            data.forEach(i => {
                taskContainer.innerHTML += 
                    `
                    <div data-key="${i.id}" id="tasksContainer" class="">
                        <h2 id="tasksHead" class="">${i.title}</h2>
                        <p id="tasks" class="">${i.task}</p>
                        <p id="taskDelete" class="">X</p>
                    </div>
                    `
            });
            toggleComplete()
        }
    }
}
const toggleComplete = ev => {
        // here im looping though all the taskcontainers and adding a click event
        document.querySelectorAll("#tasksContainer").forEach(i => {
            i.addEventListener("click", ev => {
                let key = ev.target.closest("[data-key]") // this gives me the div with data-key
                key.classList.toggle('complete')
                let tx = openReq.result.transaction("todos", 'readwrite').objectStore('todos') // posting a request to DB
                tx.get(parseInt(key.getAttribute("data-key"))).onsuccess = (ev) => { // here im getting a specifical data from DB 
                    let todo = (ev.target.result) 
                    tx.put({...todo,complete:!ev.target.result.complete}) // here im changing the gotten data from DB earlier and sending back to the DB
                }
            })
        })
}
document.querySelector('#update').addEventListener('click', updateList)

const addItems = ev => {
    if(ev) {ev.preventDefault()}
    //setting todo obj
    const todo = {title: inputTitle.value, task: inputTask.value, complete:false}
    //db stuff
    let tx = openReq.result.transaction('todos', 'readwrite')
    tx.oncomplete = ev => console.log("itme was added to DB")
    tx.onerror = err => console.warm(err)
    let req = tx.objectStore('todos').add(todo) // adding out todo obj to db
    req.onerror = err => console.warm(err)
    //resetting form
    inputTitle.value = ""
    inputTask.value = ""
    updateList()
}

addTask.addEventListener('click', addItems)










