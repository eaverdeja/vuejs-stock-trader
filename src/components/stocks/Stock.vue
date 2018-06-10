<template>
    <div class="col-4 mb-3">
        <div class="card">
            <div class="card-header text-white bg-success">
                <h5 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h5>
            </div>
            <div class="card-body bg-light">
                <div class="float-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: isInsufficientFunds}">
                </div>
                <div class="float-right">
                    <button class="btn btn-success"
                        @click="buyStock"
                        :disabled="isInvalidQuantity">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>


<script>

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        isInvalidQuantity() {
            return this.quantity <= 0 || ! isFinite(this.quantity)
        },
        isInsufficientFunds() {
            return this.stock.price * this.quantity > this.$store.getters.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            if(this.isInsufficientFunds) {
                return this.$iziToast.error({
                    title: "Hold it cowboy",
                    message: "You have unsuffiecient funds!",
                })
            }

            this.$store.dispatch('buyStock', order)
            this.quantity = 0
        }
    }
}
</script>

