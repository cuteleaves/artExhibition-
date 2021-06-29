import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        router:"",
    },
    mutations: {
        updateName(state,name) {
            
        }
    }
})

export default store