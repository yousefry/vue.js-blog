<template>
  <div class="row" style="margin-top: 20px">
    <div class="content-profile">
      <div class="sidebar">
        <div class="profile-details">
          <div class="avatar">
            <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
            <font-awesome-icon class="edit-img" :icon="['far', 'edit']" />
          </div>
          <div class="name">
            <p style="font-weight: bold !important">یوسف ریشهری</p>
            <p>مدیر سایت</p>
          </div>
          <div class="social">
            <ul>
              <li>
                <a href="">
                  <font-awesome-icon :icon="['fab', 'telegram']" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
            </ul>
          </div>
          <div class="follow">
            <ul class="follow-list">
              <li>
                <div class="follow-num counter">52</div>
                <span>پست ها</span>
              </li>
              <li>
                <div class="follow-num counter">72</div>
                <span>دنبال کننده ها</span>
              </li>
              <li>
                <div class="follow-num counter">80</div>
                <span>پسندها</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-nav">
          <ul>
            <li :class="{ 'nav-li-active': activeNavbar == 'Posts' }">
              <div @click="activeNavbar = 'Posts'">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span class="txt-link-navbar">پست ها</span>
              </div>
            </li>
            <li :class="{ 'nav-li-active': activeNavbar == 'PostComment' }">
              <div @click="activeNavbar = 'PostComment'">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span class="txt-link-navbar">نظرات</span>
              </div>
            </li>
            <li :class="{ 'nav-li-active': activeNavbar == 'Friends' }">
              <div @click="activeNavbar = 'Friends'">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span class="txt-link-navbar">دوستان</span>
              </div>
            </li>
            <li :class="{ 'nav-li-active': activeNavbar == 'Favorites' }">
              <div @click="activeNavbar = 'Favorites'">
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span class="txt-link-navbar">مورد پسندها</span>
              </div>
            </li>
            <li>
              <div>
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <span class="txt-link-navbar">خروج</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <KeepAlive>
          <component :is="activeNavbar" />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Posts from "@/components/Profile/Posts.vue";
import PostComment from "@/components/Profile/PostComment.vue";
import Friends from "@/components/Profile/Friends.vue";
import Favorites from "@/components/Profile/Favorites.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Profile",
  components: {
    FontAwesomeIcon,
    Posts,
    PostComment,
    Friends,
    Favorites,
  },
  setup() {
    const activeNavbar = ref("Posts");

    onMounted(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    return {
      activeNavbar,
    };
  },
};
</script>

<style lang="scss">
@import url("@/assets/login/fonts/font-awesome-4.7.0/css/font-awesome.css");
.content-profile {
  width: 100%;
  // background-color: white;
  display: flex;
  justify-content: space-around;
}
.sidebar {
  width: 29%;
}
.content {
  width: 69%;
}
.content-profile {
  margin-top: 80px;
}
.profile-details {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px -1px rgba($color: #000000, $alpha: 1);
}
.avatar,
.social,
.follow {
  display: flex;
  justify-content: center;
  position: relative;
}
.edit-img {
  position: absolute;
  bottom: 0;
  right: 33%;
  background-color: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
}
.profile-details .avatar img {
  width: 100px;
  border-radius: 50%;
  margin: 15px 0px 0px;
  cursor: pointer;
}
.name {
  margin-top: 10px;
}
.name p {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
}

.social ul {
  padding: 0;
  margin: 30px 0px 16px;
  list-style: none;
  display: flex;
}
.social ul li a {
  display: block;
  margin: 0px 15px;
}
.follow-list {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.follow-list li {
  text-align: center;
  margin: 5px 20px;
}
.follow-num ~ span {
  font-size: 15px;
  font-weight: bold;
}
.sidebar-nav {
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px -1px rgba($color: #000000, $alpha: 1);
}
.sidebar-nav {
  overflow: hidden;
}
.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-nav ul li {
  padding: 5px 10px;
}
.sidebar-nav ul li:hover,
.nav-li-active {
  list-style: none;
  background-color: rgb(72, 87, 246);
  color: white;
}

.sidebar-nav ul li div {
  display: block;
  cursor: pointer;
}
.sidebar-nav ul li div span {
  margin-right: 10px;
}
.content-profile .content {
  // margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px -1px rgba($color: #000000, $alpha: 1);
  overflow: hidden;
  padding: 10px 21px;
}
.content-profile .content .title {
  border-bottom: 3px solid rgba(192, 187, 187, 0.5);
  padding-bottom: 10px;
}
// padding :0px for all single post
.brick {
  padding: 3px !important;

  border: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.s-bricks {
  padding: 0;
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .content-profile {
    flex-direction: column;
  }
  .sidebar,
  .content {
    width: 100%;
    margin-top: 10px;
  }
  .follow-list {
    display: unset;
    flex-direction: row !important;
  }
}
@media only screen and (max-width: 768px) {
  .social ul li a {
    margin: 0 8px;
  }
  .follow-list {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 992px) {
  .follow-list {
    display: flex;
    flex-direction: column;
  }
}
.entry__title a {
  font-size: 15px;
  display: flex;
  text-align: right;
}
.entry__excerpt {
  font-size: 13px;
}
.txt-link-navbar {
  font-size: 14px;
}
</style>