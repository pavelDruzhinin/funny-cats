import $ from "jquery";

import voteLikePng from "/assets/vote-like.png";
import dislikePng from "/assets/vote-dislike.png";
import commentsPng from "/assets/comments.png";
import postLinkPng from "/assets/post-link.png";
import catPng from "/assets/cat.png";

import axios from "axios";

function postItemComponent(post) {

    return `<div class="post-item">
        <div class="title">
            <span>${post.title}</span>
        </div>
        <div>
            <div class="post-image">
                <img src="${post.url}" />
            </div>
        </div>
        <div class="author">
            Fun: ${post.author}
        </div>
        <div class="panel d-flex">
            <div class="vote-panel d-flex align-center">
                <div class="like" id="post_like_${post.id}">
                    <img src="${voteLikePng}" />
                </div>
                <div class="vote-count">${post.votes}</div>
                <div class="dislike" id="post_dislike_${post.id}">
                    <img src="${dislikePng}" />
                </div>
            </div>
            <div class="comments-panel d-flex align-center">
                <div class="comments-count">${post.comments}</div>
                <img src="${commentsPng}" />
            </div>
            <div class="d-flex align-center flex-grow-1 justify-end">
                <a href="/post/${post.id}">
                    <img src="${postLinkPng}" />
                </a>
            </div>
        </div>
    </div>`;
}

let posts = [];

axios.get('/posts.json')
    .then((response) => {
        posts = response.data;
        let postsHtml = response.data
            .map((post) => postItemComponent(post))
            .join('');

        $('.posts').append(postsHtml);

        $('.like').click(function (event) {
            let postId = this.id.replace('post_like_', '');
            let postVotes = postVoting(postId, 1);
            $(this).siblings('.vote-count').text(postVotes);
        });

        $('.dislike').click(function (event) {
            let postId = this.id.replace('post_dislike_', '');
            let postVotes = postVoting(postId, -1);
            $(this).siblings('.vote-count').text(postVotes);
        });
    })
    .catch((error) => { });

function postVoting(postId, vote) {
    let post = posts.find((post) => post.id == +postId);
    if (!post)
        return;

    post.votes += vote;

    return post.votes;

}

