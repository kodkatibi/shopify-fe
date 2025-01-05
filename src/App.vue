<template>
  <header>
    <HeaderLayout/>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
<script>

import HeaderLayout from "@/view/Layout/HeaderLayout.vue";

export default {
  components: {HeaderLayout},
  mounted() {
    console.log(localStorage.getItem("token"));

    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  }
};

</script>