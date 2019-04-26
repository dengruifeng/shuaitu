import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        data:'',
    },
    getters:{
        resultMsg(state){
            return state.data.result
        }
    },
    mutations:{
        setMsg(state,res){
            state.data=res
            console.log(state.data)
        }
    },
    actions:{
        getMsg(context) {
            Axios.post("/api/cgi/api/query").then(res => {
                context.commit('setMsg',res.data)
            })
            }
        
    }
})