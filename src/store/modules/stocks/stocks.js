import stocks from '../../../data/stocks'
import { map, random } from 'lodash'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCKS' (state) {
        const factor = .05
        map(state.stocks, stock =>
            stock.price = Math.round(stock.price * random(1 - factor, 1 + factor))
        )
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order)
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => state.stocks
}

export default {
    state,
    mutations,
    actions,
    getters    
}
