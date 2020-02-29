import IndexPage from "@/pages/Index.vue";
import PostPage from "@/pages/Post.vue";
import VueRouter from "vue-router";

const routes = [
    { path: "/", component: IndexPage },
    { path: "/post/:id", component: PostPage }
];

const router = new VueRouter({
    routes
});

export default router;