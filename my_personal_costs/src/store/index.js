import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsData: {},
        paymentsDataTest: {},
    },
    mutations: {
        setStoreData(state, payload) {
            state.paymentsData = payload;
        },
        setStoreDataTest(state, payload) {
            state.paymentsDataTest = payload;
        },
        saveNewPayment(state, payload) {
            let arr = 0;
            // if (Object.keys(state.paymentsData).length === arr) {
            //     state.paymentsData[page4] = []
            //     state.paymentsData = [...state.paymentsData]
            // }
            for (arr; Object.keys(state.paymentsData).length > arr; arr++) {
                if (Object.values(state.paymentsData)[arr].length === 10) {
                    for (let key in state.paymentsData)
                        console.log(key)
                } else {
                    payload.id = arr * 10 + Object.values(state.paymentsData)[arr].length + 1;
                    Object.values(state.paymentsData)[arr].push(payload);
                }
            }
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsData,

    },
    actions: {
        loadPage({ commit }, pageNum) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        'page1': [
                            { id: "1", date: "13.05.2021", category: "Обучение", price: 1000 },
                            { id: "2", date: "14.05.2021", category: "Еда", price: 360 },
                            { id: "3", date: "14.05.2021", category: "Проезд", price: 150 },
                            { id: "4", date: "15.05.2021", category: "Товары для дома", price: 800 },
                            { id: "5", date: "15.05.2021", category: "Еда", price: 520 },
                            { id: "6", date: "15.05.2021", category: "Проезд", price: 400 },
                            { id: "7", date: "16.05.2021", category: "Обучение", price: 1000 },
                            { id: "8", date: "17.05.2021", category: "Еда", price: 380 },
                            { id: "9", date: "17.05.2021", category: "Проезд", price: 150 },
                            { id: "10", date: "17.05.2021", category: "Товары для Животных", price: 900 },
                        ],
                        'page2': [
                            { id: "11", date: "18.05.2021", category: "Еда", price: 380 },
                            { id: "12", date: "18.05.2021", category: "Проезд", price: 150 },
                            { id: "13", date: "19.05.2021", category: "Еда", price: 380 },
                            { id: "14", date: "19.05.2021", category: "Проезд", price: 150 },
                            { id: "15", date: "20.05.2021", category: "Еда", price: 380 },
                            { id: "16", date: "20.05.2021", category: "Проезд", price: 350 },
                            { id: "17", date: "20.05.2021", category: "Одежда", price: 2500 },
                            { id: "18", date: "21.05.2021", category: "Еда", price: 380 },
                            { id: "19", date: "21.05.2021", category: "Проезд", price: 550 },
                            { id: "20", date: "21.05.2021", category: "Развлечения", price: 1980 },
                        ],
                        'page3': [
                            { id: "21", date: "22.05.2021", category: "Лекарства", price: 650 },
                            { id: "22", date: "22.05.2021", category: "Еда", price: 550 },
                            { id: "23", date: "22.05.2021", category: "Товары для дома", price: 250 },
                        ],
                    });
                })
            }, 0)
                .then(res => {
                    commit('setStoreDataTest', res[`page${pageNum}`]);
                },
                    err => {
                        console.log(Error);
                    })
        },
        fetchData({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        'page1': [
                            { id: "1", date: "13.05.2021", category: "Обучение", price: 1000 },
                            { id: "2", date: "14.05.2021", category: "Еда", price: 360 },
                            { id: "3", date: "14.05.2021", category: "Проезд", price: 150 },
                            { id: "4", date: "15.05.2021", category: "Товары для дома", price: 800 },
                            { id: "5", date: "15.05.2021", category: "Еда", price: 520 },
                            { id: "6", date: "15.05.2021", category: "Проезд", price: 400 },
                            { id: "7", date: "16.05.2021", category: "Обучение", price: 1000 },
                            { id: "8", date: "17.05.2021", category: "Еда", price: 380 },
                            { id: "9", date: "17.05.2021", category: "Проезд", price: 150 },
                            { id: "10", date: "17.05.2021", category: "Товары для Животных", price: 900 },
                        ],
                        'page2': [
                            { id: "11", date: "18.05.2021", category: "Еда", price: 380 },
                            { id: "12", date: "18.05.2021", category: "Проезд", price: 150 },
                            { id: "13", date: "19.05.2021", category: "Еда", price: 380 },
                            { id: "14", date: "19.05.2021", category: "Проезд", price: 150 },
                            { id: "15", date: "20.05.2021", category: "Еда", price: 380 },
                            { id: "16", date: "20.05.2021", category: "Проезд", price: 350 },
                            { id: "17", date: "20.05.2021", category: "Одежда", price: 2500 },
                            { id: "18", date: "21.05.2021", category: "Еда", price: 380 },
                            { id: "19", date: "21.05.2021", category: "Проезд", price: 550 },
                            { id: "20", date: "21.05.2021", category: "Развлечения", price: 1980 },
                        ],
                        'page3': [
                            { id: "21", date: "22.05.2021", category: "Лекарства", price: 650 },
                            { id: "22", date: "22.05.2021", category: "Еда", price: 550 },
                            { id: "23", date: "22.05.2021", category: "Товары для дома", price: 250 },
                        ],
                    });
                })
            }, 0)
                .then(res => {
                    commit('setStoreData', res);
                },
                    err => {
                        console.log(Error);
                    })
        }
    }
})