<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
        <a class="navbar-brand" href="#">Stock Trader</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <router-link to="/Portfolio" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/Stocks" activeClass="active" tag="li" class="nav-item">
                <a class="nav-link">Stocks</a>
            </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="#"
                    @click="endDay()">
                End Day</a>
            </li>
            <li 
                class="nav-item dropdown"
                :class="{show: isDropdownOpen}"
                @click="isDropdownOpen = !isDropdownOpen">
                <button 
                    class="nav-item btn btn-light dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Save & Load
                </button>
                <div
                    class="dropdown-menu" 
                    :class="{show: isDropdownOpen}"
                    aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" @click="saveData()">Save Data</a>
                    <a class="dropdown-item" href="#" @click="loadData()">Load Data</a>
                </div>
            </li>
        </ul>
        <span class="nav-text pl-2">
            Funds: {{ funds() | currency }}
        </span>
    </div>
</nav>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { compactGetters } from '../utils'

    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            ...mapGetters([
                'funds',
                'stockPortfolio',
                'stocks'
            ]),
            endDay() {
                this.randomizeStocks()
            },
            loadData() {
                this.$store.dispatch('loadData')
            },
            saveData() {
                const data = compactGetters.call(this,
                    'funds',
                    'stockPortfolio',
                    'stocks'
                )
                this.$http.put('data.json', data)
            }
        }
    }
</script>
