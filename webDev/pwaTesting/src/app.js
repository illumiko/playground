const taskContainer = document.querySelector('#theTaskContainer') 
const inputTitle = document.querySelector("#titleInput")
const inputTask = document.querySelector("#taskInput")
const addTask = document.querySelector("#submit")
const formModalShow = document.querySelector("#modalShow")
const formModal = document.querySelector("#Taskform")
const formModalClose = document.querySelector("#modalClose")
const fileInput = document.querySelector("#changeBg")
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
    updateUI()
    checkBg()
}
openReq.onupgradeneeded = (ev) => {
    ifExist("todos")
    if(!openReq.result.objectStoreNames.contains("bg")) {
        openReq.result.createObjectStore("bg", {keyPath: "id", autoIncrement:false})
    }
}

//updateUI with respect to IDB
const updateUI = (ev) => {
    if (ev) {ev.preventDefault()} // only occurs the fucntion is called inside a form
    let tx = openReq.result.transaction('todos', 'readonly') //needed for all get,put,delete actions
    tx.oncomplete = ev => console.log('Data request made from db successfully') 
    let req = tx.objectStore('todos').getAll()
    req.onsuccess = ev => {
        console.log("Data successfully loaded")
        if (ev.target.result.length !== 0) {
            let data = ev.target.result
            taskContainer.innerHTML = `<h1 id="header">Tasks</h1>`
            data.forEach(i => {
                taskContainer.innerHTML += 
                    `
                    <div data-key="${i.id}" id="tasksContainer" class="">
                        <div>
                            <p id="taskDate" class="text-slate-300">${i.date}</p>
                            <p id="taskDay" class="text-slate-300">${i.day}</p>
                        </div>
                        <div>
                            <h2 id="tasksHead" class="">${i.title}</h2>
                            <p id="tasks" class="">${i.task}</p>
                            <p id="taskDelete" class="">X</p>
                        </div>
                    </div>
                    `
            });
            toggleComplete() // adding task complete event handler
            deleteItem() // adding task delete event handler
        }else {
            taskContainer.innerHTML = `<h1 id="header">No task to show</h1>`
        }
    }
}
//toggling task
const toggleComplete = () => {
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
//helper function to get day and date
const getDate = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const obj = new Date()
    const today = obj.getDay()
    const date = obj.getDate()
    return {
        day: weekdays[today],
        date: date,
    }
}
//delete item from IDB and reflect change in UI
const deleteItem = () => {
    document.querySelectorAll("#taskDelete").forEach(i => {
        i.addEventListener("click", ev => {
            ev.stopPropagation()
            if (ev) {ev.preventDefault}
            let key = ev.target.closest("[data-key]") // this gives me the div with data-key
            let tx = openReq.result.transaction("todos", "readwrite").objectStore("todos")
            tx.delete(parseInt(key.getAttribute("data-key")))
            updateUI()
        })
    })
}
document.querySelector('#update').addEventListener('click', updateUI)

//add item to IDB and reflect change in UI
const addItems = ev => {
    if(ev) {ev.preventDefault()}
    //setting todo obj
    const todo = {
        title: inputTitle.value, 
        task: inputTask.value, 
        date: getDate().date,
        day: getDate().day,
        complete:false
    }
    //db stuff
    let tx = openReq.result.transaction('todos', 'readwrite')
    tx.oncomplete = ev => console.log("itme was added to DB")
    tx.onerror = err => console.warm(err)
    let req = tx.objectStore('todos').add(todo) // adding out todo obj to db
    req.onerror = err => console.warm(err)
    //resetting form
    inputTitle.value = ""
    inputTask.value = ""
    updateUI()
}

addTask.addEventListener('click', addItems)
//modal Toggle
formModalClose.addEventListener("click", (ev) => {
    ev.preventDefault()
    formModal.classList.remove("absolute")
    formModal.classList.add("hidden")
    /* formModal.addEventListener("transitionend", ev => {
        ev.target.classList.add("hidden") */
})
formModalShow.addEventListener("click", (ev) => {
    ev.preventDefault()
    // formModal.classList.add("opacity-100")
    formModal.classList.add("absolute")
    formModal.classList.remove("hidden")
})
//change bg

fileInput.addEventListener("change", ev => {
    const get = ev.target
    let tx = openReq.result.transaction("bg", "readwrite").objectStore("bg")
    tx.getAll().onsuccess = ev => {
        //checking if there has been file added to IDB or note
        if(ev.target.result.length === 0) {
            tx.add({id:1,file:get.files[0]}).onsuccess = () => {
                let tx = openReq.result.transaction("bg", "readonly").objectStore("bg")
                tx.getAll().onsuccess = ev => {
                    document.getElementById("Bgimg").style.background = `url(${URL.createObjectURL(ev.target.result[0].file)})`
                }
            }
        } else{
            let tx = openReq.result.transaction("bg", "readwrite").objectStore("bg")
            tx.put({id:1,file:get.files[0]}).onsuccess = () => {
                let tx = openReq.result.transaction("bg", "readonly").objectStore("bg")
                tx.getAll().onsuccess = ev => {
                    document.getElementById("Bgimg").style.background = `url(${URL.createObjectURL(ev.target.result[0].file)})`
                }

            }
        }
    }
})
const checkBg = () => {
    let tx = openReq.result.transaction("bg", "readonly").objectStore("bg")
    let req = tx.get(1)
    req.onsuccess = ev => {
        if (ev.target.result !== undefined) { //checking if there is saved bg
            document.getElementById("Bgimg").style.background = `url(${URL.createObjectURL(ev.target.result.file)})`
        }
    }
   
}









