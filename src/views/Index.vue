<template>
  <div>
    <main><List /></main>
    <Cart />
  </div>
</template>

<script>
import List from "@/components/List";
import Cart from "@/components/Cart";
export default {
  name: "home",
  components: {
    List,
    Cart
  }
};
</script>

<style scoped>

</style>
