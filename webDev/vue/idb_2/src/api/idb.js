const DB_NAME = "catsdb"
const DB_VERSION = 1
let DB

export default {
    async getDB() {
        return new Promise((resolve,reject) => {
            if (DB) {return resolve(DB)}
            console.log("Openning DB", DB)
            let openReq = indexedDB.open(DB_NAME, DB_VERSION)
            //init db
            openReq.onerror = (err) => {console.warn(err); reject("Error")}
            openReq.onsuccess = (ev) => {
                DB = ev.target.result
                console.log('~~ DB inited~~')
            }
            openReq.onupgradeneeded = (ev) => {
                let db = ev.target.result
                db.createObjectStore("cats",{autoIncrement: true, keyPath:"id"})

            }
        })
    },
    async saveCats(cat){
        let db = await this.getDB()
        return new Promise(resolve => {
            let trans = db.transaction("cats", "readwrite")
            trans.oncomeplete = () => {
                resolve()
            }
            let store = trans.objectStore("cats")
            store.put(cat)
        })

    },
    async getCats() {
        let db = await this.getDB()
        return new Promise((resolve) => {
            let trans = db.transaction("cats", "readonly")
            let cats = []
            let store = trans.objectStore("cats")
            store.openCursor().onsuccess = ev => {
                let cursor = ev.target.result
                console.log(cursor)
                if (cursor) {
                    cats.push(cursor.value)
                    cursor.continue
                }
            }
            trans.oncomeplete = () => {resolve(cats)}
        })
    }


}

