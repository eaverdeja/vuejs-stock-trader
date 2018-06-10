const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
        quantity = parseInt(quantity)
        const record = state.stocks.find(elem => elem.id == stockId)
        const totalPrice = stockPrice * quantity

        if(record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= totalPrice
    },
    'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(elem => elem.id == stockId)
        if(record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds
        state.stocks = portfolio.stocks
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(myStock => {
            const record = getters.stocks.find(stock => stock.id == myStock.id)
            return {
                id: myStock.id,
                quantity: myStock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
