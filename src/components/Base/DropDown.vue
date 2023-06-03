<template>
  <div class="dropdown">
    <span class="dropbtn">
      <div class="tag-profile asd">
        <span>{{ name }}</span>
        <i :class="icon" style="margin: 7px 7px 0"></i>
      </div>
    </span>
    <div class="dropdown-content">
      <div class="detail-profile">
        <img :src="require('@/assets/images/avatars/user-01.jpg')" alt="" />
        <div class="user-info">
          <p class="fix__name__user" title="یوسف ریشهری آسیا ایران بوشهر دیر">
            یوسف ریشهری آسیا ایران بوشهر دیر
          </p>
          <p class="fix__name__user" title="یوسف ریشهری آسیا ایران بوشهر دیر">
            مدیر سایت
          </p>
        </div>
      </div>
      <router-link v-for="item in items" :key="item" :to="item.link">
        <div>
          <i :class="item.icon"></i>
          <span style="margin: 10px">{{ item.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    iconArrow: {
      type: String,
      required: false,
    },
    items: {
      type: [String, Array],
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tag-profile {
  min-width: 100px;
  display: flex;
  justify-content: space-evenly;
}
.asd i {
  margin: 7px 7px 0 !important;
}

.dropdown {
  position: relative;
  display: inline-block;
  font-size: 15px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: 0;
  border-radius: 8px;
  overflow: hidden;
}

.dropdown-content a {
  color: black;
  padding: 3px 16px;
  text-decoration: none;
  display: block;
  font-size: 15px;
}

.dropdown-content a:hover {
  background-color: #beb8b8;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.detail-profile {
  display: flex;
  padding: 6px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}
.detail-profile * {
  color: black !important;
}
.user-info * {
  padding: 0;
  margin: 0;
}
.user-info p {
  font-size: 13px;
  margin-right: 5px;
}
.detail-profile img {
  border-radius: 50%;
  width: 40%;
  height: 40%;
  margin-top: 12px;
  padding: 0;
  margin: 5px 0 0 0;
}
.fix__name__user {
  display: inline-block;
  overflow: hidden;
  height: 25px;
  cursor: pointer;
}
</style>