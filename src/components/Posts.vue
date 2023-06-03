<template>
  <article
    class="brick entry aos-init aos-animate"
    data-aos="fade-up"
    v-for="item in 5"
    :key="item"
  >
    <div class="entry__thumb">
      <router-link
        :to="{ name: 'post-id', params: { id: 40 } }"
        class="thumb-link"
      >
        <img
          :src="require('@/assets/images/thumbs/masonry/grayscale-600.jpg')"
        />
      </router-link>
    </div>
    <!-- end entry__thumb -->

    <div class="entry__text">
      <div class="entry__header">
        <h1 class="entry__title">
          <router-link :to="{ name: 'post-id', params: { id: 73 } }"
            >10 حقیقت جالب در مورد کافئین.</router-link
          >
        </h1>

        <div class="entry__meta" style="display: flex; flex-direction: column">
          <span class="byline"
            >نویسنده:
            <span class="author">
              <a href="#0">یوسف ریشهری</a>
            </span>
          </span>
          <span class="cat-links" style="margin-right: 10px">
            <a href="#">سلامتی</a>
          </span>
        </div>
      </div>
      <div class="entry__excerpt" style="text-align: justify">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
      <router-link
        class="entry__more-link"
        :to="{ name: 'post-id', params: { id: 50 } }"
        >بیشتر</router-link
      >
    </div>
    <!-- end entry__text -->
  </article>
</template>

<script>
export default {
  name: "Post",
  setup() {
    return {};
  },
};
</script>

<style>
* {
  direction: rtl;
}
</style>