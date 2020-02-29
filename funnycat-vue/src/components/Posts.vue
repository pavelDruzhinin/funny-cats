<template>
  <div class="posts d-flex flex-wrap">
    <PostItem :post="post" v-for="post in posts" :key="post.id"></PostItem>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import axios from "axios";

export default {
  data() {
    return { posts: [] };
  },
  components: {
    PostItem
  },
  beforeCreate() {
    debugger;
    console.log("beforeCreate", this);
  },
  created() {
    debugger;
    console.log("created", this);
    this.getPosts();
  },
  beforeMount() {
    debugger;
    console.log("beforeMount", this);
  },
  mounted() {
    debugger;
    console.log("mounted", this);
  },
  beforeUpdate() {
    debugger;
    console.log("beforeUpdate", this);
  },
  updated() {
    debugger;
    console.log("updated", this);
  },
  beforeDestroy() {
    debugger;
    console.log("beforeDestroy", this);
  },
  destroyed() {
    debugger;
    console.log("destroyed", this);
  },
  methods: {
    getPosts() {
      axios.get("/posts.json").then(response => {
        this.posts = response.data;
      });
    }
  }
};
</script>