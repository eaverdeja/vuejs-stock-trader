import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.axios.get('data.json')
        .then(res => {
            if(res.data) {
                const { stocks, funds, stockPortfolio } = res.data

                const portfolio = {
                    funds,
                    stocks: stockPortfolio
                }

                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
}
