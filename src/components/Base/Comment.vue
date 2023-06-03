<template>
  <li
    class="thread-alt depth-1 comment"
    v-for="comment in comments"
    :key="comment"
  >
    <div class="comment__avatar">
      <img
        class="avatar"
        :src="comment.user.avatar"
        alt=""
        width="50"
        height="50"
      />
    </div>

    <div class="comment__content">
      <div class="comment__info">
        <div class="comment__author">{{ comment.user.name }}</div>

        <div class="comment__meta">
          <div class="comment__time">{{ comment.comment.inDate }}</div>
          <div class="comment__reply">
            <a
              class="comment-reply-link"
              href="#0"
              @click="getIdComment(comment.comment.id)"
              >پاسخ</a
            >
          </div>
        </div>
      </div>

      <div class="comment__text">
        <p>
          {{ comment.comment.text }}
        </p>
      </div>
    </div>
    <ul class="children">
      <li
        class="depth-2 comment"
        v-for="ch_comment in comment.children"
        :key="ch_comment"
      >
        <div class="comment__avatar">
          <img
            class="avatar"
            :src="ch_comment.user.avatar"
            alt=""
            width="50"
            height="50"
          />
        </div>

        <div class="comment__content">
          <div class="comment__info">
            <div class="comment__author">{{ ch_comment.user.name }}</div>

            <div class="comment__meta">
              <div class="comment__time">{{ ch_comment.comment.inDate }}</div>
            </div>
          </div>

          <div class="comment__text">
            <p>
              {{ ch_comment.comment.text }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Comment",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  emits: ['getIdComment'],
  setup(props, { emit }) {
    const idComment = ref("");
    const getIdComment = (id) => {
      emit("getIdComment", id);
    };
    return {
      idComment,
      getIdComment,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>