import { createStore } from 'vuex'
import idb from "../api/idb.js"

export default createStore({
    state: {
          cats: []
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async getCats(context){
            context.state.cats = []
            let cats = await idb.getCats()
            cats.forEach(i => {
                context.state.cats.push(i)
            });
        },
        async saveCats(context,cat) {
            await idb.saveCat(cat)
        }
    },
    modules: {
    }
})
