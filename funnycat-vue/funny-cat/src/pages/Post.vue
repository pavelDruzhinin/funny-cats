<template>
  <div>{{postId}}</div>
</template>

<script>
export default {
  computed: {
    postId() {
      return this.$route.params.id;
    }
  }
};
</script>