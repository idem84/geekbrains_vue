import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categories: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            // Реактивность 
            //state.paymentsList[0] = payload
            //state.paymentsList = [...state.paymentsList]
            //Vue.set(state.paymentsList,0, payload)
            state.paymentsList = [...payload, ...state.paymentsList]
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload)
        },
        deleteDataFromPaymentList(state, index) {
            state.paymentsList.splice(index -1, 1)
        },
        setCategoriesListData(state, payload) {
            state.categories = payload
        },
        addCategoryToList(state, payload) {
            state.categories.push(payload)
        },
        editDataInPaymentList(state, payload) {
            state.paymentsList = state.paymentsList.map(item => {
                if (item.id === payload.id) {
                  return Object.assign({}, item, payload)
                }

                return item
            })
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getPaymentsItem: (state) => (index) => {
            return state.paymentsList[index -1]
          }
        ,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur)=>res + cur.value, 0)
        },
        getCategories: state => state.categories
    },
    actions: {
        fetchData({commit}) {
            if(this.state.paymentsList.length) return 
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    for (let i = 0; i < 20; i++) {
                        items.push({
                            date: "05.08.2021",
                            category: "Sport",
                            value: i,
                            id: i+1
                        })
                    }
                    resolve(items)
                },2000)
            })
            .then(res=> commit('setPaymentListData', res))
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const categories = ['Sport', 'Food', "Education", 'Internet', 'Other']
        
                    resolve(categories)
                },1000)
            })
            .then(res=> commit('setCategoriesListData', res))
        }
    },
})