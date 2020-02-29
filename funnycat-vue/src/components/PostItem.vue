<template>
  <div class="post-item">
    <div class="title">
      <span>{{post.title}}</span>
    </div>
    <div>
      <div class="post-image">
        <img :src="post.url" />
      </div>
    </div>
    <div class="author">Fun: {{post.author}}</div>
    <div class="panel d-flex">
      <div class="vote-panel d-flex align-center">
        <div class="like" @click="like">
          <img src="/assets/vote-like.png" />
        </div>
        <div class="vote-count">{{post.votes}}</div>
        <div class="dislike" @click="dislike">
          <img src="/assets/vote-dislike.png" />
        </div>
      </div>
      <div class="comments-panel d-flex align-center">
        <div class="comments-count">{{post.comments}}</div>
        <img src="/assets/comments.png" />
      </div>
      <div class="d-flex align-center flex-grow-1 justify-end">
        <router-link :to="'/post/'+ post.id">
          <img src="/assets/post-link.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  methods: {
    like() {
      console.log("like");
      this.post.votes += 1;
    },
    dislike() {
      console.log("dislike");
      this.post.votes += -1;
    }
  }
};
</script>