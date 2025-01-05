<script setup>

</script>

<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="fetchOrders">
    Get Orders
  </button>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">Mail</th>
        <th scope="col" class="px-6 py-3">Order Date</th>
        <th scope="col" class="px-6 py-3">Shopify Order ID</th>
        <th scope="col" class="px-6 py-3">Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="order in orders" :key="order.id">
        <td class="px-6 py-4">{{ order.customer.email }}</td>
        <td class="px-6 py-4">{{ order.order_date }}</td>
        <td class="px-6 py-4">{{ order.shopify_id }}</td>
        <td class="px-6 py-4">{{ order.amount }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: [],
      errorMessage: null,
      config: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
    }
  },
  methods: {
    syncOrders() {
      axios.post(`${this.$apiUrl}/orders/sync`, [], this.config).then((response) => {
      }).catch((error) => {
        this.errorMessage = error.response.data.message;
      });
    },

    fetchOrders() {
      axios.get(`${this.$apiUrl}/orders`, this.config).then((response) => {
        console.log(response)
        this.orders = response.data.data;
      }).catch((error) => {
        this.errorMessage = error.response.data.message;
      });
    }


  },
  mounted() {
    this.syncOrders();
  }
};
</script>