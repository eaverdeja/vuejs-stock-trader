<template>
    <div class="col-4 mb-3">
        <div class="card">
            <div class="card-header text-white bg-info">
                <h5 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
                </h5>
            </div>
            <div class="card-body bg-light">
                <div class="float-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: isInsufficientQuantity}">
                </div>
                <div class="float-right">
                    <button class="btn btn-info"
                        @click="sellStock">
                        Sell
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
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        isInsufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        ...mapActions({
            sell: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }


            if(this.isInsufficientQuantity) {
                return this.$iziToast.error({
                    title: 'Hold it cowboy!',
                    message: 'You have insufficient stocks!'
                })
            }

            this.quantity = 0
            this.sell(order)
        }
    }
}
</script>
