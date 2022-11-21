<template>
  <q-page class="justify-center q-pa-md" padding>
    <div class="q-pa-md text-h2 text-title">Your Carts</div>
    <hr />
    <Product></Product>
  </q-page>
</template>

<script>
import Product from "../components/ProductLink.vue";
export default {
  name: "PaymentPage",
  components: {
    Product,
  },
  data() {
    return {
      product: null,
      product_size: null,
      count: null,
      product_price: null,
      total_price: null,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Jost:ital,wght@1,500&display=swap");
.text-title {
  font-family: "Jost", sans-serif;
}
</style>
