<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import "@/scss/main.scss";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>
