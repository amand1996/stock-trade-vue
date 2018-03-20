<template>
    <div class="col-sm-6 col-md-4 tile">
      <div class="card">
        <div class="card-header">
          {{stock.name}} <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
          </div>
          <div class="float-right">
            <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0 || Number.isInteger(quantity)">
              Sell
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.tile {
  padding: 10px;
}
</style>
