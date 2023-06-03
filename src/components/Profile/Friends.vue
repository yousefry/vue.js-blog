<template>
  <div>
    <div class="title">دوستان شما</div>
    <div class="tab">
      <div
        class="tablinks"
        :class="{ active: tabActive == 'events' }"
        @click="tabActive = 'events'"
      >
        آخرین رویدادها
      </div>
      <div
        class="tablinks"
        :class="{ active: tabActive == 'following' }"
        @click="tabActive = 'following'"
      >
        دنبال شده ها
      </div>
      <div
        class="tablinks"
        :class="{ active: tabActive == 'followers' }"
        @click="tabActive = 'followers'"
      >
        دنبال شونده ها
      </div>
    </div>

    <!-- Tab content -->
    <div id="events" class="tabcontent" v-show="tabActive == 'events'">
      <div class="cnt">
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="event-user">yousef_rishehri پست شما را پسندید.</div>
          <router-link :to="{ name: 'post-id', params: { id: 45 } }">
            <img
              :src="require('@/assets/images/thumbs/masonry/cookies-600.jpg')"
              alt=""
            />
          </router-link>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="event-user">
            yousef_rishehri برای پست شما یک نظر ثبت کرد
          </div>
          <router-link :to="{ name: 'post-id', params: { id: 45 } }">
            <img
              :src="require('@/assets/images/thumbs/masonry/cookies-600.jpg')"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>

    <div id="following" class="tabcontent" v-show="tabActive == 'following'">
      <div class="cnt">
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="following">دنبال شده</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="following">دنبال شده</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="following">دنبال شده</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="following">دنبال شده</div>
        </div>
      </div>
    </div>

    <div id="followers" class="tabcontent" v-show="tabActive == 'followers'">
      <div class="cnt">
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="followers">حذف از دنبال شونده ها</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="followers">حذف از دنبال شونده ها</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="followers">حذف از دنبال شونده ها</div>
        </div>
        <div class="item">
          <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
          <div class="username">yousef_rishehri</div>
          <div class="followers">حذف از دنبال شونده ها</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Friends",
  components: {},
  setup() {
    const tabActive = ref("events");
    return {
      tabActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.tab .tablinks {
  width: calc(100% / 3);
  text-align: center;
  font-size: 14px;
}
.tab div {
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tab div:hover {
  background-color: #ddd;
}
.tab div.active {
  background-color: #ddd;
  border-top: 4px solid rgb(72, 87, 246);
}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

@keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cnt img:nth-of-type(1) {
  min-width: 40px;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
}
.cnt img:nth-of-type(2) {
  width: 50px;
  border-radius: 10%;
}
.cnt .item {
  display: flex;
  flex-direction: row;
  font-size: 15px;
}
.event-user,
.username {
  flex-basis: 100%;
  margin: 15px 15px;
  font-size: 13px;
}
.followers {
  margin-top: 15px;
  padding: 0px 5px;
  font-size: 12px;
  line-height: 25px;
  white-space: nowrap;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(195, 195, 200);
  border: 3px solid rgb(195, 195, 200);
  color: black;
  cursor: pointer;
}
.following {
  margin-top: 15px;
  padding: 0px 10px;
  font-size: 12px;
  line-height: 25px;
  white-space: nowrap;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(195, 195, 200);
  border: 3px solid rgb(195, 195, 200);
  color: black;
  cursor: pointer;
}
.followers:hover,
.following:hover {
  background-color: rgb(72, 87, 246);
  border: 3px solid rgb(72, 87, 246);
  color: white;
} 
@media only screen and (max-width: 750px) {
  .tab .tablinks {
    font-size: 10px;
  }
}
</style>