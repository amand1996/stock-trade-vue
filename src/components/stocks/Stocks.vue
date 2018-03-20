<template>
  <div class="row">
      <app-stock v-for="stock in stocks" :price="stock.price" :name="stock.name"></app-stock>
  </div>
</template>

<script>

  import Stock from './Stock.vue';

  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BMW', price: 110},
          {id: 2, name: 'Google', price: 220},
          {id: 3, name: 'Tesla', price: 300},
          {id: 4, name: 'Apple', price: 170},
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
