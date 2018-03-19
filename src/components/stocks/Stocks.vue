<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id">
        </app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        data() {
            return {
                stocks: [
                    { id: 1, name: "BMW", price: 100 },
                    { id: 2, name: "Google", price: 200 },
                    { id: 3, name: "Apple", price: 50 },
                    { id: 4, name: "Twitter", price: 500 }
                ]
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>
