<template>
  <div>
    <div class="title">نظرات پستهای شما</div>
    <div class="comments-wrap">
      <div id="comments" class="row">
        <div class="column large-12">
          <h3>5 نظر خوانده نشده</h3>

          <ol class="commentlist">
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
                  <div class="comment__author">
                    {{ comment.user.name }}
                    <router-link :to="{ name: 'post-id', params: { id: 73 } }">
                      پست شماره 73
                    </router-link>
                  </div>

                  <div class="comment__meta">
                    <div class="comment__time">{{ comment.inDate }}</div>
                    <div class="comment__reply">
                      <a class="comment-reply-link" href="#0">پاسخ</a>
                    </div>
                  </div>
                </div>

                <div class="comment__text">
                  <p>
                    {{ comment.text }}
                  </p>
                </div>
              </div>
            </li>
          </ol>
          <form @submit.prevent="SubmitFormReplay">
            <label for="replay">
              جواب شما به نظر :
              <textarea
                id="replay"
                style="width: 100%"
                rows="10"
                v-model="FormReplay.text"
              ></textarea>
            </label>
            <input type="submit" value="ارسال" class="submitReplay" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "@/components/Base/Comment.vue";
import { reactive } from "vue";
export default {
  name: "PostComment",
  components: {
    Comments,
  },
  setup() {
    const FormReplay = reactive({ text: "" });
    const comments = reactive([
      {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        inDate: "1402/03/06",
        user: {
          avatar: require("@/assets/images/avatars/user-01.jpg"),
          name: "یوسف ریشهری",
        },
      },
      {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        inDate: "1402/03/06",
        user: {
          avatar: require("@/assets/images/avatars/user-03.jpg"),
          name: "3 یوسف ریشهری",
        },
      },
      {
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و مت",
        inDate: "1402/03/07",
        user: {
          avatar: require("@/assets/images/avatars/user-04.jpg"),
          name: "4 یوسف ریشهری",
        },
      },
    ]);
    const SubmitFormReplay = () => {
      // Send Comment To Backend
    };
    return {
      comments,
      FormReplay,
      SubmitFormReplay,
    };
  },
};
</script>

<style lang="scss" scoped>
#replay {
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 26px;
  margin-top: 23px;
}
.submitReplay {
  width: 100%;
  padding: 3px;
  line-height: 9px;
  border-radius: 10px;
  background-color: white;
  // border: 3px solid rgb(72, 87, 246);
}
.submitReplay:hover {
  border: 3px solid white;
  background-color: rgb(72, 87, 246);
}
</style>